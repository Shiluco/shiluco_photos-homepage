import { Typography, Box } from "@mui/material";
import PhotoUploadArea from "../Molecules/photoUploadArea";

const PhotoDataEditor = () => {
  return (
    <>
      <Box>
        <Typography variant="h1">Hello World</Typography>
      </Box>
      <PhotoUploadArea path={`photos/`} />
    </>
  );
};

export default PhotoDataEditor;
