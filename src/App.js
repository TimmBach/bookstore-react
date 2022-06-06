import React, { useState } from "react";
import HeaderContainer from "./components/HeaderContainer/HeaderContainer";
import Hero from "./components/Hero/Hero";
import Sidebar from "./components/Sidebar/Sidebar";

const App = () => {
  const [click, setClick] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const handleClick = () => {
    setClick(!click);
  };

  const isSidebarOpen = () => {
    setSidebarOpen(!sidebarOpen);
  };
  return (
    <>
      <div className="flex">
        <div className="md:hidden">
          <Sidebar
            isSidebarOpen={isSidebarOpen}
            handleClick={handleClick}
            click={click}
          />
        </div>
        <div>
          <HeaderContainer
            isSidebarOpen={isSidebarOpen}
            handleClick={handleClick}
            click={click}
          />
          <Hero />
        </div>
      </div>
      ;
    </>
  );
};

export default App;
