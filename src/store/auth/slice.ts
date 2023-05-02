import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthState } from "src/types";

const initialState: AuthState = {
  loginAuth: '',
  isAuth: false,
  loginMenu: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    onLoginAuth: (state, action: PayloadAction<AuthState>) => {
      state.loginAuth = action.payload.loginAuth;
      state.isAuth = action.payload.isAuth;
    },
    onLoginMenu: (state, action: PayloadAction<boolean>) => {
      state.loginMenu = action.payload;
    },
  },
});

export const { onLoginAuth, onLoginMenu } = authSlice.actions;
export const authReducer = authSlice.reducer;