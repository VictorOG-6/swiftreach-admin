import React from 'react'
import { Navbar, DroneMap, TrackingCard, Slider } from '../components'
import { TbTrack } from "react-icons/tb";

const Tracking = () => {
  return (
    <div>
      <Navbar heading='Tracking Shipment' icon={<TbTrack/>}/>  
      <div className='flex gap-4'>
        <div className='w-[57vw] flex flex-col justify-end'>
          <DroneMap/>
          <div className='bg-white p-2 flex flex-col gap-2'>
            <div className='flex justify-between'>
              <div>
                <h5>Order Date</h5>
                <h1 className='font-bold'>Fri, 5 Jan 2024</h1>
              </div>
              <div>
                <h5>Estimated Date of Delivery</h5>
                <h1 className='font-bold'>Sat, 27 Jan 2024</h1>
              </div>
            </div>
            <Slider value={50} color='#FFC107'/>
            <div className='flex justify-between'>
              <div>
                <h5>Pickup Address</h5>
                <h1 className='font-bold'>Surulere, Lagos</h1>
              </div>
              <div>
                <h5 className='text-right'>Delivery Address</h5>
                <h1 className='font-bold'>Gwarinpa, Abuja</h1>
              </div>
            </div>
            <div className='flex justify-between'>
              <div>
                <h5>Package Contains</h5>
                <h1 className='font-bold'>Handle Well</h1>
              </div>
              <div className='text-center'>
                <h5>Package Quantity</h5>
                <h1 className='font-bold'>2</h1>
              </div>
            </div>
          </div>          
        </div>
        <div className='bg-white rounded-3xl p-2'>
          <div className=' flex flex-col gap-2 h-[85vh] custom-scrollbar'>
          <TrackingCard/>
          </div>
        </div>
      </div> 
    </div>
  )
}

export default Tracking