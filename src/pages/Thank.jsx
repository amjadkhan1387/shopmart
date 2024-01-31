import React from 'react';
import { useNavigate } from 'react-router-dom';

const Thank = () => {
    const navigate = useNavigate();
    return (
        <div style={styles.container} >
            <img
                src="https://images.pexels.com/photos/2072165/pexels-photo-2072165.jpeg"
                alt="Thank You Image"
                style={styles.image}
            />
            <h2 style={styles.heading}>Order Placed Successfully</h2>
            <p style={styles.message}>
                Thank you for choosing our services. Your order has been placed successfully.
            </p>
            <p style={styles.message}>
                We appreciate your business and look forward to serving you again.
            </p>
            <button onClick={()=>navigate("/")}>Go to Home</button>
        </div>
    );
};

const styles = {
    container: {
        maxWidth: '600px',
        margin: 'auto',
        marginBottom: "40px",
        padding: '20px',
        textAlign: 'center',
        border: '1px solid #ccc',
        borderRadius: '8px',
        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
        backgroundColor: '#fff',
    },
    image: {
        width: '100%',
        maxWidth: '400px',
        height: 'auto',
        marginBottom: '15px',
        borderRadius: '8px',
    },
    heading: {
        color: '#333',
        fontSize: '24px',
        marginBottom: '10px',
    },
    message: {
        color: '#555',
        fontSize: '16px',
        lineHeight: '1.5',
        marginBottom: '15px',
    },
};

export default Thank;
