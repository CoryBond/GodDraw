import { combineReducers } from "redux";
import projectileReducer from "./projectileReducer";

export default combineReducers({
  projectiles: projectileReducer
});
