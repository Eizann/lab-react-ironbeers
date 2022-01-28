import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
  return (
    <div className="navBar">
      <Link to="/">
        <FontAwesomeIcon className="home-icon" icon={faHome} />
      </Link>
    </div>
  );
};

export default NavBar;
