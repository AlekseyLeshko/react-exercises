import * as constants from './constants';

export const createUsers = (users) => ({
  type: constants.USERS_CREATE,
  users,
});

export const updateUsers = (users) => ({
  type: constants.USERS_UPDATE,
  users,
});

export const deleteUsers = (users) => ({
  type: constants.USERS_DELETE,
  users,
});
