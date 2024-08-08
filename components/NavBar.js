"use client"
import Link from 'next/link'
import React , { useEffect, useState} from 'react'


import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";

import { motion, useAnimationControls } from "framer-motion"
import { scrollToSection } from '@/utils';

import { LinkPreview } from "@/components/ui/link-preview";

import { HoverEffect } from "./ui/card-hover-effect";



export const projects = [
    {
      title: "Home",
      link: "home",
    },
    {
      title: "About",
      link: "about",
    },
    {
      title: "Projects",
      link: "projects",
    },
    // {
    //   title: "Experience",
    //   link: "experience",
    // },
    {
      title: "Contact",
      link: "contact",
    },
  ];


const mobileMenuVariants = {
  close: {
    width: 0,
    transition: {
      type: 'spring',
      damping: 15,
      duration: 0.5,
    }
  },
  open: {
    width: '250px',
    transition: {
      type: 'spring',
      damping: 15,
      duration: 0.8,
    }
  },
}

const NavBar = () => {

  const [menuOpen, setMenuOpen] = useState(false)
  const mobileMenuControls = useAnimationControls()

  useEffect(() => {
    if(menuOpen) {
      mobileMenuControls.start('open')
    }
    else {
      mobileMenuControls.start('close')
    }
  }, [menuOpen])

  return (
    <nav style={{ zIndex: 10 }} className='flex items-center justify-between flex-wrap px-4 lg:px-10 h-16 w-full text-white p-2 sm:p-1 bg-gray-900 fixed top-0'>
        <div className="h-full cursor-pointer" onClick={() => scrollToSection('home')}>
          <img src="/logo.jpg" alt="" className='h-full'/>
        </div>

        {/* Hover Efeect Nav Items */}
        <HoverEffect items={projects} className='hidden lg:flex'/>

        <div className="flex flex-row items-center gap-5">
          {/*Socials  */}
          <ul className='hidden md:flex items-center justify-center gap-5 text-2xl lg:text-xl'>
            <LinkPreview url="https://www.linkedin.com/in/prakhar-bhawsar-developer16/" className="font-bold">
              <FaLinkedin />
            </LinkPreview>
            <LinkPreview url="https://github.com/prakhar-001" className="font-bold">
              <FaGithub />
            </LinkPreview>
            <LinkPreview url="https://x.com/" className="font-bold">
              <FaXTwitter />
            </LinkPreview>
            <LinkPreview url="https://www.instagram.com/" className="font-bold">
              <FaInstagram />
            </LinkPreview>
          </ul>

          {/* Mobile Menu Toggle */}
          {menuOpen? 
            <div className="Menu text-white flex lg:hidden cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
              <IoClose className='text-3xl' />
            </div>
            :
            <div className="Menu text-white flex lg:hidden cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
              <IoMenu className='text-3xl' />
            </div> 
          }   
        </div>

        {/* Mobile Menu Items */}
        {menuOpen && (
          <motion.div 
            className="absolute top-16 mt-2 mr-2 right-0 py-2 px-5 bg-gray-900 text-white font-bold flex flex-col items-center gap-7 py-0-5 rounded-xl border-2 shadow-xl shadow-gray-700 pt-5"
            variants={mobileMenuVariants}
            animate={mobileMenuControls}
          >
            

            {/* Hover Efeect Nav Items */}
            <HoverEffect items={projects} className='flex'/>

            <div className="flex justify-between text-2xl mt-10 mb-3 w-5/6">
              <Link href={'https://www.linkedin.com/in/prakhar-bhawsar-developer16/'} ><FaLinkedin /></Link>
              <Link href={'https://github.com/prakhar-001'} ><FaGithub /></Link>
              <Link href={'https://x.com/'} ><FaXTwitter /></Link>
              <Link href={'https://www.instagram.com/'} ><FaInstagram /></Link>
            </div>

            

          </motion.div>
        )}

    </nav>
  )
}

export default NavBar