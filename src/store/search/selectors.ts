import { StoreState } from "..";

export const selectOpenSearchList = (state: StoreState) => state.search.openedFiltered;
export const selectFilteredArr = (state: StoreState) => state.search.filteredArr;