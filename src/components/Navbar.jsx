import logo from '../assets/logo.jpg'
import React, { useState } from 'react'
import './Navbar.css'
import { Link, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { useEffect } from 'react';
import { success_toaster } from '../Utils/Toaster';


export const Navbar = () => {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem('loginStatus');
    localStorage.removeItem('first_name');
    localStorage.removeItem('last_name');
    localStorage.removeItem('userId');
    localStorage.removeItem('uuid');
    navigate("/login");
    success_toaster("Logout successfully");
  }


  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary p-0">
      <div className="container-fluid">
        <a className="navbar-brand"><Link to='/'><img src={logo} alt='' /></Link></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page"><Link className='link-1' to='/'>Home</Link></a>
            </li>


            <li className="nav-item">
              <a className="nav-link"><Link className='link-1' to='/about'>About Us</Link></a>
            </li>
            <li className="nav-item">
              {
                localStorage.getItem("loginStatus") ? <a className="nav-link"><span className='link-1' onClick={logout}>Logout</span></a> :
                  <a className="nav-link"><Link className='link-1' to='/login'>Log In</Link></a>
              }
              {/* <a className="nav-link"><Link className='link-1' to='/login'>Log In</Link></a> */}
            </li>





          </ul>
          <form className="d-flex" role="search">
            <span style={{ color: "white" }}>{localStorage.getItem('first_name')}</span>
            <span style={{ color: "white" }}>{localStorage.getItem('last_name')}</span>
            {/* <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" /> */}
            {/* <button className="btn btn-outline-success" type="submit">Search</button> */}
          </form>
          <li>
            <div style={{ padding: "0px 20px" }} className='nav-login-cart' onClick={() => navigate("/cart")}>

              <a><Link to='/cart'><FontAwesomeIcon icon={faShoppingCart} /></Link></a>
              <div className="nav-cart-count">
                {localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')).length : 0}
              </div>
            </div>

          </li>
        </div>
      </div>
    </nav>
  )
}
