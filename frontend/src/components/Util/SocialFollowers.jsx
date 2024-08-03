import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

const SocialFollowers = () => {
  const socialStats = [
    { icon: <InstagramIcon />, count: '37,000+', label: 'Followers' },
    { icon: <YouTubeIcon />, count: '12,000+', label: 'Subscribers' },
  ];

  return (
    <Box py={4}>
      <Grid container spacing={4} justifyContent="center">
        {socialStats.map((stat, index) => (
          <Grid item key={index} xs={6} sm={6} md={6} textAlign="center">
            {stat.icon}
            <Typography variant="h4" component="div" fontWeight="bold">
              {stat.count}
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

export default SocialFollowers;