import { useState, useEffect } from "react";
import { Container, Box, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { logIn, setErrorMessage } from "../../../store/authSlice";
import { useNavigate } from "react-router-dom";
import InputFields from "../Molecules/InputFields";
import LoginButton from "../atoms/logInButton";

const LogInBase = () => {
  const dispatch = useDispatch();
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

  return (
    <Container maxWidth="sm">
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        minHeight="90vh"
      >
        <Typography variant="h4" gutterBottom>
          LogIn
        </Typography>
        <InputFields
          id={id}
          setId={setId}
          password={password}
          setPassword={setPassword}
        />
        <LoginButton handleLogIn={handleLogIn} />
        
      </Box>
    </Container>
  );
};

export default LogInBase;
