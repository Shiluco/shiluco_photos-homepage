import { createSlice } from "@reduxjs/toolkit";
import { User } from "../types/user";

const id = import.meta.env.VITE_ID;
const password = import.meta.env.VITE_PASSWORD;

interface AuthState {
  user: User | null;
  isLogin: boolean;
  error: string | null;
}

const initialState: AuthState = {
  user: {
    id: id,
    password: password,
  },
  isLogin: false,
  error: null,
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setErrorMessage: (state, action) => {
      state.error = action.payload;
    },
    login: (state, action) =>
    {
      
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
        state.isLogin = true;
        
      } else {
        setErrorMessage("IDまたはパスワードが違います");
        state.isLogin = false;
      }
    },
    logout: (state) => {
      state.isLogin = false;
    },
  },
});

export const { setErrorMessage, login } = authSlice.actions;
export default authSlice.reducer;
