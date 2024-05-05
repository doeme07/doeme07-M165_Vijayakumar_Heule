import React, { useState, useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Link, useNavigate } from 'react-router-dom';
import { Container, Grid, TextField, Typography } from '@mui/material';
import { Button } from '@mui/material';
import backgroundImage from '../../background.jpg';
import AnimatedIntro from '../Molecules/AnimatedIntro';
import { useSpring, animated } from 'react-spring';
import '../../index.css';

interface LoginFormValues {
  username: string;
  password: string;
}

const LoginPage: React.FC = () => {
  const [introComplete, setIntroComplete] = useState(false);
  const [showContent, setShowContent] = useState(false);

  const handleIntroComplete = () => {
    setIntroComplete(true);
  };

  const navigate = useNavigate();
  const [error, setError] = useState('');

  const handleSubmit = async (values: LoginFormValues, { setSubmitting }: any) => {
    // Simulate basic login (without any validation)
    // In a real application, this should communicate with a backend for authentication
    if (values.username !== '' && values.password !== '') {
      // No validation in this example, direct navigation to '/home'
      navigate('/home');
    } else {
      setError('Please fill in all fields.');
    }
    setSubmitting(false);
  };

  const fadeAnimation = useSpring({
    opacity: introComplete ? 1 : 0,
    from: { opacity: 0 },
    config: { duration: 3000 }, // Adjust the duration for the fade-in animation
    onRest: () => {
      setShowContent(true); // Show the real content (AppBar) after intro animation
    },
  });

  return (
    <div>
      {/* Black Screen */}
      {!introComplete && <AnimatedIntro onIntroComplete={handleIntroComplete} />}

      {/* Content */}
      {introComplete && (
        <animated.div
          style={{
            ...fadeAnimation,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '100vh',
            background: `url(${backgroundImage})`, // Change the background color to black
            position: 'absolute', // Ensure the absolute positioning to cover the whole screen
            top: 0,
            left: 0,
            width: '100%',
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
              Login
            </Typography>
            <Formik
              initialValues={{ username: '', password: '' }}
              enableReinitialize
              validate={(values: LoginFormValues): any => {
                const errors: { username?: string; password?: string } = {};

                if (!values.username) {
                  errors.username = 'Required';
                }

                if (!values.password) {
                  errors.password = 'Required';
                }

                return errors;
              }}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting, isValid, touched }: any) => (
                <Form>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <Field
                        type="username"
                        name="username"
                        as={TextField}
                        label="Username"
                        fullWidth
                        variant="outlined"
                        error={touched.username && !isValid && !isSubmitting}
                        helperText={<ErrorMessage name="username" component="div" />}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Field
                        type="password"
                        name="password"
                        as={TextField}
                        label="Password"
                        fullWidth
                        variant="outlined"
                        error={touched.password && !isValid && !isSubmitting}
                        helperText={<ErrorMessage name="password" component="div" />}
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
                        Submit
                      </Button>
                    </Grid>
                  </Grid>
                </Form>
              )}
            </Formik>
            {error && (
              <Typography variant="body2" color="error" align="center">
                {error}
              </Typography>
            )}
            <Typography variant="body2" align="center" style={{ marginTop: '10px' }}>
              Don't have an account? <Link to="/register">Register</Link>
            </Typography>
          </Container>
        </animated.div>
      )}
    </div>
  );
};

export default LoginPage;
