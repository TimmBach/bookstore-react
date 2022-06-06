import React from "react";
import NavItem from "./NavItem";

const navItems = ["eBOOKS", "AUDIOBOOKS", "APPS & eREADERS"];

const Navbar = () => {
  return (
    <>
      <nav className=" container mx-auto p-6 flex ">
        {navItems.map((navItem, index) => {
          return <NavItem navItem={navItem} />;
        })}
      </nav>
    </>
  );
};

export default Navbar;
