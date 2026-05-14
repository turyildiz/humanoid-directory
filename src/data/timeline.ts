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
    summary: 'Tesla connected its humanoid robot program to its AI and manufacturing work.',
    robotSlugs: ['optimus'],
    companySlugs: ['tesla'],
    sourceIds: ['tesla-optimus'],
  },
  {
    id: 'unitree-g1-listed',
    date: '2024',
    title: 'Unitree G1 listed as a humanoid platform',
    summary: 'Unitree Robotics publicly listed G1 as a compact humanoid platform.',
    robotSlugs: ['unitree-g1'],
    companySlugs: ['unitree-robotics'],
    sourceIds: ['unitree-g1'],
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
