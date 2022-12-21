import React, {useEffect, useState} from 'react'

 const Effect = () => {
    const [count, setCount]=useState(0);

    const fetchUser = async ()=>{
        const res = await fetch("https://randomuser.me.api");
        const {results} = await res.json();
        console.log(results);
    }

    useEffect(()=>{
       fetchUser()
    })
  return (
    <div className='w-56 text-center mx-auto py-20'>
        <button
          onClick={()=>setCount(count + 1)}
          id='button'
          className='border border-gray-700 p-2 hover:bg-red-300 transition'
        >
         You clicked Me {count}
        </button>
    </div>
  )
}

export default Effect;

