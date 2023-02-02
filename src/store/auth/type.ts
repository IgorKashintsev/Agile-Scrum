import { ON_IS_AUTH, ON_LOGIN_AUTH } from "./actions";

export type AuthActions = LoginAuth | IsAuth;

export interface LoginAuth {
  type: typeof ON_LOGIN_AUTH;
  loginAuth: string;
}

export interface IsAuth {
  type: typeof ON_IS_AUTH;
  isAuth: boolean;
}