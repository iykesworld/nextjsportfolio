"use client"
import { fadeInUp, scaleIn } from '@/utils/animation'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

const Hero = () => {
  return (
    <section className='py-28 container max-w-7xl mx-auto px-4'>
        <div className='max-w-3xl mx-auto text-center'>
            <motion.div 
            {...scaleIn}
            transition={{delay: 0.2}}
            className='flex flex-col items-center mb-4'>
                <Image 
                className='rounded-full mb-4 w-32 object-cover ring-2 ring-primary'
                src="/profileImage.png" alt='profile image' height={100} width={100}/>
            </motion.div>
            <motion.h1 
            {...fadeInUp}
            transition={{delay: 0.3}}
            className='text-4xl md:text-6xl font-bold mb-5'>I&apos;m <span className='text-primary'>Iykes Design</span></motion.h1>
            <motion.p 
            transition={{delay: 0.5}}
            className='text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8'>Full Stack Developer | UI/UX Enthusiast | Open Source Contributor</motion.p>
            <div className='flex justify-center space-x-4 mb-8'>
                <Link href="/" className='text-2xl text-gray-600 hover:text-primary dark:text-gray-300 transition-colors duration-300'>
                <FaGithub/>
                </Link>
                <Link href="/" className='text-2xl text-gray-600 hover:text-primary dark:text-gray-300 transition-colors duration-300'>
                <FaLinkedin/>
                </Link>
                <Link href="/" className='text-2xl text-gray-600 hover:text-primary dark:text-gray-300 transition-colors duration-300'>
                <FaXTwitter/>
                </Link>
            </div>
            <div className='flex flex-col md:flex-row justify-center gap-4'>
                <Link href="/projects" className='bg-primary inline-block w-full 
                md:w-auto text-white px-8 py-3 rounded-lg hover:bg-primary/80 
                transition-colors'>View Project</Link>
                <Link href="/projects" className='bg-gray-500 inline-block w-full 
                md:w-auto text-white px-8 py-3 hover:text-gray-800 rounded-lg hover:bg-gray-300 
                transition-colors'>Contact Me</Link>
            </div>
        </div>
    </section>
  )
}

export default Hero