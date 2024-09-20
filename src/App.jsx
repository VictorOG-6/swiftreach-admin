import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import swiftreach from './assets/swiftreach1.png'
import { Dashboard, Shipping, Tracking, Clients, Settings } from './pages' 
import { Sidebar } from './components'

function App() {

  return (
    <>
      <BrowserRouter>
        <div className='mr-4'>
          <div className='bg-white p-2 rounded-3xl mb-4'>
            <img src={swiftreach} alt="swiftreach-logo" className='w-[9em] h-[1.5em] object-contain'/>
          </div>
          <Sidebar/>
        </div>
        <Routes>
          <Route path='/' element={<Dashboard/>}/>
          <Route path='/shipping' element={<Shipping/>}/>
          <Route path='/tracking' element={<Tracking/>}/>
          <Route path='/clients' element={<Clients/>}/>
          <Route path='/settings' element={<Settings/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
