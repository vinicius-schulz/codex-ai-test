export const kpiData = [
  {
    title: 'Total de Leads',
    value: '1.274',
    change: 12,
    icon: 'UsersRound',
    color: 'primary',
  },
  {
    title: 'Imóveis Ativos',
    value: '326',
    change: 5,
    icon: 'Home',
    color: 'secondary',
  },
  {
    title: 'Vendas Realizadas',
    value: '82',
    change: 9,
    icon: 'LineChart',
    color: 'success',
  },
  {
    title: 'Receita do Mês',
    value: 'R$ 12,4M',
    change: 7,
    icon: 'CircleDollarSign',
    color: 'primary',
  },
] as const;

export const salesTrend = [
  { name: 'Jan', value: 32 },
  { name: 'Fev', value: 48 },
  { name: 'Mar', value: 55 },
  { name: 'Abr', value: 62 },
  { name: 'Mai', value: 58 },
  { name: 'Jun', value: 74 },
  { name: 'Jul', value: 80 },
  { name: 'Ago', value: 76 },
  { name: 'Set', value: 82 },
  { name: 'Out', value: 90 },
  { name: 'Nov', value: 95 },
  { name: 'Dez', value: 104 },
];

export const pipelineData = [
  { stage: 'Novos Leads', amount: 320, conversion: 100 },
  { stage: 'Qualificação', amount: 180, conversion: 56 },
  { stage: 'Visitas', amount: 90, conversion: 28 },
  { stage: 'Propostas', amount: 54, conversion: 17 },
  { stage: 'Fechamentos', amount: 28, conversion: 9 },
];

export const propertyMix = [
  { name: 'Residenciais', value: 45 },
  { name: 'Comerciais', value: 25 },
  { name: 'Alto Padrão', value: 15 },
  { name: 'Lançamentos', value: 10 },
  { name: 'Temporada', value: 5 },
];

export const activities = [
  {
    title: 'Lead quente - Família Souza',
    description: 'Solicitar visita ao apartamento Garden - Vila Madalena',
    time: '10min',
    type: 'lead' as const,
  },
  {
    title: 'Follow-up com João Mendes',
    description: 'Retornar ligação sobre proposta enviada',
    time: '1h',
    type: 'followup' as const,
  },
  {
    title: 'Vistoria programada',
    description: 'Coberturas Alto de Pinheiros - 15h',
    time: 'Hoje',
    type: 'task' as const,
  },
];
