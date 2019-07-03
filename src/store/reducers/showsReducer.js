const initState = {};

const showsReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_SHOW":
      return state;
    case "CREATE_SHOW_ERROR":
      return state;
    default:
      return state;
  }
};

export default showsReducer;
