import { createAction, handleActions } from 'redux-actions';
import { fromJS } from 'immutable';

const initialState = fromJS({
  from: 'EUR',
  to: 'GBP',
  value: '0',
  currencies: ['EUR', 'USD', 'GBP']
});

export const changeValue = createAction('CHANGE_VALUE');
export const exchange = createAction('EXCHANGE');
export const switchCurrency = createAction('SWITCH_CURRENCY');

export default handleActions({
  [changeValue]: (state, { payload }) => (
    state.set('value', payload)
  ),

  [exchange]: (state, { payload }) => (
    !payload.error ? state.set('value', '0') : state
  ),

  [switchCurrency]: (state, { payload }) => (
    state.set(payload.direction, payload.currency)
  )

}, initialState);
