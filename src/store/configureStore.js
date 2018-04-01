import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers";
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";
import thunkMiddleware from "redux-thunk";

const middleware =
  process.env.NODE_ENV !== "production"
    ? [reduxImmutableStateInvariant(), thunkMiddleware]
    : [thunkMiddleware];

const configureStore = initialState => {
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(
      /*...middleware*/ reduxImmutableStateInvariant(),
      thunkMiddleware
    )
  );
};

export default configureStore;
