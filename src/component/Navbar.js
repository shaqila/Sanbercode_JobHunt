import Cookies from "js-cookie";
import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";

const Navbar = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleLogout = () => {
    Cookies.remove("token");
    navigate("/login");
  };

  return (
    <nav className="px-5 md:px-20 sticky top-0 z-50 bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <NavLink to="/" className="flex items-center">
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            JobHunt
          </span>
        </NavLink>
        <div className="md:hidden mt-2">
          <button
            onClick={toggleMenu}
            whileHover={{
              scale: 1.2,
              transition: { duration: 0.5 },
            }}
            whileTap={{ scale: 0.9 }}
            className="text-slate-800"
          >
            {showMenu ? <FaTimes size={24} /> : <GiHamburgerMenu size={24} />}
          </button>
        </div>

        <div className="hidden md:flex space-x-8 font-semibold">
          {[
            ["Home", "/"],
            ["Job Vacancy", "/job-vacancy"],
          ].map(([title, url]) => (
            <Link
              key={title}
              to={url}
              className="rounded-lg px-3 py-2 my-auto text-slate-800 font-bold hover:text-slate-700 hover:-translate-y-0.5 duration-75"
            >
              {title}
            </Link>
          ))}
          {!Cookies.get("token") && (
            <Link
              to="/login"
              className="my-auto block py-1 px-4 border-2 border-slate-800 text-slate-800 rounded-lg hover:-translate-y-0.5 duration-75 hover:shadow-lg"
            >
              Login
            </Link>
          )}
          {Cookies.get("token") && (
            <div>
              <Link
                to="/dashboard"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700"
              >
                Dashboard
              </Link>
              <button
                onClick={handleLogout}
                className="block py-2 pl-3 pr-4 text-red-600 rounded hover:bg-red-900 md:hover:bg-transparent md:border-0 md:hover:text-red-900 "
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>

      {showMenu && (
        <div className="lg:hidden flex flex-col mt-4 font-semibold">
          {[
            ["Home", "/"],
            ["Job Vacancy", "/job-vacancy"],
          ].map(([title, url]) => (
            <Link
              key={title}
              href={url}
              className="rounded-lg px-3 py-2 my-auto text-slate-800 font-bold hover:text-slate-700 hover:-translate-y-0.5 duration-75"
            >
              {title}
            </Link>
          ))}
          {!Cookies.get("token") && (
            <Link
              to="/login"
              className="block mx-3 my-2 p-1 px-3 text-slate-800 border-2 border-slate-800 w-fit mb-5 rounded-lg hover:-translate-y-0.5 duration-75 hover:shadow-lg"
            >
              Login
            </Link>
          )}
          {Cookies.get("token") && (
            <div>
              <Link
                to="/dashboard"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Dashboard
              </Link>
              <button
                onClick={handleLogout}
                className="block py-2 pl-3 pr-4 text-red-600 rounded hover:bg-red-900 md:hover:bg-transparent md:border-0 md:hover:text-red-900 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent "
              >
                Logout
              </button>
            </div>
          )}
        </div>
      )}
      {/* <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div className="flex justify-between">
          <NavLink to="/" className="flex items-center">
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              JobHunt
            </span>
          </NavLink>
          <div className="lg:hidden mt-2 items-end">
            <button
              onClick={toggleMenu}
              whileHover={{
                scale: 1.2,
                transition: { duration: 0.5 },
              }}
              whileTap={{ scale: 0.9 }}
              className="text-slate-800"
            >
              {showMenu ? <FaTimes size={24} /> : <GiHamburgerMenu size={24} />}
            </button>
          </div>
          <div className="hidden lg:flex space-x-8 font-semibold">
            {[
              ["About", "/"],
              ["Projects", "/"],
              ["Contacts", "/"],
            ].map(([title, url]) => (
              <Link
                key={title}
                href={url}
                className="rounded-lg px-3 py-2 my-auto text-slate-800 font-bold hover:text-slate-700 hover:-translate-y-0.5 duration-75"
              >
                {title}
              </Link>
            ))}
          </div>
        </div>
        {showMenu && (
          <div className="lg:hidden mt-4 font-semibold">
            {[
              ["About", "/"],
              ["Projects", "/"],
              ["Contacts", "/"],
            ].map(([title, url]) => (
              <a
                key={title}
                href={url}
                className="rounded-lg block px-3 py-2 my-auto text-slate-800 font-bold hover:text-slate-700 hover:-translate-y-0.5 duration-75"
              >
                {title}
              </a>
            ))}
          </div>
        )}
      </div> */}
    </nav>
  );
};

export default Navbar;
