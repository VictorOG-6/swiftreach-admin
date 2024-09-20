import React from 'react'
import { IoMdNotifications } from "react-icons/io";
import user from '../assets/user.jpg'

const Navbar = ({heading, subheading, icon}) => {
  return (
    <div className='flex justify-between'>
      <div className='flex items-center gap-2'>
        <div className='bg-white p-2 rounded-full'>{icon}</div>
        <div>
          <h5>{subheading}</h5>
          <h1 className='font-bold'>{heading}</h1>
        </div>
      </div>
      <div className='flex items-center gap-2'>
        <div className='bg-white p-2 rounded-full'><IoMdNotifications/></div>
        <div><img src={user} alt="user-profile" className='rounded-full w-[2.4em] h-[2.4em] object-cover'/></div>
      </div>
    </div>
  )
}

export default Navbar