const todos = (state = {}, action) => {
  switch (action.type) {
    case 'UPDATE_ENTITY':
      console.log('update entity');

      return {
        ...state,
        ...action.entity,
      };
    default:
      return state
  }
};

export default todos;

