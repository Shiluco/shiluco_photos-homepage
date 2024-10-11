import { Box, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";

import { useAppDispatch } from "../../../store/store";
import { updateProfile } from "../../../store/userProfileSlice";
import { useAppSelector } from "../../../store/store";
import { Profile } from "../../../types/profile";
type InputFormProps = {
  formLabel: string;
  editRow: string;
  formValue: string;
};

const InputForm = (props: InputFormProps) => {
  const { formLabel, formValue, editRow } = props;
  const [text, setText] = useState("hello");
  const dispatch = useAppDispatch();
  const { profile } = useAppSelector((state) => state.userProfile);

  // テキストを更新
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleUpdateProfile = () => {
    const newValues: Profile = { ...profile, [editRow]: text };
    dispatch(updateProfile(newValues));
    
  };

  useEffect(() => {
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
