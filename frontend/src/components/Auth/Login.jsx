import React from 'react';
import { Box, Typography, Button, Container, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const handleGoogleLogin = () => {
    window.location.href = 'http://localhost:5000/users/google';
  };

  return (
    <div className='!h-[100vh] max-w-xs flex justify-center items-center m-auto'>
      <Paper elevation={3} sx={{ padding: 4, textAlign: 'center' }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Welcome!
        </Typography>
        <Typography variant="body1" color="textSecondary" paragraph>
          To access our exclusive courses, you need to be logged in and subscribed to our YouTube channel.
        </Typography>
        <Typography variant="body1" color="textSecondary" paragraph>
          Please log in using the button below to get started.
        </Typography>
        <Box sx={{ marginTop: 3 }}>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleGoogleLogin}
          >
            Login with Google
          </Button>
        </Box>
      </Paper>
    </div>
  );
};

export default Login;
