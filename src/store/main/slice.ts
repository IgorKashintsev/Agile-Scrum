import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MainState } from "src/types";

const initialState: MainState = {
  randomIdItemsArr: [],
  idxSlide: 0,
  categoryListIndex: 0,
};

const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    addRandomIdItems: (state, action: PayloadAction<number[]>) => {
      state.randomIdItemsArr = action.payload;
    },
    onIdxSlide: (state, action: PayloadAction<number>) => {
      state.idxSlide = action.payload;
    },
    onCategoryListIndex: (state, action: PayloadAction<number>) => {
      state.categoryListIndex = action.payload;
    },
  },
});

export const { addRandomIdItems, onIdxSlide, onCategoryListIndex } = mainSlice.actions;
export const mainReducer = mainSlice.reducer;