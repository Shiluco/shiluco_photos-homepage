import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TextField, Button, Container, Typography, Box } from "@mui/material";
import { logIn, setErrorMessage } from "../../../store/authSlice";
import { useNavigate } from "react-router-dom";

const LogIn = () => {
  const dispatch = useDispatch();
  const [message, setMessage] = useState("");
  const error = useSelector((state: { auth: { error: string } }) => state.auth);
  const isLogIn = useSelector(
    (state: { auth: { isLogIn: boolean } }) => state.auth.isLogIn
  );
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogIn = () => {
    if (id && password) {
      dispatch(logIn({ id, password }));
    } else {
      dispatch(setErrorMessage("IDとパスワードを入力してください"));
    }
  };

  useEffect(() => {
    if (isLogIn) {
      navigate("/edit");
    }
  }, [isLogIn, navigate]);

useEffect(() => {
  setMessage(error.error); 
}, [error]);

  return (
    <Container maxWidth="sm">
      <Box display="flex" flexDirection="column" alignItems="center" mt={8}>
        <Typography variant="h4" gutterBottom>
          ログイン
        </Typography>
        <TextField
          label="ID"
          variant="outlined"
          fullWidth
          margin="normal"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <TextField
          label="パスワード"
          type="password"
          variant="outlined"
          fullWidth
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error.error && (
          <Typography color="error" variant="body2" gutterBottom>
            {message}
          </Typography>
        )}
        <Button variant="contained" color="primary" onClick={handleLogIn}>
          ログイン
        </Button>
      </Box>
    </Container>
  );
};

export default LogIn;
