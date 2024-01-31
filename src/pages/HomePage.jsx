import React from 'react'
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer/Footer'
import { FlashSale } from '../components/Flash/FlashSale';


export const HomePage = () => {
  return (
    <div className='homepage'>
      <Navbar/>
     
      <FlashSale/>
      <Footer/>
    </div>
  )
}
