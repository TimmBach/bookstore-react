import React from "react";

const Sidebar = ({ handleClick, click }) => {
  return (
    <>
      <div className="border-2 w-72 h-full sticky">
        <div className="border-b px-2 py-3">CREATE ACCOUNT AND SIGN IN</div>
        <div className="border-b cursor-pointer px-2 py-3 hover:text-red-500">
          <button>Home</button>
        </div>
        <div className="border-b cursor-pointer px-2 py-3 hover:text-red-500">
          <button>eBOOKS</button>
        </div>
        <div className="border-b cursor-pointer px-2 py-3 hover:text-red-500">
          <button>AUDIOBOOKS</button>
        </div>
        <div className="border-b cursor-pointer px-2 py-3 hover:text-red-500">
          <button>APPS & eREADERS</button>
        </div>
        <div className="border-b cursor-pointer px-2 py-3 hover:text-red-500">
          <button>WISHLIST</button>
        </div>
        <div className="border-b cursor-pointer px-2 py-3 hover:text-red-500">
          <button>FEEDBACK</button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
