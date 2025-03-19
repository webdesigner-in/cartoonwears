import React from 'react'
import Hero from '../components/Hero/Hero.jsx'
import FeatureSection from '../components/FeatureSection.jsx'
import TrendingProducts from '../components/TrendingProducts.jsx'
import Testimonials from '../components/Testimonials.jsx'
import Newsletter from '../components/Newsletter.jsx'

function Home() {
  return (
    <div>
      <Hero/>
      <FeatureSection/>
      <TrendingProducts/>
      <Testimonials/>
      <Newsletter/>
    </div>
  )
}

export default Home
