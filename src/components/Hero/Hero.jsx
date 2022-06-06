import React from "react";
import heroImage from "../../images/book-quote.jpeg";

const Hero = () => {
  return (
    <div className="mx-auto pt-0 w-full lg:w-2/3">
      <img src={heroImage} alt="Hero" />
    </div>
  );
};

export default Hero;
