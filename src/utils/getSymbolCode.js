const symbols = {
  EUR: '€',
  GBP: '£',
  USD: '$'
};

export const getSymbolCode = code => symbols[code] || '';
