import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as coursesActions from "../../actions/courseActions";
import CourseForm from "./CourseForm";
import { toast } from "react-toastify";
import { css } from "glamor";

class ManageCoursePage extends Component {
  constructor(props) {
    super(props);

    this.updateCourseState = this.updateCourseState.bind(this);
    this.saveCourse = this.saveCourse.bind(this);
  }

  state = {
    course: Object.assign({}, this.props.course),
    errors: {},
    saving: false
  };

  componentWillReceiveProps(nextProps) {
    if (this.props.course.id !== nextProps.course.id) {
      this.setState({
        course: Object.assign({}, nextProps.course)
      });
    }
  }

  updateCourseState(event) {
    const field = event.target.name;
    let course = this.state.course;
    course[field] = event.target.value;
    this.setState({
      course: course
    });
  }

  saveCourse(event) {
    event.preventDefault();
    this.setState({ saving: true });
    this.props.actions
      .saveCourse(this.state.course)
      .then(() => this.redirect())
      .catch(error => {
        toast.error(error, {
          position: toast.POSITION.BOTTOM_RIGHT
        });
        this.setState({ saving: false });
      });
  }

  redirect() {
    this.setState({ saving: false });
    toast.success("Course saved", {
      position: toast.POSITION.BOTTOM_RIGHT
    });
    this.props.history.push("/courses");
  }

  render() {
    const { course, errors, saving } = this.state;
    const { authors } = this.props;
    return (
      <CourseForm
        course={course}
        onChange={this.updateCourseState}
        onSave={this.saveCourse}
        errors={errors}
        allAuthor={authors}
        saving={saving}
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

const getCourseById = (courses, id) => {
  const course = courses.filter(course => course.id === id);
  if (course) return course[0];
  return null;
};

// own props internos
const mapStateToProps = (state, ownState) => {
  const courseId = ownState.match.params.id;

  let course = {
    id: "",
    watchHref: "",
    title: "",
    authorId: "",
    category: "",
    length: ""
  };

  if (courseId && state.courses.length > 0) {
    course = getCourseById(state.courses, courseId);
  }

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
