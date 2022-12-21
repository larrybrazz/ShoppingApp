import React, { useEffect, useRef, useState } from 'react';
import {AiOutlineVerticalRight, AiOutlineVerticalLeft} from "react-icons/ai"

const featuredProducts = [
  "/images/AdobeStock_84411094-1024x683.webp",
 "/images/shutterstock_641814016.webp",
 "/images/shoppingcart-1066110386.webp",
];

let count=0;

let slideInterval;

const Slider = () => {
    const [currentIndex, setCurrentIndex]= useState(0);

    const slideRef = useRef();

    const removeAnimation =()=>{
        slideRef.current.classList.remove("fade-anim");
    }

    useEffect(()=>{
        slideRef.current.addEventListener("animationed", removeAnimation)
        slideRef.current.addEventListener("mouseenter", pauseSlider)
        slideRef.current.addEventListener("mouseleave", startSlider)
        startSlider()
        return ()=>{
            pauseSlider();
        }
    }, [])

    const startSlider =()=>{
        slideInterval = setInterval(()=>{
            handleOnNextClick()
        }, 3000);
    }

    const pauseSlider =()=>{
        clearInterval(slideInterval)
    }
    const handleOnNextClick =()=>{
        count = (count + 1)% featuredProducts.length;
        setCurrentIndex(count);
        slideRef.current.classList.add("fade-anim")
    };
    const handleOnPrevClick =()=>{
        const productsLength = featuredProducts.length;
        count = (currentIndex  + productsLength - 1) % productsLength
        setCurrentIndex(count);
        slideRef.current.classList.add("fade-anim");
    }
  return (
    <div ref={slideRef} className='w-full select-none'>
        <div className="aspect-w-16 aspect-h-9">
        <img src={featuredProducts[currentIndex]} alt="" />
        </div>
        <div className=" " />
        <div className=' w-11/12  transform -translate-y-12 md:-translate-y-40  px-3 flex justify-between items-center'>
            <button
            className='bg-black text-white p-2 rounded-full bg-opacity-100 transition '
            onClick={handleOnPrevClick}><AiOutlineVerticalRight size={30}/></button>
            <button
             className='bg-black text-white p-2 rounded-full bg-opacity-100 transition '
            onClick={handleOnNextClick}><AiOutlineVerticalLeft size={30}/></button>
        </div>
    </div>
  )
}

export default Slider