import { useEffect } from "react";
import gsap from "gsap";
import Welcome from "../Organisms/Welcome";
import Header from "../templates/Hedder";
import OpeningAnimation from "../templates/OpeningAnimation";
import { useTransition } from "../../../context/TransitionContext";
// import Hoge from "./Hoge";

const Top = () => {
  const { firstLoad, setFirstLoad } = useTransition();

  const timeline = gsap.timeline();

  useEffect(() => {
    if (firstLoad) {
      console.log("showOpening");
      timeline.eventCallback("onComplete", () => {
        setFirstLoad(false);
      });
    }
  }, []);

  return (
    <>
      {firstLoad && <OpeningAnimation timeline={timeline} />}
      {/* <Hoge/> */}
      <Header text="Top" />
      <Welcome />
    </>
  );
};

export default Top;
