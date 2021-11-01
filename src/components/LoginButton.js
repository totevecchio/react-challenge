import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = ({
  icon,
  text = "tooltip",
  iconClassName,
  tooltipClassName,
}) => {
  const { loginWithRedirect } = useAuth0();

  return (
    <div
      onClick={() => loginWithRedirect()}
      className={`${iconClassName} group`}
    >
      {icon}
      <span className={`${tooltipClassName} group-hover:scale-100`}>
        {text}
      </span>
    </div>
  );
};

export default LoginButton;
