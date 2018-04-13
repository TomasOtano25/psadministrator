import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import HomePage from "./components/home/HomePage";
import CoursesPage from "./components/course/CoursesPage";
import AboutPage from "./components/about/AboutPage";
import ManageCoursePage from "./components/course/ManageCoursePage";

const Routes = () => (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route path="/courses" component={CoursesPage} />
    <Route path="/course" component={ManageCoursePage} />
    <Route path="/course/:id" component={ManageCoursePage} />
    <Route path="/about" component={AboutPage} />
    <Route component={HomePage} />
  </Switch>
);

export default Routes;
