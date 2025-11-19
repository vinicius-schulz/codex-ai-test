import { Route, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout';
import DashboardPage from './pages/Dashboard';
import ClientsPage from './pages/Clients';
import PropertiesPage from './pages/Properties';
import ReportsPage from './pages/Reports';
import SettingsPage from './pages/Settings';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/clientes" element={<ClientsPage />} />
        <Route path="/imoveis" element={<PropertiesPage />} />
        <Route path="/relatorios" element={<ReportsPage />} />
        <Route path="/configuracoes" element={<SettingsPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
