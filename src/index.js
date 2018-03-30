import "babel-polyfill";
import React from "react";
import ReactDOM from "react-dom";
//import "./index.css";
// Store
import configureStore from "./store/configureStore";
import { Provider } from "react-redux";

import "./styles/styles.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
import "popper.js/dist/popper.min.js";
import "bootstrap/dist/js/bootstrap.min.js";

import { Firebase } from "./firebase/firebase";

const store = configureStore();

new Firebase().firebaseInit();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
