import { combineReducers, createStore } from "redux";
import rankingsReducer from "./rankings-reducer";
import eventsReducer from "./events-reducer";
import fighterReducer from "./fighters-reducer";
import fansReducer from "./fanc-reducer";

let reducers = combineReducers({
  rankings: rankingsReducer,
  events: eventsReducer,
  fighters:fighterReducer,
  fansPage:fansReducer
});

let store = createStore(reducers);

export default store;
