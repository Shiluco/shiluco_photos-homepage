import { Box, Button, Typography } from "@mui/material";
import { useRef, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useTransition } from "../../../context/TransitionContext";
//file

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useAppSelector } from "../../../store/store";

const Welcome = () => {
  const { firstLoad } = useTransition();

  const welcomeImageRef = useRef(null);
  const sideTextRef1 = useRef(null);
  const sideTextRef2 = useRef(null);
  const arrowRef = useRef(null);

  const { photo } = useAppSelector((state) => state.photo);
  console.log(photo);
  const topContentPhotos = photo ? photo.filter((p) => p.is_top_content) : [];
  console.log(topContentPhotos);

  const topContentPhotosLength = topContentPhotos.length;
  const [topContentIndex, setTopContentIndex] = useState(0);

  const incriementTopContentIndex = () => {
    setTopContentIndex((prev) => (prev + 1) % topContentPhotosLength);
  };

  const position = firstLoad ? "=+1.5" : "<";

  useGSAP(() => {
    const timeline = gsap.timeline();

    timeline.fromTo(
      welcomeImageRef.current,
      { opacity: 0.8 },
      { opacity: 1, duration: 0.4 },
      position
    );

    timeline.fromTo(
      welcomeImageRef.current,
      { y: "-=5" },
      { y: "0", duration: 0.5 },
      "<"
    );

    timeline.fromTo(
      sideTextRef1.current,
      { clipPath: "inset(0% 0% 100% 0)" },
      { clipPath: "inset(0% 0% 0% 0)", duration: 1 },
      "<"
    );

    timeline.fromTo(
      sideTextRef2.current,
      { clipPath: "inset(0 0 100% 0)" },
      { clipPath: "inset(0 0 0% 0)", duration: 1 },
      "<"
    );

    timeline.fromTo(
      arrowRef.current,
      { y: "-=10" },
      { y: "0", duration: 0.5 },
      "<"
    );

    timeline.fromTo(
      arrowRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1, repeat: -1, yoyo: true },
      "<"
    );
  }, []);

useGSAP(() => {
  const timeline = gsap.timeline();
  if (!firstLoad) {
    timeline.fromTo(
      welcomeImageRef.current,
      { opacity: 0.9, y: 30 }, // 元のyの値を指定
      { opacity: 1, y: 0, duration: 0.5 } // y: 0にアニメーション
    );
  }
}, [topContentIndex]);


  return (
    <>
      <Box>
        <Box
          display="flex"
          justifyContent="space-evenly"
          alignItems="center"
          height="85vh"
        >
          <Typography
            variant="h1"
            ref={sideTextRef1}
            sx={{
              writingMode: "vertical-rl",
              transform: "rotate(180deg)",
            }}
          >
            Shiluco
          </Typography>

          <Box
            component="img"
            id="welcomeImage"
            src={
              topContentPhotos.length > 0
                ? topContentPhotos[topContentIndex].url
                : ""
            }
            alt="welcome"
            ref={welcomeImageRef}
            sx={{
              height: "90%",
              borderRadius: "2px",
              boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.3)",
            }}
          />
          <Typography
            variant="h1"
            ref={sideTextRef2}
            style={{ writingMode: "vertical-lr" }}
          >
            Photos
          </Typography>
        </Box>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          height="5vh"
        >
          <Button
            ref={arrowRef}
            onClick={incriementTopContentIndex}
            sx={{
              backgroundColor: "transparent",
              minWidth: 0,
              padding: 0,
              "&:hover": {
                backgroundColor: "transparent",
              },
            }}
            disableRipple
          >
            <KeyboardArrowDownIcon sx={{ color: "black" }} />
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default Welcome;
