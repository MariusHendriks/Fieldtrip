export const createShow = show => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // make async call
    const firestore = getFirestore();
    firestore
      .collection("shows")
      .add({
        ...show,
        name: "Mark",
        createdAt: new Date()
      })
      .then(() => {
        dispatch({ type: "CREATE_SHOW", show: show });
      })
      .catch(err => {
        dispatch({ type: "CREATE_PROJECT_ERROR", err });
      });
  };
};
