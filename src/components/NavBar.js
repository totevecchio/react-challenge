import React from "react";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import { FaHome, FaSignOutAlt, FaSignInAlt, FaIdBadge } from "react-icons/fa";
import NavbarIcon from "./NavbarIcon";
import { useAuth0 } from "@auth0/auth0-react";

const NavBar = () => {
  const { isAuthenticated } = useAuth0();
  return (
    <div
      className="fixed top-0 left-0 h-full	 w-16 m-0 flex flex-col bg-gray-900  
    text-white shadow-lg md:w-screen md:flex-row md:h-16"
    >
      <div
        className="left w-16 m-0 flex flex-col  mb-0 mt-0
    text-white shadow-lg md:w-screen md:flex-row md:h-16 md:justify-start"
      >
        <NavbarIcon
          icon={<FaHome size="28" />}
          text="Home"
          path="/"
          tooltipClassName="navbar-tooltip"
          iconClassName="navbar-icon"
        />
      </div>
      <div
        className="right w-16 m-0 flex flex-col 
    text-white shadow-lg md:w-screen md:flex-row md:h-16 md:justify-end"
      >
        {isAuthenticated ? (
          <LogoutButton
            icon={<FaSignOutAlt size="28" />}
            text="Logout"
            tooltipClassName="navbar-tooltip"
            iconClassName="navbar-icon-left"
          />
        ) : (
          <LoginButton
            icon={<FaSignInAlt size="28" />}
            text="Login"
            tooltipClassName="navbar-tooltip"
            iconClassName="navbar-icon-left"
          />
        )}
        <NavbarIcon
          icon={<FaIdBadge size="28" />}
          text="Profile"
          path="/profile"
          tooltipClassName="navbar-tooltip"
          iconClassName="navbar-icon-left"
        />
      </div>
    </div>
  );
};

export default NavBar;
