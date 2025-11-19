import { ReactNode, useState } from 'react';

interface TooltipProps {
  label: string;
  children: ReactNode;
}

export const Tooltip = ({ label, children }: TooltipProps) => {
  const [visible, setVisible] = useState(false);

  return (
    <div
      className="relative flex justify-center"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      {children}
      {visible && (
        <div className="absolute left-full ml-2 rounded-lg bg-text-primary px-2 py-1 text-xs text-white shadow-lg">
          {label}
        </div>
      )}
    </div>
  );
};
