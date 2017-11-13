import React from 'react';
import { Provider } from 'react-redux';
import Item from './components/item-with-model.js';
import store from './store';
import container from './containers/entity-with-model.js';

const ItemWithContainer = container(Item);

const app = () => (
  <Provider store={store}>
    <ItemWithContainer/>
  </Provider>
);

export default app;

