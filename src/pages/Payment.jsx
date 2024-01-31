import React from 'react'
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './payment.css'; // Import your CSS file for styling
import { PostApi } from '../ApiClient/PostApi';
import { place_order } from '../Utils/urls';
import { error_toaster, success_toaster } from '../Utils/Toaster';
import Loader from '../loader/Loader';

export default function Payment() {
    const location = useLocation();

    const navigate = useNavigate();
    const [cardNumber, setCardNumber] = useState('');
    const [cardName, setCardName] = useState('');
    const [expMonth, setExpMonth] = useState('');
    const [expYear, setExpYear] = useState('');
    const [cvc, setCvc] = useState('');
    const [loading, setLoading] = useState(false)
    const handlePaymentSubmit = async (e) => {
        e.preventDefault();
        if (cardNumber.length < 16) {
            error_toaster("Please enter a valid Card Number");
            return;
        }
        if (!cardName) {
            error_toaster("Card name is required!");
            return;
        }
        if (!cardNumber) {
            error_toaster("Card No. is required!");
            return;
        }
        if (!expMonth) {
            error_toaster("Exp Month is required!");
            return;
        }
        if (!expYear) {
            error_toaster("Exp year is required!");
            return;
        }
        if (!cvc || cvc.length < 3) {
            error_toaster("Cvc is required!");
            return;
        }
        const currentYear = new Date().getFullYear();
        const currentMonth = new Date().getMonth() + 1; // Month is zero-based

        const expirationDate = new Date(`${expYear}-${expMonth}-01`);

        if (expirationDate <= new Date(currentYear, currentMonth - 1)) {
            error_toaster("Card has expired. Please enter a valid expiration date.");
            return;
        }
        setLoading(true)
        const res = await PostApi(place_order, {
            cardName: cardName,
            cardNumber: cardNumber,
            expMonth: expMonth,
            expYear: expYear,
            cvc: cvc,
            products: JSON.parse(localStorage.getItem('cart')),
            total: localStorage.getItem('total'),
            userId: localStorage.getItem('userId'),
            address: location?.state?.destinationDetails?.address,
            city: location?.state?.destinationDetails?.city,
            state: location?.state?.destinationDetails?.state,
            country: location?.state?.destinationDetails?.country,
            phone: location?.state?.destinationDetails?.phone,
            email: location?.state?.destinationDetails?.email,
        });
        console.log(res)
        if (res?.data?.status == "1") {
            setLoading(false)
            success_toaster(res.data.message);
            localStorage.removeItem('cart')
            navigate("/thank");
        }
        else {
            setLoading(false);
            error_toaster(res.data.message);
        }
        // console.log(res);
    };
    return (
        <>
            {
                loading ? <div style={{ display: "flex", justifyContent: "center", height: "50%", alignItems: "center", paddingTop: "100px" }}><Loader /></div> : <div className="payment-card-container">
                    <h1>Payment with {localStorage.getItem('paymentMethod')}</h1>
                    <form onSubmit={handlePaymentSubmit}>
                        <label>
                            Card Number:
                            <input
                                type="text"
                                value={cardNumber}
                                onChange={(e) => setCardNumber(e.target.value)}
                                maxLength="16"
                                placeholder='4111111111111111'
                            />
                        </label>
                        <label>
                            Cardholder Name:
                            <input
                                type="text"
                                value={cardName}
                                onChange={(e) => setCardName(e.target.value)}
                                placeholder='John Smith'
                            />
                        </label>
                        <div className="expiration-inputs">
                            <label>
                                Expiration Month:
                                <input
                                    type="text"
                                    value={expMonth}
                                    onChange={(e) => setExpMonth(e.target.value)}
                                    maxLength="2"
                                    placeholder='04'
                                />
                            </label>
                            <label>
                                Expiration Year:
                                <input
                                    type="text"
                                    value={expYear}
                                    onChange={(e) => setExpYear(e.target.value)}
                                    maxLength="4"
                                    placeholder='2023'
                                />
                            </label>
                        </div>
                        <label>
                            CVC:
                            <input
                                type="text"
                                value={cvc}
                                onChange={(e) => setCvc(e.target.value)}
                                maxLength="3"
                                placeholder='123'
                            />
                        </label>
                        <div style={{ display: "flex", justifyContent: "center" }}>
                            <button style={{ width: "200px" }} type="submit"> Pay {localStorage.getItem('total')}</button>
                        </div>

                        {/* Logos */}
                        <div className="payment-logos">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Stripe_Logo%2C_revised_2016.svg/2560px-Stripe_Logo%2C_revised_2016.svg.png" alt="Stripe Logo" className="logo" />
                            <img src="https://logos-world.net/wp-content/uploads/2020/07/PayPal-Logo.png" alt="PayPal Logo" className="logo" />
                        </div>
                    </form>
                </div>
            }

        </>

    )
}
