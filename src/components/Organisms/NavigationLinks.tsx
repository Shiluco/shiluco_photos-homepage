import { Box, Stack, Typography } from "@mui/material";
import { useTransition } from "../../context/TransitionContext";

const NavigationLinks = () => {
  const { setIsPageOut, setNewPath } = useTransition();
  const handleNext = (path: string) =>
  {
    setNewPath(path);
    setIsPageOut(true);
  };

  return (
    <Box>
      <Stack direction="row" spacing={2}>
        <Typography
          variant="h6"
          color="textPrimary"
          sx={{
            textDecoration: "none",
            cursor: "pointer",
            "&:hover": { color: "primary.main" },
          }}
          onClick={() => handleNext("/")}
        >
          Top
        </Typography>
        <Typography
          variant="h6"
          color="textPrimary"
          sx={{
            textDecoration: "none",
            cursor: "pointer",
            "&:hover": { color: "primary.main" },
          }}
          onClick={() => handleNext("/about")}
        >
          About
        </Typography>
        <Typography
          variant="h6"
          color="textPrimary"
          sx={{
            textDecoration: "none",
            cursor: "pointer",
            "&:hover": { color: "primary.main" },
          }}
          onClick={() => handleNext("/contact")}
        >
          Contact
        </Typography>
        <Box sx={{ position: "relative" }}>
          <Typography
            variant="h6"
            color="textPrimary"
            sx={{
              textDecoration: "none",
              cursor: "pointer",
              "&:hover": { color: "primary.main" },
            }}
            onClick={() => handleNext("/gallery")}
          >
            Gallery
          </Typography>
        </Box>
      </Stack>
    </Box>
  );
};

export default NavigationLinks;
