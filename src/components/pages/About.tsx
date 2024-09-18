import { Box, Stack, Typography } from "@mui/material";
import Header from "../templates/Hedder";
import { gsap } from "gsap";
//file
import profile from "../../assets/profile.png";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";

const Introduction = () =>
{
  const aboutIconRef = useRef(null);
  const aboutTextRef = useRef(null);
  const aboutTimeline = gsap.timeline();

  useGSAP(() =>
  { 
    aboutTimeline.fromTo(
      aboutIconRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.5}
    );
    aboutTimeline.fromTo(
      aboutIconRef.current,
      { x: "-=20"},
      { x: "0", duration: 0.5 },
      "<"
    );
    aboutTimeline.fromTo(
      aboutTextRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.5 },
      "<"
    );
    aboutTimeline.fromTo(
      aboutTextRef.current,
      { x: "+=20" },
      { x: "0", duration: 0.5 },
      "<"
    );

  }
    , []);

  return (
    <>
      <Header text="About" />
      <Box
        display="flex"
        justifyContent="space-evenly" // 要素を均等に分ける（左右の端にもスペースを作る）
        alignItems="center"
        height="90vh" // 画面全体の高さに合わせる
      >
        <Stack direction="row" spacing={2} alignItems="center">
          <img
            ref={aboutIconRef}
            src={profile}
            alt="profile"
            style={{ width: "15vw" }}
          />
          <Box sx={{ width: "1%" }}></Box>
          <Stack ref={aboutTextRef} direction="column" spacing={2}>
            <Typography variant="h4">
              こんにちは、Shiluco_photosです。
            </Typography>
            <Typography
              variant="h5"
              sx={{ marginTop: "16px", paddingLeft: "4px", lineHeight: "35x" }}
            >
              このサイトは、私の写真を紹介するためのサイトです。
              <br />
              私は、日本の風景や建築物を中心に撮影しています。
              <br />
              このサイトを通じて、私の写真を楽しんでいただければ幸いです。
            </Typography>
          </Stack>
        </Stack>
      </Box>
    </>
  );
};

export default Introduction;
