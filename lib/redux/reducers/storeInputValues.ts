import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface StoreWrittenPostState {
  storeInputValue: {
    postTitleInput: string | null;
    postSubTitleInput: string | null;
  };
}

const initialState: StoreWrittenPostState = {
  storeInputValue: {
    postTitleInput: "",
    postSubTitleInput: "",
  },
};

export const storeInputValues = createSlice({
  name: "storeInputValue",
  initialState,
  reducers: {
    storeInputValue(
      state,
      action: PayloadAction<{
        postTitleInput: string;
        postSubTitleInput: string;
      }>
    ) {
      state.storeInputValue = action.payload;
    },
  },
});

export const { storeInputValue } = storeInputValues.actions;

export default storeInputValues.reducer;
