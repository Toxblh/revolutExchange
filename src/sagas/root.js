import { fetchRates } from './rates';
import { initCash, updateCashWatcher } from './cash';

export default function* rootSaga() {
  yield [
    initCash(),
    fetchRates(),
    updateCashWatcher()
  ];
}
