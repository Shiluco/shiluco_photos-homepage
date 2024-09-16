// library
import { Box, Typography } from "@mui/material";
// file
import topimage from "../../../public/photos/Portrait/02.jpg";
import Header from "../templates/Hedder";

const Top = () => {
  return (
    <>
      <Header text="Top" />

      <Box
        display="flex"
        justifyContent="space-evenly" // 要素を均等に分ける（左右の端にもスペースを作る）
        alignItems="center"
        height="90vh" // 画面全体の高さに合わせる
      >
        <Typography
          variant="h1"
          style={{
            writingMode: "vertical-rl",
            transform: "rotate(180deg)",
          }}
        >
          shiluco
        </Typography>

        <img src={topimage} alt="topimage" style={{ width: "70%" }} />
        <Typography variant="h1" style={{ writingMode: "vertical-lr" }}>
          photos
        </Typography>
      </Box>
    </>
  );
};

export default Top;
