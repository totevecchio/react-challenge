import React from "react";
import { Link } from "react-router-dom";

const NavbarIcon = ({
  icon,
  text = "tooltip",
  path,
  target,
  iconClassName,
  tooltipClassName,
}) => {
  return (
    <Link to={path} target={target}>
      <div className={`${iconClassName} group`}>
        {icon}
        <span className={`${tooltipClassName} group-hover:scale-100`}>
          {text}
        </span>
      </div>
    </Link>
  );
};

export default NavbarIcon;
