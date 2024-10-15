import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import addIcon from "../../assets/add-square-svgrepo-com.svg";


type AddPhotoButtonProps = {
  isModalOpen: boolean;
  setIsModalOpen: (isModalOpen: boolean) => void;
};

const AddPhotoButton = (props: AddPhotoButtonProps) =>
{
  const { isModalOpen, setIsModalOpen } = props;
  const handleClick = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <Box component={Button} onClick={handleClick}>
        <img
          src={addIcon}
          alt="Add Icon"
          style={{
            width: "5vh",
            height: "5vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        />
      </Box>
      
    </>
  );
};

export default AddPhotoButton;
