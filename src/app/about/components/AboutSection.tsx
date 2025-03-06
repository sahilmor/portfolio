import Image from 'next/image'
import React from 'react'

const AboutSection = () => {
    return (
        <div className='p-2 px-6'>
            <div className='md:flex'>
                <div className='md:w-1/2 p-2 md:space-y-4 flex flex-col gap-8 justify-center items-center'>
                    <div className='p-2 text-white text-center mt-5'>
                        <p>I&apos;m Sahil Mor, a passionate full-stack developer with expertise in React, Next.js, Node.js, and MongoDB. I love crafting scalable and efficient web applications that solve real-world problems. With a strong foundation in front-end and back-end development, I focus on creating seamless user experiences and optimized performance. Recently, I won the &apos;Code A Haunt 2.0&apos; hackathon at LPU, showcasing my ability to innovate under pressure. Let&apos;s build something amazing together</p>
                    </div>
                    <div className='p-2 text-white'>
                        <div className='md:flex gap-10 justify-center p-2 w-full'>
                            <div className='flex flex-col gap-3'>
                                <h1 className='md:text-2xl text-1xl text-white/80'>
                                    <span className='font-bold text-white'>Name: </span>
                                    Sahil Mor
                                </h1>
                                <h1 className='md:text-2xl text-1xl text-white/80'>
                                    <span className='font-bold text-white'>Experience: </span>
                                    2+ Years
                                </h1>
                                <h1 className='md:text-2xl text-1xl text-white/80'>
                                    <span className='font-bold text-white'>Freelance: </span>
                                    Available
                                </h1>
                            </div>
                            <div className='flex flex-col gap-3 mt-2 md:mt-0'>
                                <h1 className='md:text-2xl text-1xl text-white/80'>
                                    <span className='font-bold text-white'>Phone: </span>
                                    +91 93061 11259
                                </h1>
                                <h1 className='md:text-2xl text-1xl text-white/80'>
                                    <span className='font-bold text-white'>Education: </span>
                                    B.Tech CSE
                                </h1>
                                <h1 className='md:text-2xl text-1xl text-white/80'>
                                    <span className='font-bold text-white'>Language: </span>
                                    Hindi | English
                                </h1>
                            </div>
                        </div>
                        <h1 className='md:text-2xl text-1xl text-white/80 p-2'>
                            <span className='font-bold text-white'>Email: </span>
                            mor.sahil05.28@gmail.com
                        </h1>
                    </div>

                </div>
                <div className='mt-8 hidden md:block'>
                    <Image
                        src='/3d-man.png'
                        width={800}
                        height={800}
                        alt='3D Man'
                    />
                </div>
            </div>
        </div>
    )
}

export default AboutSection