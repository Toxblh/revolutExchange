import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from 'components/App';
import { Provider } from 'react-redux';
import store from 'utils/configStore';

ReactDOM.render(
  <AppContainer>
    <Provider store={store}>
      <App />
    </Provider>
  </AppContainer>,
  document.getElementById('app')
);

if (module.hot) {
  module.hot.accept('components/App', () => {
    const NextApp = require('components/App').default;
    ReactDOM.render(
      <AppContainer>
        <Provider store={store}>
          <NextApp />
        </Provider>
      </AppContainer>,
      document.getElementById('app')
    );
  });
}
