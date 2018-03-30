import "babel-polyfill";
import React from "react";
import ReactDOM from "react-dom";
//import "./index.css";
import "./styles/styles.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
import "popper.js/dist/popper.min.js";
import "bootstrap/dist/js/bootstrap.min.js";

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
