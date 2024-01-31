import React from 'react'
import { Navbar } from '../components/Navbar'
import { Products } from '../components/Products/Products'
import { Footer } from '../components/Footer/Footer'
import { NavbarC } from '../components/Products/NavbarC'


export const ProductPage = () => {
  return (
    <div>
        <Navbar/>
        <NavbarC/>
        <Products/>
        <Footer/>
    </div>
  )
}
