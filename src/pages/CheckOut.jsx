import React, { useState } from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer/Footer';
import { BASE_URL, IMAGE_URL } from '../Utils/urls';
import { error_toaster } from '../Utils/Toaster';
import { useNavigate } from 'react-router-dom';
import Loader from '../loader/Loader';

export const CheckOut = () => {
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')));
    console.log(JSON.stringify(cart));
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false)
    const [destinationAddress, setDestinationAddress] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('');

    const handleAddressChange = (e) => {
        setDestinationAddress(e.target.value);
    };

    const handlePaymentMethodChange = (e) => {
        setPaymentMethod(e.target.value);
    };

    const handleCheckout = () => {
        // Implement your checkout logic here
        // You can use destinationAddress and paymentMethod for further processing
        alert('Checkout functionality goes here');
    };

    const [destinationDetails, setDestinationDetails] = useState({
        address: '',
        city: '',
        state: '',
        country: '',
        phone: '',
        email: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setDestinationDetails({
            ...destinationDetails,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        if (destinationDetails.address == '') {
            error_toaster("Address is required!");
            return;
        }
        if (destinationDetails.email == '') {
            error_toaster("Email is required!");
            return;
        }
        if (destinationDetails.city == '') {
            error_toaster("City is required!");
            return;
        }
        if (destinationDetails.state == '') {
            error_toaster("State is required!");
            return;
        }
        if (destinationDetails.country == '') {
            error_toaster("Country is required!");
            return;
        }
        if (destinationDetails.phone == '') {
            error_toaster("Phone is required!");
            return;
        }
        if (paymentMethod == '') {
            error_toaster("Please select payment method!");
            return;
        }
        console.log(destinationDetails)

        localStorage.setItem('paymentMethod', paymentMethod);
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            navigate("/payment", { state: { destinationDetails: destinationDetails } })
        }, 1000); // 1000 milliseconds = 1 second

    };

    return (
        <div>
            <Navbar />
            <div className="container mt-5">
                <h2>Checkout</h2>
                {
                    loading ? <div style={{ display: "flex", justifyContent: "center", alignItems: "center", padding: "30px" }}><Loader /></div> : <div>
                        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                            <form style={{ border: "1px solid", padding: "5rem", borderRadius: "10px" }} onSubmit={handleSubmit}>
                                <h4>Destination Details</h4>
                                <div className="mb-3">
                                    <label htmlFor="address" className="form-label">Address</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="address"
                                        name="address"
                                        value={destinationDetails.address}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="email"
                                        name="email"
                                        value={destinationDetails.email}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="city" className="form-label">City</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="city"
                                        name="city"
                                        value={destinationDetails.city}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="state" className="form-label">State</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="state"
                                        name="state"
                                        value={destinationDetails.state}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="country" className="form-label">Country</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="country"
                                        name="country"
                                        value={destinationDetails.country}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="phone" className="form-label">Phone Number</label>
                                    <input
                                        type="tel"
                                        className="form-control"
                                        id="phone"
                                        name="phone"
                                        value={destinationDetails.phone}
                                        onChange={handleChange}
                                    />
                                </div>

                                <button type="submit" className="btn btn-primary">Submit</button>
                            </form>
                            <div className="mb-3" style={{ border: "1px solid", padding: "2rem", width: "50%", borderRadius: "10px" }}>
                                <label htmlFor="paymentMethod" className="form-label">Payment Method</label>
                                <select
                                    className="form-select"
                                    id="paymentMethod"
                                    value={paymentMethod}
                                    onChange={handlePaymentMethodChange}
                                >
                                    <option value="">Select Payment Method</option>
                                    <option value="stripe">Stripe</option>
                                    <option value="paypal">PayPal</option>
                                    {/* Add more payment options as needed */}
                                </select>

                                <div style={{ padding: "20px 0px" }}>
                                    <label className="form-label">Items in Cart</label>
                                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", justifyItems: "center" }}>
                                        <p>Name</p>
                                        <p>Price</p>
                                        <p>Qty</p>
                                        <p>Image</p>
                                    </div>

                                    {

                                        cart?.map((product) => (
                                            <div style={{ margin: "5px 0px", borderRadius: "10px", padding: "10px", background: "#E5E4E2", display: "flex", justifyContent: "space-between", alignItems: "center", justifyItems: "center" }}>
                                                <p>{product.name}</p>
                                                <p>{product.unit_price}</p>
                                                <p>{product.quantity}</p>
                                                <div><img src={IMAGE_URL + product.logo} style={{ width: '50px', height: '50px', objectFit: 'cover' }} /></div>
                                            </div>
                                        ))
                                    }
                                    <hr></hr>
                                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                                        <p>Total</p>
                                        <p>{localStorage.getItem('total') ? `${localStorage.getItem('total')}/-` : 0}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style={{ display: "flex", justifyContent: "end", padding: "10px 0px" }}>
                            <button className="btn btn-primary" onClick={handleSubmit}>Proceed to Payment</button>
                        </div>
                    </div>
                }



            </div>
            <Footer />
        </div>
    );
};

export default CheckOut;
