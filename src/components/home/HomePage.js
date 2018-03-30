import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class HomePage extends Component {
  render() {
    return (
      <div className="jumbotron">
        <div className="container">
          <h1>Pluralsight Administrator</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel dolores
            porro atque quia officia esse quod qui quo et excepturi, molestias
            enim suscipit, quos accusamus, distinctio alias neque voluptatum
            itaque!
          </p>
          <Link to="/about" className="btn btn-lg btn-primary">
            Learn more
          </Link>
        </div>
      </div>
    );
  }
}
