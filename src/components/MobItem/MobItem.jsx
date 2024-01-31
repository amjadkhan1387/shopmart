import React from 'react'
import all_product from '../../assets/all_product'
import { Mob } from '../../components/Mob/Mob'
import './MobItem.css'

export const MobItem = () => {
  return (
    <div className='mobile-item'>
        <div className="mobile">
        {all_product.map((item,i)=>{
          return <Mob key={i} id={item.id} name={item.name} image={item.image} price={item.price}/>
        })}
      </div>
    </div>
  )
}
