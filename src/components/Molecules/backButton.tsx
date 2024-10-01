import React from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const BackButton = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1); // 前のページに戻る
  };

  return (
    <Button
      variant="contained"
      onClick={handleBack}
    >
      戻る
    </Button>
  );
};

export default BackButton;
