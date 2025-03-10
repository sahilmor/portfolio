import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Image from 'next/image'

const ExperienceSection = () => {
  return (
    <div className="md:p-4 md:px-8 space-y-4">
        <div className='md:flex gap-3 p-4 space-y-4 md:space-y-0 md:mt-10'>
            <Card className='md:w-1/3'>
                <CardHeader className='flex flex-col gap-3 justify-center items-center'>
                    <CardTitle className='text-2xl'>Naai India</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className='md:flex gap-6'>
                        <div className='md:w-[30%] p-1 rounded-2xl'>
                        <Image
                        src='/naai.jpeg'
                        alt='naai'
                        width={100}
                        height={100}
                        className='w-full rounded-2xl'
                        />
                        </div>
                        <div className='md:w-[70%] p-2'>
                            <ul className='list-disc'>
                                <li>3 Months Experince at Naai India.</li>
                                <li>Developed and improved POS system features.</li>
                                <li>Collaborated with professionals to solve real-world problems.</li>
                            </ul>
                        </div>
                        </div>
                </CardContent>
            </Card>
            <Card className='md:w-1/3'>
                <CardHeader className='flex flex-col gap-3 justify-center items-center'>
                    <CardTitle className='text-2xl'>Raist Foundation</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className='md:flex gap-6'>
                        <div className='md:w-[30%] p-1 rounded-2xl'>
                        <Image
                        src='/rf.jpg'
                        alt='naai'
                        width={100}
                        height={100}
                        className='w-full rounded-2xl'
                        />
                        </div>
                        <div className='md:w-[70%] p-2'>
                            <ul className='list-disc'>
                                <li>Built and designed the NGO&apos;s website.</li>
                                <li>Improved site functionality and user experienceSection.</li>
                                <li>Supported the team in digital expansion.</li>
                            </ul>
                        </div>
                        </div>
                </CardContent>
            </Card>
            <Card className='md:w-1/3'>
                <CardHeader className='flex flex-col gap-3 justify-center items-center'>
                    <CardTitle className='text-2xl'>Geeta Technical Hub</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className='md:flex gap-6'>
                        <div className='md:w-[30%] p-1 rounded-2xl'>
                        <Image
                        src='/gth.jpeg'
                        alt='naai'
                        width={100}
                        height={100}
                        className='w-full rounded-2xl'
                        />
                        </div>
                        <div className='md:w-[70%] p-2'>
                            <ul className='list-disc'>
                                <li>Worked on web development projects.</li>
                                <li>Developed College website in a team.</li>
                                <li>Currently Working at..</li>
                            </ul>
                        </div>
                        </div>
                </CardContent>
            </Card>
        </div>
    </div>
  )
}

export default ExperienceSection