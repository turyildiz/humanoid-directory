'use client';

import { useMemo, useState } from 'react';
import type { Company, Robot, RobotStatus } from '@/lib/types';

type RobotItem = Pick<Robot, 'slug' | 'name' | 'companySlug' | 'status' | 'country' | 'summary' | 'useCases' | 'specs' | 'lastVerifiedAt' | 'statusConfidence'>;
type CompanyItem = Pick<Company, 'slug' | 'name' | 'country' | 'city' | 'summary' | 'focus' | 'robots' | 'stage'>;
type CompanyLookup = Pick<Company, 'slug' | 'name'>;

type Props =
  | { kind: 'robots'; robots: RobotItem[]; companies: CompanyLookup[] }
  | { kind: 'companies'; companies: CompanyItem[] };

const statusOrder: RobotStatus[] = ['commercial', 'pilot', 'prototype', 'research', 'concept', 'paused', 'discontinued', 'unknown'];

function titleCase(value: string) {
  return value.replace(/-/g, ' ').replace(/\b\w/g, (char) => char.toUpperCase());
}

function normalized(value: string | number | null | undefined) {
  return String(value ?? '').toLowerCase();
}

function unique(values: string[]) {
  return Array.from(new Set(values.filter(Boolean))).sort((a, b) => a.localeCompare(b));
}

function specLine(robot: RobotItem) {
  const specs = [
    robot.specs.heightCm ? `${robot.specs.heightCm} cm` : null,
    robot.specs.weightKg ? `${robot.specs.weightKg} kg` : null,
    robot.specs.payloadKg ? `${robot.specs.payloadKg} kg payload` : null,
    robot.specs.maxSpeedMps ? `${robot.specs.maxSpeedMps} m/s` : null,
  ].filter(Boolean);

  return specs.length ? specs.join(' · ') : 'Specs partially unknown';
}

function EmptyState({ kind }: { kind: string }) {
  return (
    <div className="hd-launch-empty" role="status">
      <strong>No {kind} match those filters yet.</strong>
      <span>Clear filters or broaden the search. Unknown values stay unknown until verified.</span>
    </div>
  );
}

