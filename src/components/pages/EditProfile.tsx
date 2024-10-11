import { Box } from "@mui/material";
import MenuBar from "../Organisms/MenuBar";
import InputForm from "../Molecules/inputForm";
import { useAppDispatch, useAppSelector } from "../../../store/store";
import { useEffect } from "react";
import { fetchUserProfile } from "../../../store/userProfileSlice";

const EditProfile = () =>
{
  const { profile } = useAppSelector((state) => state.userProfile);
  const dispatch = useAppDispatch();
  useEffect(() =>
  {
    dispatch(fetchUserProfile());
  }
  , []);
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
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            flexGrow={1}
            
          >
            <InputForm
              formLabel="プロフィールのヘッダー"
              editRow="introduction_header"
              formValue={profile.introduction_header}
            />
            <InputForm
              formLabel="紹介文"
              editRow="introduction"
              formValue={profile.introduction}
            />
          </Box>
        </Box>
      </Box>
    </>
  );
};
export default EditProfile;
