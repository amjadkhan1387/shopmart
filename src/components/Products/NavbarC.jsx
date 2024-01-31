import React from 'react'
import './NavbarC.css'
import { Link, useNavigate } from 'react-router-dom'

export const NavbarC = (props) => {
  console.log(props.data);
  const navigate = useNavigate();
  const category_products = (id) => {
    navigate("/category_products", { state: { categoryId: id } })
}
  return (
    <div className='navbarC'>

      <ul className='nav-menu'>
        {
          props?.data?.map((cat) => (
            <li>
              <span onClick={()=>category_products(cat.id)} to='/mobile'>{cat.name}</span>

            </li>
          ))
        }



      </ul>
    </div>


  )
}
