// library
import  { ReactNode, useRef } from "react";
import { Box } from "@mui/material";
import { useLocation } from "react-router-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();


  // アニメーションブロックの参照
  const blockRef = useRef<HTMLDivElement>(null);
  


  useGSAP(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      blockRef.current,
      { x: "0%" }, // 初期位置：画面左外
      {
        x: "100%", // 画面内にスライドイン
        duration: 0.5,
        ease: "power2.in",
      }

    )
    

  }, [location.pathname]);

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        overflow: "hidden",
        position: "relative",
        backgroundColor: "white",
      }}
    >
      {children}

      {/* アニメーションブロックのオーバーレイ */}

      <Box
        ref={blockRef}
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(50, 50, 50, 1)", // お好みの色に変更可能
          zIndex: 1, // 他のコンテンツより上に表示
          x: "-100%",
        }}
      />
    </Box>
  );
};

export default Layout;
