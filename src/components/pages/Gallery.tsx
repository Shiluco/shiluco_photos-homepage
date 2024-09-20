import { Typography, Box } from "@mui/material";
import ImageGallery from "../templates/ImageGallery";

const Gallery = () => {
  return (
    <Box
      sx={{
        backgroundColor: "rgba(0, 0, 0, 0.9)",
        minHeight: "100vh",
        padding: 2,
      }}
    >
      <Typography variant="h1" color="white">
        Gallery
      </Typography>

      <ImageGallery />
    </Box>
  );
};

export default Gallery;
