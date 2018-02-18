import values from 'lodash/values';

export const getAllUsers = (state) => values(state);

export const getUsersById = (state, id) => state[id];

