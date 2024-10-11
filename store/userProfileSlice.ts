import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchTable, updateTable } from "../service/supabaseService"; // fetchTable関数のインポート
import { Profile } from "../types/profile";

// ステートの型定義
interface UserProfileState {
  profile:Profile
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

// ステートの初期化
const initialState: UserProfileState = {
  profile: {
    id: 0,
    introduction_header: "",
    introduction: "",
  },
  status: "idle", // データ取得のステータス
  error: null, // エラーメッセージ
};

// createAsyncThunkを使って非同期アクションを作成
export const fetchUserProfile = createAsyncThunk(
  "userProfile/fetchUserProfile", // アクション名
  async () => {
    const data = await fetchTable("user_profile"); // fetchTable関数でSupabaseからデータを取得
    if (data.length > 0) {
      return data[0]; // 取得したデータの最初のエントリを返す
    } else {
      throw new Error("No user profile data found");
    }
  }
);

export const updateProfile = createAsyncThunk(
  "userProfile/updateProfile",
  async (profile: Profile) => {
    const data = await fetchTable("user_profile");
    if (data.length > 0) {
      const id = data[0].id;
      const response = await updateTable("user_profile", id, profile);
      return response;
    } else {
      throw new Error("No user profile data found");
    }
  }
);

// createSliceでスライスを作成
const userProfileSlice = createSlice({
  name: "userProfile",
  initialState,
  reducers: {}, // 今回は同期的なアクションは定義しない
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserProfile.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchUserProfile.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.profile = action.payload;
      })
      .addCase(fetchUserProfile.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Failed to fetch user profile";
      });
  },
});

// リデューサーのエクスポート
export default userProfileSlice.reducer;
