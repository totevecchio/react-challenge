import React from "react";
import LoginButton from "./LoginButton";
import { FaSignInAlt } from "react-icons/fa";

const Login = () => {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <LoginButton
        icon={<FaSignInAlt size="200" />}
        text="Login"
        tooltipClassName="center-tooltip"
        iconClassName="navbar-icon-center"
      />
    </div>
  );
};

export default Login;
