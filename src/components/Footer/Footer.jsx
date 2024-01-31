import React from 'react'
import visa from '../../assets/footer/visa.jpg'
import mastercard from '../../assets/footer/mastercard.jpg'
import ae from '../../assets/footer/ae.jpg'
import './Footer.css'


export const Footer = () => {
  return (
    <div className='footer'>
            <footer className="site-footer">
      <div className="container">
        
        <div className="payment-methods">
        <p>Accepted Payment Methods:</p>
        <img src={visa} alt="Visa"/>
        <img src={mastercard} alt="MasterCard"/>
        <img src={ae} alt="AmericanExpress"/><br/>

      </div>

      <div className="social-icon">
                    <br/>
                    <p>Follow Us:</p>
                <a href="https://www.facebook.com/your-facebook-profile" target="_blank"><i className='bx bxl-facebook'></i></a>
                <a href="https://twitter.com/your-twitter-profile" target="_blank"><i className='bx bxl-twitter'></i></a>
                <a href="https://www.instagram.com/your-instagram-profile" target="_blank"><i className='bx bxl-instagram'></i></a>
                <a href="https://www.linkedin.com/in/your-linkedin-profile" target="_blank"><i className='bx bxl-linkedin'></i></a>
                <a href="https://www.youtube.com/in/your-youtube-channel" target="_blank"><i className='bx bxl-youtube'></i></a>
                
      </div>
        <p>&copy; 2023 Matrixmind. All rights reserved.</p>
      </div>
    </footer>
    </div>
  )
}
