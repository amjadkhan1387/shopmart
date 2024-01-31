import React from 'react'
import { Signup } from '../components/Signup/Signup'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer/Footer'


export const SignupPage = () => {
  return (
    <div>
        <Navbar/>
        <Signup/>
        <Footer/>
    </div>
  )
}
