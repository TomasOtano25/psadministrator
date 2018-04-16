import Firebase from "../firebase/firebase";
import types from "./actionTypes";
import { beginAjaxCall, ajaxCallError } from "./ajaxStatusAction";

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
  dispatch(beginAjaxCall());
  if (course.id) {
    new Firebase()
      .updateDocument("courses", course)
      .then(dispatch(updateCourseSuccess(course)));
  } else {
    delete course.id;
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
        dispatch(ajaxCallError(error));
        throw error;
      });
  }
};

export const loadCourses = () => async dispatch => {
  dispatch(beginAjaxCall());
  let response = [];
  new Firebase()
    .getAllOneCollection("courses")
    .then(querySnapshot => {
      querySnapshot.forEach(doc => {
        response.push(Object.assign({}, { id: doc.id }, doc.data()));
      });
      dispatch(loadCoursesSuccess(response));
    })
    .catch(error => {
      throw error;
    });
};
