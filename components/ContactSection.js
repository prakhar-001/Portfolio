"use client"
import React from 'react'
import toast from 'react-hot-toast';
import { TiClipboard } from "react-icons/ti";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { motion } from "framer-motion"

const ContactSection = () => {

  return (
    <section id="contact" className='flex flex-col gap-7 my-20 sm:my-32 w-full h-full '>
        <motion.div 
            className="text-4xl sm:text-5xl flex items-center justify-center gap-2 pt-3 w-full"
            whileInView={{y:0 , opacity: 1}}
            initial={{y:-50 , opacity:0}}
            transition={{duration:1}}
        >
            Contact <span className='text-blue-400'>Me</span>
        </motion.div>
        <div className="flex flex-col items-center gap-5 h-full">
            <div className="text-lg sm:text-xl flex flex-col sm:flex-row gap-3 items-center">
                <motion.span 
                    className='text-blue-400'
                    whileInView={{x:0 , opacity: 1}}
                    initial={{x:-100 , opacity:0}}
                    transition={{duration:0.5}}
                >
                    Email: 
                </motion.span>
                <motion.div 
                    className="flex gap-2 items-center"
                    whileInView={{x:0 , opacity: 1}}
                    initial={{x:100 , opacity:0}}
                    transition={{duration:0.5}}
                >
                    <span className='hover:underline' >bhawsarprakhar2003@gmail.com</span>
                    <CopyToClipboard text='bhawsarprakhar2003@gmail.com'>
                        <TiClipboard onClick={() => toast.success('Email Copied')} className='text-2xl hover:text-blue-400 hover:cursor-pointer w-10'/>
                    </CopyToClipboard>
                </motion.div>
            </div>
            <div className="text-lg sm:text-xl flex flex-col sm:flex-row gap-3 items-center">
                <motion.span 
                    className='text-blue-400'
                    whileInView={{x:0 , opacity: 1}}
                    initial={{x:-100 , opacity:0}}
                    transition={{duration:0.5}}
                >
                    Phone No. : 
                </motion.span>
                <motion.div 
                    className="flex gap-2 items-center"
                    whileInView={{x:0 , opacity: 1}}
                    initial={{x:100 , opacity:0}}
                    transition={{duration:0.5}}
                >
                    <span className='hover:underline' >+91 0123456789</span>
                    <CopyToClipboard text='+91 0123456789'>
                        <TiClipboard onClick={() => toast.success('Phone No. Copied')} className='text-2xl hover:text-blue-400 hover:cursor-pointer w-10'/>
                    </CopyToClipboard>
                </motion.div>
            </div>
            
        </div>
    </section>
  )
}

export default ContactSection