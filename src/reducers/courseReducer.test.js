import { courseReducer } from "./courseReducer";
import {
  saveCourseSuccess,
  updateCourseSuccess
} from "../actions/courseActions";

describe("Course Reducer", () => {
  it("should add course when passed CREATE_COURSE_SUCCES", () => {
    //arrange
    const initialState = [{ title: "A" }, { title: "B" }];

    const newCourse = { title: "C" };

    const action = saveCourseSuccess(newCourse);

    //act
    const newState = courseReducer(initialState, action);

    expect(newState.length).toEqual(3);
    expect(newState[0].title).toEqual("A");
    expect(newState[1].title).toEqual("B");
    expect(newState[2].title).toEqual("C");
  });

  it("should update course when passed UPDATE_COURSE_SUCCES", () => {
    //arrange
    const initialState = [
      { id: "A", title: "A" },
      { id: "B", title: "B" },
      { id: "C", title: "C" }
    ];

    const course = { id: "B", title: "New Title" };

    const action = updateCourseSuccess(course);

    //act
    const newState = courseReducer(initialState, action);
    const updateCourse = newState.find(a => a.id === course.id);
    const untouchCourse = newState.find(a => a.id === "A");

    expect(updateCourse.title).toEqual("New Title");
    expect(untouchCourse.title).toEqual("A");
    expect(newState.length).toEqual(3);
  });
});
