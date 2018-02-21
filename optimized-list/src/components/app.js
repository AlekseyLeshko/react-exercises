import React from 'react';
import { Provider } from 'react-redux';
import store from '../store';
import Main from './main';
import Perf from 'react-addons-perf';
window.Perf = Perf;

const {whyDidYouUpdate} = require('why-did-you-update');
whyDidYouUpdate(React);

const app = () => (
  <Provider store={store}>
    <Main />
  </Provider>
);

export default app;
