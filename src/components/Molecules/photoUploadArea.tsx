import React, { useState } from "react";
import { Box, Button } from "@mui/material";
import { useAppDispatch } from "../../../store/store";
import { uploadPhotoFile } from "../../../store/uploadPhotoSlice";

const PhotoUploadArea = ({ path }: { path: string }) => {
  const dispatch = useAppDispatch();
  const [selectedFile, setSelectedFile] = useState<File | null>(null); // 選択されたファイルを保持

  // ファイルが選択された際に呼ばれる
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file); // ファイルを保存
    }
  };

  const handleUpload = () => {
    if (selectedFile) {
      dispatch(uploadPhotoFile({ filePath: path, file: selectedFile }));
    } else {
      console.error("No file selected");
    }
  };

  return (
    <>
      <Box>
        <input
          id="file-upload"
          type="file"
          title="写真をアップロード"
          onChange={handleFileChange} // ファイル選択を検知
        />
      </Box>
      <Button onClick={handleUpload} disabled={!selectedFile}>
        保存
      </Button>
    </>
  );
};

export default PhotoUploadArea;
