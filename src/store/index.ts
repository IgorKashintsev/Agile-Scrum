import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { authReducer } from './auth/slice';
import { mainReducer } from './main/slice';
import { ratingReducer } from './rating/slice';
import { reviewReducer } from './reviews/slice';
import { searchReducer } from './search/slice';
import { usersReducer } from './users/reducer';

const rootReducer = combineReducers({
  users: usersReducer,
  auth: authReducer,
  reviews: reviewReducer,
  search: searchReducer,
  main: mainReducer,
  rating: ratingReducer,
});

export type StoreState = ReturnType<typeof rootReducer>;
export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }),
  devTools: process.env.NODE_ENV !== 'production',
});