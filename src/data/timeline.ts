import type { TimelineEvent } from '@/lib/types';

export const timelineEvents: TimelineEvent[] = [
  {
    id: 'figure-02-unveiled',
    date: '2024-08',
    title: 'Figure 02 publicly introduced',
    summary: 'Figure AI presented Figure 02 as its second-generation humanoid robot for real-world labor automation.',
    robotSlugs: ['figure-02'],
    companySlugs: ['figure-ai'],
    sourceIds: ['figure-02'],
  },
  {
    id: 'tesla-optimus-program',
    date: '2021',
    title: 'Tesla announces Optimus direction',
    summary: 'Tesla connected its humanoid robot program to its AI and manufacturing work, framing Optimus as a general-purpose robot effort rather than a separate consumer product line.',
    robotSlugs: ['optimus'],
    companySlugs: ['tesla'],
    sourceIds: ['tesla-optimus'],
  },
  {
    id: 'tesla-ai-day-2022-optimus',
    date: '2022-09',
    title: 'Optimus shown during Tesla AI Day 2022',
    summary: 'Tesla presented Optimus work during AI Day 2022, giving the program a primary-source milestone in Tesla’s AI and robotics roadmap.',
    robotSlugs: ['optimus'],
    companySlugs: ['tesla'],
    sourceIds: ['tesla-ai-day-2022'],
  },
  {
    id: 'tesla-optimus-gen-2-video',
    date: '2023-12',
    title: 'Tesla publishes Optimus Gen 2 video',
    summary: 'Tesla published an official Optimus Gen 2 video showing updated movement and manipulation demonstrations.',
    robotSlugs: ['optimus'],
    companySlugs: ['tesla'],
    sourceIds: ['tesla-optimus-gen-2'],
  },
  {
    id: 'tesla-bot-sort-stretch-video',
    date: '2024',
    title: 'Tesla shares Sort & Stretch update',
    summary: 'Tesla published an official Bot Update video focused on sorting and stretching demonstrations, useful as evidence of ongoing manipulation and control work.',
    robotSlugs: ['optimus'],
    companySlugs: ['tesla'],
    sourceIds: ['tesla-bot-sort-stretch'],
  },
  {
    id: 'unitree-g1-listed',
    date: '2024',
    title: 'Unitree G1 listed as a compact humanoid platform',
    summary: 'Unitree Robotics publicly listed G1 with product-page parameters, price-from messaging, and commercial positioning for education, research, and development use.',
    robotSlugs: ['unitree-g1'],
    companySlugs: ['unitree-robotics'],
    sourceIds: ['unitree-g1'],
  },
  {
    id: 'unitree-g1-shop-listing',
    date: '2024',
    title: 'Unitree G1 appears in official shop',
    summary: 'The official Unitree shop lists G1 for purchase, supporting a commercial status label while configuration and availability still require current purchase-time verification.',
    robotSlugs: ['unitree-g1'],
    companySlugs: ['unitree-robotics'],
    sourceIds: ['unitree-g1-shop'],
  },
  {
    id: 'boston-electric-atlas',
    date: '2024',
    title: 'Boston Dynamics introduces electric Atlas',
    summary: 'Boston Dynamics introduced its all-electric Atlas humanoid platform.',
    robotSlugs: ['electric-atlas'],
    companySlugs: ['boston-dynamics'],
    sourceIds: ['boston-atlas'],
  },
  {
    id: 'apollo-product-direction',
    date: '2023',
    title: 'Apptronik presents Apollo',
    summary: 'Apptronik presented Apollo as a humanoid robot aimed at industrial and logistics work.',
    robotSlugs: ['apollo'],
    companySlugs: ['apptronik'],
    sourceIds: ['apptronik-apollo'],
  },
];

export function timelineForRobot(slug: string) {
  return timelineEvents.filter((event) => event.robotSlugs.includes(slug));
}

export function timelineForCompany(slug: string) {
  return timelineEvents.filter((event) => event.companySlugs.includes(slug));
}
