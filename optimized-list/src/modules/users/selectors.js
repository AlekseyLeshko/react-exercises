import * as fromById from './byId/selectors';

export const getAllUsers = (state) =>
  fromById.getAllUsers(state.get('users'));

export const getUsersById = (state, usersId) =>
  fromById.getUsersById(state.get('users'), usersId);
