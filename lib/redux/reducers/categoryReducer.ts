import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface CategoryState {
  storeCategoryArr: {
    id: number | string | number[];
    name: string;
    isCategorySelected: boolean;
    clearCategory: boolean;
  }[];
}

const initialState: CategoryState = {
  storeCategoryArr: [],
};

export const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    storeCategoryArr(
      state,
      action: PayloadAction<
        {
          id: number | string | number[];
          name: string;
          isCategorySelected: boolean;
          clearCategory: boolean;
        }[]
      >
    ) {
      const { payload } = action;
      const { storeCategoryArr } = state;

      if (payload[payload.length - 1].clearCategory) {
        state.storeCategoryArr = [];
      } else {
        state.storeCategoryArr = [...storeCategoryArr, ...payload];
      }
    },
  },
});

export const { storeCategoryArr } = categorySlice.actions;

export default categorySlice.reducer;
