import React from 'react'
import './Skin.css'
import { Link } from 'react-router-dom'
import skin1 from '../../assets/skin/skin1.webp'
import Rating from 'react-rating-stars-component';
import skin2 from '../../assets/skin/skin2.webp'
import skin3 from '../../assets/skin/skin3.webp'
import skin4 from '../../assets/skin/skin4.webp'
import skin5 from '../../assets/skin/skin5.webp'
import skin6 from '../../assets/skin/skin6.jpeg'
import skin7 from '../../assets/skin/skin7.webp'
import skin8 from '../../assets/skin/skin8.webp'
import skin9 from '../../assets/skin/skin9.webp'
import skin10 from '../../assets/skin/skin10.webp'
import skin11 from '../../assets/skin/skin11.webp'



export const Skin = () => {
  return (
    <div className="skin">
    
            <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
                <li className="breadcrumb-item"><a><Link to='/'>Home</Link></a></li>
                <li className="breadcrumb-item"><a>Gadgets</a></li>
                <li className="breadcrumb-item active" aria-current="page">Skin Care</li>
            </ol>
            </nav>

            <div className="card">
                <img src={skin1} className="card-img-top" alt=""/>
                <div className="card-body">
                    <h5 className="card-title">
DR.RASHEL Vitamin C Brightening & Anti ageing Face Serum 50ml</h5>
                    <p className="card-text">LKR. 800 </p>
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
                <img src={skin2} className="card-img-top" alt=""/>
                <div className="card-body">
                    <h5 className="card-title">
Lip Therapy Rosy Lips - 7g</h5>
                    <p className="card-text">LKR. 400 </p>
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
                <img src={skin3} className="card-img-top" alt=""/>
                <div className="card-body">
                    <h5 className="card-title">Dr.Rashel Vitamin C Brightening & Anti-Aging Night Cream 50g</h5>
                    <p className="card-text">LKR. 1200 </p>
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
                <img src={skin4} className="card-img-top" alt=""/>
                <div className="card-body">
                    <h5 className="card-title">
Roushun 99% Aloe Vera Soothing Gel Face Moisturizer - 300m</h5>
                    <p className="card-text">LKR. 840 </p>
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
                <img src={skin5} className="card-img-top" alt=""/>
                <div className="card-body">
                    <h5 className="card-title">
Cliara Botanical Acne Control Face Wash 100Ml</h5>
                    <p className="card-text">LKR. 1400</p>
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
                <img src={skin6} className="card-img-top" alt=""/>
                <div className="card-body">
                    <h5 className="card-title">
Fresh and white beauty cream</h5>
                    <p className="card-text">LKR. 779 </p>
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
                <img src={skin7} className="card-img-top" alt=""/>
                <div className="card-body">
                    <h5 className="card-title">Cliara Rosehip Oil 10Ml</h5>
                    <p className="card-text">LKR. 2,279</p>
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
                <img src={skin8} className="card-img-top" alt=""/>
                <div className="card-body">
                    <h5 className="card-title">Dr.Rashel Gold Collagen Sun Cream (SPF 100) – 80g</h5>
                    <p className="card-text">LKR. 1,590 </p>
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
                <img src={skin9} className="card-img-top" alt=""/>
                <div className="card-body">
                    <h5 className="card-title">Pure & Natural Beet Root Powder 50g face mask</h5>
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
                <img src={skin10} className="card-img-top" alt=""/>
                <div className="card-body">
                    <h5 className="card-title">O'nelle Rose Oil Toner 100Ml</h5>
                    <p className="card-text">LKR. 640 </p>
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
                <img src={skin11} className="card-img-top" alt=""/>
                <div className="card-body">
                    <h5 className="card-title">Aushara Multani Mitti Powder - 50g</h5>
                    <p className="card-text">LKR. 620 </p>
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

    </div>

  )
}
