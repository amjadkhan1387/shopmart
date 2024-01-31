import React from 'react'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer/Footer'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { useState } from 'react'
import { BASE_URL, IMAGE_URL } from '../Utils/urls'
import { Tablet } from './Tablet'
import { useEffect } from 'react'
import Loader, { Loader2 } from '../loader/Loader'

export const Cart = () => {

  const navigate = useNavigate();
  const [cart, setCart] = useState(localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []);
  const [total, setTotal] = useState(localStorage.getItem('total') ? localStorage.getItem('total') : 0);
  const [loading, setLoading] = useState(false);
  console.log(JSON.stringify(cart));
  useEffect(() => {
    // Calculate the total whenever the cart changes
    calculateTotal();
  }, [cart]);

  const calculateTotal = () => {
    const calculatedTotal = cart.reduce(
      (acc, item) => acc + item.unit_price * item.quantity,
      0
    );
    localStorage.setItem('total',calculatedTotal);
    setTotal(calculatedTotal);
  };
  const handleIncreaseQuantity = (itemId) => {
    const updatedCart = cart.map((item) =>
      item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
    );
    updateCartState(updatedCart);
  };

  const handleDecreaseQuantity = (itemId) => {
    const updatedCart = cart.map((item) =>
      item.id === itemId && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    updateCartState(updatedCart);
  };

  const updateCartState = (updatedCart) => {
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    setCart(updatedCart);
  };

  const moveToCheckoutPage = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate('/checkout');
    }, 1000); // 1000 milliseconds = 1 second
  };
  return (
    <div>
      <Navbar />
      {
        loading ? <div style={{ display: "flex", justifyContent: "center", alignItems: "center", padding: "30px" }}><Loader /></div> : <div className="container mt-5">
          <h2>Your Cart </h2>
          {cart.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <div className='hover' >


              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <p>Image</p>
                <p>Name</p>
                <p>Quantity</p>
              </div>
              {
                cart?.map((item) => (
                  <div key={item.id} style={{ background: "#E5E4E2", padding: "10px 20px", borderRadius: "10px", margin: "5px 0px", display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <p><img
                      src={IMAGE_URL + item.logo}
                      alt={item.name}
                      style={{ width: '50px', height: '50px', objectFit: 'cover' }}
                    /></p>
                    <p>{item.name}</p>
                    <div><button onClick={() => handleIncreaseQuantity(item.id)}>+</button><span style={{ padding: "0px 10px" }}>{item.quantity}</span><button onClick={() => handleDecreaseQuantity(item.id)}>-</button></div>
                  </div>
                ))
              }
              <hr></hr>
              <div style={{display:"flex",justifyContent:"end"}}>
                <h4>Total : {localStorage.getItem('total')}</h4>
                </div>
            </div>
          )}

          <div style={{ display: "flex", justifyContent: "end" }}>
            <button variant="primary" onClick={ moveToCheckoutPage}>
              Checkout
            </button>
          </div>
        </div>
      }
      <Footer />
    </div>
  )
}
