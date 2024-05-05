import React from 'react';
import { Facebook, Twitter, Instagram } from '@mui/icons-material';
import backgroundImage from '../../background.jpg';
import Avatar from '@mui/material/Avatar';

// Import the unknown.jpg image
import unknownImage from '../../unknown.jpg';

const AboutUsPage: React.FC = () => {
  return (
    <div
      style={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        background: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: -1,
          backdropFilter: 'blur(0.2em)',
        }}
      ></div>
      <div
        style={{
          zIndex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '20px',
          borderRadius: '10px',
          maxWidth: '800px', // Adjust the width based on your design
          width: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          color: 'white',
        }}
      >
        <h1 style={{ marginBottom: '20px' }}>About Us</h1>
        <p>Welcome to our car rental</p>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '20px' }}>
  <div style={{ textAlign: 'center', marginRight: '20px' }}>
    <Avatar alt="Dominic" src={unknownImage} sx={{ width: 150, height: 150 }} />
    <p>Dominic</p>
  </div>
  <div style={{ textAlign: 'center', marginLeft: '20px' }}>
    <Avatar alt="Sairam" src={unknownImage} sx={{ width: 150, height: 150 }} />
    <p>Sairam</p>
  </div>
</div>

        <p>We are dedicated to providing high-quality products/services and ensuring customer satisfaction.</p>
        <p>Contact us at info@company.com</p>

        {/* Social Media Icons */}
        <div style={{ marginTop: '20px' }}>
          <Facebook style={{ fontSize: '50px', margin: '0 40px', color: 'white' }} />
          <Twitter style={{ fontSize: '50px', margin: '0 40px', color: 'white' }} />
          <Instagram style={{ fontSize: '50px', margin: '0 40px', color: 'white' }} />
          {/* Add more social media icons as needed */}
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
