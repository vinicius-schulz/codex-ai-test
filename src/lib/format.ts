export const currencyFormatter = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
  maximumFractionDigits: 0,
});

export const percentageFormatter = (value: number) => `${value.toFixed(1)}%`;
