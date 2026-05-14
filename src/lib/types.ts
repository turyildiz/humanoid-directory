export type RobotStatus = 'concept' | 'prototype' | 'research' | 'pilot' | 'commercial' | 'paused' | 'discontinued' | 'unknown';

export type Source = {
  id: string;
  title: string;
  url: string;
  publisher: string;
  sourceType: 'company' | 'press' | 'video' | 'research' | 'database';
  publishedAt?: string;
};

export type Company = {
  slug: string;
  name: string;
  country: string;
  city?: string;
  foundedYear?: number | null;
  websiteUrl?: string;
  summary: string;
  focus: string[];
  robots: string[];
  sources: string[];
};

export type Robot = {
  slug: string;
  name: string;
  companySlug: string;
  generation?: string;
  status: RobotStatus;
  country: string;
  announcedYear?: number | null;
  availability: string;
  summary: string;
  useCases: string[];
  capabilities: string[];
  specs: {
    heightCm?: number | null;
    weightKg?: number | null;
    payloadKg?: number | null;
    batteryLifeHours?: number | null;
    maxSpeedMps?: number | null;
    degreesOfFreedom?: number | null;
    locomotion?: string | null;
    hands?: string | null;
  };
  sources: string[];
  lastVerifiedAt: string;
  featured?: boolean;
};
