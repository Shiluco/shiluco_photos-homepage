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
        justifyContent="space-evenly"
        alignItems="center"
        height="90vh"
      >
        <Typography
          variant="h1"
          style={{
            writingMode: "vertical-rl",
            transform: "rotate(180deg)",
          }}
        >
          Shiluco
        </Typography>

        <img
          src={topimage}
          alt="topimage"
          style={{
            height: "90%",
            borderRadius: "2px",
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.3)",
          }}
        />

        <Typography variant="h1" style={{ writingMode: "vertical-lr" }}>
          Photos
        </Typography>
      </Box>
    </>
  );
};

export default Top;
