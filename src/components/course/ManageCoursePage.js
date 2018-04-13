import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as coursesActions from "../../actions/courseActions";
import CourseForm from "./CourseForm";
import { Redirect } from "react-router-dom";

class ManageCoursePage extends Component {
  constructor(props) {
    super(props);

    this.updateCourseState = this.updateCourseState.bind(this);
    this.saveCourse = this.saveCourse.bind(this);
  }

  state = {
    course: Object.assign({}, this.props.course),
    errors: {},
    toCourses: false
  };

  updateCourseState(event) {
    const field = event.target.name;
    let course = this.state.course;
    course[field] = event.target.value;
    this.setState({
      course: course
    });
  }

  saveCourse() {
    this.props.actions.saveCourse(this.state.course);
    this.setState({
      toCourses: true
    });
  }

  render() {
    const { course, errors, toCourses } = this.state;
    const { authors } = this.props;

    if (toCourses === true) {
      return <Redirect to="/courses" />;
    }

    return (
      <CourseForm
        course={course}
        onChange={this.updateCourseState}
        onSave={this.saveCourse}
        errors={errors}
        allAuthor={authors}
      />
    );
  }
}

ManageCoursePage.propTypes = {
  course: PropTypes.object.isRequired,
  authors: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

ManageCoursePage.contextType = { router: PropTypes.object };

const mapStateToProps = (state, ownState) => {
  let course = {
    id: "",
    watchHref: "",
    title: "",
    authorId: "",
    category: "",
    length: ""
  };

  const authorsFormattedForDropdown = state.authors.map(author => {
    return {
      value: author.id,
      text: author.firstname + " " + author.lastname
    };
  });

  return {
    course: course,
    authors: authorsFormattedForDropdown
  };
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(coursesActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);
