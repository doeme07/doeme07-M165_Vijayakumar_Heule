import React, { useState, useEffect } from 'react';
import { Car } from "../Atoms/CarModel"
import backgroundImage from '../../background.jpg';


interface CarPageProps {
  carData: Car[];
}

const HomePage: React.FC<CarPageProps> = ({ carData }) => {
  const [index, setIndex] = useState(0);
  const [delay, setDelay] = useState(3000); // Delay between images in milliseconds

  const nextSlide = () => {
    setIndex((prevIndex) => (prevIndex === carData.length - 1 ? 0 : prevIndex + 1));
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, delay);
    return () => clearInterval(interval);
  }, [index]);

  const fixedImageHeight = '400px'; // Set your desired fixed height for the images

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        background: `url(${backgroundImage})`, // Assuming backgroundImage is defined
        backgroundSize: 'cover',
        position: 'relative',
      }}
    >
      <div
        style={{
          // Adjust the alpha value for transparency
          padding: '20px',
          borderRadius: '10px',
          maxWidth: '800px', // Adjust the width based on your design
          width: '100%',
          backgroundColor: 'rgba(255, 255, 255, 0.1)', 
        }}
      >
        <div className="slideshow" style={{ position: 'relative' }}>
          {carData.map((car, carIndex) => (
            <div
              key={car.id}
              style={{
                display: carIndex === index ? 'block' : 'none',
                textAlign: 'center',
              }}
            >
              <p style={{ color: 'white', fontSize: '24px', fontWeight: 'bold' }}>
                {car.brand} {car.model}
              </p>
              <img
                src={car.link}
                alt={`${car.brand} ${car.model}`}
                style={{ width: '100%', height: fixedImageHeight, borderRadius: '10px' }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
