import { handleActions } from 'redux-actions';
import uuid from 'uuid';

import * as constants from '../constants';

const initState = {};

export default handleActions({
  [constants.USER_CREATE]: (state, action) => {
    const id = uuid.v4();

    return {
      ...state,
      [id]: {
        ...action.user,
        id,
      },
    };
  },

  [constants.USER_UPDATE]: (state, action) => ({
    ...state,
    [action.user.id]: {
      ...action.user,
    },
  }),
  [constants.USER_DELETE]: (state, action) => {
    const newState = { ...state };
    delete newState[action.user.id];
    return newState;
  },
}, initState);
