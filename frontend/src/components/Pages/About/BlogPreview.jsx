import React from 'react';
import { Box, Typography, Grid, Card, CardContent } from '@mui/material';

const BlogPreview = () => {
  const blogPosts = [
    {
      title: 'The Future of Sound: Exploring the Hybrid / Modern Sound Studio',
      date: '14 July 2023',
      excerpt: 'Innovation meets Tradition Step into the world of hybrid sound studios, where cutting-edge technology and traditional recording techniques coexist in perfect harmony...',
    },
    {
      title: 'Embrace the Future of Sound: The Hybrid / Modern Sound Studio',
      date: '14 July 2023',
      excerpt: 'The world of sound recording and production is constantly evolving, and at our Hybrid / Modern Sound Studio, we are at the...',
    },
    {
      title: 'Unleashing the Power of Hybrid and Modern Sound at Our Studio',
      date: '14 July 2023',
      excerpt: 'Experience the Future of Sound Production Welcome to our Hybrid/Modern sound studio, where we combine cutting-edge technology with the art of sound...',
    },
  ];

  return (
    <Box sx={{ bgcolor: 'background.paper', p: 4 }}>
      <Typography variant="h4" component="h2" gutterBottom>
        Blog
      </Typography>
      <Grid container spacing={3}>
        {blogPosts.map((post, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Card>
              <CardContent>
                <Typography variant="h6" component="h3" gutterBottom>
                  {post.title}
                </Typography>
                <Typography variant="caption" color="text.secondary" display="block" gutterBottom>
                  {post.date}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {post.excerpt}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default BlogPreview;