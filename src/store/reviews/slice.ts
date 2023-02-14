import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ReviewObj, ReviewsState } from "src/types";

const initialState: ReviewsState = {
  reviews: [
    {
      id: 0,
      login: 'Igor',
      review: `Age of Wonders - Отлично сбитая, глобальная, пошаговая стратегия с 
      тактическими боями, персонализацией юнитов, большим количеством рас и 
      технологий, интересным миром, и щепоткой юмора. Процесс залипателен, графоний 
      приятен, музыка не мешает медитативному процессу, а тактикам и стратегам есть 
      где разгуляться. Как по мне, это отличный представитель своего жанра.`,
      date: new Date(2023, 0, 19),
      rating: 5,
    }
  ]
};

const reviewSlice = createSlice({
  name: 'review',
  initialState,
  reducers: {
    addReview: (state, action: PayloadAction<ReviewObj>) => {
      state.reviews.push(action.payload);
    },
  },
});

export const { addReview } = reviewSlice.actions;
export const reviewReducer = reviewSlice.reducer;