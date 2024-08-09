import React from 'react';
import { Box, Typography, Grid, Card, CardContent } from '@mui/material';

const songs = [
  { title: '', videoUrl: 'https://www.youtube.com/embed/OzTLe8l3G-A' },
  { title: '', videoUrl: 'https://www.youtube.com/embed/Y2G0ZkhrFpY' },
  { title: '', videoUrl: 'https://www.youtube.com/embed/wHrZVGdw5vA' },
  { title: '', videoUrl: 'https://www.youtube.com/embed/exfIFOuU_cw' },
  { title: '', videoUrl: 'https://www.youtube.com/embed/vLBj3ds5icE' },
  { title: '', videoUrl: 'https://www.youtube.com/embed/lA3KMV6VzS4' },
];

const ReviewOurWork = () => {
  return (
    <Box
      sx={{
        py: 4,
        px: 10,
        background: 'linear-gradient(180deg, #000000 33%, #FF0000 100%)',
        color: 'white',
      }}
    >
      <Typography variant="overline" display="block" align="center" gutterBottom>
        REVIEW OUR WORK
      </Typography>
      <Typography variant="h4" component="h2" align="center" gutterBottom>
        Youtube Top 6 Songs
      </Typography>
      <Grid container spacing={4}>
        {songs.map((song, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Card sx={{ backgroundColor: 'transparent', color: 'white' }}>
              <CardContent>
                <Typography variant="h6" component="div" gutterBottom>
                  {song.title}
                </Typography>
                <Box
                  component="iframe"
                  width="100%"
                  height="200"
                  src={song.videoUrl}
                  title={song.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ReviewOurWork;
