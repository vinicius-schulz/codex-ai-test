import { CircleDollarSign, Home, LineChart, UsersRound } from 'lucide-react';
import ChartCard from '../components/ui/ChartCard';
import { KPICard } from '../components/ui/KPICard';
import { NotificationCard } from '../components/ui/NotificationCard';
import {
  activities,
  kpiData,
  pipelineData,
  propertyMix,
  salesTrend,
} from '../features/dashboard/data';
import { motion } from 'framer-motion';

const iconMap = {
  UsersRound,
  Home,
  LineChart,
  CircleDollarSign,
};

const DashboardPage = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
      <section>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {kpiData.map((item) => (
            <KPICard
              key={item.title}
              title={item.title}
              value={item.value}
              change={item.change}
              icon={iconMap[item.icon as keyof typeof iconMap]}
              color={item.color as 'primary'}
            />
          ))}
        </div>
      </section>

      <section className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <ChartCard
            title="Evolução de Vendas"
            description="Comparativo mensal de unidades vendidas"
            type="area"
            data={salesTrend}
            color="#5B97EA"
            footer="Meta trimestral: 240 unidades"
          />
        </div>
        <div className="space-y-4">
          <div className="rounded-3xl bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-text-primary">Leads no Pipeline</h3>
            <p className="text-sm text-text-secondary">Acompanhamento em tempo real</p>
            <div className="mt-4 space-y-4">
              {pipelineData.map((stage) => (
                <div key={stage.stage}>
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-semibold text-text-primary">{stage.stage}</span>
                    <span className="text-text-secondary">{stage.amount} leads</span>
                  </div>
                  <div className="mt-2 h-2 rounded-full bg-background-hover">
                    <div
                      className="h-2 rounded-full bg-primary-200"
                      style={{ width: `${stage.conversion}%` }}
                    />
                  </div>
                  <p className="mt-1 text-xs text-text-secondary">Taxa {stage.conversion}%</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <ChartCard
          title="Mix de Imóveis"
          description="Distribuição por categoria"
          type="bar"
          data={propertyMix}
          dataKey="value"
          color="#69B879"
          height={260}
        />
        <div className="rounded-3xl bg-white p-6 shadow-sm lg:col-span-2">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-text-primary">Alertas & Seguimentos</h3>
              <p className="text-sm text-text-secondary">Priorize leads quentes e follow-ups</p>
            </div>
            <button className="button-hover rounded-full border border-border-light px-4 py-2 text-sm font-semibold text-primary-600">
              Ver agenda
            </button>
          </div>
          <div className="mt-4 space-y-3">
            {activities.map((item) => (
              <NotificationCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default DashboardPage;
