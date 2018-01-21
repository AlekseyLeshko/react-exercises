import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from '../modules/rootReducer.js';

// const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
const store = createStore(reducer);

export default store;

