import { StoreState } from "..";

export const selectLoginAuth = (state: StoreState) => state.auth.loginAuth;
export const selectIsAuth = (state: StoreState) => state.auth.isAuth;