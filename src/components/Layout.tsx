import { Box } from "@mui/material";
import { useEffect, ReactNode } from "react";
import { useLocation } from "react-router-dom";
import usePageTransition from "../hooks/usePageTransition"; // usePageTransition をインポート

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { pageRef, handleNext } = usePageTransition(); // usePageTransition を使用
  const location = useLocation();

  useEffect(() => {
    // ページ遷移時のエントリーアニメーション
    handleNext(location.pathname); // 現在のパスを渡してアニメーション
  }, [location.pathname]); // location.pathname の変更を監視

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
