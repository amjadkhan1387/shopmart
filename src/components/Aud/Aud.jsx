import React from 'react'
import './Aud.css'
import headset from '../../assets/audio/headset.webp'
import headset2 from '../../assets/audio/headset2.webp'
import headset3 from '../../assets/audio/headset3.webp'
import Rating from 'react-rating-stars-component';
import headset4 from '../../assets/audio/headset4.webp'
import headset5 from '../../assets/audio/headset5.webp'
import headset6 from '../../assets/audio/headset6.jpg'
import hp1 from '../../assets/audio/hp1.jpg'
import hp2 from '../../assets/audio/hp2.jpg'
import hp3 from '../../assets/audio/hp3.webp'
import hp4 from '../../assets/audio/hp4.png'
import hp5 from '../../assets/audio/hp5.webp'


import { Link } from 'react-router-dom'


export const Aud = () => {
  return (
    <div className='aud'>
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
                <li className="breadcrumb-item"><a><Link to='/'>Home</Link></a></li>
                <li className="breadcrumb-item"><a>Electronic Accessories</a></li>
                <li className="breadcrumb-item active" aria-current="page">Audio</li>
            </ol>
            </nav><br/>
            <div className='heading-headset'>
<h2>Headsets</h2>

            </div>
            <div className="card">
                <img src={headset} className="card-img-top" alt=""/>
                <div className="card-body">
                    <h5 className="card-title">Logitech PRO Gaming Headset|Passive Noise</h5>
                    <p className="card-text">LKR. 2,000 </p>
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
                <img src={headset2} className="card-img-top" alt=""/>
                <div className="card-body">
                    <h5 className="card-title">Logitech Surround Sound Gaming Headset|G433 7.1 </h5>
                    <p className="card-text">LKR. 1,570 </p>
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
                <img src={headset3} className="card-img-top" alt=""/>
                <div className="card-body">
                    <h5 className="card-title">Wired Gaming Headsets</h5>
                    <p className="card-text">LKR. 3,400 </p>
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
                <img src={headset4} className="card-img-top" alt=""/>
                <div className="card-body">
                    <h5 className="card-title">Headsets for Microsoft Teams & Skype for Business</h5>
                    <p className="card-text">LKR. 3,700 </p>
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
                <img src={headset5} className="card-img-top" alt=""/>
                <div className="card-body">
                    <h5 className="card-title">Wireless Bluetooth Headsets | Poly, formerly Plantronics & Polycom</h5>
                    <p className="card-text">LKR. 4,000 </p>
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
                <img src={headset6} className="card-img-top" alt=""/>
                <div className="card-body">
                    <h5 className="card-title">The best wireless gaming headsets for Xbox One - SoundGuys</h5>
                    <p className="card-text">LKR. 6,000 </p>
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

            

            <div className='heading-hp'>
            <hr/><h2>Hearphones</h2>
            </div>

            <div className="card">
                <img src={hp1} className="card-img-top" alt=""/>
                <div className="card-body">
                    <h5 className="card-title">E25 BT hearphones | Compatible for all handsets</h5>
                    <p className="card-text">LKR. 1,100 </p>
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
                <img src={hp2} className="card-img-top" alt=""/>
                <div className="card-body">
                    <h5 className="card-title">USB Type C Digital Bass Earbuds Hearphones with Microphone (Black)</h5>
                    <p className="card-text">LKR. 4,240 </p>
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
                <img src={hp3} className="card-img-top" alt=""/>
                <div className="card-body">
                    <h5 className="card-title">Replacement Ear Bud Tips for Bose Conversation-Enhancing Hearphones Bl</h5>
                    <p className="card-text">LKR. 3,000 </p>
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
                <img src={hp4} className="card-img-top" alt=""/>
                <div className="card-body">
                    <h5 className="card-title">Bose Hearphones | Conversation-enhancing headphones</h5>
                    <p className="card-text">LKR. 56,000 </p>
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
                <img src={hp5} className="card-img-top" alt=""/>
                <div className="card-body">
                    <h5 className="card-title">TSel-137 Wireless Bluetooth Earbuds, 5.0 Bluetooth in Ear Neckband Earphones</h5>
                    <p className="card-text">LKR. 5,000 </p>
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

       
                

            

    </div>
  )
}
