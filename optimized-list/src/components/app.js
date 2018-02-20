import React from 'react';
import { Provider } from 'react-redux';
import store from '../store';
import Main from './main';

const {whyDidYouUpdate} = require('why-did-you-update');
whyDidYouUpdate(React);

const app = () => (
  <Provider store={store}>
    <Main />
  </Provider>
);

export default app;

