import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import HomePage from "./components/home/HomePage";
import CoursesPage from "./components/course/CoursesPage";
import AboutPage from "./components/about/AboutPage";

const Routes = () => (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route path="/courses" component={CoursesPage} />
    <Route path="/about" component={AboutPage} />
    <Route component={HomePage} />
  </Switch>
);

export default Routes;
