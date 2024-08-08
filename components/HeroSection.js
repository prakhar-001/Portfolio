"use client"
import React from 'react'
import { HeroSectionData } from "@/data";
import { FaArrowAltCircleDown } from "react-icons/fa";
import { motion } from "framer-motion"
import Link from 'next/link'
import { scrollToSection } from '@/utils';


const animateContainer = (delay) => ({
  hidden: {x: -100, opacity: 0},
  visible: {
    x: 0, opacity: 1,
    transition: {duration: 0.5, delay: delay }
  }
})

const HeroSection = () => {

    const HeroSectionDataInfo = HeroSectionData;

    const words = [
      {
        text: "Hello",
      },
      {
        text: "I",
      },
      {
        text: "am",
      },
      {
        text: "Prakhar.",
        className: "text-blue-500 dark:text-blue-500",
      },
    ];

  return (
    <section id="home" className='h-full lg:h-[70vh] xl:h-[90vh] mb-2 w-full bg-transparent text-white flex flex-col lg:flex-row lg:justify-between items-center border-slate-900'>

        {/* Left Section */}
        <div className="hero-left flex flex-col items-center lg:items-start gap-4 w-full lg:w-2/3 lg:pr-40 my-40 lg:my-0">
          {/* Mobile Intro */}
          <motion.div 
            variants={animateContainer(0)}
            initial='hidden'
            whileInView='visible'
            className='text-5xl md:text-7xl lg:text-8xl  font-thin tracking-tight flex lg:hidden'>
            Hello I am
          </motion.div>
          <motion.div 
            variants={animateContainer(0)}
            initial='hidden'
            whileInView='visible'
            className='text-5xl md:text-7xl lg:text-8xl font-thin tracking-tight flex lg:hidden'>
            Prakhar
          </motion.div>

          {/* PC INtro */}
          <motion.div 
            variants={animateContainer(0)}
            initial='hidden'
            whileInView='visible'
            className='lg:text-6xl xl:text-7xl font-thin tracking-tighter hidden lg:flex'>
            Hello I am Prakhar
          </motion.div>

          {/*Mobile Developer Info */}
          <motion.div 
            variants={animateContainer(0.5)}
            initial='hidden'
            whileInView='visible'
            className='text-3xl md:text-6xl bg-gradient-to-r from-orange-400 via-white to-green-500 bg-clip-text text-transparent lg:pl-2 flex lg:hidden'>
            Full Stack Web Developer
          </motion.div>

          {/* PC Developer Info */}
          <motion.div 
            variants={animateContainer(0.5)}
            initial='hidden'
            whileInView='visible'
            className='text-3xl xl:text-4xl bg-gradient-to-r from-orange-400 via-white to-green-500 bg-clip-text text-transparent sm:pl-2 hidden lg:flex'>
            A Full Stack Web Development Enthusiast from India
          </motion.div>

          {/* Down Arrow Button Animation*/}
          <div 
            className="animate-bounce w-full h-full text-white flex justify-center lg:hidden mt-28"
            onClick={() => scrollToSection('about')}
          >
            <FaArrowAltCircleDown className='text-6xl text-white'/>
          </div>
          
          {/* Detailed Intro Only PC */}
          <motion.div 
            variants={animateContainer(1)}
            initial='hidden'
            whileInView='visible'
            className="sm:pl-2 hidden lg:flex  font-light tracking-tighter">
            {HeroSectionDataInfo}
          </motion.div>
        </div>

        {/* Right Section */}
        <motion.div 
          className="hero-right hidden lg:flex w-full lg:w-1/3 px-16 py-4 sm:p-0" 
          whileInView={{x:0 , opacity: 1}}
          initial={{x:150 , opacity:0}}
          transition={{duration:1}}
        >
          <img src="/profile.jpg" alt="Developer Image" className='rounded-2xl'/>
        </motion.div>

    </section>
  )
}

export default HeroSection