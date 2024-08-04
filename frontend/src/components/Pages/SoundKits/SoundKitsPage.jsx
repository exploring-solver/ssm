import React from 'react'
import Banner from '../../Util/Banner'
import assets from '../../../assets/assets'
import SoundKits from '../../Util/SoundKits'

const SoundKitsPage = () => {
  return (
    <div>
        <Banner heading={"Sound Kits"} backgroundImage={assets.aspcontact}/>
        <SoundKits/>
    </div>
  )
}

export default SoundKitsPage;