import { Box, Stack, Typography } from "@mui/material";
import Header from "../templates/Hedder";
//file
import profile from "../../../public/profile.webp";

const Introduction = () => {
  return (
    <>
      <Header text="About" />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "20px",
          height: "90vh",
        }}
      >
        <Stack direction="row" spacing={2} alignItems="center">
          <img src={profile} alt="profile" style={{ width: "10vw" }} />
          <Stack direction="column" spacing={2}>
            <Typography variant="h6">
              こんにちは、Shiluco_photosです。
            </Typography>
            <Typography variant="h6" sx={{ marginTop: "16px" }}>
              このサイトは、私の写真を紹介するためのサイトです。
              <br />
              私は、日本の風景や建築物を中心に撮影しています。
              <br />
              このサイトを通じて、私の写真を楽しんでいただければ幸いです。
            </Typography>
          </Stack>
        </Stack>
      </Box>
    </>
  );
};

export default Introduction;
