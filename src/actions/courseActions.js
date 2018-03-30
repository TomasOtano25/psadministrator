import { Firebase } from "../firebase/firebase";

// creador de accion
export const createCourse = course => {
  /*new Firebase()
    .addDocument("courses", course)
    .then(docRef => {
      console.log(`Document written with ID: ${docRef.id}`);
    })
    .catch(error => {
      console.log(`Error adding document: ${error}`);
    });*/
  return { type: "CREATE_COURSE", course };

  //return { type: "CREATE_COURSE", course: course };
};
