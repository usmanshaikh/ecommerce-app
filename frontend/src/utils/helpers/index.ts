export const formatCurrency = (amount: string | number): string => {
  return `₹${Number(amount).toLocaleString('en-IN')}`;
};
