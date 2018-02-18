import * as fromById from './byId/selectors';

export const getAllUsers = (state) =>
  fromById.getAllUsers(state.users.byId);

export const getUsersById = (state, usersId) =>
  fromById.getUsersById(state.users.byId, usersId);
