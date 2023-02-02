import { IsAuth, LoginAuth } from "./type";

export const ON_LOGIN_AUTH = 'AUTH::ON_LOGIN_AUTH';
export const ON_IS_AUTH = 'AUTH::ON_IS_AUTH';

export const onLoginAuth = (loginAuth: string): LoginAuth => ({
  type: ON_LOGIN_AUTH,
  loginAuth,
});

export const onIsAuth = (isAuth: boolean): IsAuth => ({
  type: ON_IS_AUTH,
  isAuth,
});