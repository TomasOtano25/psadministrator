import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers";
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";

const middleware =
  process.env.NODE_ENV !== "production"
    ? [reduxImmutableStateInvariant()]
    : [null];

const configureStore = initialState => {
  return createStore(
    rootReducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(/*...middleware*/ reduxImmutableStateInvariant())
  );
};

export default configureStore;
