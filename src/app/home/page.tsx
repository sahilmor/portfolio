import { Button } from '@/components/ui/button'
import { ColourfulText } from '@/components/ui/colourful-text'
import { ShootingStars } from '@/components/ui/shooting-stars'
import { StarsBackground } from '@/components/ui/stars-background'
import Image from 'next/image'
import React from 'react'

const HeroSection = () => {
  return (
    <div>
      <div className='w-full md:h-[90dvh] p-4 md:flex items-center justify-between'>
        <div className='md:w-[60%] text-center flex items-center justify-center flex-col gap-3 text-white'>
          <h1 className='md:text-8xl text-5xl font-bold'>Sahil Mor</h1>
          <h3 className='md:text-2xl'><ColourfulText text="Full Stack Developer" /></h3>
          <p className='p-2 md:w-[80%]'>I&apos;m a passionate full-stack developer specializing in React.js, Next.js, and Node.js, with a deep understanding of JavaScript, Java, and C++. My expertise lies in building scalable, high-performance web applications, creating seamless UI/UX experiences, and developing robust API-driven solutions.
            With experience at Raist Foundation and Naai India, I have contributed to impactful projects, optimizing front-end performance and integrating dynamic backend systems. I&apos;m also fascinated by metaverse technologies (VR/AR) and their potential to transform digital experiences.
            Let&apos;s connect and build something amazing!
          </p>
          <div className='flex gap-4 mt-4 w-full justify-center'>
            <a href="#" className='w-full md:w-1/4 hidden md:block'>
              <Button type="button" className='bg-black w-full cursor-pointer hover:bg-black/70'>Get in Touch</Button>
            </a>
            <a href="/Resume_Sahil_Mor.pdf" download="sahilmor_cv.pdf" className='w-full md:w-1/4'>
              <Button type="button" className='bg-black w-full cursor-pointer hover:bg-black/70'>Download CV</Button>
            </a>
          </div>
        </div>
        <div className='w-[40%] md:flex items-center justify-center hidden'>
          <Image
            src='/man.png'
            alt='man'
            width={500}
            height={500}
            className='z-999'
          />
        </div>
      </div>
      <StarsBackground />
      <ShootingStars />
    </div>
  )
}

export default HeroSection