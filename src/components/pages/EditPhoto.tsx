import { Box } from "@mui/material";
import MenuBar from "../Organisms/MenuBar";
import ImgSort from "../Organisms/imgSort";
import AddPhotoButton from "../atoms/addPhotoButton";
import { useState } from "react";
import AddPhotoModal from "../templates/addPhotoModal";

const EditPhoto = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <Box
        zIndex={0}
        sx={{
          height: "100vh",
          width: "100vw",
          padding: "10px",
          backgroundColor: "rgba(0,0,0,0.1)",
        }}
      >
        <Box display={"flex"}>
          <Box paddingRight={3}>
            <MenuBar />
          </Box>

          <Box display="flex" flexDirection="column" alignItems="center">
            <ImgSort />
            <Box marginTop={2}>
              <AddPhotoButton
                isModalOpen={isModalOpen}
                setIsModalOpen={setIsModalOpen}
              />
            </Box>
          </Box>
        </Box>
      </Box>
      {isModalOpen && (
        <>
          <AddPhotoModal
            isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}
          />
        </>
      )}
    </>
  );
};

export default EditPhoto;
