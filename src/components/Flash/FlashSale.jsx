import React, { useState, useEffect } from 'react';
import './FlashSale.css';
import Rating from 'react-rating-stars-component';
import GetApi from '../../ApiClient/GetApi';
import { BASE_URL, IMAGE_URL, get_products } from '../../Utils/urls';
import { success_toaster } from '../../Utils/Toaster';
import { useNavigate } from 'react-router-dom';
import { NavbarC } from '../Products/NavbarC';

export const FlashSale = () => {
  const navigate = useNavigate();
  const { data } = GetApi(get_products);

  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');

  const addToCart = (product) => {
    // Retrieve the existing cart from local storage
    const existingCart = localStorage.getItem('cart');
    const existingCartArray = existingCart ? JSON.parse(existingCart) : [];

    // Check if the product is already in the cart
    const existingProduct = existingCartArray.find((item) => item.id === product.id);

    if (existingProduct) {
      // If the product is already in the cart, update its quantity
      const updatedCart = existingCartArray.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      localStorage.setItem('cart', JSON.stringify(updatedCart));
      setCart(updatedCart);
    } else {
      // If the product is not in the cart, add it with quantity 1
      const updatedCart = [...existingCartArray, { ...product, quantity: 1 }];
      localStorage.setItem('cart', JSON.stringify(updatedCart));
      setCart(updatedCart);
    }
    success_toaster("Item added to cart!");
  };

  useEffect(() => {
    // Calculate the total whenever the cart changes
    calculateTotal();
  }, [cart]);

  const calculateTotal = () => {
    const calculatedTotal = cart.reduce(
      (acc, item) => acc + item.unit_price * item.quantity,
      0
    );
    localStorage.setItem('total', calculatedTotal);
    setTotal(calculatedTotal);
  };

  const category_products = (id) => {
    navigate("/category_products", { state: { categoryId: id } });
  };

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };
  const removeFromCart = (product) => {
    // Retrieve the existing cart from local storage
    const existingCart = localStorage.getItem('cart');
    const existingCartArray = existingCart ? JSON.parse(existingCart) : [];

    // Find the index of the product in the cart
    const productIndex = existingCartArray.findIndex((item) => item.id === product.id);

    if (productIndex !== -1) {
      // If the product is found in the cart, remove it
      existingCartArray.splice(productIndex, 1);
      localStorage.setItem('cart', JSON.stringify(existingCartArray));
      setCart(existingCartArray);
      success_toaster("Item removed from cart!");
    }
  };
  return (
    <div>
      <NavbarC data={data?.category} />
      {/* <div className='navbarC' style={{ display: "flex", justifyContent: "center",padding:"20px 0px" }}>
        {data?.category?.map((cat) => (
          <p
            style={{ cursor: "pointer" }}
            onClick={() => category_products(cat.id)}
            key={cat.id}
            style={{
              padding: "5px 10px",
              background: "#D8D8D8",
              margin: "4px",
              borderRadius: "5px",
            }}
          >
            {cat.name}
          </p>
        ))}
      </div> */}

      <div style={{ display: "flex", justifyContent: "center", padding: "10px 200px" }}>
        <input
          type="text"
          placeholder="Search by product name"
          value={searchQuery}
          onChange={handleSearch}
        />
      </div>
      {
        searchQuery == '' ? <div style={{ display: "flex", justifyContent: "center" }}>
          <img style={{ width: "80%", objectFit: "contain" }} src='images/banner.jpg' />
        </div> : ""
      }
      <div>
        <p style={{ background: "gray", marginTop: "5px", color: "white", textAlign: "center", alignContent: "center" }}>Flash Sale</p>
      </div>




      <div className='flash-sale' style={{ gap: "10px", justifyContent: "center" }}>



        {data?.data
          ?.filter(product =>
            product.name.toLowerCase().includes(searchQuery.toLowerCase())
          )
          .map((product) => (
            <div className="card" style={{ width: "18rem", display: "flex", flexDirection: "column" }} key={product.id}>
              <img
                src={IMAGE_URL + product.logo}
                className="card-img-top"
                alt="..."
                style={{ height: "50%", width: "100%", objectFit: "cover" }}
              />
              <div className="card-body" style={{ flexGrow: 1 }}>
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">
                  <i>LKR. {product.unit_price}</i>
                </p>
              </div>
              {cart.some(item => item.id === product.id) ? (
                // Product is in the cart, show Remove from Cart button
                <button
                  onClick={() => removeFromCart(product)}
                  className="btn btn-danger"
                  style={{ width: "100%", borderRadius: "0px" }}
                >
                  Remove from Cart
                </button>
              ) : (
                // Product is not in the cart, show Add to Cart button
                <button
                  onClick={() => addToCart(product)}
                  className="btn btn-primary"
                  style={{ alignSelf: "flex-end", width: "100%", borderRadius: "0px" }}
                >
                  Add to Cart
                </button>
              )}
            </div>

          ))}
      </div>

    </div>
  );
};
