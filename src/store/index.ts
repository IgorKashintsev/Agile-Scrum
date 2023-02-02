import { createStore, compose, combineReducers } from 'redux';
import { authReducer } from './auth/reducer';
import { reviewReducer } from './reviews/reducer';
import { usersReducer } from './users/reducer';

export const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  users: usersReducer,
  auth: authReducer,
  reviews: reviewReducer,
});

export type StoreState = ReturnType<typeof rootReducer>;
export const store = createStore(rootReducer, composeEnhancers());