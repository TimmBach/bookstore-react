import React from "react";

const Sidebar = ({ handleClick, click, isSidebarOpen, sidebarOpen }) => {
  return (
    <div className={(sidebarOpen && "hidden") + "border-2 w-72"}>Sidebar</div>
  );
};

export default Sidebar;
