import React from 'react';
import { Box, Typography, Grid, Card, CardContent, Button } from '@mui/material';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import MicIcon from '@mui/icons-material/Mic';

const FeatureCard = ({ icon, title, description }) => (
  <Card>
    <CardContent>
      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
        {icon}
      </Box>
      <Typography variant="h6" component="div" align="center" gutterBottom>
        {title}
      </Typography>
      <Typography variant="body2" color="text.secondary" align="center">
        {description}
      </Typography>
    </CardContent>
  </Card>
);

const ExperienceAndFeatures = () => {
  const features = [
    {
      icon: <HeadphonesIcon sx={{ fontSize: 40, color: 'white' ,bgcolor:'brown', padding:'10px', borderRadius:'100px'}} />,
      title: 'Best Equipment',
      description: 'We pride ourselves on offering state-of-the-art equipment that is perfectly suited to meet the unique needs of our artists and projects. With the best music studio equipment at our disposal, we are able to achieve unparalleled precision in sound recording, mixing, and mastering. This precision allows us to create music that not only meets but exceeds industry standards.',
    },
    {
      icon: <VolumeUpIcon sx={{ fontSize: 40, color: 'white',bgcolor:'brown', padding:'10px', borderRadius:'100px' }} />,
      title: 'Sound Quality',
      description: 'Our organization is deeply committed to delivering exceptional sound quality in all aspects of our work. We understand that different projects have unique sound requirements. Therefore, we tailor our approach to meet the specific needs and preferences of our clients, ensuring that the sound quality aligns with their artistic vision.',
    },
    {
      icon: <MusicNoteIcon sx={{ fontSize: 40, color: 'white' ,bgcolor:'brown', padding:'10px', borderRadius:'100px'}} />,
      title: 'Live Instruments',
      description: 'Live instrument recording is a process that captures the genuine artistry and authenticity of musicians. Skilled sound engineers play a crucial role in live instrument recording. They are responsible for setting up microphones, adjusting levels, and ensuring that the recording process captures the instrument`s full sonic range.',
    },
    {
      icon: <MicIcon sx={{ fontSize: 40, color: 'white' ,bgcolor:'brown', padding:'10px', borderRadius:'100px'}} />,
      title: 'Multiple Studios',
      description: 'Having multiple studios offers flexibility in scheduling and accommodating multiple projects simultaneously. This flexibility is particularly advantageous in a fast-paced industry where time is often of the essence. Various studios can facilitate collaboration among artists, producers, and engineers. Each studio can serve as a creative hub where professionals from different backgrounds can come together to work on projects.',
    },
  ];

  return (
    <Box sx={{ py: 4 ,bgcolor:'whitesmoke', px:10}}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <Box>
            <Typography variant="overline" display="block" gutterBottom>
              WHY CHOOSE US
            </Typography>
            <Typography variant="h4" component="h2" gutterBottom>
              More than 10 years experience
            </Typography>
            <Typography variant="body1" paragraph>
              More than a decade of commitment to our craft has allowed us to achieve a level of mastery that sets us apart. We have honed our skills to deliver exceptional results consistently. We believe that our expertise is most valuable when shared. We collaborate with our clients and partners, leveraging our knowledge to help them succeed in their endeavors.
            </Typography>
            <Button variant="contained" color="error">
              Click here
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12} md={8}>
          <Grid container spacing={2}>
            {features.map((feature, index) => (
              <Grid item xs={12} sm={6} key={index}>
                <FeatureCard {...feature} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ExperienceAndFeatures;