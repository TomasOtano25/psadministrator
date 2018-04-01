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
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(...middleware /*reduxImmutableStateInvariant()*/)
  );
};

export default configureStore;
