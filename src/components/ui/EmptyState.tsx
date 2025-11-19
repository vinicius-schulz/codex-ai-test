import type { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface EmptyStateProps {
  title: string;
  description: string;
  action?: {
    label: string;
    onClick: () => void;
  };
  illustration?: ReactNode;
}

const EmptyState = ({ title, description, action, illustration }: EmptyStateProps) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    className="flex flex-col items-center justify-center rounded-3xl border border-dashed border-border-light bg-white p-10 text-center"
  >
    <div className="mb-4 h-20 w-20 rounded-full bg-primary-50 p-5 text-primary-600">
      {illustration}
    </div>
    <h3 className="text-lg font-semibold text-text-primary">{title}</h3>
    <p className="mt-2 max-w-md text-sm text-text-secondary">{description}</p>
    {action && (
      <button
        onClick={action.onClick}
        className="button-hover mt-4 rounded-full bg-primary-200 px-6 py-2 text-sm font-semibold text-primary-800"
      >
        {action.label}
      </button>
    )}
  </motion.div>
);

export default EmptyState;
