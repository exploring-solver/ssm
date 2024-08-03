import React from 'react';
import { Typography, Avatar, Box, Container } from '@mui/material';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Sample testimonials data
const testimonials = [
  {
    name: 'Shahan',
    role: 'Singer',
    image: '/path/to/image1.jpg', // Replace with the correct image path
    text: 'In the vibrant tapestry of Punjabi music, DopePeppZ [Punjabi Music Producer] infused some unparalleled beats for my tracks which resonates perfectly with the lyrics I had. A harmonious collaboration that transcends boundaries, creating musical magic.',
  },
  {
    name: 'Shahan',
    role: 'Singer',
    image: '/path/to/image2.jpg', // Replace with the correct image path
    text: 'This was my first time ever using your service, and I am absolutely blown away by the professionalism, the style, and the entire process from beginning to end. This was a much-needed service, and I am pleased with every aspect. Don\'t change!',
  },
  {
    name: 'Rapper Manny',
    role: 'Singer',
    image: '/path/to/image3.jpg', // Replace with the correct image path
    text: 'Sharry bro did a great job and I\'m more than satisfied with the Mix Master of my tracks. My song sounds pro and I got more confidence back bout my music.',
  }
];

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <Container className='my-10'>
      <Typography variant="h5" align="left" gutterBottom>
        <Box component="span" borderBottom={1} borderColor="secondary.main" display="inline">
          TESTIMONIAL
        </Box>
      </Typography>
      <Typography variant="h6" align="left" gutterBottom>
        Customer testimonial
      </Typography>
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div key={index}>
            <Box display="flex" justifyContent="center" alignItems="center" mt={4}>
              <Avatar src={testimonial.image} alt={testimonial.name} sx={{ width: 56, height: 56, mr: 2 }} />
              <Box>
                <Typography variant="subtitle1">{testimonial.name}</Typography>
                <Typography variant="body2" color="textSecondary">{testimonial.role}</Typography>
              </Box>
            </Box>
            <Box mt={2} p={2} bgcolor="grey.100" borderRadius={2}>
              <Typography variant="body1" align="center">{testimonial.text}</Typography>
            </Box>
          </div>
        ))}
      </Slider>
    </Container>
  );
};

export default Testimonials;
