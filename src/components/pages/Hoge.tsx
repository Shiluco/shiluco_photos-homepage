import { gsap } from "gsap";
import { Typography } from "@mui/material";
import { useRef, useLayoutEffect } from "react";

const Hoge = () => {
  const polygonRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(polygonRef.current, {
        strokeDashoffset: 400,
        duration: 0.8,
        repeat: -1,
        yoyo: true,
        ease: "iOSEaseInOut",
      });
    }, polygonRef);
    return () => ctx.revert();
  }, []);

  return (
    <>
      <Typography>hoge</Typography>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 600 600"
        width="600"
        height="600"
        style={{ backgroundColor: "lightgreen" }}
      >
        <polygon
          ref = {polygonRef}
          points="100,100 100,200 200,200 200,100"
          strokeDasharray="400"
          style={{ fill: "none", stroke: "black", strokeWidth: 7 }}
        />
      </svg>
    </>
  );
};

export default Hoge;
