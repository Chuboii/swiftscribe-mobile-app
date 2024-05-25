import { combineReducers } from "@reduxjs/toolkit";
import toggleReducer from "../reducers/toggleReducer";
import tagReducer from "../reducers/tagReducer";
import categoryReducer from "../reducers/categoryReducer";
import storeWrittenPost from "../reducers/storeWrittenPost";
import storeInputValues from "../reducers/storeInputValues";

export const rootReducer = combineReducers({
  toggle: toggleReducer,
  tag: tagReducer,
  category: categoryReducer,
  postData: storeWrittenPost,
  inputValue: storeInputValues,
});
