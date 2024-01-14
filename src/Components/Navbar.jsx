import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="flex  items-center justify-between capitalize px-4 p-1 fixed top-0 w-screen z-30">
        <NavLink
          to="/"
          className="w-10 h-10 rounded-lg bg-white flex items-center justify-center font-bold shadow-md text-textOne"
        >
          Kr
        </NavLink>
        <div className="flex  gap-4 text-textFour">
          <NavLink
            exact
            className="w-15 h-10 rounded-lg flex items-center justify-center font-medium p-2 shadow-md  "
            to="/about"
          >
            about
          </NavLink>
          <NavLink
            exact
            className="w-15 h-10 rounded-lg  flex items-center justify-center font-medium p-2 shadow-md  "
            to="/projects"
          >
            Projects
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Navbar;
