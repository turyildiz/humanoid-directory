import type { Source } from '@/lib/types';

export const sources: Source[] = [
  { id: 'tesla-optimus', title: 'Tesla AI & Robotics', url: 'https://www.tesla.com/AI', publisher: 'Tesla', sourceType: 'company', accessedAt: '2026-05-14', reliability: 'primary' },
  { id: 'tesla-ai-day-2022', title: 'Tesla AI Day 2022', url: 'https://www.youtube.com/watch?v=ODSJsviD_SU', publisher: 'Tesla', sourceType: 'video', publishedAt: '2022-09-30', accessedAt: '2026-05-14', reliability: 'primary' },
  { id: 'tesla-bot-update-2023', title: 'Tesla Bot Update', url: 'https://www.youtube.com/watch?v=XiQkeWOFwmk', publisher: 'Tesla', sourceType: 'video', accessedAt: '2026-05-14', reliability: 'primary' },
  { id: 'tesla-optimus-gen-2', title: 'Optimus - Gen 2 | Tesla', url: 'https://www.youtube.com/watch?v=cpraXaw7dyc', publisher: 'Tesla', sourceType: 'video', publishedAt: '2023-12-12', accessedAt: '2026-05-14', reliability: 'primary' },
  { id: 'tesla-bot-sort-stretch', title: 'Tesla Bot Update | Sort & Stretch', url: 'https://www.youtube.com/watch?v=D2vj0WcvH5c', publisher: 'Tesla', sourceType: 'video', accessedAt: '2026-05-14', reliability: 'primary' },
  { id: 'figure-02', title: 'Figure 02 humanoid robot', url: 'https://www.figure.ai/', publisher: 'Figure AI', sourceType: 'company' },
  { id: 'unitree-home', title: 'Unitree Robotics homepage', url: 'https://www.unitree.com/', publisher: 'Unitree Robotics', sourceType: 'company', accessedAt: '2026-05-14', reliability: 'primary' },
  { id: 'unitree-g1', title: 'Unitree G1 product page', url: 'https://www.unitree.com/g1', publisher: 'Unitree Robotics', sourceType: 'company', accessedAt: '2026-05-14', reliability: 'primary' },
  { id: 'unitree-g1-shop', title: 'Unitree G1 shop listing', url: 'https://shop.unitree.com/products/unitree-g1', publisher: 'Unitree Robotics', sourceType: 'company', accessedAt: '2026-05-14', reliability: 'primary' },
  { id: 'unitree-h1', title: 'Unitree H1 product page', url: 'https://www.unitree.com/h1', publisher: 'Unitree Robotics', sourceType: 'company', accessedAt: '2026-05-14', reliability: 'primary' },
  { id: 'agility-digit', title: 'Digit humanoid robot', url: 'https://agilityrobotics.com/products/digit', publisher: 'Agility Robotics', sourceType: 'company' },
  { id: 'apptronik-apollo', title: 'Apollo humanoid robot', url: 'https://apptronik.com/apollo', publisher: 'Apptronik', sourceType: 'company' },
  { id: '1x-neo', title: 'NEO humanoid robot', url: 'https://www.1x.tech/neo', publisher: '1X Technologies', sourceType: 'company' },
  { id: 'sanctuary-phoenix', title: 'Phoenix general purpose robot', url: 'https://www.sanctuary.ai/', publisher: 'Sanctuary AI', sourceType: 'company' },
  { id: 'boston-atlas', title: 'Atlas robot', url: 'https://bostondynamics.com/atlas/', publisher: 'Boston Dynamics', sourceType: 'company' },
  { id: 'fourier-gr1', title: 'GR-1 humanoid robot', url: 'https://www.fftai.com/products-gr1', publisher: 'Fourier Intelligence', sourceType: 'company' },
  { id: 'ubtech-walker', title: 'Walker S humanoid robot', url: 'https://www.ubtrobot.com/', publisher: 'UBTECH Robotics', sourceType: 'company' },
  { id: 'engineai-pm01', title: 'EngineAI humanoid robots', url: 'https://www.engineai.com.cn/', publisher: 'EngineAI', sourceType: 'company' },
];

export function getSource(id: string) {
  return sources.find((source) => source.id === id);
}
