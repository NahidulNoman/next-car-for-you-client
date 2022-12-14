import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../UserContext/UserContext";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handlerLogOut = () => {
    logOut();
  };

  const menuItems = (
    <>
      <li className="font-semibold ">
        <Link to="/home" className="rounded-lg">
          Home
        </Link>
      </li>
      <li className="font-semibold">
        <Link to="/blog" className="rounded-lg">
          Blog
        </Link>
      </li>
      <li className="font-semibold">
        <Link to="/dashboard" className="rounded-lg">
        DashBoard
        </Link>
      </li>
      {user?.email ? (
        <>
          <li onClick={handlerLogOut} className="font-semibold">
            <span className="rounded-lg">Log Out</span>
          </li>
        </>
      ) : (
        <>
          <li className="font-semibold">
            <Link to="/login" className="rounded-lg">
              Log In
            </Link>
          </li>
        </>
      )}
    </>
  );

  return (
    <div className="navbar bg-white shadow-sm rounded-lg flex justify-between">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={1}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-white rounded-box w-52"
          >
            {menuItems}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-accent normal-case text-xl">
          Next Car For You
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{menuItems}</ul>
      </div>
      <label
        htmlFor="dashboard-drawer"
        tabIndex={2}
        className="btn btn-ghost lg:hidden"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16"
          />
        </svg>
      </label>
    </div>
  );
};

export default NavBar;
