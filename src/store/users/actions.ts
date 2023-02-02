import { User } from "../../types";
import { 
  AddNewUser, 
  ChangePass, 
  AddFavorites, 
  DeleteFavorites, 
  AddBasket, 
  DeleteBasket,
} from "./types";

export const ADD_NEW_USER = 'USERS::ADD_NEW_USER';
export const CHANGE_PASS = 'USERS::CHANGE_PASS';
export const ADD_FAVORITES = 'USERS::ADD_FAVORITES';
export const DELETE_FAVORITES = 'USERS::DELETE_FAVORITES';
export const ADD_BASKET = 'USERS::ADD_BASKET';
export const DELETE_BASKET = 'USERS::DELETE_BASKET';

export const addNewUser = (login: string, user: User): AddNewUser => ({
  type: ADD_NEW_USER,
  user,
  login,
});

export const changePass = (
    loginAuth: string, 
    newPassword: string,
  ): ChangePass => ({
  type: CHANGE_PASS,
  loginAuth,
  newPassword,
});

export const addFavorites = (
    loginAuth: string, 
    gameId: number,
  ): AddFavorites => ({
  type: ADD_FAVORITES,
  loginAuth,
  gameId,
});

export const deleteFavorites = (
    loginAuth: string, 
    favoritesArr: number[],
  ): DeleteFavorites => ({
  type: DELETE_FAVORITES,
  loginAuth,
  favoritesArr,
});

export const addBasket = (
    loginAuth: string, 
    gameId: number,
  ): AddBasket => ({
  type: ADD_BASKET,
  loginAuth,
  gameId,
});

export const deleteBasket = (
    loginAuth: string, 
    basketArr: number[],
  ): DeleteBasket => ({
  type: DELETE_BASKET,
  loginAuth,
  basketArr,
});