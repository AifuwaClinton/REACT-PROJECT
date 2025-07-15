import React from 'react'
import { PiTwitterLogo } from "react-icons/pi";
import { FiBookOpen } from "react-icons/fi";
import { MdOutlineMail } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
import { TfiLocationPin } from "react-icons/tfi";
import { FaRegCopyright } from "react-icons/fa6";
import { FiLinkedin } from "react-icons/fi";
import { FaHeart } from "react-icons/fa";
import { LuGithub } from "react-icons/lu";
import { Link } from 'react-router-dom';


function Footer() {
  return (
    <footer className='footer'><br /><br />
      <div className='icon'>
        <div className='y'>
          <h2 className='flex items-center space-x-2'><FiBookOpen size="2rem" color='royalblue' className="text-xl" />  <b>ModernBlog</b></h2>
          <span className='span'><p>Discover amazing stories, insights, and ideas from our </p>
            <p>community of writers. Join us in exploring the world through</p> <p>words</p>
          </span>
          <span className='LU'><LuGithub /><PiTwitterLogo /><FiLinkedin /></span>
        </div>



        <div className='yi'>

          <h3 className='quick'>Quick Links</h3>
          <ul className='uv hover:text-white-5'>
            <li>
              <Link to="/"> Home </Link>
            </li> <br />


            <li>
              <Link to="/about"> About </Link>
            </li><br />

            <li>
            <Link to="/contact">Contact </Link>  
            </li><br />
            <li>Privacy Policy</li>
          </ul>
        </div>


        <div className='cont'>
          <h3 className='co'>Contact</h3>
          <span className='call'><p><MdOutlineMail />hello@modernblog.com</p>
            <p><IoCallOutline />+234 (0) 123 456 789</p>
            <p><TfiLocationPin />Ibadan,Nigeria</p>
          </span>


        </div>

      </div>
      <p className='paragraph'><FaRegCopyright /> 2025 ModernBlog. All rights reserved. Made with <span className='text-red-500'><FaHeart /> </span>in Nigeria</p>
    </footer>
  )
}

export default Footer