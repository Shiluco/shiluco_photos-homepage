import { Box } from "@mui/material";

import MenuIcon from "../atoms/MenuIcon";
import { useEffect, useState } from "react";


const MenuBar = () => {
  const [pageContent, setPageContent] = useState("null");


  useEffect(() => {
    const path = location.pathname;

    if (path === "/edit/profile") {
      setPageContent("profile");
    } else if (path === "/edit/photo") {
      setPageContent("photo");
    } else {
      setPageContent("null");
    }
  }, [location.pathname]);

  return (
    <Box
      height="98vh"
      sx={{
        backgroundColor: "rgba(0,0,0,0.1)",
        borderRadius: "8px",
        boxShadow: "1px 2px 9px rgba(0, 0, 0, 0.3)", // 影を追加
      }}
    >
      <Box padding={1} display={"flex"} flexDirection="column">
        <MenuIcon
          nextContent={"profile"}
          pageContent={pageContent}
          setPageContent={setPageContent}
        />
        <Box paddingTop={2} />
        <MenuIcon
          nextContent={"photo"}
          pageContent={pageContent}
          setPageContent={setPageContent}
        />
        <Box paddingTop={2} />
        <MenuIcon
          nextContent={"exit"}
          pageContent={pageContent}
          setPageContent={setPageContent}
        />
      </Box>
    </Box>
  );
};
export default MenuBar;
