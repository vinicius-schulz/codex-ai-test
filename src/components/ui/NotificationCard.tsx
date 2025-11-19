import clsx from 'clsx';
import { AlertCircle, Flame, PhoneCall } from 'lucide-react';

export type NotificationType = 'lead' | 'followup' | 'task';

interface NotificationCardProps {
  type: NotificationType;
  title: string;
  description: string;
  time: string;
}

const iconMap = {
  lead: Flame,
  followup: PhoneCall,
  task: AlertCircle,
};

const colorMap: Record<NotificationType, string> = {
  lead: 'bg-error-100 text-error-500',
  followup: 'bg-secondary-50 text-secondary-700',
  task: 'bg-warning-100 text-warning-500',
};

export const NotificationCard = ({ type, title, description, time }: NotificationCardProps) => {
  const Icon = iconMap[type];
  return (
    <div className="flex items-start gap-3 rounded-2xl border border-border-light bg-white p-4">
      <div className={clsx('rounded-2xl p-2', colorMap[type])}>
        <Icon size={18} />
      </div>
      <div className="flex-1">
        <p className="text-sm font-semibold text-text-primary">{title}</p>
        <p className="text-xs text-text-secondary">{description}</p>
      </div>
      <span className="text-xs text-text-secondary">{time}</span>
    </div>
  );
};
