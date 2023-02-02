import { Reducer } from "redux";
import { AuthState } from "../../types";
import { ON_IS_AUTH, ON_LOGIN_AUTH } from "./actions";
import { AuthActions } from "./type";

const initialState: AuthState = {
  loginAuth: '',
  isAuth: false,
}

export const authReducer: Reducer<AuthState, AuthActions> = (
  state = initialState, 
  action
) => {
  switch(action.type) {
    case ON_LOGIN_AUTH: {
      return {
        ...state,
        loginAuth: action.loginAuth,
      }
    }
    case ON_IS_AUTH: {
      return {
        ...state,
        isAuth: action.isAuth,
      }
    }
    default:
      return state;
  }
}