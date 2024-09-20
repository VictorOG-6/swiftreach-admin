import React from 'react'
import { Navbar, Infobar, Button, Charts, Grid, MapChart } from '../components'
import { AiFillHome } from "react-icons/ai";
import { BiSolidCoinStack } from "react-icons/bi";
import { IoIosArrowDown } from "react-icons/io";
import { FaArrowTrendUp } from "react-icons/fa6";
import { orderamount, croppedordersgrid } from '../data/dummy';

const Dashboard = () => {
  return (
    <div className='w-webkit-fill-available flex flex-col gap-4'>
      <Navbar heading="Welcome to SwiftReach" subheading="Hello, Jay" icon={<AiFillHome/>}/>
      <Infobar figure1="$69.3 Billion" heading1="Annual Revenue" figure2="5.8k" heading2="Team Members" figure3="1.3k" heading3="Total Vehicles" figure4="1.3k" heading4="Avg Daily Package" figure5="11.4k" heading5="Total Customers"/>
      {/* <div className='bg-white flex justify-between rounded-3xl p-4'>
        <div className='flex items-center gap-2'>
          <div className='p-2 rounded-full bg-[#d3d3d3]'><BiSolidCoinStack/></div>
          <div>
            <h5>Order List Database</h5>
            <h1 className='flex items-center gap-2'>Sat, 4 Aug 2024 <span><IoIosArrowDown/></span></h1>
          </div>
        </div>
        <div className='flex gap-2'>
          <Button text="Download Report" backgroundcolor="white" textcolor="black"/>
          <Button text="View All Orders" backgroundcolor="black" textcolor="white"/>
        </div>
      </div> */}
      <div className='flex gap-4 h-[13.8em]'>
        <div className='flex flex-col gap-[0.25rem]'>
          <h5 className='-mt-2 font-bold'>Order Performance</h5>
          <Charts/>
        </div>
        <div className='flex flex-col gap-[0.25rem]'>
          <h5 className='-mt-2 font-bold'>Order Amount</h5>
          <div className='flex flex-col bg-white p-4 rounded-3xl gap-2 w-[32vw] h-[13.8em]'>
            <div className='flex items-center justify-between p-2 rounded-3xl border'>
              <div>
                <h5>Total Amount</h5>
                <h3>$12.875<span>/Month</span></h3>
              </div>
              <div className='flex gap-2 p-2 bg-primary rounded-full'>
                <FaArrowTrendUp/>
                <h5>10.09%</h5>
              </div>
            </div>
            <div className='custom-scrollbar'>
              {orderamount.map((order, index) => (
                <div key={index} className='flex mb-2 justify-between mr-4'>
                  <div className='flex items-center gap-2'>
                    <h5>{String(index + 1).padStart(2, '0')}</h5>
                    <h3>{order.city}</h3>
                  </div>
                  <h3>${order.price}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className='mt-2'>
        <div className='flex flex-col gap-[0.25rem]'>
          <h5 className='-mt-2 font-bold'>Recent Orders</h5>
          <Grid ordersgrid={croppedordersgrid} height={105} width={667}/>        
        </div>
      </div>
    </div>
  )
}

export default Dashboard