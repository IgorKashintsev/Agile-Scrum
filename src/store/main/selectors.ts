import { StoreState } from "..";

export const selectRandomIdItems = (state: StoreState) => state.main.randomIdItemsArr;
export const selectIdxSlide = (state: StoreState) => state.main.idxSlide;
export const selectCategoryListIndex = (state: StoreState) => state.main.categoryListIndex;