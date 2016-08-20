import { createStore, applyMiddleware } from "redux";
// import autocompleteMiddleware from "./sources/loc-autocomplete";
import reducer from "./reducers";
import * as reduxLogger from "redux-logger";
// import { middleware as DOMMiddleware } from "./dom";
import playerMiddleware from "./middleware/player";

export default createStore(reducer, applyMiddleware(reduxLogger(), playerMiddleware));
