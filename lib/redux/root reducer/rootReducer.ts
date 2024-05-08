import { combineReducers } from "@reduxjs/toolkit";
import { toggleReducerSlice } from "../reducers/toggleReducer";

export const rootReducer = combineReducers({
  toggle: toggleReducerSlice,
});
