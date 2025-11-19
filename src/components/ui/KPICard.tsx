import { LucideIcon, TrendingDown, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';
import clsx from 'clsx';

interface KPICardProps {
  title: string;
  value: string | number;
  change?: number;
  icon: LucideIcon;
  color?: 'primary' | 'secondary' | 'error' | 'success';
  loading?: boolean;
  onClick?: () => void;
}

const colorMap = {
  primary: 'text-primary-600 bg-primary-50',
  secondary: 'text-secondary-600 bg-secondary-50',
  error: 'text-error-500 bg-error-100',
  success: 'text-success-500 bg-success-100',
};

export const KPICard = ({
  title,
  value,
  change,
  icon: Icon,
  color = 'primary',
  loading,
  onClick,
}: KPICardProps) => {
  if (loading) {
    return <div className="h-36 rounded-3xl bg-white p-6 shadow-sm skeleton" />;
  }

  return (
    <motion.button
      whileHover={{ scale: 1.01, y: -4 }}
      whileTap={{ scale: 0.99 }}
      onClick={onClick}
      className="card-hover w-full rounded-3xl bg-white p-6 text-left shadow-sm"
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold text-text-secondary">{title}</p>
          <p className="mt-2 text-2xl font-semibold text-text-primary">{value}</p>
        </div>
        <div className={clsx('rounded-2xl p-3', colorMap[color])}>
          <Icon size={22} />
        </div>
      </div>
      {typeof change === 'number' && (
        <div className="mt-4 flex items-center gap-2 text-sm">
          {change >= 0 ? (
            <TrendingUp className="h-4 w-4 text-success-500" />
          ) : (
            <TrendingDown className="h-4 w-4 text-error-500" />
          )}
          <span className={change >= 0 ? 'text-success-500' : 'text-error-500'}>
            {change > 0 ? '+' : ''}
            {change}%
          </span>
          <span className="text-text-secondary">vs mês anterior</span>
        </div>
      )}
    </motion.button>
  );
};
