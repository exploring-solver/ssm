import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';

const Header = () => {
  const menuItems = ['Home', 'Sound Kits', 'Courses', 'Blogs', 'About Us', 'Services'];

  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: 'red', fontStyle: 'italic' }}>
          DopePeppz
        </Typography>
        <Box>
          {menuItems.map((item, index) => (
            <Button key={index} color="inherit" sx={{ color: item === 'Home' ? 'red' : 'inherit' }}>
              {item}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;