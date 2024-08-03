import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import SnapchatIcon from '@mui/icons-material/Snapchat';
import YouTubeIcon from '@mui/icons-material/YouTube';

const StatsDisplay = () => {
  const stats = [
    { icon: <InstagramIcon />, value: '5+', label: 'Musicians' },
    { icon: <SnapchatIcon />, value: '100+', label: 'Songs' },
    { icon: <YouTubeIcon />, value: '2', label: 'Studio Branch' },
  ];

  return (
    <Box py={4}>
      <Grid container spacing={4} justifyContent="center">
        {stats.map((stat, index) => (
          <Grid item key={index} xs={4} sm={4} md={4} textAlign="center">
            {stat.icon}
            <Typography variant="h4" component="div" fontWeight="bold">
              {stat.value}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {stat.label}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default StatsDisplay;