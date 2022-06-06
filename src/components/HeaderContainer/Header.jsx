import React, { useState } from "react";
import { FaBars, FaSearch, FaTimes } from "react-icons/fa";
import logo from "../../images/default.jpeg";
import HeaderActions from "./HeaderActions";
import SearchInput from "./SearchInput";

const Header = ({ handleClick, click }) => {
  const [searchOpen, setSearchOpen] = useState(false);

  const openSearch = () => {
    setSearchOpen(!searchOpen);
  };

  return (
    <>
      <nav className="relative container mx-0 md:mx-auto p-2 md:p-6 lg:w-82 min-w-full">
        <div className="flex flex-col">
          <div className="flex items-center justify-around mx-1">
            <div
              className="md:hidden absolute top-3 left-2"
              onClick={() => {
                handleClick();
              }}
            >
              {click ? (
                <FaTimes className="text-xl mr-4" />
              ) : (
                <FaBars className="text-xl mr-4" />
              )}
            </div>
            <div className="flex absolute top-1 md:relative justify-between h-14 ">
              <div className="mr-10 min-w-full">
                <img src={logo} alt="logo" className="w-20 border rounded-l" />
              </div>
            </div>
            <div className="hidden md:flex">
              <SearchInput />
            </div>
            <div className="flex items-center justify-center ">
              <HeaderActions openSearch={openSearch} />
            </div>
          </div>
          <div className="h-1 bg-slate-600 mt-10 w-full px-0 mx-0" />
          <div className="flex pt-4 justify-center w-full mx-0 px-0  ">
            {searchOpen && <SearchInput className="w-full border-slate-900" />}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
