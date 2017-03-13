import Decimal from 'decimal.js';
import { getSymbolCode } from './getSymbolCode';

export const formatMoney = (code, value) =>  {
  const valueDecimal = new Decimal(value).toFixed(2);
  return `${getSymbolCode(code)} ${valueDecimal}`;
};
