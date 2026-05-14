import type { Source } from '@/lib/types';

export const sources: Source[] = [
  { id: 'tesla-optimus', title: 'Tesla AI & Robotics', url: 'https://www.tesla.com/AI', publisher: 'Tesla', sourceType: 'company' },
  { id: 'figure-02', title: 'Figure 02 humanoid robot', url: 'https://www.figure.ai/', publisher: 'Figure AI', sourceType: 'company' },
  { id: 'unitree-g1', title: 'Unitree G1 product page', url: 'https://www.unitree.com/g1', publisher: 'Unitree Robotics', sourceType: 'company' },
  { id: 'unitree-h1', title: 'Unitree H1 product page', url: 'https://www.unitree.com/h1', publisher: 'Unitree Robotics', sourceType: 'company' },
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
