import { StoreState } from "..";

export const selectAverageRating = (state: StoreState) => state.rating.averageRating;
