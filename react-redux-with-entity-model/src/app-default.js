import React from 'react';
import { Provider } from 'react-redux';
import Item from './components/item.js';
import store from './store';
import container from './containers/entity.js';

const ItemWithContainer = container(Item);

const app = () => (
  <Provider store={store}>
    <ItemWithContainer/>
  </Provider>
);

export default app;

