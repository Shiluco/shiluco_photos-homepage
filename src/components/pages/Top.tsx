import  {  useEffect } from "react";
import gsap from "gsap";
import Welcome from "../Organisms/Welcome";
import Header from "../templates/Hedder";
import OpeningAnimation from "./OpeningAnimation";


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
      <Welcome timeline={timeline} />
    </>
  );
};

export default Top;
