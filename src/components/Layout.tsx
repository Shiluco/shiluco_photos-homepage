//library
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Box } from "@mui/material";
import { ReactNode, useRef } from "react";
import { useLocation } from "react-router-dom";

interface LayoutProps {
  children: ReactNode;
}

const Layout = (props: LayoutProps) =>
{
  const { children } = props;
  const pageRef = useRef(null);
  const pageTimeline = gsap.timeline();
  const location = useLocation();

  useGSAP(() => {
    pageTimeline.fromTo(
      pageRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 5 }
    )
    
  },[location.pathname]); 

  return (
    <Box
      ref={pageRef} // pageRef を割り当てることでアニメーション対象を指定
      sx={{
        width: "100%",
        height: "100vh",
        overflow: "hidden",
        position: "relative",
        
      }}
    >
      {children}
    </Box>
  );
};

export default Layout;
