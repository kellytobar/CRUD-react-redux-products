import { createStore, applyMiddleware, compose } from "redux";

import thunk from "redux-thunk";

import rootReducer from "./reducers";

const estadoInicial = {};
const middleware = [thunk];

const store = createStore(
  rootReducer,
    estadoInicial,
  //this dev tools are only for Chrome 
   compose(
     applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store; 