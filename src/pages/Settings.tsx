import { Bell, Moon, Smartphone } from 'lucide-react';
import { motion } from 'framer-motion';

const SettingsPage = () => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
    <div className="grid gap-6 lg:grid-cols-2">
      <div className="rounded-3xl bg-white p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-text-primary">Preferências de Notificação</h3>
        <p className="text-sm text-text-secondary">Configure alertas e lembretes críticos</p>
        <div className="mt-4 space-y-4">
          <label className="flex items-center justify-between rounded-2xl border border-border-light p-4">
            <div className="flex items-center gap-3">
              <div className="rounded-2xl bg-error-100 p-2 text-error-500">
                <Bell size={18} />
              </div>
              <div>
                <p className="text-sm font-semibold text-text-primary">Leads quentes</p>
                <p className="text-xs text-text-secondary">Alertas imediatos em múltiplos canais</p>
              </div>
            </div>
            <input type="checkbox" defaultChecked className="h-5 w-5 rounded border-border-light text-primary-600" />
          </label>
          <label className="flex items-center justify-between rounded-2xl border border-border-light p-4">
            <div className="flex items-center gap-3">
              <div className="rounded-2xl bg-primary-50 p-2 text-primary-600">
                <Smartphone size={18} />
              </div>
              <div>
                <p className="text-sm font-semibold text-text-primary">Resumo diário</p>
                <p className="text-xs text-text-secondary">Whatsapp + e-mail com prioridades</p>
              </div>
            </div>
            <input type="checkbox" defaultChecked className="h-5 w-5 rounded border-border-light text-primary-600" />
          </label>
        </div>
      </div>
      <div className="rounded-3xl bg-white p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-text-primary">Interface & Acessibilidade</h3>
        <p className="text-sm text-text-secondary">Personalize experiência do corretor</p>
        <div className="mt-4 space-y-4">
          <label className="flex items-center justify-between rounded-2xl border border-border-light p-4">
            <div className="flex items-center gap-3">
              <div className="rounded-2xl bg-text-primary p-2 text-white">
                <Moon size={18} />
              </div>
              <div>
                <p className="text-sm font-semibold text-text-primary">Modo escuro</p>
                <p className="text-xs text-text-secondary">Experiência otimizada para plantões</p>
              </div>
            </div>
            <input type="checkbox" className="h-5 w-5 rounded border-border-light text-primary-600" />
          </label>
        </div>
      </div>
    </div>
  </motion.div>
);

export default SettingsPage;
