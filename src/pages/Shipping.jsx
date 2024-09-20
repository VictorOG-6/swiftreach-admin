import React from 'react'
import { Navbar, Infobar, Grid } from '../components'
import { MdLocalShipping } from "react-icons/md";
import { ordersgrid } from '../data/dummy';

const Shipping = () => {
  return (
    <div className='flex flex-col gap-4'>
      <Navbar heading='Shipping Items' icon={<MdLocalShipping/>}/>   
      <Infobar figure1="838" heading1="Today's Total Packages" figure2="538" heading2="Todays's Delivered Orders" figure3="186" heading3="Ready to Shipping" figure4="114" heading4="Pending Orders" figure5="265" heading5="Available Vehicles"/>
      <div className='flex flex-col gap-2'>
        <h5 className='font-bold'>All Orders List</h5>
        <Grid ordersgrid={ordersgrid} height={340} width={1100}/>
      </div>
    </div>
  )
}

export default Shipping