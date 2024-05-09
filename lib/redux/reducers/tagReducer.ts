import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface ToggleState {
  storeTagArr: [];
}

const initialState: ToggleState = {
  storeTagArr: [],
};

export const tagReducerSlice = createSlice({
  name: "tag",
  initialState,
  reducers: {
    storeTagArr(state, action: PayloadAction<[]>) {
      state.storeTagArr = [...state.storeTagArr, ...action.payload];
    },
  },
});

export const { storeTagArr } = tagReducerSlice.actions;

export default tagReducerSlice.reducer;
