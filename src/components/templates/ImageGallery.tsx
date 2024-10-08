import { useRef, useState } from "react";
import { Photo } from "../../../types/Photo";
import { Box } from "@mui/material";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useAppSelector } from "../../../store/store";

gsap.registerPlugin(ScrollTrigger);

const PhotoGallery = () => {
  const [imagesLoaded, setImagesLoaded] = useState(0);
  const pagesRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const { photo } = useAppSelector((state) => state.photo);

  // 横スクロールのアニメーション
  useGSAP(() => {
    if (photo) {
      if (imagesLoaded === photo.length && photo.length > 0) {
        if (pagesRef.current && wrapperRef.current) {
          gsap.to(pagesRef.current, {
            x: () =>
              -(
                pagesRef.current!.scrollWidth - wrapperRef.current!.clientWidth
              ),
            ease: "none",
            scrollTrigger: {
              trigger: wrapperRef.current,
              start: "top top",
              end: () =>
                `+=${
                  pagesRef.current!.scrollWidth -
                  wrapperRef.current!.clientWidth
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
    }
  }, [imagesLoaded, photo]);

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
        paddingLeft="29vh"
        paddingRight="29vh"
      >
        {photo &&
          [...photo] // 配列のコピーを作成
            .sort((a, b) => a.index - b.index) // index順にソート
            .map((photo: Photo) => (
              <Box
                key={photo.index}
                textAlign="center"
                sx={{ marginRight: "10px" }}
              >
                <Box
                  component="img"
                  src={photo.url}
                  alt={`Photo ${photo.id}`}
                  onLoad={handleImageLoad} // Track when each image loads
                  sx={{
                    width: "auto",
                    height: "70vh",
                    borderRadius: "2px",
                    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.3)",
                  }}
                />
                <Box>{photo.description}</Box>
              </Box>
            ))}
      </Box>
    </Box>
  );
};

export default PhotoGallery;
