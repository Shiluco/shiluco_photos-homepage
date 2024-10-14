import React from "react";
import { Box } from "@mui/material";
import { useAppDispatch } from "../../../store/store";
import { uploadPhotoFile } from "../../../store/uploadPhotoSlice";

const PhotoUploadArea = ({ path }: { path: string }) => {
  const dispatch = useAppDispatch();

  // ファイルが選択された際に呼ばれる
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      dispatch(uploadPhotoFile({ filePath: path, file }));
    } else {
      console.error("No file selected");
    }
  };

  return (
    <>
      <Box>
        {/* inputにonChangeを追加 */}
        <input
          id="file-upload"
          type="file"
          title="写真をアップロード"
          onChange={handleFileChange} // ファイル選択を検知
        />
      </Box>
    </>
  );
};

export default PhotoUploadArea;
