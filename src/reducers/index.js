import { combineReducers } from "redux";
import { courseReducer as courses } from "./courseReducer";
import { authorReducer as authors } from "./authorReducer";
import { ajaxStatusReducer as ajaxCallsInProgress } from "./ajaxStatusReducer";

const rootReducer = combineReducers({
  courses,
  authors,
  ajaxCallsInProgress
});

export default rootReducer;
