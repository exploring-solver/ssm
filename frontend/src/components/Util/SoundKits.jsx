import React from 'react';
import { Box, Typography, Grid, Card, CardContent, CardMedia } from '@mui/material';
import assets from '../../assets/assets';

const SoundKits = () => {
  const kits = [
    { title: 'Hard 808 Sample Pack', image: assets.harmonium},
    { title: 'Flute Sample Pack', image: assets.samplepack },
    { title: 'Piano Trap Melodies', image: assets.pianotrapbox },
  ];

  return (
    <Box py={4} px={10}>
      <Typography variant="h4" gutterBottom>
        SoundKits
      </Typography>
      <Grid container spacing={3}>
        {kits.map((kit, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <Card className='w-fit'>
              <CardMedia
                className='!w-48'
                component="img"
                image={kit.image}
                alt={kit.title}
              />
              <CardContent>
                <Typography variant="h6" component="div">
                  {kit.title}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default SoundKits;