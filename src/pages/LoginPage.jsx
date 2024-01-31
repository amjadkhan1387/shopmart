import React from 'react'
import { Navbar } from '../components/Navbar'
import { Login } from '../components/Login/Login'
import { Footer } from '../components/Footer/Footer'

export const LoginPage = () => {
  return (
    <div className='login-page'>
        <Navbar/>
        <Login/>
        <Footer/>
    </div>
  )
}
