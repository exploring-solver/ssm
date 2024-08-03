import React from 'react';
import { Box, Typography, Grid, Card, CardContent, CardMedia, Button } from '@mui/material';
import assets from '../../assets/assets';

const StudioCard = ({ title, description, image, onBookNow }) => (
  <Card>
    <CardMedia
      component="img"
      height="200"
      image={image}
      alt={title}
    />
    <CardContent>
      <Typography gutterBottom variant="h6" component="div">
        {title}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {description}
      </Typography>
    </CardContent>
    <Box sx={{ p: 2 }}>
      <Button variant="outlined" color="error" onClick={onBookNow}>
        Book Now
      </Button>
    </Box>
  </Card>
);

const StudioSelection = () => {
  const studios = [
    {
      title: 'Studio 1 - Main Studio for Production',
      description: 'This is our main studio based in New Delhi, Powered by HEDD Audio studio monitors. we finalise our tracks and do mixing mastering in this studio dedicated to deliver high quality sound using high quality equipments.',
      image: assets.studio,
    },
    {
      title: 'Studio 2 - Recording Studio in Mohali',
      description: 'This is our second studio based in Mohali , we usually use this studio for meeting artists and doing music production / recording based out in Mohali or in Punjab.',
      image: assets.studio,
    },
  ];

  const handleBookNow = (studioTitle) => {
    console.log(`Booking for ${studioTitle}`);
    // Add booking logic here
  };

  return (
    <Box sx={{ py: 4 ,px:10}}>
      <Typography variant="overline" display="block" align="center" gutterBottom>
        OUR STUDIO
      </Typography>
      <Typography variant="h4" component="h2" align="center" gutterBottom>
        Select your studio
      </Typography>
      <Grid container spacing={4}>
        {studios.map((studio, index) => (
          <Grid item xs={12} md={6} key={index}>
            <StudioCard
              {...studio}
              onBookNow={() => handleBookNow(studio.title)}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default StudioSelection;