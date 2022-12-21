import React, { useContext } from "react";
import { HiOutlineMenuAlt2, HiOutlineMenuAlt3 } from "react-icons/hi";
import NavItems from "../Components/NavItems";
import CartNavigationIcon from "../Components/CartNavigationIcon";
import { useState } from "react";
import { AuthContext } from "../Context/AuthProvider";

function NavBar({incrementCart, SetIncrementCart}) {
  const [showNav, setShowNav] = useState(false);

  //const profile = useContext(AuthContext)

  return (
    <nav className="md:flex justify-between items-center bg-white sticky top-0 z-20">
      <div className="flex items-center justify-between">
        <a href="/">
          <img
            className="w-12 h-12 p-2"
            src="/images/shoppingcart-1066110386.webp"
            alt=""
          />
        </a>
        <CartNavigationIcon
          incrementCart={incrementCart}
          SetIncrementCart={SetIncrementCart}
          className="md:hidden flex"
          count={8}
        />

        {showNav ? (
          <HiOutlineMenuAlt3
            onClick={() => setShowNav(!showNav)}
            className="md:hidden block w-10 h-10 p-2 cursor-pointer"
          />
        ) : (
          <HiOutlineMenuAlt2
            onClick={() => setShowNav(!showNav)}
            className="md:hidden block w-10 h-10 p-2 cursor-pointer"
          />
        )}
      </div>
      <ul
        className={
          (showNav ? "left-0" : "-left-full") +
          " left-0 md:static md:flex md:space-y-0 md:space-x-7 items-center fixed  bottom-0 top-12 md:bg-transparent bg-opacity-90 bg-gray-600 md:w-auto w-10/12 md:text-gray-500 text-white space-y-5 p-2 transition"
        }
      >
        <NavItems content="Home" href="/" />
        <NavItems content="Shop" href="/shop" />
        <NavItems content="Contact" href="/contact" />
        <NavItems content="About" href="/about" />
        <CartNavigationIcon className="hidden md:flex" count={8} />
      </ul>
      <div className="text-center">
        {/* <img 
      className='w-10 h-10 rounded-full'
      src={profile.avatar} />
      <p className="text-xs"> {profile.name}</p> */}
      </div>
    </nav>
  );
}

export default NavBar;
