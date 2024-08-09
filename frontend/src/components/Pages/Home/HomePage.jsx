import { Box, CssBaseline } from '@mui/material'
import React from 'react'
import ContactInfo from '../../Util/ContactInfo'
import Testimonials from '../../Util/Testimonials'
import InstaSoundCloud from './InstaSoundCloud'
import StudioSelection from '../../Util/StudioSelection'
import ExperienceAndFeatures from './ExperienceAndFeatures'
import ReviewOurWork from '../../Util/Work'
import SoundKits from '../../Util/SoundKits'
import Hero from './Hero'
const HomePage = () => {
  return (
    <Box>
      <CssBaseline />
      <Hero/>
      <SoundKits/>
      <ReviewOurWork/>
      <ExperienceAndFeatures />
      <StudioSelection />
      <InstaSoundCloud />
      <Testimonials />
      {/* <ContactInfo /> */}
    </Box>
  )
}

export default HomePage