import { ReviewObj } from "../../types";
import { AddReview } from "./type";

export const ADD_REVIEW = 'REVIEW::ADD_REVIEW';

export const addReview = (review: ReviewObj): AddReview => ({
  type: ADD_REVIEW,
  review,
});