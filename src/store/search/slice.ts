import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Items, SearchState } from "src/types";

const initialState: SearchState = {
  openedFiltered: false,
  filteredArr: [],
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    openSearchList: (state, action: PayloadAction<boolean>) => {
      state.openedFiltered = action.payload;
    },
    addFilteredArr: (state, action: PayloadAction<Items[]>) => {
      state.filteredArr = action.payload;
    },
  },
});

export const { openSearchList, addFilteredArr } = searchSlice.actions;
export const searchReducer = searchSlice.reducer;