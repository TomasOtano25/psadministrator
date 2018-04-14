import React, { Component } from "react";
import PropTypes from "proptypes";
import "./App.css";

import Header from "./components/common/Header";
import { BrowserRouter } from "react-router-dom";
import { ConnectedRouter } from "react-router-redux";
import { history } from "./store/configureStore";
import Routes from "./routes";

class App extends Component {
  /*static propTypes = {
    children: PropTypes.object.isRequired
  };*/

  render() {
    return (
      <ConnectedRouter history={history}>
        <div>
          <Header />
          <Routes />
        </div>
      </ConnectedRouter>
    );
  }
}

export default App;
