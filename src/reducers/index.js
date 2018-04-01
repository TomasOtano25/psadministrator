import { combineReducers } from "redux";

import {
  loadReducer as courses,
  courseReducer as create
} from "./courseReducer";

const rootReducer = combineReducers({
  courses,
  create
});

export default rootReducer;
