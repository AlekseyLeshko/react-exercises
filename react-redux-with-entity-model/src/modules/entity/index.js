import * as constants  from './constants.js';

const entity = (state = {}, action) => {
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

