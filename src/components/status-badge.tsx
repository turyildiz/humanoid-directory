import type { RobotStatus } from '@/lib/types';
import { statusLabels } from '@/lib/status';

const statusClass: Record<RobotStatus, string> = {
  concept: 'status concept', prototype: 'status prototype', research: 'status research', pilot: 'status pilot', commercial: 'status commercial', paused: 'status paused', discontinued: 'status discontinued', unknown: 'status unknown',
};

export function StatusBadge({ status }: { status: RobotStatus }) {
  return <span className={statusClass[status]}>{statusLabels[status]}</span>;
}
