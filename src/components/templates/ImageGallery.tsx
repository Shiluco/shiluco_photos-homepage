import { useEffect, useState } from "react";
import { Photo } from "../../types/Photo"; // Photo 型をインポート
import { Box, Typography } from "@mui/material";

const PhotoGallery = () => {
  // Photo 型の配列として state を定義
  const [photos, setPhotos] = useState<Photo[]>([]);

  useEffect(() => {
    // publicフォルダのphotos.jsonファイルを読み込む
    fetch("../../../public/photos.json")
      .then((response) => response.json())
      .then((data) => {
        setPhotos(data.photos); // データの型に合うようにセット
      })
      .catch((error) => console.error("Error fetching the JSON:", error));
  }, []);

  return (
    <>
      {photos.map((photo) => (
        <Box key={photo.id}>
          <Box
            component="img"
            src={photo.path}
            alt={`Photo ${photo.id}`}
            sx={{ width: "50vw", height: "auto" }}
          />
          <Typography>Tags: {photo.tags.join(", ")}</Typography>
        </Box>
      ))}
    </>
  );
};

export default PhotoGallery;
