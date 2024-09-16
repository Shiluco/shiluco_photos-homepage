import { Box,  Typography } from "@mui/material";
import Header from "../templates/Hedder";

const Contact = () => {
  const link =
    "https://www.instagram.com/shiluco_photos?igsh=ZXZyY2s0d3l5eGc5&utm_source=qr";

  return (
    <>
      <Header text = "Contact" />
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
      >
        <a href={link} style={{ textDecoration: "none", color: "inherit" }}>
          <Typography
            variant="h6"
            color="textPrimary"
            sx={{
              "&:hover": { color: "primary.main" },
            }}
          >
            instagram
          </Typography>
        </a>
      </Box>
    </>
  );
};

export default Contact;
