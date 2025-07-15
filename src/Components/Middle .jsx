import React from 'react'
import { BiColor } from 'react-icons/bi'

function Middle () {
  return (
    <div><br /><br /><br />
       <h1 className='text-black font-extrabold pl-100 text-5xl '>Welcome to <span className='text-blue-500 '>ModernBlog</span></h1><br />
       <p className='pl-80 text-xl'>Discover amazing stories, insights, and ideas from our community of writers. Dive into </p>
         <p className='pl-133 text-xl'>a world of knowledge and inspiration.</p><br /><br /><br />
        <span className=' grid grid-cols-3 gap-1'>
       <div className='shadow-[0_0_10px_rgba(0,0,0,0.2)] w-90 h-30 pl-15 ml-10 p-8 pr-4 ' >
        <span className='ti text-blue-500 font-extrabold'>100 </span>
         <span className='flex items-center x2 pl-20' > Total  Posts</span>
         </div> 
       <div className='shadow-[0_0_10px_rgba(0,0,0,0.2)] w-90 h-30 pl-20 ml-6 p-8 '>
        <p className='ty text-green-600 font-extrabold pl-23 '>50+</p><br />
        <span className='pl-23 relative -top-5'>Writers </span>
        </div>
       <p className='shadow-[0_0_10px_rgba(0,0,0,0.2)] w-90 h-30 pl-15 p-8'> <span className='to font-extrabold'>1M+</span> <br /><span className='pl-25'>Readers </span></p><br /><br />
       </span>
       <h1 className='font-extrabold ml-139 text-3xl'>Latest Posts</h1><br /><br />
       
    </div>
  )
}

export default Middle