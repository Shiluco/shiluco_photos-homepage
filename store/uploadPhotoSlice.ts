import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { uploadPhoto } from "../service/supabaseService";

interface UploadPhotoState {
  photo: { id: string; path: string; fullPath: string } | null;
  loading: boolean;
  error: string | null;
}

const initialState: UploadPhotoState = {
  photo: null, // アップロードされた1枚の写真を保持
  loading: false,
  error: null,
};

export const uploadPhotoFile = createAsyncThunk(
  "photoSlice/uploadPhoto",
  async ({ filePath, file }: { filePath: string; file: File }) => {
    const validImageTypes = ["image/jpeg", "image/png", "image/gif"];
    if (!validImageTypes.includes(file.type)) {
      throw new Error("Only image files are allowed");
    }
    const response = await uploadPhoto("photos", filePath, file);
    return response; // サーバーから返されるURLやパスを想定
  }
);

const uploadPhotoSlice = createSlice({
  name: "uploadPhoto",
  initialState,
  reducers: {}, // 今回は同期的なアクションは定義しない
  extraReducers: (builder) => {
    builder
      .addCase(uploadPhotoFile.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(uploadPhotoFile.fulfilled, (state, action) => {
        state.loading = false;
        state.photo = action.payload; // アップロードされた写真のURLやパスを保存
      })
      .addCase(uploadPhotoFile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Photo upload failed";
      });
  },
});

export default uploadPhotoSlice.reducer;
