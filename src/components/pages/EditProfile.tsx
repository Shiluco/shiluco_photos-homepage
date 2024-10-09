import { Box, Typography } from "@mui/material";
import MenuBar from "../Organisms/MenuBar";


const EditProfile = () => (
  <>
    <Box
        sx={{
          height: "100vh",
          width: "100vw",
          padding: "10px",
          backgroundColor: "rgba(0,0,0,0.1)",
        }}
      >
        <Box display={"flex"} >
          <Box>
            <MenuBar/>
          </Box>
          
            <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexGrow={1}
            >
            <Typography variant="h1">
              Edit Profile
            </Typography>
            </Box>

            

        </Box>
      </Box>
    </>
)
export default EditProfile;
