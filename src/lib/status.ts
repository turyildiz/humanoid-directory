import type { RobotStatus } from '@/lib/types';

export const statusLabels: Record<RobotStatus, string> = {
  concept: 'Concept', prototype: 'Prototype', research: 'Research', pilot: 'Pilot', commercial: 'Commercial', paused: 'Paused', discontinued: 'Discontinued', unknown: 'Unknown',
};

export const statusDescriptions: Record<RobotStatus, string> = {
  concept: 'Announcement, render, or idea without a demonstrated physical prototype.',
  prototype: 'Physical robot shown publicly, but not proven as a broad deployment.',
  research: 'Primarily a lab or academic platform.',
  pilot: 'Tested with partners or in controlled real-world environments.',
  commercial: 'Commercially listed or sold/leased by the manufacturer.',
  paused: 'Program appears paused or inactive.',
  discontinued: 'Program appears discontinued.',
  unknown: 'Insufficient public evidence to classify confidently.',
};
