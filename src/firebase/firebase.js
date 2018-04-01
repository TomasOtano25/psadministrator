import * as firebase from "firebase";
import "firebase/firestore";

class Firebase {
  static fs;
  firebaseInit() {
    const config = {
      apiKey: "AIzaSyBYWLQ4mK6pTn5Vm9DcOKGB57tGAn7y0t4",
      authDomain: "psadministrator.firebaseapp.com",
      databaseURL: "https://psadministrator.firebaseio.com",
      projectId: "psadministrator",
      storageBucket: "",
      messagingSenderId: "145482860619"
    };

    firebase.initializeApp(config);

    Firebase.fs = this.fireStore();
  }

  fireStore() {
    return firebase.firestore();
  }

  addDocument(collection, data) {
    return Firebase.fs.collection(collection).add(data);
  }

  getAllOneCollection(collection) {
    return Firebase.fs.collection(collection).get();
  }
}

export { Firebase };
