import React from "react";
import { NavLink } from "react-router-dom"; // Import NavLink instead of Link

function Navbar() {
  return (
    <div>
      <header className="text-gray-600 body-font border-b">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center fixed z-50 bg-white">
          <NavLink
            to="/home"
            className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
          >
            <span className="ml-3 text-xl font-bold">TravelXplore</span>
          </NavLink>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <NavLink
              to="/home"
              className={({ isActive }) =>
                `mr-5 ${
                  isActive
                    ? "text-blue-500 font-semibold text-xl"
                    : "hover:text-gray-900"
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `mr-5 ${
                  isActive
                    ? "text-blue-500 font-semibold text-xl"
                    : "hover:text-gray-900"
                }`
              }
            >
              About
            </NavLink>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                `mr-5 ${
                  isActive
                    ? "text-blue-500 font-semibold text-xl"
                    : "hover:text-gray-900"
                }`
              }
            >
              Services
            </NavLink>
            <NavLink
              to="/explore"
              className={({ isActive }) =>
                `mr-5 ${
                  isActive
                    ? "text-blue-500 font-semibold text-xl"
                    : "hover:text-gray-900"
                }`
              }
            >
              Explore
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `mr-5 ${
                  isActive
                    ? "text-blue-500 font-semibold text-xl"
                    : "hover:text-gray-900"
                }`
              }
            >
              Contact Us
            </NavLink>
            <div class="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap items-end md:justify-end">
              <div class="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
                <input
                  type="text"
                  id="footer-field"
                  placeholder="Search"
                  name="footer-field"
                  class="w-full bg-gray-100 bg-opacity-50 border border-gray-300 focus:bg-transparent focus:ring-2 focus:ring-blue-200 focus:border-blue-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out rounded-3xl"
                />
              </div>
              <button class="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded-3xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 20"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                  />
                </svg>
                Search
              </button>
            </div>
          </nav>
          <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded-3xl text-base mt-4 md:mt-0 mr-2">
            Log In
          </button>
          <button className="inline-flex items-center bg-blue-450 border-0 py-1 px-3 focus:outline-none hover:bg-blue-700 bg-blue-800 text-white mt-4 md:mt-0 mr-2 rounded-3xl">
            Sign Up
          </button>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
