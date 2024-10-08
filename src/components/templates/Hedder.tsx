import { Stack, Typography } from "@mui/material";
import NavigationLinks from "../Organisms/NavigationLinks";


const Header = () => {
  return (
    <Stack
      direction="row"
      spacing={2}
      alignItems="center"
      justifyContent="space-between"
      paddingLeft="2%"
      paddingRight="2%"
      paddingY={2}
      sx={{
        backgroundColor: "rgba(0, 0, 0, 0)", // 黒の透明感
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)", 
        
      }}
    >
      <Typography variant="h4">
        SlPs
      </Typography>
      <NavigationLinks />
    </Stack>
  );
};

export default Header;
