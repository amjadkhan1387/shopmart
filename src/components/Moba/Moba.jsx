import React from 'react'
import './Moba.css'
import { Link } from 'react-router-dom'
import moba1 from '../../assets/moba/moba1.webp'
import Rating from 'react-rating-stars-component';
import moba2 from '../../assets/moba/moba2.webp'
import moba3 from '../../assets/moba/moba3.webp'
import moba4 from '../../assets/moba/moba4.webp'
import moba5 from '../../assets/moba/moba5.webp'
import moba6 from '../../assets/moba/moba6.webp'
import moba7 from '../../assets/moba/moba7.webp'
import moba8 from '../../assets/moba/moba8.webp'
import moba9 from '../../assets/moba/moba9.webp'
import moba10 from '../../assets/moba/moba10.webp'
import moba11 from '../../assets/moba/moba11.webp'
import moba12 from '../../assets/moba/moba12.webp'



export const Moba = () => {
  return (
    <div className="moba">
    
            <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
                <li className="breadcrumb-item"><a><Link to='/'>Home</Link></a></li>
                <li className="breadcrumb-item"><a>Gadgets</a></li>
                <li className="breadcrumb-item active" aria-current="page">Mobile Accessories</li>
            </ol>
            </nav>

            <div className="card">
                <img src={moba1} className="card-img-top" alt=""/>
                <div className="card-body">
                    <h5 className="card-title">ASPOR A323 Power Bank 10000mAh / 2 Input 2 Output</h5>
                    <p className="card-text">LKR. 2,350 </p>
                    <Rating
                        count={5}
                        size={24}
                        value={5} 
                        activeColor="#f00"
                        inactiveColor="#ddd"
                        edit={false} 
                    />
                </div>
            </div>

            <div className="card">
                <img src={moba2} className="card-img-top" alt=""/>
                <div className="card-body">
                    <h5 className="card-title">
Q02 Selfie Stick Tripod with Bluetooth Wireless Remote</h5>
                    <p className="card-text">LKR. 2,000 </p>
                    <Rating
                        count={5}
                        size={24}
                        value={5} // You can set the initial value dynamically based on your product rating
                        activeColor="#f00"
                        inactiveColor="#ddd"
                        edit={false} 
                    />
                </div>
            </div>

            <div className="card">
                <img src={moba3} className="card-img-top" alt=""/>
                <div className="card-body">
                    <h5 className="card-title">
Universal Lazy Phone Holder Desk Bed Side Colorful Flexible Long</h5>
                    <p className="card-text">LKR. 310 </p>
                    <Rating
                        count={5}
                        size={24}
                        value={4} // You can set the initial value dynamically based on your product rating
                        activeColor="#f00"
                        inactiveColor="#ddd"
                        edit={false} 
                    />
                </div>
            </div>

            <div className="card">
                <img src={moba4} className="card-img-top" alt=""/>
                <div className="card-body">
                    <h5 className="card-title">
Full Glue Anti-Fingerprint Matte Tempered Glass for iPhone</h5>
                    <p className="card-text">LKR. 500 </p>
                    <Rating
                        count={5}
                        size={24}
                        value={4} 
                        activeColor="#f00"
                        inactiveColor="#ddd"
                        edit={false} 
                    />
                </div>
            </div>

            <div className="card">
                <img src={moba5} className="card-img-top" alt=""/>
                <div className="card-body">
                    <h5 className="card-title">
Charger 3 in 1 USB Cable for iPhone, All Android Phones</h5>
                    <p className="card-text">LKR. 400</p>
                    <Rating
                        count={5}
                        size={24}
                        value={4} // You can set the initial value dynamically based on your product rating
                        activeColor="#f00"
                        inactiveColor="#ddd"
                        edit={false} 
                    />
                </div>
            </div>

            <div className="card">
                <img src={moba6} className="card-img-top" alt=""/>
                <div className="card-body">
                    <h5 className="card-title">
Universal Car Mount Holder for Mobile Phone with Suction Cup</h5>
                    <p className="card-text">LKR. 959 </p>
                    <Rating
                        count={5}
                        size={24}
                        value={2} 
                        activeColor="#f00"
                        inactiveColor="#ddd"
                        edit={false} 
                    />
                </div>
            </div>


            <div className="card">
                <img src={moba7} className="card-img-top" alt=""/>
                <div className="card-body">
                    <h5 className="card-title">
Denmen High Speed Data Cable 2.4A For Type C/ Micro USB/</h5>
                    <p className="card-text">LKR. 279 </p>
                    <Rating
                        count={5}
                        size={24}
                        value={3} 
                        activeColor="#f00"
                        inactiveColor="#ddd"
                        edit={false} 
                    />
                </div>
            </div>

            <div className="card">
                <img src={moba8} className="card-img-top" alt=""/>
                <div className="card-body">
                    <h5 className="card-title">
Phone cover Waterproof Cover Pouch Bag Cases Water proof</h5>
                    <p className="card-text">LKR. 410 </p>
                    <Rating
                        count={5}
                        size={24}
                        value={4} 
                        activeColor="#f00"
                        inactiveColor="#ddd"
                        edit={false} 
                    />
                </div>
            </div>

            <div className="card">
                <img src={moba9} className="card-img-top" alt=""/>
                <div className="card-body">
                    <h5 className="card-title">
Full Cover Protective Glass For iPhone 13 12 11 Pro Max Mini X</h5>
                    <p className="card-text">LKR. 500 </p>
                    <Rating
                        count={5}
                        size={24}
                        value={4} 
                        activeColor="#f00"
                        inactiveColor="#ddd"
                        edit={false} 
                    />
                </div>
            </div>

            <div className="card">
                <img src={moba10} className="card-img-top" alt=""/>
                <div className="card-body">
                    <h5 className="card-title">Phone Holder with Hook Wall Sticky on Wall Stand </h5>
                    <p className="card-text">LKR. 340 </p>
                    <Rating
                        count={5}
                        size={24}
                        value={4} 
                        activeColor="#f00"
                        inactiveColor="#ddd"
                        edit={false} 
                    />
                </div>
            </div>

            <div className="card">
                <img src={moba11} className="card-img-top" alt=""/>
                <div className="card-body">
                    <h5 className="card-title">Mob Phone Holder</h5>
                    <p className="card-text">LKR. 320 </p>
                    <Rating
                        count={5}
                        size={24}
                        value={3} 
                        activeColor="#f00"
                        inactiveColor="#ddd"
                        edit={false} 
                    />
                </div>
            </div>

            <div className="card">
                <img src={moba12} className="card-img-top" alt=""/>
                <div className="card-body">
                    <h5 className="card-title">
Ultimate Matte Tempered Glass Screen Protector for Xiaomi</h5>
                    <p className="card-text">LKR. 499 </p>
                    <Rating
                        count={5}
                        size={24}
                        value={4} 
                        activeColor="#f00"
                        inactiveColor="#ddd"
                        edit={false} 
                    />
                </div>
            </div>

    </div>

  )
}
