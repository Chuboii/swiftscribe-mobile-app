import { combineReducers } from "@reduxjs/toolkit";
import toggleReducer from "../reducers/toggleReducer";
import tagReducer from "../reducers/tagReducer";
import categoryReducer from "../reducers/categoryReducer";

export const rootReducer = combineReducers({
  toggle: toggleReducer,
  tag: tagReducer,
  category: categoryReducer,
});
