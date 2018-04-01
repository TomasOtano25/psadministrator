import "babel-polyfill";
import React from "react";
import ReactDOM from "react-dom";
//import "./index.css";
// Store
import configureStore from "./store/configureStore";
import { Provider } from "react-redux";
import { loadCourses } from "./actions/courseActions";

import "./styles/styles.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
import "popper.js/dist/popper.min.js";
import "bootstrap/dist/js/bootstrap.min.js";

import { Firebase } from "./firebase/firebase";

new Firebase().firebaseInit();

const store = configureStore();
store.dispatch(loadCourses());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
