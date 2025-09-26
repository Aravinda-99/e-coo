import React from 'react'
import Navbar from '../navBar.jsx'
import PopularCategories from './popularCategories.jsx'
import FeaturedBanners from './FeaturedBanners.jsx'

const home = () => {
  return (
    <div>
        <Navbar />
        <PopularCategories />
        <FeaturedBanners />

    </div>
  )
}

export default home

  
