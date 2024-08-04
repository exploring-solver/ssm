import React from 'react';
import { Box, Typography, Button, Paper } from '@mui/material';
import { motion } from 'framer-motion';

const SubscriptionBox = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '300px',
        padding: 4,
        background: 'linear-gradient(135deg, rgba(255, 0, 0, 0.7), rgba(255, 0, 0, 0.5))',
        position: 'relative',
        overflow: 'hidden',
        textAlign: 'center',
      }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <Paper
          elevation={6}
          sx={{
            padding: 4,
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            color: 'white',
            borderRadius: '8px',
            textAlign: 'center',
          }}
        >
          <Typography variant="h5" component="h2" gutterBottom>
            🎵 Don't Miss Out!
          </Typography>
          <Typography variant="body1" gutterBottom>
            Subscribe to our YouTube channel and unlock exclusive access to our music courses.
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            href="https://www.youtube.com/channel/UC3lfOEFBqU8IyusJdb0gogw"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ mt: 2 }}
          >
            Subscribe Now
          </Button>
        </Paper>
      </motion.div>
    </Box>
  );
};

export default SubscriptionBox;
