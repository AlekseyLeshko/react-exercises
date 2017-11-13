import * as constants from '../constants.js';

export const updateEntity = (entity) => ({
  type: constants.UPDATE_ENTITY,
  entity,
});


