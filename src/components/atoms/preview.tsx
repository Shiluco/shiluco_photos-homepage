import { Box } from "@mui/material";
import { useAppSelector } from "../../../store/store";

type PreviewProps = {
  url: string;
};

const Preview = (props: PreviewProps) => {
  const { url } = props;
  const { photo } = useAppSelector((state) => state.photo);

  const isPortrait = window.innerHeight > window.innerWidth;

  return photo ? (
    <Box padding={2}>
      <Box
      component="img"
      src={url}
      sx={{
        width: isPortrait ? "20vh" : "auto",
        height: isPortrait ? "auto" : "20vh",
        borderRadius: "8px",
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 1)",
      }}
    />
    </Box>
    
  ) : "null";
};
export default Preview;
