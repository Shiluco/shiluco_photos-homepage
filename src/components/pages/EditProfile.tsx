import { Box } from "@mui/material";
import MenuBar from "../Organisms/MenuBar";
import InputForm from "../Molecules/inputForm";

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
      <Box display={"flex"}>
        <Box>
          <MenuBar />
        </Box>



        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          flexGrow={1}
        >
          <InputForm formLabel="プロフィールのヘッダー" formValue="jslf" />
          <InputForm formLabel="紹介文" formValue="jslf" />
        </Box>
      </Box>
    </Box>
  </>
);
export default EditProfile;
