import { Link } from "react-router-dom";
import { Box, Stack, Typography } from "@mui/material";
import { useState } from "react";

const NavigationLinks = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "auto",
        }}
      >
        <Stack direction="row" spacing={2}>
          <Typography component={Link} to="/" variant="h6" color="textPrimary">
            Top
          </Typography>
          <Box
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{ position: "relative" }}
          >
            <Typography
              component={Link}
              to="/gallery"
              variant="h6"
              color="textPrimary"
            >
              Gallery
            </Typography>
            {hovered && (
              <Stack
                direction="column"
                spacing={1}
                style={{
                  position: "absolute",
                }}
              >
                <Typography
                  component={Link}
                  to="/gallery/client-work"
                  variant="body1"
                  color="textSecondary"
                >
                  Client Work
                </Typography>
                <Typography
                  component={Link}
                  to="/gallery/portrait"
                  variant="body1"
                  color="textSecondary"
                >
                  Portrait
                </Typography>
                <Typography
                  component={Link}
                  to="/gallery/scenery"
                  variant="body1"
                  color="textSecondary"
                >
                  Scenery
                </Typography>
              </Stack>
            )}
          </Box>
          <Typography
            component={Link}
            to="/about"
            variant="h6"
            color="textPrimary"
          >
            About
          </Typography>
          <Typography
            component={Link}
            to="/contact"
            variant="h6"
            color="textPrimary"
          >
            Contact
          </Typography>
        </Stack>
      </Box>
    </>
  );
};

export default NavigationLinks;