export function DirectoryLaunchPanel(props: Props) {
  const [query, setQuery] = useState('');
  const [status, setStatus] = useState('all');
  const [country, setCountry] = useState('all');
  const [sort, setSort] = useState('featured');

  if (props.kind === 'robots') {
    const companyBySlug = useMemo(
      () => new Map(props.companies.map((company) => [company.slug, company.name])),
      [props.companies],
    );
    const countries = useMemo(() => unique(props.robots.map((robot) => robot.country)), [props.robots]);
    const statuses = useMemo(() => unique(props.robots.map((robot) => robot.status)), [props.robots]);
    const filtered = useMemo(() => {
      const q = normalized(query).trim();
      return props.robots
        .filter((robot) => status === 'all' || robot.status === status)
        .filter((robot) => country === 'all' || robot.country === country)
        .filter((robot) => {
          if (!q) return true;
          return [
            robot.name,
            companyBySlug.get(robot.companySlug),
            robot.status,
            robot.country,
            robot.summary,
            ...robot.useCases,
          ].some((value) => normalized(value).includes(q));
        })
        .sort((a, b) => {
          if (sort === 'name') return a.name.localeCompare(b.name);
          if (sort === 'status') return statusOrder.indexOf(a.status) - statusOrder.indexOf(b.status) || a.name.localeCompare(b.name);
          if (sort === 'verified') return b.lastVerifiedAt.localeCompare(a.lastVerifiedAt) || a.name.localeCompare(b.name);
          return statusOrder.indexOf(a.status) - statusOrder.indexOf(b.status) || a.name.localeCompare(b.name);
        });
    }, [companyBySlug, country, props.robots, query, sort, status]);

    return (
      <section id="launch-directory" className="hd-launch-panel" data-directory-kind="robots" aria-label="Launch-ready robot directory controls">
        <div className="hd-launch-head">
          <p>Launch directory</p>
          <h2>Search, filter, and open verified robot profiles.</h2>
          <span>{props.robots.length} robots · {statuses.length} statuses · source-backed profiles</span>
        </div>
        <div className="hd-launch-controls">
          <label>
            <span>Search robots</span>
            <input data-filter-control="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Try Unitree, commercial, warehouse…" />
          </label>
          <label>
            <span>Status</span>
            <select data-filter-control="status" value={status} onChange={(event) => setStatus(event.target.value)}>
              <option value="all">All statuses</option>
              {statuses.map((item) => <option key={item} value={item}>{titleCase(item)}</option>)}
            </select>
          </label>
          <label>
            <span>Country</span>
            <select data-filter-control="country" value={country} onChange={(event) => setCountry(event.target.value)}>
              <option value="all">All countries</option>
              {countries.map((item) => <option key={item} value={item}>{item}</option>)}
            </select>
          </label>
          <label>
            <span>Sort</span>
            <select data-filter-control="sort" value={sort} onChange={(event) => setSort(event.target.value)}>
              <option value="featured">Launch priority</option>
              <option value="status">Commercial → unknown</option>
              <option value="verified">Recently verified</option>
              <option value="name">A–Z</option>
            </select>
          </label>
        </div>
        <div className="hd-launch-results" aria-live="polite">Showing {filtered.length} of {props.robots.length} robots</div>
        {filtered.length ? (
          <div className="hd-launch-grid">
            {filtered.map((robot) => (
              <a className="hd-launch-card" href={`/robots/${robot.slug}/`} key={robot.slug}>
                <span className={`hd-launch-status status-${robot.status}`}>{titleCase(robot.status)}</span>
                <strong>{robot.name}</strong>
                <span className="hd-launch-meta">{companyBySlug.get(robot.companySlug) ?? robot.companySlug} · {robot.country}</span>
                <p>{robot.summary}</p>
                <span className="hd-launch-specs">{specLine(robot)}</span>
                <span className="hd-launch-foot">Verified {robot.lastVerifiedAt} · {robot.statusConfidence ?? 'unknown'} confidence →</span>
              </a>
            ))}
          </div>
        ) : <EmptyState kind="robots" />}
      </section>
    );
  }

  const countries = useMemo(() => unique(props.companies.map((company) => company.country)), [props.companies]);
  const filtered = useMemo(() => {
    const q = normalized(query).trim();
    return props.companies
      .filter((company) => country === 'all' || company.country === country)
      .filter((company) => {
        if (!q) return true;
        return [company.name, company.country, company.city, company.summary, company.stage, ...company.focus].some((value) => normalized(value).includes(q));
      })
      .sort((a, b) => {
        if (sort === 'robots') return b.robots.length - a.robots.length || a.name.localeCompare(b.name);
        if (sort === 'country') return a.country.localeCompare(b.country) || a.name.localeCompare(b.name);
        return a.name.localeCompare(b.name);
      });
  }, [country, props.companies, query, sort]);

  return (
    <section id="launch-directory" className="hd-launch-panel" data-directory-kind="companies" aria-label="Launch-ready company directory controls">
      <div className="hd-launch-head">
        <p>Launch directory</p>
        <h2>Find companies by country, focus area, and tracked humanoid programs.</h2>
        <span>{props.companies.length} companies · source-backed landscape</span>
      </div>
      <div className="hd-launch-controls companies-controls">
        <label>
          <span>Search companies</span>
          <input data-filter-control="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Try China, industrial, home…" />
        </label>
        <label>
          <span>Country</span>
          <select data-filter-control="country" value={country} onChange={(event) => setCountry(event.target.value)}>
            <option value="all">All countries</option>
            {countries.map((item) => <option key={item} value={item}>{item}</option>)}
          </select>
        </label>
        <label>
          <span>Sort</span>
          <select data-filter-control="sort" value={sort} onChange={(event) => setSort(event.target.value)}>
            <option value="name">A–Z</option>
            <option value="robots">Most tracked robots</option>
            <option value="country">Country</option>
          </select>
        </label>
      </div>
      <div className="hd-launch-results" aria-live="polite">Showing {filtered.length} of {props.companies.length} companies</div>
      {filtered.length ? (
        <div className="hd-launch-grid company-launch-grid">
          {filtered.map((company) => (
            <a className="hd-launch-card" href={`/companies/${company.slug}/`} key={company.slug}>
              <span className="hd-launch-status company-status">{company.robots.length} tracked robot{company.robots.length === 1 ? '' : 's'}</span>
              <strong>{company.name}</strong>
              <span className="hd-launch-meta">{company.country}{company.city ? ` · ${company.city}` : ''}</span>
              <p>{company.summary}</p>
              <span className="hd-launch-specs">{company.stage ?? 'Stage needs verification'}</span>
              <span className="hd-launch-foot">Focus: {company.focus.slice(0, 2).join(' · ')} →</span>
            </a>
          ))}
        </div>
      ) : <EmptyState kind="companies" />}
    </section>
  );
}
