import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface ToggleState {
  storeTagArr: string[];
}

const initialState: ToggleState = {
  storeTagArr: [],
};

export const tagReducerSlice = createSlice({
  name: "tag",
  initialState,
  reducers: {
    storeTagArr(state, action: PayloadAction<string[]>) {
      const { payload } = action;
      const { storeTagArr } = state;
      if (payload[0] === "clear tags") {
        state.storeTagArr = [];
      } else {
        state.storeTagArr = [...storeTagArr, ...payload];
      }
    },
  },
});

export const { storeTagArr } = tagReducerSlice.actions;

export default tagReducerSlice.reducer;
