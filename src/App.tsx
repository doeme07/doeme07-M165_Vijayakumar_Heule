import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './components/Pages/LoginPage';
import RegisterPage from './components/Pages/RegisterPage';
import HomePage from './components/Pages/HomePage';
import CarPage from './components/Pages/CarPage';
import AboutUsPage from './components/Pages/AboutUsPage';
import Navbar from './components/Molecules/Navbar';
import CarDetailsPage from './components/Pages/CarDetailsPage';
import PaymentPage from './components/Pages/PaymentPage';
import { fetchCars } from "./components/Atoms/CarModel";
import { Car } from "./components/Atoms/CarModel";

function App() {
  const [cart, setCart] = useState<Car[]>([]);
  const [carData, setCarData] = useState<Car[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const cars = await fetchCars();
      setCarData(cars);
    };
    fetchData();
  }, []);

  const addToCart = (car: Car) => {
    setCart([...cart, car]);
  };

  return (
    <BrowserRouter>
      <Navbar cartCount={cart.length} />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/home" element={<HomePage carData={carData}/>} />
        <Route path="/cars" element={<CarPage carData={carData} />} />
        <Route path="/cars/:id" element={<CarDetailsPage carData={carData} addToCart={addToCart} />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/payment" element={<PaymentPage cart={cart} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
