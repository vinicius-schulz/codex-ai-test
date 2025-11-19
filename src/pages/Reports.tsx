import { Download, FileSpreadsheet, Filter } from 'lucide-react';
import { motion } from 'framer-motion';
import ChartCard from '../components/ui/ChartCard';

const periodData = [
  { name: 'Q1', value: 42 },
  { name: 'Q2', value: 54 },
  { name: 'Q3', value: 68 },
  { name: 'Q4', value: 80 },
];

const conversionData = [
  { name: 'Captação', value: 65 },
  { name: 'Qualificação', value: 48 },
  { name: 'Propostas', value: 28 },
  { name: 'Fechamentos', value: 12 },
];

const ReportsPage = () => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
    <div className="rounded-3xl bg-white p-6 shadow-sm">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h2 className="text-xl font-semibold text-text-primary">Relatórios de Performance</h2>
          <p className="text-sm text-text-secondary">Combine filtros e exporte resultados</p>
        </div>
        <div className="flex flex-wrap gap-2">
          <button className="rounded-full border border-border-light px-4 py-2 text-sm font-semibold text-text-primary">
            <Filter size={16} className="mr-2 inline" /> Filtrar período
          </button>
          <button className="rounded-full border border-border-light px-4 py-2 text-sm font-semibold text-text-primary">
            <FileSpreadsheet size={16} className="mr-2 inline" /> Exportar Excel
          </button>
          <button className="button-hover rounded-full bg-primary-200 px-4 py-2 text-sm font-semibold text-primary-800">
            <Download size={16} className="mr-2 inline" /> Exportar PDF
          </button>
        </div>
      </div>
    </div>
    <div className="grid gap-6 lg:grid-cols-2">
      <ChartCard title="Metas x Realizado" type="line" data={periodData} color="#5B97EA" />
      <ChartCard title="Funil de Conversão" type="bar" data={conversionData} color="#A3C4F3" />
    </div>
  </motion.div>
);

export default ReportsPage;
