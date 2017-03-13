import { createAction, handleActions } from 'redux-actions';
import { Map, fromJS } from 'immutable';
import { add } from 'lodash';
import { exchange } from './exchange';


const initialState = Map({
  EUR: '0',
  GBP: '0',
  USD: '0'
});

export const setCash = createAction('SET_CASH');

export default handleActions({
  [exchange]: (state, { payload }) => {
    if (!payload.valid) {
      return state;
    }

    return state.mergeWith(add, payload.cash);
  },

  [setCash]: (state, { payload }) => state.merge(fromJS(payload))
  
}, initialState);
