import types from "./actionTypes";
import { saveCourseSuccess } from "./courseActions";

describe("Course Actions", () => {
  describe("createCourseSuccess", () => {
    it("should create a CREATE_COURSE_SUCCESS action", () => {
      const course = { id: "clean-code", title: "Clean Code" };
      const expectedAction = {
        type: types.SAVE_COURSE_SUCCESS,
        course: course
      };

      expect(saveCourseSuccess(course)).toEqual(expectedAction);
    });
  });
});
