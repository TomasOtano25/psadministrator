import Firebase from "../firebase/firebase";
import types from "./actionTypes";

const loadCoursesSuccess = courses => {
  return { type: types.LOAD_COURSES_SUCCESS, courses };
};

const saveCourseSuccess = course => {
  return { type: types.SAVE_COURSE_SUCCESS, course };
};

const updateCourseSuccess = course => {
  return { type: types.UPDATE_COURSE_SUCCESS, course };
};

export const saveCourse = course => async (dispatch, getState) => {
  if (course.id) {
    new Firebase()
      .updateDocument("courses", course)
      .then(dispatch(updateCourseSuccess(course)));
  } else {
    new Firebase()
      .addDocument("courses", course)
      .then(docRef => {
        docRef
          .get()
          .then(resp =>
            dispatch(
              saveCourseSuccess(Object.assign({}, { id: resp.id }, resp.data()))
            )
          );
      })
      .catch(error => {
        throw error;
      });
  }
};

export const loadCourses = () => async dispatch => {
  let respuestas = [];
  new Firebase()
    .getAllOneCollection("courses")
    .then(querySnapshot => {
      querySnapshot.forEach(doc => {
        respuestas.push(Object.assign({}, { id: doc.id }, doc.data()));
      });
      dispatch(loadCoursesSuccess(respuestas));
    })
    .catch(error => {
      throw error;
    });
};
