import * as constants from '../constants.js';

export const updateEntity = (model) => ({
  type: constants.UPDATE_ENTITY,
  entity: model.convertToStore,
});

