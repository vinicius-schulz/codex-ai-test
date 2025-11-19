import type { ReactNode } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import { useUIStore } from '../../store/ui';
import { motion } from 'framer-motion';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const { sidebarCollapsed } = useUIStore();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Sidebar />
      <motion.main
        className="pt-[60px]"
        animate={{ marginLeft: sidebarCollapsed ? 80 : 280 }}
      >
        <div className="min-h-[calc(100vh-60px)] bg-background px-6 py-6">
          <div className="mx-auto max-w-[1400px] space-y-6">{children}</div>
        </div>
      </motion.main>
    </div>
  );
};

export default Layout;
