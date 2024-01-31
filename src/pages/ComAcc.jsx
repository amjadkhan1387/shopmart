import React from 'react'
import { Navbar } from '../components/Navbar'
import { NavbarC } from '../components/Products/NavbarC'
import { Coma } from '../components/Coma/Coma'
import { Footer } from '../components/Footer/Footer'

export const ComAcc = () => {
  return (
    <div>
        <Navbar/>
        <NavbarC/>
        <Coma/>
        <Footer/>
    </div>
  )
}
