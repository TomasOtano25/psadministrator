import React, { Component } from "react";
import { connect } from "react-redux";
import * as courseActions from "../../actions/courseActions";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";
import CoursesList from "./courseList";
import { Link } from "react-router-dom";

class CoursesPage extends Component {
  redirectAddCoursePage() {}

  render() {
    const { courses } = this.props;
    return (
      <div className="container">
        <h1>Courses</h1>
        <Link to="/course" className="btn btn-primary mb-2">
          Add course
        </Link>
        <CoursesList courses={courses} />
      </div>
    );
  }
}

CoursesPage.propTypes = {
  courses: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

const mapStateToProps = (state, ownProps) => {
  return {
    courses: state.courses
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(courseActions, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
