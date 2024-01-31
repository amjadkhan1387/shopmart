import React from 'react'
import './Mob.css'
import { Link } from 'react-router-dom'
import Rating from 'react-rating-stars-component';


export const Mob = (props) => {
  return (
    <div className="mobile-page">
    
            <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
                <li className="breadcrumb-item"><a><Link to='/'>Home</Link></a></li>
                
                <li className="breadcrumb-item active" aria-current="page">Mobiles</li>
            </ol>
            </nav>

            <div className="card">
                <img src={props.image} className="card-img-top" alt=""/>
                <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                    <p className="card-text">{props.price}</p>
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
                <img src={props.image}  className="card-img-top" alt=""/>
                <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                    <p className="card-text">{props.price}</p>
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
                <img src={props.image}  className="card-img-top" alt=""/>
                <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                    <p className="card-text">{props.price}</p>
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
                <img src={props.image}  className="card-img-top" alt=""/>
                <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                    <p className="card-text">{props.price}</p>
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
                <img src={props.image}  className="card-img-top" alt=""/>
                <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                    <p className="card-text">{props.price}</p>
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
                <img src={props.image}  className="card-img-top" alt=""/>
                <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                    <p className="card-text">{props.price}</p>
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
                <img src={props.image}  className="card-img-top" alt=""/>
                <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                    <p className="card-text">{props.price}</p>
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
                <img src={props.image}  className="card-img-top" alt=""/>
                <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                    <p className="card-text">{props.price}</p>
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
                <img src={props.image}  className="card-img-top" alt=""/>
                <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                    <p className="card-text">{props.price}</p>
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
                <img src={props.image}  className="card-img-top" alt=""/>
                <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                    <p className="card-text">{props.price}</p>
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
                <img src={props.image}  className="card-img-top" alt=""/>
                <div className="card-body">
                    <h5 className="card-title">{props.name}</h5>
                    <p className="card-text">{props.price}</p>
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
                <img src={props.image} className="card-img-top" alt=""/>
                <div className="card-body">
                    <h5 className="card-title">{props.name}</h5>
                    <p className="card-text">{props.price}</p>
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
