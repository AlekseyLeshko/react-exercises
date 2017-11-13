const todos = (state = {}, action) => {
  switch (action.type) {
    case 'UPDATE_ENTITY':
      return {
        ...state,
        ...action.entity,
      };
    default:
      return state
  }
};

export default todos;

