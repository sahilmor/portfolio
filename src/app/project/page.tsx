import React from 'react';
import Image from 'next/image';
import { CardBody, CardContainer, CardItem } from '@/components/ui/3d-card';
import ShadowHand from 'next/font/local';
import { projects } from './data/data';

const shadowhand = ShadowHand({
    src: '../../fonts/ShadowHand.ttf',
});

const Project = () => {
    return (
        <div className='w-full space-y-5 p-4'>
            <h1 className={`md:text-8xl text-5xl font-bold text-white w-full text-center ${shadowhand.className}`}>
                Projects
            </h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
                {projects.map((project) => (
                    <CardContainer key={project.id} className="inter-var">
                        <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
                            <CardItem translateZ="50" className="text-xl font-bold text-neutral-600 dark:text-white">
                                {project.title}
                            </CardItem>
                            <CardItem as="p" translateZ="60" className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
                                {project.description}
                            </CardItem>
                            <CardItem translateZ="100" className="w-full mt-4">
                                <Image
                                    src={project.imageUrl}
                                    height="1000"
                                    width="1000"
                                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                                    alt={project.title}
                                />
                            </CardItem>
                            <div className="flex justify-between items-center mt-10">
                            <CardItem
                                translateZ={20}
                                as="button"
                                className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold w-full"
                            >
                                View Project
                            </CardItem>
                        </div>
                        </CardBody>
                    </CardContainer>
                ))}
            </div>
        </div>
    );
};

export default Project;
