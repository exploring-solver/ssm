import React from 'react';
import { Typography, Box, Container } from '@mui/material';

const InstaSoundCloud = () => {
  return (
    <Box sx={{ background: 'linear-gradient(180deg, #4A66A0 25%, #FF5500 100%)', py: 6 }}>
      <Container>
        <Typography variant="h5" align="center" gutterBottom>
          <Box component="span" borderBottom={1} borderColor="secondary.main" color={'block'} display="inline">
            INSTA & SOUNDCLOUD
          </Box>
        </Typography>
        <Typography variant="h5" align="center" gutterBottom>
          <strong>We are Social.</strong>
        </Typography>
        <hr />
        <Box display="flex" justifyContent="center" alignItems="center" mt={4} flexDirection={{ xs: 'column', md: 'row' }}>
          <Box p={2} sx={{ width: { xs: '100%', md: '50%' }, display: 'flex', justifyContent: 'center' }}>
            <iframe 
              src="https://www.instagram.com/reel/Cw2imjZsUNR/embed/captioned/?cr=1&v=14&wp=280&rd=https%3A%2F%2Fsharrysinghmusic.com&rp=%2F#%7B%22ci%22%3A0%2C%22os%22%3A1029.5%2C%22ls%22%3A623.2000000178814%2C%22le%22%3A922.3000000119209%7D" 
              width="320" 
              height="440" 
              frameBorder="0" 
              scrolling="no" 
              allowtransparency="true"
              title="Instagram Embed"
            ></iframe>
          </Box>
          <Box p={2} sx={{ width: { xs: '100%', md: '50%' }, display: 'flex', justifyContent: 'center' }}>
            <iframe 
              width="100%" 
              height="450" 
              scrolling="no" 
              frameBorder="no" 
              allow="autoplay" 
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/971808670&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
              title="SoundCloud Embed"
            ></iframe>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default InstaSoundCloud;
