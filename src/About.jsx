import React from 'react'
import { FiBookOpen } from "react-icons/fi";
import { BiBullseye } from "react-icons/bi";
import { FiUsers } from "react-icons/fi";
import { MdRocketLaunch } from "react-icons/md";

function About() {
  return (
    <div className=''><br /><br /><br /><br /><br />
      <h1 className=' text-center text-4xl font-extrabold'>About ModernBlog</h1><br />
      <p className=' text-xl text-center'>Learn more about our mission and story</p><br /><br /><br /> 
      <div className='shadow-[0_0_10px_rgba(0,0,0,0.2)]  ml-50 w-210 h-110 pl-7 pt-10 '>
        <h2 className='text-2xl font-black'>Our Story</h2><br />
        <p className=''>ModernBlog was founded with a simple mission: to <br /> create a platform where writers and readers can <br />connect through powerful storytelling. We believe <br />that every story matters and every voice deserves to <br />
          be heard.</p>
        <FiBookOpen className=' text-7xl text-blue-700 ml-138 ' /><br />
        <p className='pl-120 '>Empowering stories since 2024</p>
        <p>Since our launch, we've been committed to fostering <br />a community of passionate writers and curious <br /> readers who share knowledge, experiences, and <br />inspiration.</p><br /><br />
      </div> <br /><br /><br />

      <div className='flex justify-center gap-10 text-sm'>
        <div>
          <BiBullseye className='text-blue-600 text-4xl bg-blue-100 rounded-xl' /><br />
          <h1 className='text-black-300 text-2xl'>Our Mission</h1>
          <p>To democratize storytelling and <br />make quality content accessible to <br />
           everyone.</p>
        </div><br />
        
         <div className=''>
        <FiUsers className='text-green-600 text-4xl bg-blue-100 rounded-xl flex items-end p-2 ' /> <br />
        <h1 className='text-black-400 text-2xl'>Our Community</h1><br />
        <p className='text-sm text-grey-500 '>A diverse community of writers, readers,<br /> and thinkers from around the world.</p><br />
        </div>

        <div>
        <MdRocketLaunch className='text-purple-600 text-4xl bg-purple-100 rounded-xl' /><br />
        <h1 className='text-black-500 text-3xl'>Our Vision</h1><br />
        <p className='font-bold text-gray-500'>To be the leading platform for <br />
           authentic, meaningful content and <br /> connections.</p>
        </div>

      </div><br /><br /><br /><br /><br /><br />
    </div>

  )
} 

export default About 