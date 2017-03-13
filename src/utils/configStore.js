import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootRedux from '../redux/root';
import rootSagas from '../sagas/root';

const sagaMiddleware = createSagaMiddleware();

const reducers = [];

if (process.env.NODE_ENV !== 'production') {
  reducers.push(
    window.devToolsExtension ? window.devToolsExtension() : f => f
  );
}

const store = createStore(
  rootRedux,
  compose(
    applyMiddleware(sagaMiddleware),
    ...reducers
  )
);

sagaMiddleware.run(rootSagas, store);

export default store;
