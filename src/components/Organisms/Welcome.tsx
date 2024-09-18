import { Box, Button, Typography } from "@mui/material";
import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
//file
import welcomeImage from "../../assets/photos/Portrait/02.jpg";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";



const Welcome = () =>
{
  const timeline = gsap.timeline();
  const welcomeImageRef = useRef(null);
  const sideTextRef1 = useRef(null);
  const sideTextRef2 = useRef(null);

  useGSAP(() => {

    timeline.fromTo(
      welcomeImageRef.current,
      { opacity: 0.8 },
      { opacity: 1, duration: 0.4 },
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
  }, []);

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

          <img
            id="welcomeImage"
            src={welcomeImage}
            alt="welcomeImage"
            ref={welcomeImageRef}
            style={{
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
            onClick={() =>
            {
              console.log("scroll");
              
            }}
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
            <KeyboardArrowDownIcon  sx={{ color: "black" }} />
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default Welcome;
