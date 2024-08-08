"use client"
import React from 'react'
import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoFirebase } from "react-icons/io5";
import { motion } from "framer-motion"

const iconAnimate = (duration) => ({
    initial: { y: -10 },
    animate: { 
        y: [10, -10],
        transition: {
            duration: duration,
            ease: 'linear',
            repeat: Infinity,
            repeatType: 'reverse'
        }
    }
})

const TechnologySection = () => {
  return (
    <div className='flex flex-col gap-7 my-20 sm:my-32 w-full'>
        <motion.div 
            whileInView={{y:0 , opacity: 1}}
            initial={{y:-50 , opacity:0}}
            transition={{duration:1}}
            className="text-4xl sm:text-5xl flex items-center justify-center gap-2 pt-3 w-full mb-7"
        >
            Technologies <span className='text-blue-400'>Stack</span>
        </motion.div>
        <motion.div
            whileInView={{x:0 , opacity: 1}}
            initial={{x:-100 , opacity:0}}
            transition={{duration:1.5}}
            className="flex flex-wrap items-center justify-center gap-4"
        >
            <motion.div 
                variants={iconAnimate(2.3)}    
                initial='initial' 
                animate='animate' 
                className="rounded-2xl border-4 p-3 border-neutral-800 my-1"
            >
                <RiReactjsLine className='text-6xl text-cyan-400'/>
            </motion.div>
            <motion.div 
                variants={iconAnimate(2.6)}    
                initial='initial' 
                animate='animate' 
                className="rounded-2xl border-4 p-3 border-neutral-800 my-1"
            >
                <TbBrandNextjs className='text-6xl text-white'/>
            </motion.div>
            <motion.div 
                variants={iconAnimate(1.9)}    
                initial='initial' 
                animate='animate' 
                className="rounded-2xl border-4 p-3 border-neutral-800 my-1"
            >
                <SiMongodb className='text-6xl text-green-400'/>
            </motion.div>
            <motion.div 
                variants={iconAnimate(3.1)}    
                initial='initial' 
                animate='animate' 
                className="rounded-2xl border-4 p-3 border-neutral-800 my-1"
            >
                <IoLogoFirebase className='text-6xl text-yellow-300'/>
            </motion.div>
            <motion.div 
                variants={iconAnimate(2.4)}    
                initial='initial' 
                animate='animate' 
                className="rounded-2xl border-4 p-3 border-neutral-800 my-1"
            >
                <FaNodeJs className='text-6xl text-green-400'/>
            </motion.div>
            <motion.div 
                variants={iconAnimate(2.7)}    
                initial='initial' 
                animate='animate' 
                className="rounded-2xl border-4 p-3 border-neutral-800 my-1"
            >
                <RiTailwindCssFill className='text-6xl text-cyan-400'/>
            </motion.div>
            
        </motion.div>
    </div>
  )
}

export default TechnologySection