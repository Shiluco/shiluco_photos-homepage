import { Box, Typography } from "@mui/material";

import MenuBar from "../Organisms/MenuBar";

const Edit = () => {
  return (
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
            <Typography variant="h4">編集してみよう！</Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Edit;
