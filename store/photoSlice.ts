import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {} from "../service/supabaseService";

import { Photo } from "../types/photo";
import { fetchTable } from "../service/supabaseService";


// ステートの型定義
interface PhotoState {
  photo: Photo[] | null;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

// ステートの初期化
const initialState: PhotoState = {
  photo: null,
  status: "idle", // データ取得のステータス
  error: null, // エラーメッセージ
};

export const fetchPhotoTable = createAsyncThunk(
  "photoSlice/fetchPhotoTable",
  async () => {
    const data = await fetchTable("photo"); // 全ての写真データを取得
    if (data.length > 0) {
      return data; // 取得した全てのエントリを返す
    } else {
      throw new Error("No photo data found");
    }
  }
);


export const fetchAllPhotoURLs = createAsyncThunk(
  "photoSlice/fetchAllPhotoURLs", // アクション名を変更
  async () => {
    const data = await fetchTable("photo"); // "photo"テーブルから全ての写真データを取得
    return data.map((photo) => photo.path); // 取得したデータからpathだけを取り出して配列にする
  }
);


// createSliceでスライスを作成
export const photoSlice = createSlice({
  name: "photoSlice",
  initialState,
  reducers: {}, // 今回は同期的なアクションは定義しない
  extraReducers: (builder) => {
    builder
      //fetchPhotoTable
      .addCase(fetchPhotoTable.pending, (state) =>
      {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchPhotoTable.fulfilled, (state, action) =>
      {
        state.status = "succeeded";
        state.photo = action.payload;
      })
      .addCase(fetchPhotoTable.rejected, (state, action) =>
      {
        state.status = "failed";
        state.error = action.error.message || "Failed to fetch user profile";
      })
      //fetchPhotoURL
      .addCase(fetchAllPhotoURLs.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchAllPhotoURLs.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.photo = action.payload;
      })
      .addCase(fetchAllPhotoURLs.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Failed to fetch user profile";
      });
  },
});
