import { Box, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";

import { useDispatch } from "react-redux";
import { updateProfile } from "../../../store/userProfileSlice";
import { useAppSelector } from "../../../store/store";
type InputFormProps = {
  formLabel: string;
  editRow: string;  
  formValue: string;
};

const InputForm = (props: InputFormProps) => {
  const { formLabel, formValue ,editRow} = props;
  const [text, setText] = useState("hello");
  const dispatch = useDispatch(); 
  const { profile } = useAppSelector((state) => state.userProfile);




  // テキストを更新
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleUpdateProfile = () =>
  {
    
    const newValues = { ...profile, [editRow]: text }; 
    console.log(newValues);
  }


  useEffect(() =>
  {
    
    setText(formValue);
  }, []);

  return (
    <Box>
      <Typography variant="body1">{formLabel}</Typography>
      <TextField
        value={text}
        onChange={handleInputChange}
        onBlur={handleUpdateProfile}
        multiline
      />
    </Box>
  );
};

export default InputForm;
