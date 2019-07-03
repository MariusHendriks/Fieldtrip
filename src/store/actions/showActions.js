export const createShow = show => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection("shows")
      .add({
        ...show,
        createdAt: new Date()
      })
      .then(() => {
        dispatch({ type: "CREATE_SHOW", show: show });
      })
      .catch(err => {
        dispatch({ type: "CREATE_SHOW_ERROR", err });
      });
  };
};
export const editShow = show => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection("shows")
      .doc(show.id)
      .update({ ...show })
      .then(() => {
        dispatch({ type: "UPDATE_SHOW", show: show });
      })
      .catch(err => {
        dispatch({ type: "UPDATE_SHOW_ERROR", err });
      });
  };
};
export const deleteShow = show => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection("shows")
      .doc(show.id)
      .delete()
      .then(() => {
        dispatch({ type: "DELETE_SHOW", show: show });
      })
      .catch(err => {
        dispatch({ type: "DELETE_SHOW_ERROR", err });
      });
  };
};
