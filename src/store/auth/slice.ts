import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthState } from "src/types";

const initialState: AuthState = {
  loginAuth: '',
  isAuth: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    onLoginAuth: (state, action: PayloadAction<AuthState>) => {
      state.loginAuth = action.payload.loginAuth;
      state.isAuth = action.payload.isAuth;
    },
  },
});

export const { onLoginAuth } = authSlice.actions;
export const authReducer = authSlice.reducer;