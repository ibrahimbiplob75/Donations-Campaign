import React from 'react';
import { NavLink } from 'react-router-dom';


const Header = () => {
    const list = (
      <>
        <li>
          <NavLink className="text-2xl" to="/home">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className="text-2xl " to="/donations">
            Donations
          </NavLink>
        </li>
        <li>
          <NavLink className="text-2xl" to="/statistics">
            Statistics
          </NavLink>
        </li>
      </>
    );
        
    return (
      <div>
        <div className="navbar bg-base-100 justify-around m-12">
          <div className="navbar-start">
            <a className="normal-case text-xl">
              <img
                src={"/public/Resources/Logo.png"}
                width="220"
                height="110"
              />
            </a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{list}</ul>
          </div>
          <div className="dropdown mr-52">
            <label tabIndex={0} className="btn btn-ghost lg:hidden ">
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
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] pr-6 shadow bg-base-100 rounded-box w-52"
            >
              {list}
            </ul>
          </div>
        </div>
      </div>
    );
};

export default Header;