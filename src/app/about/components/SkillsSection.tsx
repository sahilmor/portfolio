import Image from 'next/image'
import React from 'react'

const Skills = () => {
  return (
    <div className='px-2'>
        <div className='text-center text-white text-1xl md:px-10 p-4'>
          <p>
            I specialize in building modern, high-performance web applications with a strong focus on user experience and scalability. My expertise spans both frontend and backend development, allowing me to create seamless digital solutions from end to end.
          </p>
          <p className='mt-2'>
            I work with HTML, CSS, JavaScript, TypeScript, React, Next.js, Node.js, Express, MongoDB, and Tailwind CSS, alongside UI frameworks like ShadCN UI, Material UI, and UI Acernity. Whether it&apos;s crafting dynamic interfaces, optimizing backend logic, or designing efficient databases, I thrive on solving complex problems with clean, maintainable code.
          </p>
          <h1 className='mt-2 font-bold'>
            Great software isn&apos;t just about writing code; it&apos;s about crafting experiences that make an impact.
          </h1>
        </div>
        <div className='px-10 md:px-16 flex flex-col justify-center items-center md:mt-5 mt-2'>
          <div className='flex gap-6 mt-6 items-center justify-center flex-wrap'>
            <Image src='/html.png' alt='html' width={100} height={100} className="w-12 md:w-26" />
            <Image src='/css.png' alt='css' width={100} height={100} className="w-12 md:w-26" />
            <Image src='/javascript.png' alt='js' width={100} height={100} className="w-12 md:w-26" />
            <Image src='/typescript.png' alt='ts' width={100} height={100} className="w-12 md:w-26" />
            <Image src='/c++.png' alt='c++' width={100} height={100} className="w-12 md:w-26" />
            <Image src='/react.png' alt='react' width={100} height={100} className="w-12 md:w-26" />
            <Image src='/next.jpeg' alt='nextjs' width={100} height={100} className="w-12 md:w-26 p-1 rounded-4xl" />
            <Image src='/nodejs.png' alt='nodejs' width={100} height={100} className="w-12 md:w-26" />
            <Image src='/mongo-db.png' alt='mongo-db' width={100} height={100} className="w-12 md:w-26" />
            <Image src='/acertinity.png' alt='acertinity' width={100} height={100} className="w-12 md:w-26 p-1 rounded-4xl" />
            <Image src='/npm.png' alt='npm' width={100} height={100} className="w-12 md:w-26" />
            <Image src='/tailwind.png' alt='tailwind' width={100} height={100} className="w-12 md:w-26 p-1 rounded-4xl" />
            <Image src='/git.png' alt='git' width={100} height={100} className="w-12 md:w-26" />
            <Image src='/shadcnui.png' alt='shadcnui' width={100} height={100} className="w-12 md:w-26 p-1 rounded-4xl" />
            <Image src='/java.png' alt='java' width={100} height={100} className="w-12 md:w-26" />
          </div>
        </div>
      </div>
  )
}

export default Skills