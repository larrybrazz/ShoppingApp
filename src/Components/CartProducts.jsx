import React, { Component, useEffect } from 'react'
import { useState } from 'react';
import CartVolume from './CartVolume';

const CartProducts = ({
  product,
  cart,
  setCart,
  setCount,
  increment,
  decrement,
  totalPrice,
  incrementCart,
  SetIncrementCart
}) => {

  const removeFromCart = (product) => {
    let cartCopy = [...cart];
    cartCopy = cartCopy.filter((cartItem) => cartItem.id !== product.id);
    setCart(cartCopy);
    setCount((prev) => prev - 1);
  };

  return (
    <div>
      <div className="border-y-2 flex space-x-8 p-2 text-white " style={{}}>
        <img
          style={{ width: "100px", height: "100px" }}
          src={product.img}
          alt=""
        />
        <div>
          <p className="font-semibold text-2xl">{product.productName}</p>
          <p>{product.description}</p>
          <CartVolume
            decrement={decrement}
            increment={increment}
            SetIncrementCart={SetIncrementCart}
            incrementCart={incrementCart}
            product={product}
            totalPrice={totalPrice}
            cart={cart}
          />
          <div className="flex justify-between mt-8">
            <i
              onClick={() => removeFromCart(product)}
              className="fa fa-trash p-2 text-red-500 bg-slate-600 rounded-full"
            ></i>{" "}
            <p className="font-bold">${product.price}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartProducts