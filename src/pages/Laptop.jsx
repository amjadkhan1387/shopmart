import React from 'react'
import { Navbar } from '../components/Navbar'
import { NavbarC } from '../components/Products/NavbarC'

import { Footer } from '../components/Footer/Footer'
import { Lap } from '../components/Lap/Lap'

export const Laptop = () => {
  return (
    <div>
        <Navbar/>
        <NavbarC/>
    <Lap/>
        <Footer/>
    </div>
  )
}
