import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store/store";

interface ToggleState {
  togglePreviewPostComp: boolean;
  togglePreviewCompCategory: boolean;
  togglePreviewCompAddCategory: boolean;
  togglePreviewCompTag: boolean;
}

const initialState: ToggleState = {
  togglePreviewPostComp: false,
  togglePreviewCompCategory: false,
  togglePreviewCompTag: false,
  togglePreviewCompAddCategory: false,
};

export const toggleReducerSlice = createSlice({
  name: "toggle",
  initialState,
  reducers: {
    togglePreviewPostComp(state, action: PayloadAction<boolean>) {
      state.togglePreviewPostComp = action.payload;
    },
    togglePreviewCompCategory(state, action: PayloadAction<boolean>) {
      state.togglePreviewCompCategory = action.payload;
    },
    togglePreviewCompAddCategory(state, action: PayloadAction<boolean>) {
      state.togglePreviewCompAddCategory = action.payload;
    },
    togglePreviewCompTag(state, action: PayloadAction<boolean>) {
      state.togglePreviewCompTag = action.payload;
    },
  },
});

export const {
  togglePreviewPostComp,
  togglePreviewCompAddCategory,
  togglePreviewCompTag,
  togglePreviewCompCategory,
} = toggleReducerSlice.actions;

export default toggleReducerSlice.reducer;
