
import React from 'react'
import { FaCartShopping } from "react-icons/fa6";
const Main = ({ image, name, price, aksiya, reting }) => {
  return (
    <div >
       
    <div className="bg-white p-3 flex flex-col rounded-xl">
      
      <div className="w-full overflow-hidden bg-gray-200 ">
           {aksiya && (
        <span className="text-sm bg-red-800 h-15 w-15 text-white ">
           -{aksiya}
        </span>
      )}
        <img
          src={image}
          alt={name}
          className="w-full h-56 object-contain"
        />
      
      </div>
      <button className='h-10 w-full bg-gray-100 text-black hover:bg-black  hover:text-white flex justify-center items-center gap-3'><FaCartShopping className=''/> Add to more</button>

      <h3 className="mt-4 text-sm font-bold text-gray-900">
        {name}
      </h3>

      <p className="mt-1 text-sm font-semibold text-red-500">
        ${price}
      </p>

     

      <p className="mt-1 text-sm text-gray-500">
        ⭐ {reting}
      </p>
    </div>
    </div>
  )
}

export default Main

