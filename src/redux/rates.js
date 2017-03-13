import { createAction, handleActions } from 'redux-actions';
import { Map } from 'immutable';

const initialState = Map({
  base: 'EUR',
  rates: {},
  fetch: false
});

export const updateRates = createAction('UPDATE_RATES');

export default handleActions({
  [updateRates]: (state, { payload }) => (
    Map({
      base: payload.base,
      rates: payload.rates,
      fetch: true
    })
  )
}, initialState);
