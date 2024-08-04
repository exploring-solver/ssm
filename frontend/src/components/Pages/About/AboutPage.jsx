import { Box } from '@mui/material'
import React from 'react'
import BlogPreview from '../Blog/BlogPreview'
import Banner from '../../Util/Banner'
import assets from '../../../assets/assets'

const AboutPage = () => {
  return (
    <Box>
      <Banner backgroundImage={assets.aspcontact} heading={"About"}/>
    </Box>

  )
}

export default AboutPage