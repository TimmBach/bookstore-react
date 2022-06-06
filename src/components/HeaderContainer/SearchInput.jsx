import React from "react";
import { FaSearch } from "react-icons/fa";

const Searchbar = () => {
  return (
    <>
      <div className="flex ">
        <form
          action=""
          className="flex justify-center w-full   border border-slate-900  rounded-md"
        >
          <label class="relative block w-96">
            <span class="sr-only">Search</span>
            <span class="absolute inset-y-0 left-0 flex items-center pl-2">
              <svg class="h-5 w-5 fill-slate-300" viewBox="0 0 20 20"></svg>
            </span>
            <input
              class=" placeholder:text-black block bg-white w-full  py-2 pl-9 pr-3 shadow-sm "
              placeholder="Search by title, author, series"
              type="text"
              name="search"
            />
          </label>

          {/* border border-slate-300 rounded-l-md 
          
          focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm
          */}
          <button className=" bg-gray-300 w-10 h-10 flex justify-center items-center ">
            <FaSearch />
          </button>
        </form>
      </div>
    </>
  );
};

export default Searchbar;
