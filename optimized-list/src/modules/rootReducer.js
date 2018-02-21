import {
  combineReducers
} from 'redux-immutable';
import users from './users';

console.log(users);
const appReducer = combineReducers({
  users,
});

export default appReducer;
