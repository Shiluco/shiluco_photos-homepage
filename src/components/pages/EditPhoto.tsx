import { Box } from "@mui/material";
import MenuBar from "../Organisms/MenuBar";
import ImgSort from "../Organisms/imgSort";


const EditPhoto = () => (
  <>
    <Box
      sx={{
        height: "100vh",
        width: "100vw",
        padding: "10px",
        backgroundColor: "rgba(0,0,0,0.1)",
      }}
    >
      <Box display={"flex"}>
        <Box>
          <MenuBar />
        </Box>

        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexGrow={1}
        >
          <Box padding={3}/>
          <ImgSort/>
        </Box>
      </Box>
    </Box>
  </>
);

export default EditPhoto;
