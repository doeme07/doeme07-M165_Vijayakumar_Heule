import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AppBar as MuiAppBar, Toolbar, Button, Box } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from './Badge';
import InfoIcon from '@mui/icons-material/Info';

interface NavbarProps {
  cartCount: number;
}

const Navbar: React.FC<NavbarProps> = ({ cartCount }) => {
  const location = useLocation();
  const hideNavbar = location.pathname === '/' || location.pathname === '/register';

  if (hideNavbar) {
    return null; // Do not render the Navbar on the Login and Register pages
  }

  return (
    <MuiAppBar
      position="static"
      style={{
        height: '80px',
        background: 'black',
      }}
    >
 <style>
@import url('https://fonts.googleapis.com/css2?family=Lobster&display=swap');
</style>

      <Toolbar>
        <Box
          display="flex"
          justifyContent="space-between"
          width="100%"
          alignItems="center"
        >
          <Button
            color="inherit"
            component={Link}
            to="/home"
            style={{
              textDecoration: 'none',
              fontSize: '18px',
              color: 'white',
            }}
          >
            <HomeIcon style={{ marginRight: '5px' }} />
            Home
          </Button>
          <Button
            color="inherit"
            component={Link}
            to="/cars"
            style={{
              textDecoration: 'none',
              fontSize: '18px',
              color: 'white',
            }}
          >
            <DirectionsCarIcon style={{ marginRight: '5px' }} />
            Cars
          </Button>
          <Button>
            <Link
              to="/home"
              style={{
                textDecoration: 'none',
                fontFamily: "Lobster, sans-serif",
                color: 'white',
                fontSize: '27px',
                fontWeight: 'bold',
              }}
            >
              Car Rental
            </Link>
          </Button>
          <div>
            <Button
              color="inherit"
              component={Link}
              to="/payment"
              style={{
                textDecoration: 'none',
                fontSize: '18px',
                color: 'white',
              }}
            >
              {/* Use the Badge component to display the cart count */}
              <Badge count={cartCount} />
              Cart
            </Button>
          </div>
          <Button
            color="inherit"
            component={Link}
            to="/about"
            style={{
              textDecoration: 'none',
              fontSize: '18px',
              color: 'white',
            }}
          >
            <InfoIcon style={{ marginRight: '5px' }} />
            About Us
          </Button>
        </Box>
      </Toolbar>
    </MuiAppBar>
  );
};

export default Navbar;
