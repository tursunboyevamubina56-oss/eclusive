import React from 'react'
import { IoLogoInstagram } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";

const Footer = () => {
  return (
    <div >
      <hr className='mt-30 mb-10'/>
      <div className="flex justify-center items-center gap-90">
      <h1 className="text-3xl">Eclusive</h1>
      <p>eclusive@gmail.com</p>
      <div className="flex justify-center items-center gap-5">
        <IoLogoInstagram />
        <FaFacebookF />
        <FaTelegramPlane />


      </div>
      </div>
    </div>
  )
}

export default Footer
