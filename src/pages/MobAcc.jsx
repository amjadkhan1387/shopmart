import React from 'react'
import { Navbar } from '../components/Navbar'
import { NavbarC } from '../components/Products/NavbarC'
import { Moba } from '../components/Moba/Moba'
import { Footer } from '../components/Footer/Footer'

export const MobAcc = () => {
  return (
    <div>
        <Navbar/>
        <NavbarC/>
        <Moba/>
        <Footer/>
    </div>
  )
}
