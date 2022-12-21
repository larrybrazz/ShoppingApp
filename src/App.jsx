import "./App.css";

import React, { useEffect, useState } from "react";
import Home from "./Pages/NavBar";
import FeatureTitle from "./Components/FeatureTitle";
import BrowserRouter from "react-router-dom/BrowserRouter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import NavBar from "./Pages/NavBar";
import Slider from "./Components/Slider";
import Products from "./Components/Products";

export const CartItems = React.createContext();

function App({ incrementCart, SetIncrementCart }) {
  const [cart, setCart] = useState([]);
  const [count, setCount] = useState(0);
  const [state, setState] = useState();

  const handleLogin = () => {};
  const handleLogout = () => {};

  const addToCart = (product) => {
    if (!cart.length) {
      setCart((prevCart) => [...prevCart, product]);
      setCount((prev) => prev + 1);
    } else {
      const productsFound = cart.filter((item) => {
        return item.id === product.id;
      });

      if (!productsFound.length) {
        setCart((prevCart) => [...prevCart, product]);
        setCount((prev) => prev + 1);
      } else {
        alert("Already added to cart!");
      }
    }
  };

  return (
    <div>
      <BrowserRouter>
        <div className="max-w-screen-xl m-auto">
          <CartItems.Provider
            value={{
              cart: cart,
              setCart,
              incrementCart,
              SetIncrementCart,
              count,
              setCount,
            }}
          >
            <div className="text-center">
              <button onClick={handleLogin}></button>
            </div>
            <NavBar
              incrementCart={incrementCart}
              SetIncrementCart={SetIncrementCart}
            />
          </CartItems.Provider>
          <Slider />
          <div className="xl:px-0 px-2">
            <FeatureTitle className="py-3" text="Featured Products" />
            <div className="sm:flex justify-between items-center sm:space-x-5 space-x-0 sm:space-y-0 space-y-3 ">
              <div className="sm:w-2/4">
                <div className="aspect-w-16 aspect-h-9">
                  <img src="/images/AdobeStock_84411094-1024x683.webp" alt="" />
                </div>
              </div>
              <div className="sm:w-2/4">
                <div className="aspect-w-16 aspect-h-9">
                  <img src="/images/D2115_162_751_1200.webp" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </BrowserRouter>

      <Products cart={cart} addToCart={addToCart} />
    </div>
  );
}

export default App;
