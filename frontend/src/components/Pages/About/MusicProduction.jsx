import React from 'react';
import { Box, Typography, Container, Grid, Paper } from '@mui/material';
import assets from '../../../assets/assets';

const MusicProduction = () => {
    return (
        <Container maxWidth="lg">
            <Grid container spacing={4}>
                {/* Image Section */}
                <Grid item xs={12} md={4}>
                    <Box
                        sx={{
                            display: 'flex',
                            gap: '10px',
                            flexWrap: 'wrap',
                            flexDirection: {
                                xs: 'row', // Default to row on extra-small screens
                                sm: 'row', // Row on small screens (mobile devices)
                                md: 'column', // Column on medium screens (tablets and up)
                            },
                        }}
                        my={3}
                    >
                        <img
                            src={assets.pcsetup} // Replace with your image source
                            alt="Production Image 1"
                            style={{ borderRadius: '8px', marginBottom: '16px' }}
                            sx={{
                                width: {
                                    xs: '100%',  // Full width on extra-small screens (and small)
                                    sm: '100%',  // Full width on small screens
                                    md: '100%',  // Full width on medium screens
                                    lg: '40%',   // 40% width on large screens
                                    xl: '40%',   // 40% width on extra-large screens
                                },
                            }}
                        />
                        <img
                            src={assets.stemmastering}
                            alt="Production Image 2"
                            style={{ borderRadius: '8px' }}
                            sx={{
                                width: {
                                    xs: '80%',  // Full width on extra-small screens (and small)
                                    sm: '80%',  // Full width on small screens
                                    md: '80%',  // Full width on medium screens
                                    lg: '45%',  // 45% width on large screens
                                    xl: '45%',  // 45% width on extra-large screens
                                },
                            }}
                        />

                    </Box>
                </Grid>

                {/* Text Section */}
                <Grid item xs={12} md={8}>
                    <Paper elevation={3} sx={{ padding: 4 }}>
                        <Typography variant="h4" component="h1" gutterBottom>
                            Welcome to our music production website, where creativity knows no bounds and quality reigns supreme.
                        </Typography>
                        <Typography variant="body1" paragraph>
                            With a rich portfolio of collaborations with renowned artists such as Karan Aujla, Prem Dhillon, Gurinder Rai,
                            and partnerships with industry giants like T-Series, Speed Records, and Jass Records, we have established
                            ourselves as a trusted name in the music production realm. Our versatility shines through as we adeptly navigate
                            through various genres, ensuring that every client’s vision is brought to life with precision and flair.
                        </Typography>
                        <Typography variant="body1" paragraph>
                            At our core, we are dedicated to delivering the highest quality work to our clients. Our team of skilled
                            professionals is committed to exceeding expectations at every turn.
                        </Typography>
                        <Typography variant="body1" paragraph>
                            But our commitment doesn’t end there. We believe in sharing our knowledge and expertise with the world, which is
                            why we offer tutorials to aspiring producers looking to hone their craft. Additionally, we understand the
                            importance of access to quality resources, which is why we create Indian sample packs that are not only
                            affordable but sometimes even free. We believe that every artist deserves the tools they need to succeed,
                            regardless of their budget.
                        </Typography>
                        <Typography variant="body1" paragraph>
                            We actively encourage individuals to join us on Instagram, where they can access exclusive benefits and
                            behind-the-scenes content. We believe in the power of collaboration and are always looking for ways to connect
                            with fellow music enthusiasts and creators.
                        </Typography>
                        <Typography variant="body1" paragraph>
                            Furthermore, we understand the challenges that emerging artists face, which is why we offer free music on our
                            YouTube channel and Spotify. We believe that talent should be nurtured and supported, and we are committed to
                            providing a platform for up-and-coming artists to showcase their skills to a wider audience.
                        </Typography>
                        <Typography variant="body1" paragraph>
                            In essence, our music production website is more than just a platform for creating music – it’s a community where
                            passion, creativity, and collaboration thrive. Whether you’re an established artist looking to take your career
                            to the next level or an aspiring producer just starting out, we have the tools, expertise, and resources to help
                            you succeed. Join us on this journey, and let’s make beautiful music together.
                        </Typography>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    );
};

export default MusicProduction;
