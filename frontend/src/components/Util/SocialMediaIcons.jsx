import React from 'react';
import { Box, IconButton } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import SnapchatIcon from '@mui/icons-material/Snapchat';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TikTokIcon from '@mui/icons-material/MusicVideo'; // Using MusicVideo as a placeholder for TikTok

const SocialMediaIcons = () => {
  const icons = [
    { Icon: InstagramIcon, url: '#' },
    { Icon: SnapchatIcon, url: '#' },
    { Icon: YouTubeIcon, url: '#' },
    { Icon: TikTokIcon, url: '#' },
  ];

  return (
    <Box display="flex" justifyContent="flex-start" gap={1}>
      {icons.map(({ Icon, url }, index) => (
        <IconButton key={index} href={url} target="_blank" rel="noopener noreferrer">
          <Icon />
        </IconButton>
      ))}
    </Box>
  );
};

export default SocialMediaIcons;