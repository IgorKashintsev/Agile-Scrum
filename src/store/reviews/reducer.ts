import { Reducer } from "redux";
import { StateReviews } from "../../types";
import { ADD_REVIEW } from "./actions";
import { ReviewActions } from "./type";

const initialState: StateReviews = {
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
}

export const reviewReducer: Reducer<StateReviews, ReviewActions> = (
  state = initialState, 
  action
) => {
  switch(action.type) {
    case ADD_REVIEW: {
      return {
        ...state,
        reviews: [...state.reviews, action.review],
      }
    }
    default:
      return state;
  }
}