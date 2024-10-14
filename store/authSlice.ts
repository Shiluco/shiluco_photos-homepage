import { createSlice } from "@reduxjs/toolkit";
import { User } from "../types/user";

const id = import.meta.env.VITE_ID;
const password = import.meta.env.VITE_PASSWORD;

interface AuthState {
  user: User | null;
  isLogIn: boolean;
  error: string | null;
}

const initialState: AuthState = {
  user: {
    id: id,
    password: password,
  },
  isLogIn: false,
  error: null,
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setErrorMessage: (state, action) => {
      state.error = action.payload;
    },
    logIn: (state, action) => {
      if (!state.user) {
        throw new Error("ユーザー情報の読み込みに失敗しました");
      }
      if (!state.user.id) {
        throw new Error("IDの読み込みに失敗しました");
      }
      if (!state.user.password) {
        throw new Error("パスワードの読み込みに失敗しました");
      }
      if (
        state.user.id === action.payload.id &&
        state.user.password === action.payload.password
      ) {
        setErrorMessage(null);
        state.isLogIn = true;
      } else {
        setErrorMessage("IDまたはパスワードが違います");
        state.isLogIn = false;
      }
    },
    logOut: (state) => {
      state.isLogIn = false;
    },
  },
});

export const { setErrorMessage, logIn, logOut } = authSlice.actions;
export default authSlice.reducer;
