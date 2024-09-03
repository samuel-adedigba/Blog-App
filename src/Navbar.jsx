import React from "react";
import { Link } from "react-router-dom";
import "./Css/Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          {" "}
          <Link to="/">Home</Link>{" "}
        </li>

        <li>
          {" "}
          <Link to="/news">News</Link>{" "}
        </li>

        <li>
          {" "}
          <Link to="/health">Health</Link>{" "}
        </li>

        {/* <li> <Link to='/category'>
        Tags
        </Link> </li> */}

        <li>
          {" "}
          <Link to="/profile">Profile</Link>{" "}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
