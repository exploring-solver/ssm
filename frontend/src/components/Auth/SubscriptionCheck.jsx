import { Box, Typography, Grid, Card, CardContent } from '@mui/material';
import { Button, Paper } from '@mui/material';
import { motion } from 'framer-motion';
const songs = [
    { title: 'How to make PUNJABI MUSIC FL Studio 20 | Tutorial', videoUrl: 'https://www.youtube.com/embed/ld2pqgA4w8Y?list=PLWrTVd4QrCgRLcKfc4OyXU4nlrCGx2Fxv' },
];
const SubscriptionCheck = ({ isSubscribed }) => {
    if (isSubscribed) {
        return <>
            <Typography variant="body1" className='px-10 !text-xs py-5' paragraph>
                I’ve crafted comprehensive FL Studio courses, providing aspiring music producers with a step-by-step guide to unleash their creative potential. These tutorials cover everything from the basics to advanced techniques, empowering learners to navigate FL Studio’s intricate features and cultivate their unique sound. Dive into the world of music production with my expertly curated content. Also updating this playlist continuously as new content will be updated on regular basis so make sure you save this playlist and subscribe my youtube channel and Instagram.
            </Typography>
            <Grid container spacing={4}>
                {songs.map((song, index) => (
                    <Grid item xs={12} md={4} key={index}>
                        <Card sx={{ backgroundColor: 'transparent', color: 'white' }}>
                            <CardContent>
                                <Typography variant="h6" component="div" gutterBottom color={'black'}>
                                    {song.title}
                                </Typography>
                                <Box
                                    component="iframe"
                                    width="100%"
                                    margin={"auto"}
                                    height="100"
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
        </>;
    } else {
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
                            href="https://www.youtube.com/channel/YOUR_CHANNEL_ID"
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
    }
};

export default SubscriptionCheck

