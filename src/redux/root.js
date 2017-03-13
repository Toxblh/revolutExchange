import { combineReducers } from 'redux';
import cash from './cash';
import exchange from './exchange';
import rates from './rates';

export default combineReducers({
  cash,
  exchange,
  rates
});
