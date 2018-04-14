import { combineReducers } from "redux";
import { courseReducer as courses } from "./courseReducer";
import { authorReducer as authors } from "./authorReducer";
import { routerReducer } from "react-router-redux";

const rootReducer = combineReducers({
  courses,
  authors,
  router: routerReducer
});

export default rootReducer;
