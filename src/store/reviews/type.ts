import { ReviewObj } from "../../types";
import { ADD_REVIEW } from "./actions";

export type ReviewActions = AddReview;

export interface AddReview {
  type: typeof ADD_REVIEW;
  review: ReviewObj;
}