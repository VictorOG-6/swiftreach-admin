import React from 'react'
import { AiFillHome } from "react-icons/ai";
import { MdLocalShipping } from "react-icons/md";
import { TbTrack } from "react-icons/tb";
import { PiUserCircleFill } from "react-icons/pi";
import { IoMdSettings } from "react-icons/io";

const Sidebar = () => {
  return (
    <div className='w-[10em] h-[32.5em] p-2 bg-white rounded-3xl'>
      <ul>
        <li className='flex items-center p-2 mb-2 rounded-3xl hover:bg-primary'><span className='mr-2'><AiFillHome/></span><a href="/">Dashboard</a></li>
        <li className='flex items-center p-2 mb-2 rounded-3xl hover:bg-primary'><span className='mr-2'><MdLocalShipping/></span><a href="/shipping">Shipping</a></li>
        <li className='flex items-center p-2 mb-2 rounded-3xl hover:bg-primary'><span className='mr-2'><TbTrack/></span><a href="/tracking">Tracking</a></li>
        <li className='flex items-center p-2 mb-2 rounded-3xl hover:bg-primary'><span className='mr-2'><PiUserCircleFill/></span><a href="/clients">Clients</a></li>
        <li className='flex items-center p-2 mb-2 rounded-3xl hover:bg-primary'><span className='mr-2'><IoMdSettings/></span><a href="/settings">Settings</a></li>
      </ul>
    </div>
  )
}

export default Sidebar