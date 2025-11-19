import { Calendar, ChevronRight, Mail, PhoneCall } from 'lucide-react';
import { motion } from 'framer-motion';

const clients = [
  {
    name: 'Patrícia Albuquerque',
    status: 'Qualificado',
    budget: 'R$ 2,5M',
    tag: 'Alto padrão',
    nextStep: 'Visita - 15/11',
  },
  {
    name: 'Eduardo Carvalho',
    status: 'Negociação',
    budget: 'R$ 1,2M',
    tag: 'Cobertura',
    nextStep: 'Proposta enviada',
  },
  {
    name: 'Família Junqueira',
    status: 'Novo lead',
    budget: 'R$ 950K',
    tag: 'Casa',
    nextStep: 'Qualificação',
  },
];

const ClientsPage = () => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
    <div className="rounded-3xl bg-white p-6 shadow-sm">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-xl font-semibold text-text-primary">Clientes & Leads</h2>
          <p className="text-sm text-text-secondary">Gerencie relacionamentos e próximos passos</p>
        </div>
        <div className="flex flex-wrap gap-2">
          <button className="rounded-full border border-border-light px-4 py-2 text-sm font-semibold text-text-primary">
            Filtrar
          </button>
          <button className="button-hover rounded-full bg-primary-200 px-4 py-2 text-sm font-semibold text-primary-800">
            Novo lead
          </button>
        </div>
      </div>
      <div className="mt-6 space-y-3">
        {clients.map((client) => (
          <div
            key={client.name}
            className="flex flex-col gap-3 rounded-2xl border border-border-light p-4 sm:flex-row sm:items-center sm:justify-between"
          >
            <div>
              <p className="text-base font-semibold text-text-primary">{client.name}</p>
              <p className="text-sm text-text-secondary">{client.tag}</p>
            </div>
            <div className="flex flex-wrap gap-4 text-sm text-text-secondary">
              <span className="rounded-full bg-secondary-50 px-3 py-1 font-semibold text-secondary-700">
                {client.status}
              </span>
              <span>{client.budget}</span>
              <span className="flex items-center gap-1 text-primary-600">
                <Calendar size={14} /> {client.nextStep}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <button className="rounded-full border border-border-light p-2 text-text-secondary hover:text-primary-600">
                <PhoneCall size={16} />
              </button>
              <button className="rounded-full border border-border-light p-2 text-text-secondary hover:text-primary-600">
                <Mail size={16} />
              </button>
              <button className="rounded-full border border-border-light p-2 text-text-secondary hover:text-primary-600">
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  </motion.div>
);

export default ClientsPage;
