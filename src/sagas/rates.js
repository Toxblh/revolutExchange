import { delay } from 'redux-saga';
import { put, call } from 'redux-saga/effects';
import * as api from '../api/api';
import { updateRates } from '../redux/rates';

export function* fetchRates() {
  while (true) {
    try {
      const { data } = yield call(api.getRates);
      yield put(updateRates(data));
    } catch (e) {
      console.error(e);
    }

    yield delay(30 * 1000);
  }
}
