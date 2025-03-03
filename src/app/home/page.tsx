import React from 'react'
import HeroSection from './components/HeroSection'
import { ShootingStars } from '@/components/ui/shooting-stars'
import { StarsBackground } from '@/components/ui/stars-background'
import ExperienceSection from './components/ExperienceSection'

const Home = () => {
  return (
    <div className='relative overflow-hidden'>
      <HeroSection />
      <ExperienceSection />
      <ShootingStars />
      <StarsBackground />
    </div>
  )
}

export default Home