import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = ({
  icon,
  text = "tooltip",
  iconClassName,
  tooltipClassName,
}) => {
  const { logout } = useAuth0();

  return (
    <div
      onClick={() => logout({ returnTo: window.location.origin })}
      className={`${iconClassName} group`}
    >
      {icon}
      <span className={`${tooltipClassName} group-hover:scale-100`}>
        {text}
      </span>
    </div>
  );
};

export default LogoutButton;
