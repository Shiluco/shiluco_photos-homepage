import { useRef } from "react";
import gsap from "gsap";
import { useAppSelector } from "../../../store";
import { Box, Stack, Typography } from "@mui/material";
import profile from "../../assets/profile.png";
import { useGSAP } from "@gsap/react";
import React from "react";

const SelfIntroduction = () => {
  const aboutIconRef = useRef(null);
  const aboutTextRef = useRef(null);
  const aboutTimeline = gsap.timeline();
  const { introduction_header, introduction } = useAppSelector(
    (state) => state.userProfile
  );

  useGSAP(() => {
    aboutTimeline.fromTo(
      aboutIconRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.5 }
    );
    aboutTimeline.fromTo(
      aboutIconRef.current,
      { x: "-=20" },
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
  }, []);

  return (
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
          className="profile-image"
          style={{ width: "15vw", height: "auto", maxHeight: "100%" }}
        />
        <Box sx={{ width: "1%" }}></Box>
        <Stack ref={aboutTextRef} direction="column" spacing={2}>
          <Typography variant="h4">{introduction_header}</Typography>
          <Typography
            variant="h5"
            sx={{ marginTop: "16px", paddingLeft: "4px", lineHeight: "35px" }}
          >
            <Box>
              {introduction.split("\n").map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  <br />
                </React.Fragment>
              ))}
            </Box>
          </Typography>
        </Stack>
      </Stack>
    </Box>
  );
};

export default SelfIntroduction;
