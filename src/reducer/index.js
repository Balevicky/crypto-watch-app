import { combineReducers } from "redux";
import stableReducer from "./stable.reducer";
import listReducer from "./liste.reducer";

export default combineReducers({
  //nos reducers
  stableReducer,
  listReducer,
});
