import React from 'react';
import { Box, Typography, Grid, Card, CardContent } from '@mui/material';
import Banner from '../../Util/Banner';
import assets from '../../../assets/assets';

const ServicesPage = () => {
  const services = [
    {
      title: 'Music Production',
      description: 'Music production is an intricate and creative process that lies at the heart of the music industry. It involves the transformation of musical ideas into a polished, sonically appealing final product...',
      image: assets.pcsetup,
    },
    {
      title: 'Sound Mixing',
      description: 'Our sound mixing endeavors begin with a meticulous selection of audio components, each note, each instrument, and each vocal meticulously scrutinized to ensure that they harmonize flawlessly...',
      image: assets.aspcontact,
    },
    {
      title: 'Stem Mastering',
      description: 'We stand as unrivaled masters, indisputably the best in the industry. What distinguishes us, elevating our stem mastering to an unparalleled level of excellence, is the fusion of cutting-edge technology with an unwavering commitment to the craft...',
      image: assets.makingbeat,
    },
  ];

  return (
    <Box sx={{ bgcolor: 'background.default', p: 4 }}>
      <Banner backgroundImage={assets.aspcontact} heading={"Services"} />
      <Grid mt={2} container spacing={3}>
        {services.map((service, index) => (
          <Grid 
            item 
            xs={12} 
            md={4} 
            key={index}
            sx={{ 
              position: 'relative', 
              overflow: 'hidden', 
              borderRadius: 2,
              height: 300, // Adjust height as needed
              backgroundImage: `url(${service.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              '&:before': {
                content: '""',
                position: 'absolute',
                top: 0,
                opacity:5,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(0, 0, 0, 0.5)', // Overlay with low opacity
              }
            }}
          >
            <CardContent 
              sx={{ 
                position: 'relative', 
                zIndex: 1, 
                color: 'white', // Make text white for better readability
                height: '100%', 
                display: 'flex', 
                flexDirection: 'column', 
                justifyContent: 'center',
                p: 3,
              }}
            >
              <Typography variant="h6" component="h3" gutterBottom>
                {service.title}
              </Typography>
              <Typography variant="body2" color="inherit">
                {service.description}
              </Typography>
            </CardContent>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ServicesPage;
