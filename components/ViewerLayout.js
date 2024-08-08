"use client"
import React, { useEffect } from 'react'
import NavBar from './NavBar'

const ViewerLayout = ({children}) => {

  useEffect(() => {
    async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotive = new LocomotiveScroll({
        el: document.querySelector("[data-scroll-container]"),
        smooth: true,
      });
    }
  })
  return (
    // <div className='absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]'>
    <div className='top-0 z-[-2] h-full w-full bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,255,0.3),rgba(255,255,255,0))]'>
        <div className="h-16 w-full flex items-center">
            <NavBar/>
        </div>
        <div className="top-40 w-full">
            {children}
        </div>
    </div>
  )
}

export default ViewerLayout