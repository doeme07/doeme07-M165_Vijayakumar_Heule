import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Car } from '../Atoms/CarModel';
import { Button, Typography, Card, CardContent, CardActions, Tooltip, Grid, Snackbar } from '@mui/material';
import { ArrowBack, ShoppingCart } from '@mui/icons-material';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import ChairIcon from '@mui/icons-material/Chair';
import BoltIcon from '@mui/icons-material/Bolt';
import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';
import CheckIcon from '@mui/icons-material/Check';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import backgroundImage from '../../background.jpg';

interface CarDetailsProps {
  carData: Car[];
  addToCart: (car: Car) => void;
}

const CarDetailsPage: React.FC<CarDetailsProps> = ({ carData, addToCart }) => {
  const params: { id: string } = useParams() as { id: string };
  const selectedCar = carData.find((car) => car.id === parseInt(params.id, 10));

  const [feedbackOpen, setFeedbackOpen] = useState(false);

  const handleAddToCart = () => {
    if (selectedCar) {
      addToCart(selectedCar);
      setFeedbackOpen(true);
    }
  };

  const handleCloseFeedback = () => {
    setFeedbackOpen(false);
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
      <Card style={{ maxWidth: '80vw', marginBottom: '20px', background: 'rgba(0,0,0, 0.7)', backdropFilter: 'blur(0.1em)' }}>
        <CardContent style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Typography variant="h4" component="div" gutterBottom style={{ color: 'white', marginBottom: '10px', textAlign: 'center' }}>
            {selectedCar?.brand} {selectedCar?.model}
          </Typography>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img
              src={selectedCar?.link}
              alt={`${selectedCar?.brand} ${selectedCar?.model}`}
              style={{ width: '75%', minHeight: '400px', minWidth: '150px', maxHeight: '450px', objectFit: 'contain', borderRadius: '15px' }}
            />
          </div>
          <Grid container spacing={1}>
            {[
              { icon: <FormatListBulletedIcon />, text: `Category: ${selectedCar?.category}` },
              { icon: <ChairIcon />, text: `Seats: ${selectedCar?.seats}` },
              { icon: <BoltIcon />, text: `Horsepower: ${selectedCar?.horsepower}` },
              { icon: <LocalGasStationIcon />, text: `Fuel Type: ${selectedCar?.fuelType}` },
              { icon: <AttachMoneyIcon />, text: `Price: ${selectedCar?.price}` },
            ].map((item, index) => (
              <Grid item xs={4} key={index} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography variant="body1" color="text.secondary" style={{ color: 'white', marginBottom: '5px', display: 'flex', alignItems: 'center' }}>
                  {item.icon}‎ {item.text}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </CardContent>
        <CardActions style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Button onClick={handleAddToCart} variant="contained" color="primary" startIcon={<ShoppingCart />} style={{ backgroundColor: 'gray', color: 'white', outline: 'none', border: 'none' }}>
            Add to Cart
          </Button>
          <div>
            <Link to="/cars" style={{ textDecoration: 'none', margin: '10px' }}>
              <Tooltip title="Back to all cars">
                <Button variant="contained" color="primary" style={{ backgroundColor: 'gray', color: 'white', borderColor: 'white' }}>
                  <ArrowBack />
                </Button>
              </Tooltip>
            </Link>
            <Link to="/payment" style={{ textDecoration: 'none', margin: '10px' }}>
              <Tooltip title="Show cart">
                <Button variant="contained" color="primary" style={{ backgroundColor: 'gray', color: 'white', borderColor: 'white' }}>
                  <ShoppingCart />
                </Button>
              </Tooltip>
            </Link>
          </div>
        </CardActions>
      </Card>
      <Snackbar
  open={feedbackOpen}
  autoHideDuration={2000}
  onClose={handleCloseFeedback}
  message={
    <div style={{ display: 'flex', alignItems: 'center' }}>
      Added to cart <CheckIcon style={{ marginLeft: '5px' }} />
    </div>
  }
  sx={{ backgroundColor: 'grey', borderRadius: '10px', fontSize: '18px' }}
/>
    </div>
  );
};

export default CarDetailsPage;
