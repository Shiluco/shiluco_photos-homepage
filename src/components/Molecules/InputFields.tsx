import { TextField, Typography } from "@mui/material";
import { useSelector } from "react-redux";

type InputFieldsProps = {
  id: string;
  setId: (id: string) => void;
  password: string;
  setPassword: (password: string) => void;
};

const InputFields = (props: InputFieldsProps) => {
  const { id, setId, password, setPassword } = props;
  const error = useSelector((state: { auth: { error: string } }) => state.auth);

  return (
    <>
      <TextField
        label="ID"
        variant="outlined"
        margin="normal"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <TextField
        label="Pass"
        type="password"
        variant="outlined"
        margin="normal"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {error.error && (
        <Typography color="error" variant="body2" gutterBottom>
          {error.error}
        </Typography>
      )}
    </>
  );
};

export default InputFields;
