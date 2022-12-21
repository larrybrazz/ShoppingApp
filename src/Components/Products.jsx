import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import {data} from './data';


const Products = ({cart,addToCart}) => {
  //const [cart, setCart]= useState([]);
//   const [totalPrice, setTotalPrice] = useState(0)

// useEffect(()=>{
//   total()
// },[cart]);

// const total =()=>{
//   let totalValue = 0
//   for(let i = 0; i < cart.length; i++){
//     totalValue += cart[i].price;
//   }
//   setTotalPrice(totalValue)
// }
  //   const addToCart= (product)=>{
  //  setCart((prevCart)=>[...prevCart, product])
  //   }

  //   const removeFromCart=(product)=>{
  //     let cartCopy = [...cart];
  //     cartCopy = cartCopy.filter((items)=>items.id !== product.id);
  //     setCart(cartCopy)
  //   }

    // const cartItems = cart.map((product)=>(
    //   <div key={product.id}>
    //     <img src={product.img} alt="" />
    //     <div>
    //     <p className='font-semibold text-2xl'>{product.productName}</p>
    //     <p>{product.description}</p>
    //     <div><i className='fa fa-minus'></i> <span></span> <i className='fa fa-plus'></i> </div>
    //      <div className='flex justify-between mt-8'><i onClick={()=>removeFromCart(product)} className="fa fa-trash p-2 text-white bg-slate-600 rounded-full hover:text-green-400 "></i> <p className='font-bold'>{product.price}</p></div>
    //     </div>
    //   </div>
    // ))
  

  return (
    <div className=' my-2 w-11/12 mx-auto grid md:grid-cols-4 grid-cols-2 gap-2'>
       {data.map((product)=>{
        return <div  key={product.id}>
        <div className='bg-white border shadow-xl p-2 rounded-md'>
        <img className='hover:bg-yellow-700' src={product.img} alt="" />
        <p className='font-semibold text-2xl'>{product.productName}</p>
            <p>{product.description}</p>
            <div className='flex justify-between mt-8'><i onClick={()=>addToCart(product)} className="fa fa-cart-shopping p-2 text-white bg-slate-600 rounded-full hover:text-green-400 "></i> <p className='font-bold'>${product.price}</p></div>
        </div>
    </div>
       })}
    </div>
  )
}

export default Products


