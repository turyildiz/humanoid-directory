import type { Robot } from '@/lib/types';

export const robots: Robot[] = [
  {
    slug: 'optimus', name: 'Tesla Optimus', companySlug: 'tesla', generation: 'Gen 2', status: 'prototype', country: 'United States', announcedYear: 2021,
    availability: 'Prototype / company demonstrations; no public commercial availability confirmed by Tesla',
    summary: 'Tesla Optimus is Tesla’s in-house general-purpose humanoid robot program, tied to the company’s AI, controls, actuation, and manufacturing ambitions.',
    overview: 'Optimus is Tesla’s humanoid robot program for general-purpose work in human environments. Public evidence currently consists of Tesla’s AI/robotics page and official demonstration videos, including AI Day 2022, Tesla Bot updates, and the Optimus Gen 2 video. Tesla has shown bipedal walking, balance, object handling, and dexterous hand demonstrations, but has not published a complete public spec sheet or confirmed commercial availability.',
    useCases: ['manufacturing assistance', 'general-purpose labor', 'logistics and material movement', 'robotics autonomy research'],
    capabilities: ['bipedal locomotion', 'object handling', 'dexterous hand demonstrations', 'vision and autonomy stack connected to Tesla AI work'],
    specs: { heightCm: null, weightKg: null, payloadKg: null, batteryLifeHours: null, maxSpeedMps: null, degreesOfFreedom: null, locomotion: 'Bipedal', hands: 'Dexterous hands shown in official Tesla demos' },
    sources: ['tesla-optimus', 'tesla-ai-day-2022', 'tesla-bot-update-2023', 'tesla-optimus-gen-2', 'tesla-bot-sort-stretch'], lastVerifiedAt: '2026-05-14', featured: true,
    seoTitle: 'Tesla Optimus humanoid robot profile',
    seoDescription: 'Source-backed profile of Tesla Optimus: status, public demos, known unknowns, timeline, and sources.',
    statusConfidence: 'official',
    verificationNotes: 'Tesla has officially shown Optimus through its AI/robotics page and demonstration videos. The profile treats the robot as a prototype because Tesla has not published a complete public spec sheet or confirmed general commercial availability.',
    similarRobots: ['figure-02', 'apollo', 'digit'],
  },
  {
    slug: 'figure-02', name: 'Figure 02', companySlug: 'figure-ai', generation: '02', status: 'pilot', country: 'United States', announcedYear: 2024,
    availability: 'Pilot deployments / company demonstrations', summary: 'Figure 02 is Figure AI’s second-generation humanoid robot for real-world labor automation.',
    useCases: ['manufacturing', 'logistics'], capabilities: ['bipedal locomotion', 'manipulation', 'speech interaction'],
    specs: { heightCm: null, weightKg: null, payloadKg: null, batteryLifeHours: null, maxSpeedMps: null, degreesOfFreedom: null, locomotion: 'Bipedal', hands: 'Human-like hands' },
    sources: ['figure-02'], lastVerifiedAt: '2026-05-14', featured: true,
  },
  {
    slug: 'unitree-g1', name: 'Unitree G1', companySlug: 'unitree-robotics', status: 'commercial', country: 'China', announcedYear: 2024,
    availability: 'Commercially listed by Unitree; official product page advertises “Price from $13.5K” and the Unitree shop lists G1 for online purchase.',
    summary: 'Unitree G1 is a compact commercially listed humanoid platform from Unitree Robotics, positioned for education, research, development, and humanoid AI work.',
    overview: 'G1 is Unitree’s compact humanoid robot platform. Unlike many high-profile prototype programs, G1 is publicly listed by the manufacturer with a product page, public parameters, and an official shop listing. Unitree describes G1 around humanoid agent/AI avatar work, imitation and reinforcement learning, OTA software upgrades, broad joint movement space, and optional dexterous-hand configurations. Availability and exact configuration should still be checked at purchase time because EDU/options can change public specs.',
    useCases: ['research', 'education', 'development', 'humanoid AI experimentation'],
    capabilities: ['bipedal locomotion', 'whole-body control', 'imitation and reinforcement learning messaging', 'optional dexterous hand configuration', 'OTA software update support'],
    specs: { heightCm: 132, weightKg: 35, payloadKg: null, batteryLifeHours: null, maxSpeedMps: null, degreesOfFreedom: 23, locomotion: 'Bipedal', hands: 'Optional dexterous hand configuration on G1 EDU; base configuration is option-dependent' },
    sources: ['unitree-g1', 'unitree-g1-shop', 'unitree-home', 'unitree-h1'], lastVerifiedAt: '2026-05-14', featured: true,
    seoTitle: 'Unitree G1 humanoid robot profile',
    seoDescription: 'Source-backed profile of Unitree G1: commercial listing, specs, status, sources, and known unknowns.',
    statusConfidence: 'official',
    verificationNotes: 'Unitree officially lists G1 on its product page and shop. The profile treats G1 as commercial because there is a public manufacturer listing and shop page, while configuration-dependent fields such as dexterous hands and exact EDU options remain labeled carefully.',
    similarRobots: ['unitree-h1', 'optimus', 'apollo'],
  },
  {
    slug: 'unitree-h1', name: 'Unitree H1', companySlug: 'unitree-robotics', status: 'commercial', country: 'China', announcedYear: null,
    availability: 'Commercially listed by manufacturer', summary: 'Unitree H1 is a full-size humanoid robot platform from Unitree Robotics.',
    useCases: ['research', 'industrial R&D', 'mobility demos'], capabilities: ['bipedal locomotion', 'dynamic movement'],
    specs: { heightCm: null, weightKg: null, payloadKg: null, batteryLifeHours: null, maxSpeedMps: null, degreesOfFreedom: null, locomotion: 'Bipedal', hands: 'Not publicly disclosed' },
    sources: ['unitree-h1'], lastVerifiedAt: '2026-05-14', featured: true,
  },
  {
    slug: 'digit', name: 'Digit', companySlug: 'agility-robotics', status: 'pilot', country: 'United States', announcedYear: null,
    availability: 'Commercial deployments and customer programs reported by Agility; exact fleet sizes, pricing, and customer rollout terms are not fully public.',
    summary: 'Digit is Agility Robotics’ bipedal humanoid robot for warehouse, logistics, distribution, and manufacturing workflows.',
    overview: 'Digit is one of the clearest logistics-focused humanoid programs in the directory. Agility positions Digit as a humanoid automation platform for facilities where people already work, with Arc workflow software connecting Digit into warehouse automation, AMRs, management systems, and fleet monitoring. Official Agility material cites customer statements from Amazon, GXO, and Schaeffler and describes early deployment momentum in manufacturing, logistics, and distribution. The profile treats Digit as pilot-stage because the public evidence shows real customer and deployment activity, but not broad commodity availability with transparent pricing and fleet data.',
    useCases: ['warehouse automation', 'logistics', 'distribution', 'manufacturing support', 'material handling'],
    capabilities: ['bipedal locomotion', 'tote and material handling', 'workflow integration through Arc', 'fleet monitoring', 'work in human-designed industrial spaces'],
    specs: { heightCm: null, weightKg: null, payloadKg: null, batteryLifeHours: null, maxSpeedMps: null, degreesOfFreedom: null, locomotion: 'Bipedal', hands: 'End effectors for material handling; public configuration details should be verified per deployment' },
    sources: ['agility-digit', 'agility-solutions', 'agility-robofab', 'agility-news'], lastVerifiedAt: '2026-05-14', featured: true,
    seoTitle: 'Agility Robotics Digit humanoid robot profile',
    seoDescription: 'Source-backed profile of Digit by Agility Robotics: logistics focus, status, sources, timeline, and known unknowns.',
    statusConfidence: 'official',
    verificationNotes: 'Agility officially presents Digit as deployed into industrial workflows and references customer activity. The profile uses pilot-stage because public material supports real deployments, but detailed fleet scale, pricing, and general procurement terms remain undisclosed.',
    similarRobots: ['apollo', 'optimus', 'figure-02'],
  },
  {
    slug: 'apollo', name: 'Apollo', companySlug: 'apptronik', status: 'pilot', country: 'United States', announcedYear: 2023,
    availability: 'Company demonstrations / partner pilots', summary: 'Apollo is Apptronik’s humanoid robot for industrial and logistics work.',
    useCases: ['manufacturing', 'logistics', 'industrial work'], capabilities: ['bipedal locomotion', 'modular payload work', 'human-centered design'],
    specs: { heightCm: null, weightKg: null, payloadKg: null, batteryLifeHours: null, maxSpeedMps: null, degreesOfFreedom: null, locomotion: 'Bipedal', hands: 'Not publicly disclosed' },
    sources: ['apptronik-apollo'], lastVerifiedAt: '2026-05-14', featured: true,
  },
  {
    slug: 'neo', name: '1X NEO', companySlug: '1x-technologies', status: 'prototype', country: 'Norway / United States', announcedYear: null,
    availability: 'Company demonstrations / early access messaging', summary: 'NEO is 1X Technologies’ humanoid robot aimed at assistance and embodied AI applications.',
    useCases: ['home assistance', 'general purpose'], capabilities: ['bipedal locomotion', 'assistance tasks', 'AI interaction'],
    specs: { heightCm: null, weightKg: null, payloadKg: null, batteryLifeHours: null, maxSpeedMps: null, degreesOfFreedom: null, locomotion: 'Bipedal', hands: 'Human-like hands shown in company material' },
    sources: ['1x-neo'], lastVerifiedAt: '2026-05-14'
  },
  {
    slug: 'phoenix', name: 'Sanctuary AI Phoenix', companySlug: 'sanctuary-ai', status: 'pilot', country: 'Canada', announcedYear: null,
    availability: 'Company demonstrations / pilots', summary: 'Phoenix is Sanctuary AI’s general-purpose humanoid robot platform.',
    useCases: ['general purpose', 'industrial tasks', 'retail tasks'], capabilities: ['dexterous manipulation', 'teleoperation/autonomy mix', 'task learning'],
    specs: { heightCm: null, weightKg: null, payloadKg: null, batteryLifeHours: null, maxSpeedMps: null, degreesOfFreedom: null, locomotion: 'Bipedal / platform-dependent', hands: 'Dexterous hands' },
    sources: ['sanctuary-phoenix'], lastVerifiedAt: '2026-05-14'
  },
  {
    slug: 'electric-atlas', name: 'Boston Dynamics Electric Atlas', companySlug: 'boston-dynamics', status: 'prototype', country: 'United States', announcedYear: 2024,
    availability: 'Prototype / company demonstrations', summary: 'Electric Atlas is Boston Dynamics’ all-electric humanoid robot platform.',
    useCases: ['research', 'industrial R&D', 'mobility'], capabilities: ['dynamic mobility', 'whole-body motion', 'manipulation R&D'],
    specs: { heightCm: null, weightKg: null, payloadKg: null, batteryLifeHours: null, maxSpeedMps: null, degreesOfFreedom: null, locomotion: 'Bipedal', hands: 'Not publicly disclosed' },
    sources: ['boston-atlas'], lastVerifiedAt: '2026-05-14'
  },
  {
    slug: 'gr-1', name: 'Fourier GR-1', companySlug: 'fourier-intelligence', status: 'prototype', country: 'China', announcedYear: null,
    availability: 'Company demonstrations / platform development', summary: 'GR-1 is Fourier Intelligence’s humanoid robot platform.',
    useCases: ['research', 'rehabilitation-adjacent R&D', 'general purpose'], capabilities: ['bipedal locomotion', 'humanoid platform development'],
    specs: { heightCm: null, weightKg: null, payloadKg: null, batteryLifeHours: null, maxSpeedMps: null, degreesOfFreedom: null, locomotion: 'Bipedal', hands: 'Not publicly disclosed' },
    sources: ['fourier-gr1'], lastVerifiedAt: '2026-05-14'
  },
  {
    slug: 'walker-s', name: 'UBTECH Walker S', companySlug: 'ubtech-robotics', status: 'pilot', country: 'China', announcedYear: null,
    availability: 'Company demonstrations / industrial pilot messaging', summary: 'Walker S is UBTECH’s humanoid robot platform for service and industrial scenarios.',
    useCases: ['industrial pilots', 'service robotics'], capabilities: ['bipedal locomotion', 'task demonstrations'],
    specs: { heightCm: null, weightKg: null, payloadKg: null, batteryLifeHours: null, maxSpeedMps: null, degreesOfFreedom: null, locomotion: 'Bipedal', hands: 'Not publicly disclosed' },
    sources: ['ubtech-walker'], lastVerifiedAt: '2026-05-14'
  },
  {
    slug: 'pm01', name: 'EngineAI PM01', companySlug: 'engineai', status: 'prototype', country: 'China', announcedYear: null,
    availability: 'Company demonstrations / early platform', summary: 'PM01 is a humanoid robot from EngineAI.',
    useCases: ['research', 'mobility demos', 'development'], capabilities: ['bipedal locomotion', 'humanoid platform development'],
    specs: { heightCm: null, weightKg: null, payloadKg: null, batteryLifeHours: null, maxSpeedMps: null, degreesOfFreedom: null, locomotion: 'Bipedal', hands: 'Unknown' },
    sources: ['engineai-pm01'], lastVerifiedAt: '2026-05-14'
  },
];

export function getRobot(slug: string) { return robots.find((robot) => robot.slug === slug); }
export const featuredRobots = robots.filter((robot) => robot.featured);
