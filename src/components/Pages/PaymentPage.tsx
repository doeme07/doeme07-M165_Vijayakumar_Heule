import React from 'react';
import { Car } from '../Atoms/CarModel';
import { useNavigate } from 'react-router-dom';
import { Button, Typography } from '@mui/material';
import backgroundImage from '../../background.jpg';

interface PaymentPageProps {
  cart: Car[];
}

const PaymentPage: React.FC<PaymentPageProps> = ({ cart }) => {
  const navigate = useNavigate();

  const totalPrice = cart.reduce((total, car) => total + car.price, 0);

  const handlePayment = () => {
    // Simuliere Zahlungsprozess
    // Hier könntest du eine echte Zahlungsverarbeitung implementieren

    // Zeige ein Pop-up an, dass die Zahlung abgeschlossen ist
    alert('Vielen Dank für Ihre Zahlung!');

    // Navigiere zur Startseite
    navigate('/home');
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        background: `url(${backgroundImage})`,
      }}
    >
      <div
        style={{
          minWidth: '80vh',
          background: 'rgba(255, 255, 255, 0.1)',
          padding: '20px',
          borderRadius: '8px',
          backdropFilter: 'blur(0.1em)',
        }}
      >
        <Typography variant="h4" gutterBottom style={{ color: 'white' }}>
          Cart overview
        </Typography>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {cart.map((car, index) => (
            <li key={index} style={{ marginBottom: '20px', borderBottom: '1px solid white', paddingBottom: '20px' }}>
              <div>
                <Typography variant="body1" style={{ color: 'white' }}>
                  {car.brand} {car.model}
                </Typography>
                <Typography variant="body2" style={{ color: 'white' }}>
                Category: {car.category}
                </Typography>
                <Typography variant="body2" style={{ color: 'white' }}>
                  Price: {car.price}
                </Typography>
              </div>
            </li>
          ))}
        </ul>
        <Typography variant="body1" style={{ color: 'white', marginTop: '20px' }}>
          Total Price: {totalPrice}
        </Typography>
        <Button variant="contained" color="primary" onClick={handlePayment} style={{ marginTop: '30px', backgroundColor: 'grey' }}>
          Proceed to payment
        </Button>
      </div>
    </div>
  );
};

export default PaymentPage;
