import  { useRef } from "react";
import { Typography, Box } from "@mui/material";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

type OpeningAnimationProps = {
  timeline: gsap.core.Timeline;
};

const OpeningAnimation = (props: OpeningAnimationProps) =>
{
  const { timeline } = props;
  const boxRef = useRef(null);  
  const textRef = useRef(null);

  useGSAP(() => {
    timeline.fromTo(
      boxRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1 }
    );
    timeline.fromTo(
      boxRef.current,
      { height: "100vh" },
      { height: "0vh", duration: 1 }
    );
    timeline.fromTo(
      boxRef.current,
      { opacity: 1 },
      { opacity: 0, duration: 0.6 },
      "<"
    )
  }, []);

  return (
    <Box
      ref = {boxRef}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      
      <Typography
        ref={textRef}
        variant="h1"
        sx={{
          fontFamily: "'Brush Script MT', cursive",
          fontSize: "48px",
          color: "black",
          WebkitTextStroke: "2px black", // テキストにストロークを追加
          WebkitTextFillColor: "transparent", // テキストの中身を透明にする
        }}
      >
        Hello, World!
      </Typography>
    </Box>
  );
}

export default OpeningAnimation;
