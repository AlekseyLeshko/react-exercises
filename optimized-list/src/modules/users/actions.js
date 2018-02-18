import * as constants from './constants';

export const createUser = (user) => ({
  type: constants.USER_CREATE,
  user,
});

export const updateUser = (user) => ({
  type: constants.USER_UPDATE,
  user,
});

export const deleteUser = (user) => ({
  type: constants.USER_DELETE,
  user,
});
