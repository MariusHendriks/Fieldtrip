export const createShow = show => {
  return (dispatch, getState) => {
    // make async call
    dispatch({ type: "CREATE_SHOW", show: show });
  };
};
