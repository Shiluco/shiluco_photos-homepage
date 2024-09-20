// library
import { ReactNode, useRef } from "react";
import { Box } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { usePage } from "../context/PageContext";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { isPageOut, setIsPageOut, newPath,} = usePage();

  // アニメーションブロックの参照
  const block1Ref = useRef<HTMLDivElement>(null);
  const block2Ref = useRef<HTMLDivElement>(null);
  const block3Ref = useRef<HTMLDivElement>(null);

  //ページインアニメーション
  useGSAP(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      block1Ref.current,
      { y: "0%" }, 
      {
        y: "100%", 
        duration: 0.6,
        ease: "power2.in",
      },
      
    );
    tl.fromTo(
      block2Ref.current,
      { y: "0%" }, 
      {
        y: "100%", 
        duration: 0.5,
        ease: "power2.in",
      },
      "<"
    );
    tl.fromTo(
      block3Ref.current,
      { y: "0%" }, 
      {
        y: "100%", 
        duration: 0.4,
        ease: "power2.in",
      },
      "<"
    );
  }, [location.pathname]);

  //ページアウトアニメーション
  useGSAP(() => {
    const tl = gsap.timeline();
    if (isPageOut)
    {

      tl.fromTo(
        block3Ref.current,
        { y: "100%" }, 
        {
          y: "0%", 
          duration: 0.6,
          ease: "power2.in",
          onComplete: () =>
          {
            navigate(newPath);
            setIsPageOut(false);
          }
        }
    );
      tl.fromTo(
        block2Ref.current,
        { y: "100%" }, 
        {
          y: "0%", 
          duration: 0.5,
          ease: "power2.in",
        },
        "<"
      );
      tl.fromTo(
        block1Ref.current,
        { y: "100%" }, 
        {
          y: "0%", 
          duration: 0.4,
          ease: "power2.in",
        },
        "<"
      );
    }
  }, [isPageOut]);

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
        ref={block1Ref}
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(135, 206, 235, 1)", // お好みの色に変更可能
          zIndex: 1, // 他のコンテンツより上に表示
          x: "-100%",
        }}
      />
      <Box
        ref={block2Ref}
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(255, 182, 193, 1)", // お好みの色に変更可能
          zIndex: 2, // 他のコンテンツより上に表示
          x: "-100%",
        }}
      />
      <Box
        ref={block3Ref}
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(50, 205, 50, 1)", // お好みの色に変更可能
          zIndex: 3, // 他のコンテンツより上に表示
          x: "-100%",
        }}
      />
    </Box>
  );
};

export default Layout;
