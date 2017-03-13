import { takeEvery } from 'redux-saga';
import { put, call } from 'redux-saga/effects';
import * as api from '../api/api';
import { setCash } from '../redux/cash';
import { exchange } from '../redux/exchange';

export function* initCash() {
  try {
    const { data } = yield call(api.fetchCash);
    yield put(setCash(data));
  } catch (e) {
    console.error(e);
  }
}

export function* updateCash(action) {
  try {
    const data = yield call(api.updateCash, action.payload.exchange);
    yield put(setCash(data));
  } catch (e) {
    console.error(e);
  }
}

export function* updateCashWatcher() {
  yield* takeEvery(
    exchange,
    updateCash
  );
}
