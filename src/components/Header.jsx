import React from 'react'
import { CiHeart } from "react-icons/ci";
import { FaCartShopping } from "react-icons/fa6";
import { IoPersonOutline } from "react-icons/io5";

const Header = () => {
  return (
    <div>
      <nav className="flex justify-around items-center gap-30 pt-10">
        <h1 className="text-3xl font-bold">Eclusive</h1>
        <ul className='flex justify-center items-center gap-10'>
            <li>Home </li>
            <li>Contact</li>
            <li>About</li>
            <li>sign up</li>
        </ul>
        <div className="flex justify-center items-center gap-5">
        <input type="text" placeholder='What are you looking for?'  className='h-10 w-60 rounded-xl bg-gray-200 pl-5'/>
        <div className="flex justify-center items-center gap-3">
             <CiHeart />
            <FaCartShopping/> 
            <IoPersonOutline />

        </div>
        </div>
      </nav>
      <hr  className='mt-10'/>
      <div className="flex justify-between items-center mb-30 mt-10">
        <h1 className="text-3xl">Prouducts</h1>
        <button className="h-10 w-40 border-2 border-gray-300">Move All To Bag</button>
       </div>
    </div>
  )
}

export default Header
