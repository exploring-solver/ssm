import React from 'react';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/system';

const BannerContainer = styled(Box)(({ theme, backgroundImage }) => ({
  background: `url(${backgroundImage}) no-repeat center center`,
  backgroundSize: 'cover',
  height: '200px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  overflow: 'hidden',
}));

const Overlay = styled(Box)(({ theme }) => ({
  backgroundColor: 'rgba(255, 0, 0, 0.5)', // Red with opacity
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
}));

const Banner = ({ heading, backgroundImage }) => {
  return (
    <BannerContainer backgroundImage={backgroundImage}>
      <Overlay />
      <Typography variant="h2" component="h1" sx={{ color: 'white', zIndex: 1 }}>
        {heading}
      </Typography>
    </BannerContainer>
  );
};

export default Banner;
