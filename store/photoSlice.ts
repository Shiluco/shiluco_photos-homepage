import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchPhotoURL, updateTable } from "../service/supabaseService";

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

export const updatePhoto = createAsyncThunk(
  "photoSlice/updatePhoto",
  async (photo: Photo) => {
    const data = await fetchTable("photo");
    if (data.length > 0) {
      const id = data[0].id;
      const response = await updateTable("photo", id, photo);
      return response;
    } else {
      throw new Error("No photo data found");
    }
  }
);

export const fetchAllPhotoURLs = createAsyncThunk(
  "photoSlice/fetchAllPhotoURLs",
  async () => {
    const data = await fetchTable("photo"); // 全ての写真データを取得
    if (data.length > 0) {
      const photoURLs = await Promise.all(
        data.map(async (photo: Photo) => {
          const url = await fetchPhotoURL("photos", photo.path);

          return { ...photo, url: url.publicUrl };
        })
      );
      console.log("photoURLs:", photoURLs);
      return photoURLs; // 取得した全てのエントリを返す
    } else {
      throw new Error("No photo data found");
    }
  }
);

// createSliceでスライスを作成
export const photoSlice = createSlice({
  name: "photo",
  initialState,
  reducers: {}, // 今回は同期的なアクションは定義しない
  extraReducers: (builder) => {
    builder
      //fetchPhotoTable
      .addCase(fetchPhotoTable.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchPhotoTable.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.photo = action.payload;
      })
      .addCase(fetchPhotoTable.rejected, (state, action) => {
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
        state.photo = action.payload || [];
      })
      .addCase(fetchAllPhotoURLs.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Failed to fetch user profile";
      })
      //updatePhoto
      .addCase(updatePhoto.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(updatePhoto.fulfilled, (state) => {
        state.status = "succeeded";
      })
      .addCase(updatePhoto.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Failed to fetch user profile";
      });
  },
});

export default photoSlice.reducer;
