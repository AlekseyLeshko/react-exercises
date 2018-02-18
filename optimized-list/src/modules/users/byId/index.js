import { handleActions } from 'redux-actions';

import * as constants from '../constants';

const initState = {};

export default handleActions({
  [constants.USERS_CREATE]: (state, action) => ({
    ...state,
    [action.users.id]: {
      ...action.users,
    },
  }),
  [constants.USERS_UPDATE]: (state, action) => ({
    ...state,
    [action.users.id]: {
      ...action.users,
    },
  }),
  [constants.USERS_DELETE]: (state, action) => {
    const newState = { ...state };
    delete newState[action.users.id];
    return newState;
  },
}, initState);
