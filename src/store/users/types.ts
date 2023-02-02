import { User } from "../../types";
import { 
  ADD_NEW_USER, 
  CHANGE_PASS, 
  ADD_FAVORITES, 
  DELETE_FAVORITES,
  ADD_BASKET,
  DELETE_BASKET,
} from "./actions";

export type UsersActions = 
  AddNewUser | 
  ChangePass | 
  AddFavorites | 
  DeleteFavorites |
  AddBasket |
  DeleteBasket;

export interface AddNewUser {
  type: typeof ADD_NEW_USER;
  login: string;
  user: User;
}

export interface ChangePass {
  type: typeof CHANGE_PASS;
  loginAuth: string;
  newPassword: string;
}

export interface AddFavorites {
  type: typeof ADD_FAVORITES;
  loginAuth: string;
  gameId: number;
}

export interface DeleteFavorites {
  type: typeof DELETE_FAVORITES;
  loginAuth: string;
  favoritesArr: number[];
}

export interface AddBasket {
  type: typeof ADD_BASKET;
  loginAuth: string;
  gameId: number;
}

export interface DeleteBasket {
  type: typeof DELETE_BASKET;
  loginAuth: string;
  basketArr: number[];
}