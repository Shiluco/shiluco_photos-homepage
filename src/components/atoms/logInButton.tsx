import { useRef, useEffect } from "react";
import { Box } from "@mui/material";
import gsap from "gsap";
import LoginIcon from "../../assets/login-svgrepo-com.svg";

type LoginButtonProps = {
  handleLogIn: () => void;
};

const LoginButton = (props: LoginButtonProps) =>
{
  const { handleLogIn } = props;
  const iconRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(iconRef.current, { scale: 0.8 }, { scale: 1, duration: 0.5 });
  }, []);

  return (
    <Box
      component="img"
      src={LoginIcon}
      height="60px"
      mt={5}
      ref={iconRef}
      onMouseEnter={() =>
        gsap.to(iconRef.current, { scale: 1.1, duration: 0.3 })
      }
      onMouseLeave={() => gsap.to(iconRef.current, { scale: 1, duration: 0.3 })}
      onClick={handleLogIn}
    />
  );
};

export default LoginButton;
