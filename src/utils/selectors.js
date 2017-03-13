import { createSelector } from 'reselect';
import fx from 'money';

export function initFX(state) {
  fx.base = state.rates.get('base');
  fx.rates = state.rates.get('rates');
  return state.rates.get('fetch') ? fx : null;
}

export function getExchangeState(state) {
  return state.exchange.toJS();
}

export function getRates(state) {
  const fx = initFX(state);
  const { from, to } = getExchangeState(state);
  return {
    rate: fx ? fx.convert(1, { from, to }).toFixed(2, 10).toString() : '0',
    rateReverse: fx ? fx.convert(1, { from: to, to: from }).toFixed(2, 10).toString() : '0',
  };
}

export const calculateExchange = createSelector(
  initFX,
  getExchangeState,
  (fx, { from, to, value }) => fx ? fx.convert(value, { from, to }).toFixed(2, 10).toString() : '0'
);

export const getCash = state => ({
  cashFrom: state.cash.get(state.exchange.get('from')).toString(),
  cashTo: state.cash.get(state.exchange.get('to')).toString(),
});


export function isNotError(state) {
  const value = parseFloat(state.exchange.get('value')) || 0;
  const { cashFrom } = getCash(state);

  return {
    error: cashFrom < value
  };
}

export const getExchangeParams = createSelector(
  getExchangeState,
  getCash,
  calculateExchange,
  ({ from, to, value }, { cashFrom, cashTo }, exchangeResult) => ({
    exchange: from === to ? {} :
    {
      [from]: (parseFloat(cashFrom)) - (parseFloat(value)),
      [to]: (parseFloat(cashTo)) + (parseFloat(exchangeResult)),
    }
  })
);
