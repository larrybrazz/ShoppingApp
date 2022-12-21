import React, { useEffect } from "react";
import { useState } from "react";

 
const CartVolume = ({ product, cart }) => {
   const [incrementCart, SetIncrementCart] = useState(1);

  // useEffect(() => {
  //   total();
  // }, [cart, incrementCart]);

  // const total = () => {
  //   let totalValue = 0;
  //   for (let i = 0; i < cart.length; i++) {
  //     let cartPrice = cart[i].price;
  //     const totaladded =( cartPrice) * incrementCart;
  //     totalValue += totaladded;
  //   }
  //   setTotalPrice(totalValue);


  const increment = () => {
    SetIncrementCart((prevCart) => ++prevCart);
  };

  const decrement = () => {
    SetIncrementCart((prev) =>
      prev<= 1 ? (prev = 1) : --prev
    );
  };

  return (
    <div>
      <div className="my-2">
        <i onClick={() => decrement(product.id)} className="fa fa-minus"></i>{" "}
        <span className="rounded p-1 mx-2 border text-center">
          {" "}
          {incrementCart}
        </span>
        <i onClick={() => increment(product.id)} className="fa fa-plus"></i>{" "}
      </div>
    </div>
  );
};

export default CartVolume;
