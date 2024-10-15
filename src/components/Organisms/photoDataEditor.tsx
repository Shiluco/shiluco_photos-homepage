import { Typography } from "@mui/material";
import PhotoUploadArea from "../Molecules/photoUploadArea";

const PhotoDataEditor = () => {
  return (
    <>
      <Typography variant="h6">写真の投稿</Typography>
      <PhotoUploadArea path={`photos/`} />
    </>
  );
};

export default PhotoDataEditor;
