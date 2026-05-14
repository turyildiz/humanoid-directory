export type RobotStatus = 'concept' | 'prototype' | 'research' | 'pilot' | 'commercial' | 'paused' | 'discontinued' | 'unknown';

export type VerificationReliability = 'primary' | 'secondary' | 'database' | 'social' | 'video';

export type Source = {
  id: string;
  title: string;
  url: string;
  publisher: string;
  sourceType: 'company' | 'press' | 'video' | 'research' | 'database';
  publishedAt?: string;
  accessedAt?: string;
  reliability?: VerificationReliability;
};

export type Company = {
  slug: string;
  name: string;
  country: string;
  city?: string;
  foundedYear?: number | null;
  websiteUrl?: string;
  summary: string;
  overview?: string;
  focus: string[];
  robots: string[];
  sources: string[];
  seoTitle?: string;
  seoDescription?: string;
  stage?: string;
  fundingSummary?: string;
  published?: boolean;
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
  overview?: string;
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
  seoTitle?: string;
  seoDescription?: string;
  statusConfidence?: 'official' | 'reported' | 'inferred' | 'unknown';
  verificationNotes?: string;
  similarRobots?: string[];
  published?: boolean;
};

export type TimelineEvent = {
  id: string;
  date: string;
  title: string;
  summary: string;
  robotSlugs: string[];
  companySlugs: string[];
  sourceIds: string[];
};

export type ArticleSection = {
  heading: string;
  body: string;
};

export type Article = {
  slug: string;
  title: string;
  dek: string;
  category: string;
  publishedAt: string;
  updatedAt: string;
  readingMinutes: number;
  sections: ArticleSection[];
  relatedRobots: string[];
  relatedCompanies: string[];
  sourceIds: string[];
};
