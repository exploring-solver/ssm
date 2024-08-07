import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Header = ({isAuthenticated, setIsAuthenticated, setIsSubscribed}) => {
  const menuItems = [
    { label: 'Home', to: '/' },
    { label: 'Sound Kits', to: '/soundkits' },
    { label: 'Courses', to: '/courses' },
    { label: 'Blogs', to: '/blogs' },
    { label: 'About Us', to: '/about' },
    { label: 'Services', to: '/services' },
  ];
  const backendurl = import.meta.env.VITE_BACKEND_URL;

  const handleLogout = async () => {
    try {
      window.location.href = `${backendurl}/users/logout`;
      setIsAuthenticated(false);
      setIsSubscribed(false);
    } catch (error) {
      console.error('Logout failed', error);
    }
  };

  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: 'red', fontStyle: 'italic' }}>
          DopePeppz
        </Typography>
        <Box>
          {menuItems.map((item, index) => (
            <Button
              key={index}
              component={Link}
              to={item.to}
              color="inherit"
              sx={{ color: item.label === 'Home' ? 'red' : 'inherit' }}
            >
              {item.label}
            </Button>
          ))}
        </Box>
        { isAuthenticated &&

          <Button onClick={handleLogout}>Logout</Button>
        }
      </Toolbar>
    </AppBar>
  );
};

export default Header;
