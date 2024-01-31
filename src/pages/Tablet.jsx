import React from 'react'
import { Navbar } from '../components/Navbar'
import { NavbarC } from '../components/Products/NavbarC'

import { Footer } from '../components/Footer/Footer'
import { Tab } from '../components/Tab/Tab'


export const Tablet = () => {
  return (
    <div>
        <Navbar/>
        <NavbarC/>
      <Tab/>
        <Footer/>
    </div>
  )
}
