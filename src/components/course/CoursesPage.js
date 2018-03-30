import React, { Component } from "react";

export default class CoursesPages extends Component {
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
