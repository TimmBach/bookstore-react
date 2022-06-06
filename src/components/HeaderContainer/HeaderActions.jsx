import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { GiShoppingCart } from "react-icons/gi";

const HeaderActions = () => {
  return (
    <>
      <div className="flex justify-between items-center space-x-8">
        {/* wishlist */}
        <div className="flex items-center flex-col ">
          <FaRegHeart />
          <h3 className="text-gray-600">Wishlist</h3>
        </div>
        {/* cart */}
        <div className="flex items-center flex-col">
          <GiShoppingCart />
          <h3 className="text-gray-600">Cart</h3>
        </div>
        {/* create account/ sign up/ sign in */}
        <div className="flex flex-col">
          <button class="rounded-none bg-red-700 text-white w-auto h-14">
            Create Account
          </button>
          <div className="flex">
            <h3 className="text-gray-600">Have an account already?</h3>
            <a href="/" className="text-red-700 ml-1">
              Sign in
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderActions;
