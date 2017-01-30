import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import Root from './components/Root';
import configureStore from './configureStore';

const store = configureStore();
const rootElement = document.getElementById('app');

render(
  <AppContainer>
    <Root store={store} />
  </AppContainer>,
  rootElement
);

if (module.hot) {
  module.hot.accept('./components/Root', () => {
    const NextRoot = require('./components/Root').default;
    render(
      <AppContainer>
        <NextRoot store={store} />
      </AppContainer>,
      rootElement
    );
  });
}
