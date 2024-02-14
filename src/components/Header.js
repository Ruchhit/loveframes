import React from 'react'
import logo from '../images/love frames Studio main black.png'
const Header = () => {
  return (
    <div className='w-full h-32 bg-gray-300 flex justify-between pr-8 '>
       
        <img src={logo} width={260} height={180} alt='logo'/>
        <ul className='flex items-center gap-10'>
            <li className='text-xl font-semibold '>Home</li>
            <li className='text-xl font-semibold '>Portfolio</li>
            <li className='text-xl font-semibold '>About Us</li>
            <li className='text-xl font-semibold '>Blogs</li>
            <li className='text-xl font-semibold '>Contact Us</li>
        </ul>

    </div>
  )
}

export default Header