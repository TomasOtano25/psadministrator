import { Firebase } from "../firebase/firebase";
// import courseApi from "../api/mockCourseApi";
import types from "./actionTypes";
// creador de accion
export const createCourse = course => {
  new Firebase()
    .addDocument("courses", course)
    .then(docRef => {
      console.log(`Document written with ID: ${docRef.id}`);
    })
    .catch(error => {
      console.log(`Error adding document: ${error}`);
      return alert("Connection error");
    });
  return { type: types.CREATE_COURSE, course };
  //return { type: "CREATE_COURSE", course: course };
};

// loadCoursesFailure o Error
const loadCoursesSucces = courses => {
  return { type: types.LOAD_COURSES_SUCESS, courses };
};

export const loadCourses = () => {
  let respuestas = [];
  return function(dispatch) {
    /*return courseApi.getAllCourses().then(courses => {
      dispatch(loadCoursesSucces(courses))
    })*/
    return new Firebase()
      .getAllOneCollection("courses")
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          respuestas.push(
            Object.assign({}, { id: doc.id, title: doc.data().title })
          );
        });
        dispatch(loadCoursesSucces(respuestas));
        // console.log(respuestas);
      })
      .catch(error => {
        throw error;
      });
  };
};
