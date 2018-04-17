import types from "./actionTypes";
import { saveCourseSuccess, loadCourses } from "./courseActions";

import thunk from "redux-thunk";
import configureStore from "redux-mock-store";
import Firebase from "../firebase/firebase";
//import nock from "nock";

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

const middleware = [thunk];
const mockStore = configureStore(middleware);

describe("Async Action", () => {
  /*afterEach(() => {
    nock.cleanAll();
  });*/
  // it("should create BEGIN_AJAX_CALL and LOAD_COURSES_SUCCESS when loading courses", done => {
  /*nock("http://example.com")
      .get("/courses")
      .reply(200, {
        body: { courses: [{ id: 1, firstname: "Cory", lastname: "House" }] }
      });*/
  /*const expectedAction = [
      { type: types.BEGIN_AJAX_CALL },
      {
        type: types.LOAD_COURSES_SUCCESS,
        body: { courses: [{ id: 1, firstname: "Cory", lastname: "House" }] }
      }
    ];

    const store = mockStore({ course: [] }, expectedAction);

    store.dispatch(loadCourses()).then(() => {
      const actions = store.getActions();
      expect(actions[0].type).toEqual(types.BEGIN_AJAX_CALL);
      expect(actions[1].type).toEqual(types.LOAD_COURSES_SUCCESS);
      done();
    });
  });*/
});
