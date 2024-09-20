import React from 'react'

const Infobar = ({figure1, heading1, figure2, heading2, figure3, heading3, figure4, heading4, figure5, heading5}) => {
  return (
    <div className='bg-primary flex justify-around p-2 rounded-3xl'>
      <div className='flex items-center flex-col border-r border-black border-opacity-20 w-webkit-fill-available'>
        <h1>{figure1}</h1>
        <h5>{heading1}</h5>
      </div>
      <div className='flex items-center flex-col border-r border-black border-opacity-20 w-webkit-fill-available'>
        <h1>{figure2}</h1>
        <h5>{heading2}</h5>
      </div>
      <div className='flex items-center flex-col border-r border-black border-opacity-20 w-webkit-fill-available'>
        <h1>{figure3}</h1>
        <h5>{heading3}</h5>
      </div>
      <div className='flex items-center flex-col border-r border-black border-opacity-20 w-webkit-fill-available'>
        <h1>{figure4}</h1>
        <h5>{heading4}</h5>
      </div>
      <div className='flex items-center flex-col w-webkit-fill-available'>
        <h1>{figure5}</h1>
        <h5>{heading5}</h5>
      </div>
    </div>
  )
}

export default Infobar