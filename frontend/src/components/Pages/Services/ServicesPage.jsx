import React from 'react';
import { Box, Typography, Grid, Card, CardContent, CardMedia } from '@mui/material';

const ServicesPage = () => {
  const services = [
    {
      title: 'Music Production',
      description: 'Music production is an intricate and creative process that lies at the heart of the music industry. It involves the transformation of musical ideas into a polished, sonically appealing final product...',
      image: 'path/to/music-production-image.jpg',
    },
    {
      title: 'Sound Mixing',
      description: 'Our sound mixing endeavors begin with a meticulous selection of audio components, each note, each instrument, and each vocal meticulously scrutinized to ensure that they harmonize flawlessly...',
      image: 'path/to/sound-mixing-image.jpg',
    },
    {
      title: 'Stem Mastering',
      description: 'We stand as unrivaled masters, indisputably the best in the industry. What distinguishes us, elevating our stem mastering to an unparalleled level of excellence, is the fusion of cutting-edge technology with an unwavering commitment to the craft...',
      image: 'path/to/stem-mastering-image.jpg',
    },
  ];

  return (
    <Box sx={{ bgcolor: 'background.default', p: 4 }}>
      <Typography variant="h4" component="h2" gutterBottom>
        Our Services
      </Typography>
      <Grid container spacing={3}>
        {services.map((service, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={service.image}
                alt={service.title}
              />
              <CardContent>
                <Typography variant="h6" component="h3" gutterBottom>
                  {service.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {service.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ServicesPage;