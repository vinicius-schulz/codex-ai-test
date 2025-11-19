import { Bell, Search, User2 } from 'lucide-react';
import { motion } from 'framer-motion';
import type { FC } from 'react';

interface HeaderProps {
  title?: string;
}

const Header: FC<HeaderProps> = ({ title = 'Dashboard' }) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="flex h-[60px] items-center justify-between px-6">
        <motion.div
          className="flex items-center gap-2"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
        >
          <span className="rounded-full bg-primary-100 px-3 py-1 text-sm font-semibold text-primary-600">
            CREA CRM
          </span>
          <span className="text-sm font-medium text-text-secondary">Imobiliária Boutique</span>
        </motion.div>

        <h1 className="title-lg hidden text-lg font-semibold text-text-primary md:block">
          {title}
        </h1>

        <div className="flex items-center gap-4">
          <div className="hidden items-center gap-2 rounded-full border border-border-light bg-background px-3 py-1 md:flex">
            <Search size={16} className="text-text-secondary" />
            <input
              placeholder="Buscar leads, imóveis..."
              className="w-48 bg-transparent text-sm text-text-primary placeholder:text-text-secondary focus:outline-none"
            />
          </div>
          <button className="relative rounded-full border border-border-light p-2 text-text-secondary transition hover:text-primary-600">
            <Bell size={18} />
            <span className="absolute -right-0.5 -top-0.5 inline-flex h-4 w-4 items-center justify-center rounded-full bg-error-200 text-[10px] font-semibold text-white">
              3
            </span>
          </button>
          <button className="flex items-center gap-2 rounded-full border border-border-light px-3 py-1">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-200 text-primary-700">
              <User2 size={18} />
            </div>
            <div className="hidden text-left text-sm md:block">
              <p className="font-semibold text-text-primary">Marina Dias</p>
              <p className="text-xs text-text-secondary">Gestora</p>
            </div>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
