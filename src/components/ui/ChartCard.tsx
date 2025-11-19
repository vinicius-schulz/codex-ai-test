import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip as RechartsTooltip,
  XAxis,
  YAxis,
} from 'recharts';
import type { ReactNode } from 'react';

interface ChartCardProps {
  title: string;
  description?: string;
  type: 'line' | 'bar' | 'area' | 'pie';
  data: any[];
  dataKey?: string;
  color?: string;
  height?: number;
  footer?: ReactNode;
}

const ChartCard = ({
  title,
  description,
  type,
  data,
  dataKey = 'value',
  color = '#5B97EA',
  height = 280,
  footer,
}: ChartCardProps) => {
  const renderChart = () => {
    switch (type) {
      case 'line':
        return (
          <ResponsiveContainer width="100%" height={height}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f1f1f1" />
              <XAxis dataKey="name" stroke="#9B9B9B" />
              <YAxis stroke="#9B9B9B" />
              <RechartsTooltip />
              <Line type="monotone" dataKey={dataKey} stroke={color} strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        );
      case 'bar':
        return (
          <ResponsiveContainer width="100%" height={height}>
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f1f1f1" />
              <XAxis dataKey="name" stroke="#9B9B9B" />
              <YAxis stroke="#9B9B9B" />
              <RechartsTooltip />
              <Bar dataKey={dataKey} fill={color} radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        );
      case 'area':
        return (
          <ResponsiveContainer width="100%" height={height}>
            <AreaChart data={data}>
              <defs>
                <linearGradient id="areaColor" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor={color} stopOpacity={0.4} />
                  <stop offset="95%" stopColor={color} stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#f1f1f1" />
              <XAxis dataKey="name" stroke="#9B9B9B" />
              <YAxis stroke="#9B9B9B" />
              <RechartsTooltip />
              <Area type="monotone" dataKey={dataKey} stroke={color} fillOpacity={1} fill="url(#areaColor)" />
            </AreaChart>
          </ResponsiveContainer>
        );
      case 'pie':
        return (
          <ResponsiveContainer width="100%" height={height}>
            <PieChart>
              <Pie data={data} dataKey={dataKey} nameKey="name" cx="50%" cy="50%" innerRadius={50} outerRadius={80} fill={color} label />
              <RechartsTooltip />
            </PieChart>
          </ResponsiveContainer>
        );
      default:
        return null;
    }
  };

  return (
    <div className="rounded-3xl bg-white p-6 shadow-sm">
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-text-primary">{title}</h3>
        {description && <p className="text-sm text-text-secondary">{description}</p>}
      </div>
      {renderChart()}
      {footer && <div className="mt-4 border-t border-border-light pt-4 text-sm text-text-secondary">{footer}</div>}
    </div>
  );
};

export default ChartCard;
