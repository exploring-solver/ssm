import { Box } from '@mui/material'
import React from 'react'
import BlogPreview from '../Blog/BlogPreview'
import Banner from '../../Util/Banner'
import assets from '../../../assets/assets'
import MusicProduction from './MusicProduction'

const AboutPage = () => {
  return (
    <Box>
      <Banner backgroundImage={assets.aspcontact} heading={"About"}/>
      <MusicProduction/>
    </Box>

  )
}

export default AboutPage