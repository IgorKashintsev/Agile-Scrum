import { StoreState } from "..";

export const selectLoginAuth = (state: StoreState) => state.auth.loginAuth;
export const selectIsAuth = (state: StoreState) => state.auth.isAuth;
export const selectLoginMenu = (state: StoreState) => state.auth.loginMenu;