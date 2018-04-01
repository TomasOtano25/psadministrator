import React, { Component } from "react";
import { connect } from "react-redux";
//import { createCourse } from "../../actions/courseActions";
import * as courseActions from "../../actions/courseActions";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";
import ManageCoursesPage from "./ManageCoursesPage";

import { Firebase } from "../../firebase/firebase";

class CoursesPage extends Component {
  courseRow(course, index) {
    return <div key={index}>{course.title}</div>;
  }

  render() {
    return (
      <div className="container">
        <h1>Courses</h1>
        {this.props.courses.map(this.courseRow)}

        <ManageCoursesPage createCourse={this.props.actions.createCourse} />
      </div>
    );
  }
}

CoursesPage.propTypes = {
  //dispatch: PropTypes.func.isRequired,
  courses: PropTypes.array.isRequired,
  //createCourse: PropTypes.func.isRequired,
  actions: PropTypes.object.isRequired
};

//state: es el estado de la tienda de redux
const mapStateToProps = (state, ownProps) => {
  return {
    courses: state.courses
  };
};

/*const mapDispatchToProps = dispatch => {
  return {
    createCourse: course => dispatch(createCourse(course))
  };
};*/
const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(courseActions, dispatch)
    //createCourse: bindActionCreators(courseActions.createCourse, dispatch)
  };
};

/*const connectedStateAndProps = connect(mapStateToProps, mapDispatchToProps);
export default connectedStateAndProps(CoursesPages);*/

// mapDispatchToProps: es opcional
//export default connect(mapStateToProps)(CoursesPage);
export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
