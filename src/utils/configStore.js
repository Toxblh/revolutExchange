import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootRedux from '../redux/root';
import rootSagas from '../sagas/root';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  rootRedux,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSagas, store);

export default store;
