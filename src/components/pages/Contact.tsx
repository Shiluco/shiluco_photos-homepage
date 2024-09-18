import { Box,  Typography } from "@mui/material";
import Header from "../templates/Hedder";
import instaIcon from "../../assets/insataIcon.svg";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { useRef } from "react";

const Contact = () => {
  const link =
    "https://www.instagram.com/shiluco_photos?igsh=ZXZyY2s0d3l5eGc5&utm_source=qr";
  const timeline = gsap.timeline();
  const instaIconRef = useRef(null);
  const instaTextRef = useRef(null);

  useGSAP(() =>
  {
    timeline.fromTo(
      instaTextRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.5 }
    );
    timeline.fromTo(
      
      instaIconRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.5 },
      "<"
    );
    timeline.fromTo(
      instaIconRef.current,
      { y: "-=2" },
      { y: "0", duration: 0.5 },
      "-=0.1"
    );
    
  }, []);


  return (
    <>
      <Header text="Contact" />
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="90vh"
      >
        <a href={link} style={{ textDecoration: "none", color: "inherit" }}>
          <Box
            ref={instaIconRef}
            component="img"
            src={instaIcon}
            alt="instagram"
            sx={{
              width: "100%", // 幅を調整
              height: "auto", // 高さを自動調整
              display: "block", // ブラウザのデフォルトの余白を消す場合
            }}
          />

          <Typography
            ref={instaTextRef}
            variant="h6"
            color="textPrimary"
            sx={{
              "&:hover": { color: "primary.main" },
            }}
          >
            instagram
          </Typography>
        </a>
      </Box>
    </>
  );
};

export default Contact;
