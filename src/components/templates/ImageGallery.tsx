import { useEffect, useRef, useState } from "react";
import { Photo } from "../../types/Photo";
import { Box, Typography } from "@mui/material";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const PhotoGallery = () => {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [imagesLoaded, setImagesLoaded] = useState(0);
  const pagesRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  //写真の読み込み
  useEffect(() => {
    fetch("/photos.json")
      .then((response) => response.json())
      .then((data) => {
        setPhotos(data.photos);
      })
      .catch((error) => console.error("Error fetching the JSON:", error));
  }, []);

  // 横スクロールのアニメーション
  useGSAP(() => {
    if (imagesLoaded === photos.length && photos.length > 0) {
      if (pagesRef.current && wrapperRef.current) {
        gsap.to(pagesRef.current, {
          x: () =>
            -(pagesRef.current!.scrollWidth - wrapperRef.current!.clientWidth),
          ease: "none",
          scrollTrigger: {
            trigger: wrapperRef.current,
            start: "top top",
            end: () =>
              `+=${
                pagesRef.current!.scrollWidth - wrapperRef.current!.clientWidth
              }`,

            scrub: true,
            pin: true,
            invalidateOnRefresh: true,
            anticipatePin: 1,
          },
        });
        // Refresh ScrollTrigger after images have loaded
        ScrollTrigger.refresh();
      }
    }
  }, [imagesLoaded, photos]);

  const handleImageLoad = () => {
    setImagesLoaded((prev) => prev + 1);
  };

  return (
    <Box
      ref={wrapperRef}
      sx={{
        overflow: "hidden",
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center", // これで中央揃え
      }}
    >
      <Box
        ref={pagesRef}
        display="flex"
        flexDirection="row"
        sx={{ width: "max-content" }}
        paddingLeft= "29vh"
        paddingRight= "29vh"
      >
        {photos.map((photo) => (
          <Box key={photo.id} textAlign="center" sx={{ marginRight: "10px" }}>
            <Box
              component="img"
              src={photo.path}
              alt={`Photo ${photo.id}`}
              onLoad={handleImageLoad} // Track when each image loads
              sx={{ width: "auto", height: "70vh" ,
              borderRadius: "2px",
              boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.3)",
            }} 
            />
            <Typography>{photo.tags.join(", ")}</Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default PhotoGallery;
