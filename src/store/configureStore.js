import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../reducers";
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";
import thunkMiddleware from "redux-thunk";
import { routerMiddleware } from "react-router-redux";
import createHistory from "history/createBrowserHistory";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const history = createHistory();

const middleware =
  process.env.NODE_ENV !== "production"
    ? [
        reduxImmutableStateInvariant(),
        thunkMiddleware,
        routerMiddleware(history)
      ]
    : [thunkMiddleware, routerMiddleware(history)];

const configureStore = initialState => {
  return createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(...middleware))
  );
};

export { configureStore, history };
