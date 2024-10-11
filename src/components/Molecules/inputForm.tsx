import { Box, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";

type InputFormProps = {
  formLabel: string;
  formValue: string;
};

const InputForm = (props: InputFormProps) => {
  const { formLabel, formValue } = props;
  const [text, setText] = useState("hello");
  

  // テキストを更新
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  useEffect(() => {
    console.log("effect:" + text);
  });

  return (
    <Box>
      <Typography variant="body1">{formLabel}</Typography>
      <TextField
        value={formValue}
        onChange={handleInputChange}
        onBlur={() => console.log(text)}
        multiline
      />
    </Box>
  );
};

export default InputForm;
