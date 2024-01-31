import React from 'react'
import { Navbar } from '../components/Navbar'
import { NavbarC } from '../components/Products/NavbarC'
import { Footer } from '../components/Footer/Footer'
import { Skin } from '../components/Skin/Skin'


export const SkinCare = () => {
  return (
    <div>
        <Navbar/>
        <NavbarC/>
        <Skin/>
        <Footer/>
    </div>
  )
}
