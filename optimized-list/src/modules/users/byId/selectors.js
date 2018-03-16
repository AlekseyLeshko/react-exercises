export const getAllUsers = (state) => state.get('byId');

export const getUsersById = (state, id) => state.get('byId').get(id);
