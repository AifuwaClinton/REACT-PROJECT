import React from 'react'
import { FiBookOpen } from "react-icons/fi";
import { PiHouseLineLight } from "react-icons/pi";
import { LiaHandHoldingHeartSolid } from "react-icons/lia";
import { MdOutlineMail } from "react-icons/md";

import { Link } from 'react-router-dom';


function Header() {
  return (
    <header className='shadow-lg h-20 flex  w-320 mb-30 fixed bg-white'>
      <h2 className='flex items-center gap-x-2 pl-2 hover:text-blue-500 text-black font-bold  ml-10 mb-10 mt-3 ' ><FiBookOpen className='text-3xl mt-10 mb-6 ml-5' /><span className='text-2xl mt-5'>ModernBlog</span> </h2>
      <ul className='ul  flex items- gap-1 ml-96 pl-56 '>

        <li>
          <Link to="/" className='flex items-center hover:text-blue-500  mt-5 ml-9 bg-blue-500 h-7  text-white font-bold'><PiHouseLineLight />Home
          </Link>
        </li> 

        <li>
          <Link to="/about" className='flex items-center hover:text-blue-500 m-6 '><LiaHandHoldingHeartSolid />About
          </Link>
        </li>

        <li>
          <Link to="/contact" className='flex items-center hover:text-blue-500 m-6'><MdOutlineMail />Contact
          </Link>
        </li >
      

      </ul >



    </header >

  )
}

export default Header