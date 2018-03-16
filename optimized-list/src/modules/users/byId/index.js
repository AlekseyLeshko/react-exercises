import { handleActions } from 'redux-actions';
import {Map} from 'immutable';
import uuid from 'uuid';

import * as constants from '../constants';

const initState = Map({});

export default handleActions({
  [constants.USER_CREATE]: (state, action) => {
    const id = uuid.v4();
    const user = {
      ...action.user,
      id,
    };
    return state.set(id, Map(user));
  },

  [constants.USER_UPDATE]: (state, action) => {
    const user = state.get(action.user.get('id')).merge(action.user);
    return state.set(user.get('id'), user);
  },
  [constants.USER_DELETE]: (state) => {
    // const newState = { ...state };
    // delete newState[action.user.id];
    return state;
  },
}, initState);
