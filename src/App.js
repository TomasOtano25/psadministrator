import React, { Component } from "react";
import PropTypes from "prop-types";
import "./App.css";
import Header from "./components/common/Header";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";
import { connect } from "react-redux";
import { ToastContainer } from "react-toastify";

class App extends Component {
  render() {
    const { loading } = this.props;
    return (
      <BrowserRouter>
        <div>
          <Header loading={loading} />
          <Routes />
          <ToastContainer autoClose={3000} />
        </div>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  loading: PropTypes.bool.isRequired
};

const mapStateToProps = (state, ownState) => {
  return {
    loading: state.ajaxCallsInProgress > 0
  };
};

export default connect(mapStateToProps)(App);
