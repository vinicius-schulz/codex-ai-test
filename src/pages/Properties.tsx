import { BedDouble, MapPin, MoveRight } from 'lucide-react';
import { motion } from 'framer-motion';

const properties = [
  {
    title: 'Cobertura Duplex - Jardins',
    price: 'R$ 4,8M',
    status: 'Disponível',
    specs: '4 suítes · 285m² · 3 vagas',
    location: 'Jardins, São Paulo',
  },
  {
    title: 'Casa contemporânea - Alphaville',
    price: 'R$ 3,2M',
    status: 'Reservado',
    specs: '5 suítes · 420m² · 4 vagas',
    location: 'Alphaville, Barueri',
  },
  {
    title: 'Apartamento Garden - Vila Madalena',
    price: 'R$ 2,1M',
    status: 'Vendido',
    specs: '3 suítes · 180m² · 2 vagas',
    location: 'Vila Madalena, São Paulo',
  },
];

const statusColor: Record<string, string> = {
  Disponível: 'bg-secondary-50 text-secondary-700',
  Reservado: 'bg-warning-100 text-warning-500',
  Vendido: 'bg-error-100 text-error-500',
};

const PropertiesPage = () => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
    <div className="rounded-3xl bg-white p-6 shadow-sm">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-xl font-semibold text-text-primary">Portfólio de Imóveis</h2>
          <p className="text-sm text-text-secondary">Monitore status e agenda visitas</p>
        </div>
        <div className="flex flex-wrap gap-2">
          <button className="rounded-full border border-border-light px-4 py-2 text-sm font-semibold text-text-primary">
            Filtrar por região
          </button>
          <button className="button-hover rounded-full bg-secondary-200 px-4 py-2 text-sm font-semibold text-secondary-800">
            Novo imóvel
          </button>
        </div>
      </div>
      <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {properties.map((property) => (
          <div key={property.title} className="card-hover rounded-3xl border border-border-light p-5">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-text-primary">{property.title}</h3>
              <span className={`rounded-full px-3 py-1 text-xs font-semibold ${statusColor[property.status]}`}>
                {property.status}
              </span>
            </div>
            <p className="mt-2 text-sm text-text-secondary">{property.specs}</p>
            <p className="mt-2 text-2xl font-semibold text-text-primary">{property.price}</p>
            <div className="mt-4 flex items-center gap-2 text-sm text-text-secondary">
              <MapPin size={16} /> {property.location}
            </div>
            <div className="mt-4 flex items-center gap-4 text-sm text-text-secondary">
              <span className="flex items-center gap-1">
                <BedDouble size={16} /> Tour virtual
              </span>
              <button className="button-hover flex items-center gap-1 rounded-full border border-border-light px-3 py-1 text-xs font-semibold text-primary-600">
                Detalhes <MoveRight size={14} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  </motion.div>
);

export default PropertiesPage;
