import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Container, Grid, TextField, Typography } from '@mui/material';
import { Button } from '@mui/material';
import backgroundImage from '../../background.jpg';

interface RegisterFormValues {
  username: string;
  password: string;
  confirmPassword: string;
}

const RegisterPage: React.FC = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleRegister = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (username !== '' && password !== '' && password === confirmPassword) {
      // In a real application, you would handle registration logic here
      // For this example, just redirecting to the login page
      navigate('/');
    } else {
      setError('Please fill in all fields and make sure the passwords match.');
    }
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
      <Container
        maxWidth="xs"
        style={{
          padding: '35px',
          background: 'white',
          borderRadius: '10px',
        }}
      >
        <Typography variant="h4" align="center" gutterBottom>
          Register
        </Typography>
        <form onSubmit={handleRegister}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                type="text"
                label="Username"
                fullWidth
                variant="outlined"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                type="password"
                label="Password"
                fullWidth
                variant="outlined"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                type="password"
                label="Confirm Password"
                fullWidth
                variant="outlined"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                color="inherit"
                type="submit"
                variant="contained"
                fullWidth
                style={{
                  textDecoration: 'none',
                  fontSize: '18px',
                  color: 'white',
                  backgroundColor: 'grey',
                }}
              >
                Register
              </Button>
            </Grid>
          </Grid>
        </form>
        {error && (
          <Typography variant="body2" color="error" align="center">
            {error}
          </Typography>
        )}
        <Typography variant="body2" align="center" style={{ marginTop: '10px' }}>
          Already have an account? <Link to="/">Login</Link>
        </Typography>
      </Container>
    </div>
  );
};

export default RegisterPage;
