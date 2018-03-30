import React, { Component } from "react";
import { connect } from "react-redux";

import { Firebase } from "../../firebase/firebase";
import { createCourse } from "../../actions/courseActions";

class CoursesPages extends Component {
  /*constructor(props) {
    super(props);

    this.onTitleChange = this.onTitleChange.bind(this);
    this.onClickSave = this.onClickSave.bind(this);

  }*/
  state = {
    course: { title: "" }
  };

  onTitleChange(event) {
    /*const course = Object.assign({}, this.state, {
      course: {
        title: event.target.value
      }
    });*/
    const course = this.state.course;
    course.title = event.target.value;
    this.setState({ course: course });
  }

  onClickSave(event) {
    event.preventDefault();
    //const fb = new Firebase();
    //fb.addDocument("courses", this.state.course);
    //fb.getAllOneCollection("courses");
    this.props.dispatch(createCourse(this.state.course));
    alert(`Saving ${this.state.course.title}`);
  }

  render() {
    const { course } = this.state;
    return (
      <div className="container">
        <h1>Courses</h1>
        <h2>Add Courses</h2>
        <form>
          <input
            type="text"
            placeholder="Title"
            onChange={event => this.onTitleChange(event)}
            value={course.title}
          />
          <input
            type="submit"
            value="Save"
            onClick={event => this.onClickSave(event)}
          />
        </form>
      </div>
    );
  }
}

//state: es el estado de la tienda de redux
const mapStateToProps = (state, ownProps) => {
  return {
    courses: state.courses
  };
};

/*const connectedStateAndProps = connect(mapStateToProps, mapDispatchToProps);
export default connectedStateAndProps(CoursesPages);*/

// mapDispatchToProps: es opcional
export default connect(mapStateToProps)(CoursesPages);
