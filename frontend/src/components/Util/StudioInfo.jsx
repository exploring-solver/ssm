import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import assets from '../../assets/assets';

const StudioInfo = () => {
  const branches = [
    {
      name: 'Delhi Branch',
      phone: '+91-9100009140',
      email: 'sharrysinghmusic@gmail.com',
    },
    {
      name: 'Mohali Branch',
      phone: '+91-9100009140',
      email: 'sharrysinghmusic@gmail.com',
    },
  ];

  return (
    <Box color="white" bgcolor="#070a15">
      <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: "10px" }} p={3}>
        <Box sx={{ width: { xs: "100%", md: "30%" } }}>
          <Typography variant="h6" gutterBottom>
            <img src={assets.logo} className='w-32' alt="" />
          </Typography>
          <Typography variant="body2">
            Worked with many major Artists/Labels i.e Karan Aujla, Gurinder Rai, Prem Dhillon, Jerry, T-series, Speed Records etc. We can produce/mix master any type of music.
          </Typography>
        </Box>
        <Grid container spacing={2} className='flex flex-wrap gap-10'>
          {branches.map((branch, index) => (
            <Grid item xs={12} sm={6} key={index}>
              <Typography>{branch.name}</Typography>
              <hr className='w-1/2 my-3' />
              <Typography variant="body2">{branch.phone}</Typography>
              <Typography variant="body2">{branch.email}</Typography>
            </Grid>
          ))}
        </Grid>
      </Box>
      <hr />
      <Typography sx={{ padding: "10px 0", textAlign: "center" }}>Copyright © 2024 sharrysinghmusic.com</Typography>
    </Box>
  );
};

export default StudioInfo;
