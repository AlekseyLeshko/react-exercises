import * as constants  from './constants.js';

const initState = {
  time: Date.now(),
};

const entity = (state = initState, action) => {
  switch (action.type) {
    case constants.UPDATE_ENTITY:
      return {
        ...state,
        ...action.entity,
      };
    default:
      return state
  }
};

export default entity;

