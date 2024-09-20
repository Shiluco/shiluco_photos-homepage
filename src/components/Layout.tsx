// library
import { ReactNode, useRef } from "react";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useTransition } from "../context/TransitionContext";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const navigate = useNavigate();
  const {firstLoad, isPageIn, setIsPageIn, isPageOut, setIsPageOut, newPath } =
    useTransition();

  // アニメーションブロックの参照
  const block1Ref = useRef<HTMLDivElement>(null);
  const block2Ref = useRef<HTMLDivElement>(null);
  const block3Ref = useRef<HTMLDivElement>(null);

  //初期化
  useGSAP(() => {
    const tl = gsap.timeline();
    if (firstLoad) {
      tl.to(
        block1Ref.current,
        {
          y: "100%",
          duration: 0,
        }
      );
      tl.to(
        block2Ref.current,
        {
          y: "100%",
          duration: 0,
        },
        "<"
      );
      tl.to(
        block3Ref.current,
        {
          y: "100%",
          duration: 0,
        },
        "<"
      );
    }
  }, [firstLoad]);

  //ページインアニメーション
  useGSAP(() => {
    const tl = gsap.timeline();

    if (isPageIn ) {
      tl.fromTo(
        block1Ref.current,
        { y: "0%" },
        {
          y: "100%",
          duration: 0.6,
          ease: "power2.in",
          onComplete: () => {
            setIsPageIn(false);
          },
        }
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
    }
  }, [isPageIn]);

  //ページアウトアニメーション
  useGSAP(() => {
    const tl = gsap.timeline();
    if (isPageOut) {
      tl.fromTo(
        block3Ref.current,
        { y: "100%" },
        {
          y: "0%",
          duration: 0.6,
          ease: "power2.in",
          onComplete: () => {
            setIsPageOut(false);
            navigate(newPath);
            setIsPageIn(true);
          },
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
          backgroundColor: "rgba(54, 69, 79, 1)", // お好みの色に変更可能
          zIndex: 1, // 他のコンテンツより上に表示
          y: "100%",
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
          backgroundColor: "rgba(192, 192, 192, 1)", // お好みの色に変更可能
          zIndex: 2, // 他のコンテンツより上に表示
          y: "100%",
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
          backgroundColor: "rgba(25, 25, 40, 1)", // お好みの色に変更可能
          zIndex: 3, // 他のコンテンツより上に表示
          y: "100%",
        }}
      />
    </Box>
  );
};

export default Layout;
