import React from 'react'
import './Coma.css'
import { Link } from 'react-router-dom'
import coma1 from '../../assets/coma/coma1.webp'
import Rating from 'react-rating-stars-component';
import coma2 from '../../assets/coma/coma2.webp'
import coma3 from '../../assets/coma/coma3.webp'
import coma4 from '../../assets/coma/coma4.webp'
import coma5 from '../../assets/coma/coma5.webp'
import coma6 from '../../assets/coma/coma6.webp'
import coma7 from '../../assets/coma/coma7.webp'
import coma8 from '../../assets/coma/coma8.webp'
import coma9 from '../../assets/coma/coma9.webp'
import coma10 from '../../assets/coma/coma10.webp'
import coma11 from '../../assets/coma/coma11.webp'
import coma12 from '../../assets/coma/coma12.webp'
import coma13 from '../../assets/coma/coma13.webp'



export const Coma = () => {
  return (
    <div className="coma">
    
            <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
                <li className="breadcrumb-item"><a><Link to='/'>Home</Link></a></li>
                <li className="breadcrumb-item"><a>Gadgets</a></li>
                <li className="breadcrumb-item active" aria-current="page">Mobile Accessories</li>
            </ol>
            </nav>

            <div className="card">
                <img src={coma1} className="card-img-top" alt=""/>
                <div className="card-body">
                    <h5 className="card-title">
Ergonomic Foldable Laptop Stand Holder - for Any Windows Laptop,</h5>
                    <p className="card-text">LKR. 1,150 </p>
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
                <img src={coma2} className="card-img-top" alt=""/>
                <div className="card-body">
                    <h5 className="card-title">
Ergonomic Foldable Laptop Stand Holder - for Any Windows Laptop</h5>
                    <p className="card-text">LKR. 600 </p>
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
                <img src={coma3} className="card-img-top" alt=""/>
                <div className="card-body">
                    <h5 className="card-title">
1080P HDMI to VGA Converter For Xbox Ps3 Ps4 PC TV LEDs </h5>
                    <p className="card-text">LKR. 699 </p>
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
                <img src={coma4} className="card-img-top" alt=""/>
                <div className="card-body">
                    <h5 className="card-title">
Logitech High Quality Non-Skid Mouse Pad (22cm*18cm)</h5>
                    <p className="card-text">LKR. 190 </p>
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
                <img src={coma5} className="card-img-top" alt=""/>
                <div className="card-body">
                    <h5 className="card-title">
Old World Map / Razer Goliathus Professional Large Gaming</h5>
                    <p className="card-text">LKR. 700</p>
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
                <img src={coma6} className="card-img-top" alt=""/>
                <div className="card-body">
                    <h5 className="card-title">
MetalMaster Laptop Stand - Ergonomic Foldable Laptop</h5>
                    <p className="card-text">LKR. 1,599 </p>
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
                <img src={coma7} className="card-img-top" alt=""/>
                <div className="card-body">
                    <h5 className="card-title">
HT208 Heavy Bass Multimedia Speaker </h5>
                    <p className="card-text">LKR. 1,596 </p>
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
                <img src={coma8} className="card-img-top" alt=""/>
                <div className="card-body">
                    <h5 className="card-title">
Laptop Skin Protector 4 In 1 Pack for 15.6 inch</h5>
                    <p className="card-text">LKR. 890 </p>
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
                <img src={coma9} className="card-img-top" alt=""/>
                <div className="card-body">
                    <h5 className="card-title">
Premium CAT6 10m 15m 20m 30m 50M 75M 100M </h5>
                    <p className="card-text">LKR. 430 </p>
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
                <img src={coma10} className="card-img-top" alt=""/>
                <div className="card-body">
                    <h5 className="card-title">
JEDEL K13 USB Wired Basic Gaming Keyboard For Desktop </h5>
                    <p className="card-text">LKR. 970 </p>
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
                <img src={coma11} className="card-img-top" alt=""/>
                <div className="card-body">
                    <h5 className="card-title">
Wireless Bluetooth Speaker Rechargeable Light</h5>
                    <p className="card-text">LKR. 1,449 </p>
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
                <img src={coma12} className="card-img-top" alt=""/>
                <div className="card-body">
                    <h5 className="card-title">
USB Bluetooth Adapter Dongle Wireless Audio Receiver</h5>
                    <p className="card-text">LKR. 789 </p>
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
                <img src={coma13} className="card-img-top" alt=""/>
                <div className="card-body">
                    <h5 className="card-title">
Basic Mouse Pad (22cm*18cm) Non-Skid</h5>
                    <p className="card-text">LKR. 189 </p>
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
