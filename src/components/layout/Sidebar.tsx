import { Building2, CalendarClock, Home, LineChart, Settings, UsersRound } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { useUIStore } from '../../store/ui';
import { motion } from 'framer-motion';
import { Tooltip } from '../ui/Tooltip';

const navigation = [
  { label: 'Dashboard', icon: LineChart, to: '/' },
  { label: 'Clientes', icon: UsersRound, to: '/clientes' },
  { label: 'Imóveis', icon: Home, to: '/imoveis' },
  { label: 'Agenda', icon: CalendarClock, to: '/agenda', disabled: true },
  { label: 'Relatórios', icon: Building2, to: '/relatorios' },
  { label: 'Configurações', icon: Settings, to: '/configuracoes' },
];

const Sidebar = () => {
  const { sidebarCollapsed, toggleSidebar } = useUIStore();

  return (
    <motion.aside
      className={`fixed left-0 top-[60px] z-40 flex h-[calc(100vh-60px)] flex-col border-r border-border-light bg-white transition-all duration-300 ${sidebarCollapsed ? 'w-[80px]' : 'w-[280px]'}`}
      animate={{ width: sidebarCollapsed ? 80 : 280 }}
    >
      <div className="flex items-center justify-between px-4 py-4">
        {!sidebarCollapsed && (
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-text-secondary">Menu</p>
            <p className="text-sm font-semibold text-text-primary">Operações</p>
          </div>
        )}
        <button
          onClick={toggleSidebar}
          className="rounded-full border border-border-light p-2 text-text-secondary transition hover:text-primary-600"
        >
          {sidebarCollapsed ? '→' : '←'}
        </button>
      </div>
      <nav className="flex-1 space-y-1 px-2">
        {navigation.map((item) => {
          const content = (
            <NavLink
              to={item.to}
              className={({ isActive }) =>
                `group flex items-center gap-3 rounded-2xl px-3 py-3 text-sm font-medium transition ${
                  isActive
                    ? 'bg-primary-50 text-primary-600 shadow-sm'
                    : 'text-text-secondary hover:bg-background-hover hover:text-text-primary'
                } ${item.disabled ? 'cursor-not-allowed opacity-50' : ''}`
              }
            >
              <item.icon className="h-5 w-5" />
              {!sidebarCollapsed && <span>{item.label}</span>}
            </NavLink>
          );

          if (sidebarCollapsed) {
            return (
              <Tooltip key={item.label} label={item.label}>
                {content}
              </Tooltip>
            );
          }
          return <div key={item.label}>{content}</div>;
        })}
      </nav>
      <div className="border-t border-border-light p-4 text-xs text-text-secondary">
        © {new Date().getFullYear()} CREA CRM
      </div>
    </motion.aside>
  );
};

export default Sidebar;
