import types from "./actionTypes";
import Firebase from "../firebase/firebase";

const loadAuthorsSuccess = authors => {
  return { type: types.LOAD_AUTHORS_SUCCESS, authors };
};

export const loadAuthors = () => async dispatch => {
  let response = [];
  new Firebase()
    .getAllOneCollection("authors")
    .then(querySnapshot => {
      querySnapshot.forEach(doc => {
        response.push(Object.assign({}, { id: doc.id }, doc.data()));
      });
      dispatch(loadAuthorsSuccess(response));
    })
    .catch(error => {
      throw error;
    });
};
