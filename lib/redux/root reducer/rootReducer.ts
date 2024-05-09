import { combineReducers } from "@reduxjs/toolkit";
import toggleReducer from "../reducers/toggleReducer";
import tagReducer from "../reducers/tagReducer";

export const rootReducer = combineReducers({
  toggle: toggleReducer,
  tag: tagReducer,
});
