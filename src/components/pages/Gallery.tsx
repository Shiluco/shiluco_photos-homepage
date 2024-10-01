import {  Box } from "@mui/material";
import ImageGallery from "../templates/ImageGallery";

const Gallery = () => {
  return (
    <Box
      sx={{
        backgroundColor: "rgba(245, 245, 245, 0)",
        minHeight: "100vh",
        padding: 0,
      }}
    >
      <ImageGallery />
    </Box>
  );
};

export default Gallery;
