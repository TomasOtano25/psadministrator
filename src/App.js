import React, { Component } from "react";
import PropTypes from "proptypes";
import "./App.css";

import Header from "./components/common/Header";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";

class App extends Component {
  /*static propTypes = {
    children: PropTypes.object.isRequired
  };*/

  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Routes />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
