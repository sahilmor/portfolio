'use client'
import { Facebook, Github, Instagram, Linkedin, Twitter, Menu, Mail } from 'lucide-react'
import React, { useState, useEffect, useRef } from 'react'
import gsap from 'gsap'
import Image from 'next/image'
import Link from 'next/link'
import { toast } from "sonner"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRef = useRef(null);
  const email = "mor.sahil05.28@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email).then(() => {
      toast("Email copied to clipboard!", {
        description: "You can now paste it anywhere.",
        duration: 2000,
        dismissible: true,
        style: {
          backgroundColor: "black",
          border: "none",
          color: "white",
        }
      });
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
          duration: 0.5,
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
    <div className={`w-full h-[10dvh] sticky -top-1 z-999 transition-all duration-400 ease-in-out ${isScrolled ? 'md:p-0' : 'md:p-3'
      }`}>
      <div className={`w-full h-full p-4 flex items-center justify-between text-white transition-all duration-300 ease-in-out ${isScrolled ? 'md:rounded-none bg-black md:backdrop-blur-3xl shadow-2xl' : 'md:rounded-full bg-black md:backdrop-blur-none shadow-2xl'
        }`}>

        <div className='hidden md:flex md:w-1/3'>
          <ul className='flex gap-4'>
          <li><Link href='/'>Home</Link></li>
          <li><Link href='/about'>About</Link></li>
          <li><Link href='/services'>Services</Link></li>
          <li><Link href='/project'>Projects</Link></li>
          <li><Link href='/contact'>Contact</Link></li>
          </ul>
        </div>

        <Image
          src="/logo.jpg"
          alt='SM'
          width={100}
          height={100}
          className={`object-cover object-center -ml-7 ${isScrolled ? 'h-[170%]' : 'h-[200%]'
            }`}
        />

        <div className='hidden md:flex md:w-1/3 gap-4 justify-end'>
          <a href="https://github.com/sahilmor" target='_blank'><Github /></a>
          <Mail onClick={handleCopyEmail} className='cursor-pointer'/>
          <a href="https://www.linkedin.com/in/sahilmor/" target='_blank'><Linkedin /></a>
          <a href="https://www.instagram.com/sahilmor05/" target='_blank'><Instagram /></a>
          <a href="https://x.com/sahilmor05" target='_blank'><Twitter /></a>
          <a href="https://www.facebook.com/sahilmor05/" target='_blank'><Facebook /></a>
        </div>

        <div className='md:hidden flex justify-center items-center'>
          <button onClick={() => setIsOpen(!isOpen)}>
            <Menu className='text-red-500' />
          </button>
        </div>
      </div>

      <div ref={menuRef} className='md:hidden bg-black text-white p-3  hidden'>
        <ul className='flex flex-col gap-3 items-end'>
          <li><Link href='/'>Home</Link></li>
          <li><Link href='/about'>About</Link></li>
          <li><Link href='/services'>Services</Link></li>
          <li><Link href='/project'>Projects</Link></li>
          <li><Link href='/contact'>Contact</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
