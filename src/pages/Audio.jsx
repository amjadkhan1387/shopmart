import React from 'react'
import { Navbar } from '../components/Navbar'
import { NavbarC } from '../components/Products/NavbarC'
import { Aud } from '../components/Aud/Aud'
import { Footer } from '../components/Footer/Footer'

export const Audio = () => {
  return (
    <div>
        <Navbar/>
        <NavbarC/>
        <Aud/>
        <Footer/>
    </div>
  )
}
