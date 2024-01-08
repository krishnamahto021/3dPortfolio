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
        <div className="flex  gap-4">
          <NavLink
            exact
            className={({ isActive }) =>
              isActive ? "text-blue-600" : "text-black"
            }
            to="/about"
          >
            about
          </NavLink>
          <NavLink
            exact
            className={({ isActive }) =>
              isActive ? "text-blue-600" : "text-black"
            }
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
