// component/NavBar.js

import { NavLink } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav>
      <ul>
        <div className="Title">Leon's Project Portfolio</div>
        <div className="Links">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/projects">Projects</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default NavBar;
