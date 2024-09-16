// library
import { Box } from "@mui/material";
//
import NavigationLinks from "../Organisms/NavigationLinks";
// file
import topimage from "../../../public/photos/Scenery/DSC02333.jpg";

const Top = () => {
  return (
    <>
      
      <NavigationLinks />
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh" // 画面全体の高さに合わせる
      >
        <img src={topimage} alt="topimage" style={{ width: "60%" }} />
      </Box>
    </>
  );
};

export default Top;
