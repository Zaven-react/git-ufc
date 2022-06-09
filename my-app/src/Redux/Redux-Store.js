import { combineReducers, createStore } from "redux";
import rankingsReducer from "./rankings-reducer";
import eventsReducer from "./events-reducer";

let reducers = combineReducers({
  rankings: rankingsReducer,
  events: eventsReducer,
});

let store = createStore(reducers);

export default store;
