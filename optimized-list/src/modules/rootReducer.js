import {
  combineReducers,
} from 'redux-immutable';
import users from './users';

const appReducer = combineReducers({
  users,
});

export default appReducer;
