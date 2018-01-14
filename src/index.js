import React from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './App';

import registerServiceWorker from './registerServiceWorker';

/* global document */

/* eslint-disable react/jsx-filename-extension, global-require */

const rootEl = document.getElementById('root');
render(<App />, rootEl);

if (module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default;
    render(<NextApp />, rootEl);
  });
}

registerServiceWorker();
