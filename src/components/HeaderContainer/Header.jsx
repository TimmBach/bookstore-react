import React from "react";
import { FaBars, FaSearch, FaTimes } from "react-icons/fa";
import logo from "../../images/default.jpeg";
import HeaderActions from "./HeaderActions";

const Header = ({ handleClick, click, isSidebarOpen }) => {
  return (
    <>
      <nav className="relative container mx-auto p-6 ">
        <div className="flex items-center justify-between mx-20">
          <div
            className="lg:hidden"
            onClick={() => {
              handleClick();
              isSidebarOpen();
            }}
          >
            {click ? <FaTimes /> : <FaBars />}
          </div>
          <div className="flex justify-between h-14 ">
            <div className="">
              <img src={logo} alt="logo" className="w-20 border rounded-l" />
            </div>
            <div className="flex">
              <form action="" className="flex ">
                <label class="relative block w-80">
                  <span class="sr-only">Search</span>
                  <span class="absolute inset-y-0 left-0 flex items-center pl-2">
                    <svg
                      class="h-5 w-5 fill-slate-300"
                      viewBox="0 0 20 20"
                    ></svg>
                  </span>
                  <input
                    class=" placeholder:text-black block bg-white w-full border border-slate-300 rounded-l-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                    placeholder="Search by title, author, series"
                    type="text"
                    name="search"
                  />
                </label>
                <button className="bg-gray-200 w-10 h-10 flex justify-center items-center border rounded-r-md">
                  <FaSearch />
                </button>
              </form>
            </div>
          </div>
          <div className="flex items-center justify-start ">
            <HeaderActions />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
