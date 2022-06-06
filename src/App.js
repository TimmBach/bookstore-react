import React, { useState } from "react";
import HeaderContainer from "./components/HeaderContainer/HeaderContainer";
import Hero from "./components/Hero/Hero";
import Sidebar from "./components/Sidebar/Sidebar";

const App = () => {
  const [click, setClick] = useState(true);

  const handleClick = () => {
    setClick(!click);
  };

  return (
    <>
      <div className="flex">
        <div className="md:hidden">
          {click && <Sidebar handleClick={handleClick} click={click} />}
        </div>
        <div>
          <HeaderContainer handleClick={handleClick} click={click} />
          <Hero />
        </div>
      </div>
    </>
  );
};

export default App;
