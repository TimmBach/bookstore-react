import React from "react";
import Header from "./Header";
import Navbar from "./Navbar";

const HeaderContainer = ({ handleClick, click }) => {
  return (
    <>
      <div className="border border-t-4" />
      <div className="flex flex-col justify-start">
        <Header handleClick={handleClick} click={click} />

        <Navbar />
      </div>
      <div className="border " />
    </>
  );
};

export default HeaderContainer;
