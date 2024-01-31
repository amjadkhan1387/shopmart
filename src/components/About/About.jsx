import React from 'react';
import BIMLogo from '../../assets/BIMLogo.png';

export const About = () => {
  const aboutStyle = {
    container: {
      fontFamily: 'Arial, sans-serif',
      padding: '20px',
      textAlign: 'center'
    },
    header: {
      color: '#333',
      marginBottom: '20px'
    },
    section: {
      marginBottom: '20px'
    },
    teamImage: {
      width: '150px',
      borderRadius: '50%'
    }
  };

  return (
    <div style={aboutStyle.container}>
      <h1 style={aboutStyle.header}>About Diverse Shopmart</h1>
      <p>Welcome to Diverse Shopmart - your one-stop shop for a diversity of quality products. Our mission is to provide an inclusive shopping experience by offering a wide range of products that cater to all our customers' needs.</p>
      
      <section style={aboutStyle.section}>
        <h2>Our Mission</h2>
        <p>At Diverse Shopmart, we are committed to excellence. We strive to deliver the best products at the most affordable prices. Our core values are customer satisfaction, inclusivity, and sustainability. We believe in creating a shopping environment that everyone can enjoy and trust.</p>
      </section>
      
      <section style={aboutStyle.section}>
        <h2>Our Company</h2>
        <div>
        <img src={BIMLogo} alt="Company Logo" style={aboutStyle.teamImage} />
          <h3>Matrix Mind Consultancy</h3>
          <p>Matrix Mind Consultancy is a new startup company in Sri Lanka which aims to new heights.</p>
        </div>
      </section>
      
      <section style={aboutStyle.section}>
        <h2>Our History</h2>
        <p>Founded in 2023, Diverse Shopmart has quickly established itself as a leader in the e-commerce space. With a commitment to diversity and quality, we've grown our product lineup to include thousands of items across multiple categories.</p>
      </section>
      
      <section style={aboutStyle.section}>
        <h2>Contact Us</h2>
        <p>Have questions or feedback? Our customer service team is here to help. Reach out to us at contact@diverseshopmart.com or call us at 123-456-7890.</p>
      </section>
    </div>
  );
};
