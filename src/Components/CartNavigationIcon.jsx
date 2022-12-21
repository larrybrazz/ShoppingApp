import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import CartProducts from "./CartProducts";

import { CartItems } from "../App";

const COMMON_STYLES =
  "flex justify-center items-center rounded-full text-white";

const CartNavigationIcon = ({ className }) => {
  const [display, setDisplay] = useState(false);

  const objectContext = useContext(CartItems);
  const {
    cart,
    setCart,
    removeFromCart,
    incrementCart,
    SetIncrementCart,
    decrement,
    increment,
    count,
    setCount,
  } = objectContext;

  let totalCartPrice = 0

  const displayCart = () => {
    setDisplay((prev) => !prev);
  };

  const cartItems = cart.map((product) => {
    totalCartPrice += product.price * (incrementCart != null ? incrementCart : " 0 " )
    return (
      <CartProducts
        product={product}
        setCount={setCount}
        cart={cart}
        setCart={setCart}
        decrement={decrement}
        increment={increment}
        removeFromCart={removeFromCart}
        incrementCart={incrementCart}
        SetIncrementCart={SetIncrementCart}
      />
    )
  });

  return (
    <div>
      <button
        onClick={displayCart}
        className={`${className} ${COMMON_STYLES} w-8 h-8 bg-gray-900`}
      >
        <AiOutlineShoppingCart />

        <div
          className={
            COMMON_STYLES + "w-6 h-6 text-xs text-yellow-400 font-semibold"
          }
        >
          {count <= 9 ? count : "9+"}
        </div>
      </button>
      <div>
        {display && (
          <div className="relative">
            <div className="cartDropdown h-screen w-screen   bg-slate-70 rounded p-2">
              {cartItems}
              <div className="my-4">Total price = ${totalCartPrice} </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartNavigationIcon;
