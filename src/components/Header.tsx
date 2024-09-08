import React from 'react'
import { CiSearch } from "react-icons/ci";
import { RiAccountCircleLine } from "react-icons/ri";
import { CiSettings } from "react-icons/ci";

const Header:React.FC = () => {
  return (
    <div className=' conatainer relative flex justify-between items center   w-full h-14 border-2 border-b-black'>
        <div className=' flex items center pt-3 pl-8'>
            <nav className='space-x-4 font-semibold'>
                <a href='/' className=''>Home</a>
                <a href='/' className=''>Orders</a>
                <a href='/' className=''>Integrations</a>
                <a href='/' className=''>Tracking Page</a>
                <a href='/' className=''>Partners with Us</a>
            </nav>
        </div>
        <div className=" flex space-x-4 items center pt-3 font-semibold pr-8">
            <div className=' flex space-x-1'>
             <CiSearch className='mt-1' />
             <input className='h-8 w-20 border-2 border-b-black' type='text' placeholder='search' />
             </div>
             <div className='flex space-x-1'>
             <RiAccountCircleLine className="mt-1" />
             <a href='/' className=''>Account</a>
             </div>
             <div className='flex space-x-1'>
             <CiSettings className='mt-1' />
             <a href='/' className=''>Settings</a>
             </div>
        </div>
    </div>
  )
}

export default Header;




