import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface StoreWrittenPostState {
  storePostData: {
    content: string | null;
    title: string | null;
    subTitle: string | null;
    previewImage: string | null;
  };
}

const initialState: StoreWrittenPostState = {
  storePostData: {
    content: null,
    title: null,
    subTitle: null,
    previewImage: null,
  },
};

export const storeWrittenPostSlice = createSlice({
  name: "storePostData",
  initialState,
  reducers: {
    storePostData(
      state,
      action: PayloadAction<{
        content: string;
        title: string;
        subTitle: string;
        previewImage: string;
      }>
    ) {
      state.storePostData = action.payload;
    },
  },
});

export const { storePostData } = storeWrittenPostSlice.actions;

export default storeWrittenPostSlice.reducer;
