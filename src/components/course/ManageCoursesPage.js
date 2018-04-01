import React, { Component } from "react";

export default class ManageCoursesPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      course: {
        title: "",
        watchHref: "",
        authorId: "",
        length: "",
        category: ""
      }
    };

    this.onTitleChange = this.onTitleChange.bind(this);
    this.onClickSave = this.onClickSave.bind(this);
  }

  onTitleChange(e) {
    const course = Object.assign({}, this.state, { title: e.target.value });
    /*const course = this.state.course;
    course.title = e.target.value;*/
    this.setState({ course: course });
  }

  onClickSave(e) {
    e.preventDefault();
    //const fb = new Firebase();
    //fb.addDocument("courses", this.state.course);
    //fb.getAllOneCollection("courses");
    //this.props.dispatch(createCourse(this.state.course));
    //this.props.createCourse(this.state.course);
    this.props.createCourse(this.state.course);
    alert(`Saving ${this.state.course.title}`);
  }

  render() {
    const { course } = this.state;
    return (
      <div>
        <h2>Add Courses</h2>
        <form>
          <input
            type="text"
            placeholder="Title"
            onChange={this.onTitleChange}
            value={course.title}
          />
          <input type="submit" value="Save" onClick={this.onClickSave} />
        </form>
      </div>
    );
  }
}
