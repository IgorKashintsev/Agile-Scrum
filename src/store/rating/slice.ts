import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RatingObj, RatingState } from "src/types";

const initialState: RatingState = {
  averageRating: [
    {
      id: 0,
      rating: 4,
    }
  ]
};

const ratingSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    updateRating: (state, action: PayloadAction<RatingObj>) => {
      if(
        state.averageRating.findIndex(item => item.id === action.payload.id) === -1
        ) {
        state.averageRating.push(action.payload);
      } else {
        state.averageRating
          .find(item => item.id === action.payload.id)!
          .rating = action.payload.rating;
      }
    },
  },
});

export const { updateRating } = ratingSlice.actions;
export const ratingReducer = ratingSlice.reducer;