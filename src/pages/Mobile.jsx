import React from 'react'
import { Navbar } from '../components/Navbar'
import { NavbarC } from '../components/Products/NavbarC'
import { Footer } from '../components/Footer/Footer'

import { MobItem } from '../components/MobItem/MobItem'
export const Mobile = () => {
  return (
    <div>
        <Navbar/>
        <NavbarC/>
        <MobItem/>
        <Footer/>
    </div>
  )
}
