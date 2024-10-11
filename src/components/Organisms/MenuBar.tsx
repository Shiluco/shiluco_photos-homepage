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
      setPageContent("null"); // デフォルトの値
    }
  }, [location.pathname]);

  return (
    <Box
      height="98vh"
      sx={{ backgroundColor: "rgba(0,0,0,0.05)", borderRadius: "8px" }}
    >
      <Box padding={1} display={"flex"} flexDirection="column">
        <MenuIcon
          nextContent={"profile"}
          pageContent={pageContent}
          setPageContent={setPageContent}
        />
        <MenuIcon
          nextContent={"photo"}
          pageContent={pageContent}
          setPageContent={setPageContent}
        />
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
