import React from 'react'
import HeroSection from './components/HeroSection'
import { ShootingStars } from '@/components/ui/shooting-stars'
import { StarsBackground } from '@/components/ui/stars-background'

const Home = () => {
  return (
    <div className='relative overflow-hidden'>
      <HeroSection />
      
      <ShootingStars />
      <StarsBackground />
    </div>
  )
}

export default Home