import React, { useState, useEffect, ReactNode } from 'react';
import { Car } from '../Atoms/CarModel';
import backgroundImage from '../../background.jpg';
import Navbar from '../Molecules/Navbar';
import { Fab, useScrollTrigger, Zoom, Tooltip } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Link } from 'react-router-dom';

// ScrollTop component definition
interface ScrollTopProps {
  children: ReactNode;
}

const ScrollTop: React.FC<ScrollTopProps> = ({ children }: ScrollTopProps) => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" style={{ position: 'fixed', bottom: 16, right: 16 }}>
        {children}
      </div>
    </Zoom>
  );
};

// CarPage component definition
interface CarPageProps {
  carData: Car[];
}

const CarPage: React.FC<CarPageProps> = ({ carData }) => {
  const fixedImageHeight = '200px'; // Adjusted height for better layout

  return (
    <div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '100vh',
          background: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          position: 'relative',
        }}
      >
        <div
          className="car-list"
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
            padding: '20px',
            maxWidth: '1200px', // Adjusted the maximum width for better responsiveness
            width: '100%',
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
          }}
        >
          {carData.map((car) => (
            <div key={car.id} style={{ marginBottom: '20px', width: '30%' }}>
              <Link to={`/cars/${car.id}`} style={{ textDecoration: 'none', color: 'white' }}>
                <div
                  key={car.id}
                  style={{
                    textAlign: 'center',
                    marginBottom: '20px',
                  }}
                >
                  <p style={{ color: 'white', fontSize: '18px', fontWeight: 'bold', marginBottom: '8px' }}>
                    {car.brand} {car.model}
                  </p>
                  <img
                    src={car.link}
                    alt={`${car.brand} ${car.model}`}
                    style={{
                      width: '100%',
                      height: fixedImageHeight,
                      borderRadius: '10px',
                      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                    }}
                  />
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <ScrollTop>
        <Tooltip title="Back to Top">
          <Fab color="primary" size="small" aria-label="scroll back to top" style={{ backgroundColor: 'grey' }}>
            <KeyboardArrowUpIcon />
          </Fab>
        </Tooltip>
      </ScrollTop>
    </div>
  );
};

export default CarPage;
