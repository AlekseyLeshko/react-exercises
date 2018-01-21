import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from '../modules/rootReducer.js';

const store = process.env.NODE_ENV === 'test' ? createStore(reducer) : createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;

