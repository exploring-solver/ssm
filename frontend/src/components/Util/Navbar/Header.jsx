import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Box, IconButton, Drawer, List, ListItem, ListItemText, Menu, MenuItem } from '@mui/material';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import axios from 'axios';
import assets from '../../../assets/assets';

const Header = ({ isAuthenticated, setIsAuthenticated, setIsSubscribed }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const menuOpen = Boolean(anchorEl);

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

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const drawerContent = (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: 'red', fontStyle: 'italic'}} px={2} py={4}>
          <img src={assets.logo} className='w-32' alt="" />
        </Typography>
        {menuItems.map((item, index) => (
          <ListItem button component={Link} to={item.to} key={index}>
            <ListItemText primary={item.label} />
          </ListItem>
        ))}
        {isAuthenticated && (
          <ListItem button onClick={handleLogout}>
            <ListItemText primary="Logout" />
          </ListItem>
        )}
      </List>
    </Box>
  );

  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: 'red', fontStyle: 'italic' }}>
          <img src={assets.logo} className='w-32' alt="" />
        </Typography>

        {/* Desktop Menu */}
        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
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
          {isAuthenticated && (
            <Button onClick={handleLogout} sx={{ color: 'inherit' }}>
              Logout
            </Button>
          )}
        </Box>

        {/* Mobile Menu */}
        <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <Drawer
            anchor="right"
            open={drawerOpen}
            onClose={toggleDrawer(false)}
          >
            {drawerContent}
          </Drawer>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
