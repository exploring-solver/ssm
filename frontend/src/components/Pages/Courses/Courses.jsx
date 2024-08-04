import React from 'react'
import SubscriptionCheck from '../../Auth/SubscriptionCheck'
import Banner from '../../Util/Banner'
import assets from '../../../assets/assets'

const Courses = ({isSubscribed}) => {
  return (
    <div>
      <Banner backgroundImage={assets.aspcontact} heading={"Courses"} />
       <SubscriptionCheck isSubscribed={isSubscribed} />
    </div>
  )
}

export default Courses