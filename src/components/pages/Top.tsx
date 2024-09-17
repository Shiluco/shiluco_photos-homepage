import  {  useEffect } from "react";
import gsap from "gsap";
import Welcome from "../Organisms/Welcome";
import Header from "../templates/Hedder";
import OpeningAnimation from "./OpeningAnimation";
import { Typography } from "@mui/material";

type topProps = {
  showOpening: boolean;
  setShowOpening: (showOpening: boolean) => void;
}; 
const Top = (props: topProps) =>
{
  const { showOpening, setShowOpening } = props;
  
  const timeline = gsap.timeline();

  useEffect(() => {
    if (showOpening)
    {
      console.log("showOpening");
      timeline.eventCallback("onComplete", () => {
        setShowOpening(false);
      });
    }
  }, []);

  return (
    <>
      {showOpening && <OpeningAnimation timeline={timeline} />}
      <Header text="Top" />
      {/* <Typography>
        {`内容は「${showOpening}」です`}
      </Typography> */}

      <Welcome timeline={timeline} />
    </>
  );
};

export default Top;
