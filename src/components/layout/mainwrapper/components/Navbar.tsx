'use client'
import { Facebook, Github, Instagram, Linkedin, Twitter, Menu } from 'lucide-react'
import React, { useState, useEffect, useRef } from 'react'
import gsap from 'gsap'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (isOpen) {
        gsap.fromTo(
          menuRef.current,
          { opacity: 0, y: -20, display: 'none' },
          { opacity: 1, y: 0, display: 'block', duration: 0.5, ease: 'power3.out' }
        );
      } else {
        gsap.to(menuRef.current, {
          opacity: 0,
          y: -20,
          duration: 0.3,
          ease: 'power3.in',
          onComplete: () => {
            if (menuRef.current) {
              gsap.set(menuRef.current, { display: 'none' });
            }
          }
        });
      }
    });

    return () => ctx.revert();
  }, [isOpen]);

  return (
    <div className='w-full p-3'>
      <div className='w-full h-full p-4 flex items-center justify-between rounded-full bg-black text-white'>

        <div className='hidden md:flex md:w-1/3'>
          <ul className='flex gap-4'>
            <li>Home</li>
            <li>About</li>
            <li>Portfolio</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className='text-xl font-semibold md:w-1/3 text-center'>Sahil Mor</div>

        <div className='hidden md:flex md:w-1/3 gap-4 justify-end'>
          <a href="https://github.com/sahilmor" target='_blank'><Github /></a>
          <a href="https://www.linkedin.com/in/sahilmor/" target='_blank'><Linkedin /></a>
          <a href="https://www.instagram.com/sahilmor05/" target='_blank'><Instagram /></a>
          <a href="https://x.com/sahilmor05" target='_blank'><Twitter /></a>
          <a href="https://www.facebook.com/sahilmor05/" target='_blank'><Facebook /></a>
        </div>

        <div className='md:hidden flex justify-center items-center'>
          <button onClick={() => setIsOpen(!isOpen)}>
            <Menu className='text-red-500'/>
          </button>
        </div>
      </div>

      <div ref={menuRef} className='md:hidden bg-black/90 text-white mt-2 p-3 rounded-lg hidden'>
        <ul className='flex flex-col gap-3'>
          <li>Home</li>
          <li>About</li>
          <li>Portfolio</li>
          <li>Contact</li>
          <div className='flex gap-3 justify-center mt-2'>
            <a href="https://github.com/sahilmor"><Github /></a>
            <a href="https://www.linkedin.com/in/sahilmor/"><Linkedin /></a>
            <a href="https://www.instagram.com/sahilmor05/"><Instagram /></a>
            <a href="https://x.com/sahilmor05"><Twitter /></a>
            <a href="https://www.facebook.com/sahilmor05/"><Facebook /></a>
          </div>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
