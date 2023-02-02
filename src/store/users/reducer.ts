import { Reducer } from "redux";
import { StateUsers } from "../../types";
import { 
  ADD_NEW_USER, 
  CHANGE_PASS, 
  ADD_FAVORITES, 
  DELETE_FAVORITES, 
  ADD_BASKET,
  DELETE_BASKET,
} from "./actions";
import { UsersActions } from "./types";

const initialState: StateUsers = {
  users: new Map([
    ['Igor', {
        password: '123',
        favorites: [0, 5, 25],
        basket: [],
      },
    ],
  ])
};

export const usersReducer: Reducer<StateUsers, UsersActions> = (
  state = initialState, 
  action
) => {
  switch(action.type) {
    case ADD_NEW_USER: {
      return {
        ...state,
        users: new Map(state.users.set(action.login, action.user)),
      }
    }
    case CHANGE_PASS: {
      const user = state.users.get(action.loginAuth);
      return {
        ...state,
        users: new Map(state.users.set(
          action.loginAuth, 
          {
            password: action.newPassword, 
            favorites: user!.favorites,
            basket: user!.basket,
          }
        )),
      }
    }
    case ADD_FAVORITES: {
      const user = state.users.get(action.loginAuth);
      return {
        ...state,
        users: new Map(state.users.set(
          action.loginAuth, 
          {
            password: user!.password, 
            favorites: [...user!.favorites, action.gameId],
            basket: user!.basket,
          }
        )),
      }
    }
    case DELETE_FAVORITES: {
      const user = state.users.get(action.loginAuth);
      return {
        ...state,
        users: new Map(state.users.set(
          action.loginAuth, 
          {
            password: user!.password, 
            favorites: action.favoritesArr,
            basket: user!.basket,
          }
        )),
      }
    }
    case ADD_BASKET: {
      const user = state.users.get(action.loginAuth);
      return {
        ...state,
        users: new Map(state.users.set(
          action.loginAuth, 
          {
            password: user!.password, 
            favorites: user!.favorites,
            basket: [...user!.basket, action.gameId],
          }
        )),
      }
    }
    case DELETE_BASKET: {
      const user = state.users.get(action.loginAuth);
      return {
        ...state,
        users: new Map(state.users.set(
          action.loginAuth, 
          {
            password: user!.password,
            favorites: user!.favorites,
            basket: action.basketArr,
          }
        )),
      }
    }
    default:
      return state;
  }
};