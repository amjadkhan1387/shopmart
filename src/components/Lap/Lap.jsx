import React from 'react'
import './Lap.css'
import { Link } from 'react-router-dom'
import lap1 from '../../assets/lap/lap1.webp'
import Rating from 'react-rating-stars-component';
import lap2 from '../../assets/lap/lap2.webp'
import lap3 from '../../assets/lap/lap3.webp'
import lap4 from '../../assets/lap/lap4.webp'
import lap5 from '../../assets/lap/lap5.webp'
import lap6 from '../../assets/lap/lap6.webp'
import lap7 from '../../assets/lap/lap7.webp'
import lap8 from '../../assets/lap/lap8.webp'
import lap9 from '../../assets/lap/lap9.webp'
import lap10 from '../../assets/lap/lap10.webp'
import lap11 from '../../assets/lap/lap11.webp'
import lap12 from '../../assets/lap/lap12.webp'



export const Lap = () => {
  return (
    <div className="lap">
    
            <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
                <li className="breadcrumb-item"><a><Link to='/'>Home</Link></a></li>
                <li className="breadcrumb-item"><a>Gadgets</a></li>
                <li className="breadcrumb-item active" aria-current="page">Laptops</li>
            </ol>
            </nav>

            <div className="card">
                <img src={lap1} className="card-img-top" alt=""/>
                <div className="card-body">
                    <h5 className="card-title">Apple MacBook Pro Retina i7 and i5 Laptop</h5>
                    <p className="card-text">LKR. 105,500 </p>
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
                <img src={lap2} className="card-img-top" alt=""/>
                <div className="card-body">
                    <h5 className="card-title">
HP 15s-DU1114TU Laptop JET BLACK MS Office</h5>
                    <p className="card-text">LKR. 140,250 </p>
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
                <img src={lap3} className="card-img-top" alt=""/>
                <div className="card-body">
                    <h5 className="card-title">HP EliteBook 840 G5 i5/i7 8th Gen</h5>
                    <p className="card-text">LKR. 143,000 </p>
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
                <img src={lap4} className="card-img-top" alt=""/>
                <div className="card-body">
                    <h5 className="card-title">
DOOGEE T10 (8+7GB Ram/128GB Rom)HP EliteBook 4th Gen</h5>
                    <p className="card-text">LKR. 63,500 </p>
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
                <img src={lap5} className="card-img-top" alt=""/>
                <div className="card-body">
                    <h5 className="card-title">
[REFURBISHED] Lenovo Thinkpad X230 , Core i5 3rd gen 8GB Ram</h5>
                    <p className="card-text">LKR. 49,690 </p>
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
                <img src={lap6} className="card-img-top" alt=""/>
                <div className="card-body">
                    <h5 className="card-title">
MacBook Pro Retina 13inch i7 16GB 256GB SSD Touchbar</h5>
                    <p className="card-text">LKR. 139,500 </p>
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
                <img src={lap7} className="card-img-top" alt=""/>
                <div className="card-body">
                    <h5 className="card-title">
Lenovo ThinkPad X1 carbon i7 7th gen 16gb Ram 256GB SSD Laptop</h5>
                    <p className="card-text">LKR. 143,500 </p>
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
                <img src={lap8} className="card-img-top" alt=""/>
                <div className="card-body">
                    <h5 className="card-title">Lenovo ThinkPad Yoga 260 , Core i5 6th Gen 8GB</h5>
                    <p className="card-text">LKR. 84,600 </p>
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
                <img src={lap9} className="card-img-top" alt=""/>
                <div className="card-body">
                    <h5 className="card-title">ASUS Vivobook A1502Z - Intel Core i3 (1215U) 12th Gen, 4GB</h5>
                    <p className="card-text">LKR. 99,500 </p>
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
                <img src={lap10} className="card-img-top" alt=""/>
                <div className="card-body">
                    <h5 className="card-title">Apple MacBook Air 13.3-inch   Core  i5</h5>
                    <p className="card-text">LKR. 79,500 </p>
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
                <img src={lap11} className="card-img-top" alt=""/>
                <div className="card-body">
                    <h5 className="card-title">
Hp Zbook 17 G5 i5 8th gen 16GB RAM 512GB SSD 17inch</h5>
                    <p className="card-text">LKR. 119,500 </p>
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
                <img src={lap12} className="card-img-top" alt=""/>
                <div className="card-body">
                    <h5 className="card-title">Hp Zbook 17 G3 i7 6th Gen 16GB DDR4 Ram</h5>
                    <p className="card-text">LKR. 95,500 </p>
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
