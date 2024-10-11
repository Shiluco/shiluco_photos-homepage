import Box from "@mui/material/Box";
import photoIcon from "../../assets/photo-upload-svgrepo-com.svg";
import plofileIcon from "../../assets/profile-svgrepo-com.svg";
import exitIcon from "../../assets/exit-svgrepo-com.svg";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

type menuIconProps = {
  nextContent: string;
  pageContent: string;
  setPageContent: (pageContent: string) => void;
};

const MenuIcon = (props: menuIconProps) => {
  const { nextContent, pageContent, setPageContent } = props;
  const navigate = useNavigate();

  const iconSelector = () => {
    if (nextContent === "profile") {
      return plofileIcon;
    } else if (nextContent === "photo") {
      return photoIcon;
    }
    return exitIcon;
  };

  const handleNext = (path: string) => {
    setPageContent(nextContent);
    if (path === "exit") {
      navigate("/");
    } else {
      navigate(`/edit/${path}`, { state: { pageContent: nextContent } });
    }
  };

  useEffect(() => {
    console.log("pageContent:" + pageContent);
  }, [pageContent]);

  return (
    <>
      <Box
        key={nextContent}
        component="img"
        src={iconSelector()}
        onClick={() => {
          console.log("click:" + nextContent);
          handleNext(nextContent);
        }}
        height="5vh"
        padding={1}
        sx={{
          opacity: 0.8,
          backgroundColor:
            pageContent === nextContent
              ? "rgba(255,255,255,0.5)"
              : "transparent", // 一致したら背景を白に
          borderRadius: 1, // 角を少し丸くしたい場合
        }}
      />
    </>
  );
};

export default MenuIcon;
