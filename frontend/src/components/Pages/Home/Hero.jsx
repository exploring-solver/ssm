import React from 'react';
import { Box, Typography, Button, useMediaQuery, useTheme } from '@mui/material';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import assets from '../../../assets/assets';

const Hero = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

  const carouselImages = [
    assets.pcsetup,
    assets.studio,
    assets.makingbeat,
    assets.stemmastering,
  ];

  const settings = {
    dots: false,
    fade: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: false,
  };

  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        flexDirection: isSmallScreen ? 'column' : 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'black',
        color: 'white',
        position: 'relative',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 1,
        }}
      >
        <Slider {...settings}>
          {carouselImages.map((image, index) => (
            <Box
              key={index}
              sx={{
                height: '100vh',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundImage: `url(${image})`,
              }}
            />
          ))}
        </Slider>
      </Box>
      <Box
        sx={{
          backgroundColor: 'rgba(0,0,0,0.7)',
          padding: 4,
          maxWidth: isSmallScreen ? '90%' : '50%',
          textAlign: isSmallScreen ? 'center' : 'left',
          zIndex: 2,
          position: 'relative',
        }}
      >
        <Typography variant="overline">
          WELCOME TO DOPEPEPPZ
        </Typography>
        <Typography variant="h2" component="h1" sx={{ my: 2 }}>
          We are the Hybrid/ Modern sound studio
        </Typography>
        <Button variant="contained" color='secondary'>
          Click here
        </Button>
      </Box>
    </Box>
  );
};

export default Hero;