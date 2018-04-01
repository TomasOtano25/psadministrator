import types from "../actions/actionTypes";

const courseReducer = (state = [], action) => {
  switch (action.type) {
    case types.CREATE_COURSE:
      return [...state, Object.assign({}, action.course)];
    /*state.push(action.course);
      return state;*/

    default:
      return state;
  }
};

const loadReducer = (state = [], action) => {
  switch (action.type) {
    case types.LOAD_COURSES_SUCESS:
      return action.courses;
    default:
      return state;
  }
};

export { courseReducer, loadReducer };
