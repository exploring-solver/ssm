import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import assets from '../../assets/assets';

const ContactInfo = () => {
  return (
    <div bgcolor="error.main" sx={{display:"flex", width:"100%"}} className='bg-red-800 flex sm:flex-wrap-reverse flex-wrap w-full' >
      <Box  color="white" p={3}>
        <Typography variant="h5" gutterBottom>
          Don't hesitate to contact us
        </Typography>
        <Typography variant="body1" className='sm:w-1/2' paragraph>
          Feel free to call us any time between 1 pm to 11 pm or you can WhatsApp any time you like. we are always present to reply to your queries.
        </Typography>
        <Button
          variant="contained"
          startIcon={<WhatsAppIcon />}
          color="inherit"
          href="https://wa.me/yourphonenumber"
          target="_blank"
          sx={{ color: "red" }}
          rel="noopener noreferrer"
        >
          WhatsApp
        </Button>
      </Box>
      <img src={assets.aspcontact} className='sm:w-96 object-cover' alt="" />
    </div>
  );
};

export default ContactInfo;