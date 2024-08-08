"use client"
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import React, { useEffect, useState } from 'react';

import { scrollToSection } from '@/utils';


export const HoverEffect = ({
  items,
  className,
}) => {
  let [hoveredIndex, setHoveredIndex] = useState(null);
  let [selectedIndex, setSelectedIndex] = useState('home')
const [visibleSection, setVisibleSection] = useState(null)

useEffect(()=> {
    setSelectedIndex(visibleSection)
}, [visibleSection])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSection(entry.target.id)
            // console.log(`${entry.target.id} is now visible`);
          }
        });
      },
      {
        threshold: 0.5, // Adjust based on when you want the callback to trigger
      }
    );

    // Select all sections and observe them
    document.querySelectorAll('section').forEach((section) => {
      observer.observe(section);
    });

    return () => {
      // Cleanup - stop observing elements when the component unmounts
      document.querySelectorAll('section').forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);


  return (
    <div
      className={cn(
        "flex flex-col lg:flex-row items-center gap-0 ",
        className
      )}
    >
      {items.map((item, idx) => (
        <div
        //   href={item?.link}
          key={item?.link}
          onClick={() => {scrollToSection(item?.link); setSelectedIndex(item?.link)}}
          className="relative group block p-2 h-full sm:h-12 w-full cursor-pointer"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-blue-500 block rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>

          {/* This will run N number of times */}
          <Card className='hidden lg:flex'>
            {
                selectedIndex === item.link?
                <CardTitle className='text-blue-500 group-hover:text-black flex items-center justify-center'> {item.title}</CardTitle>
                :

            <CardTitle className='flex items-center justify-center '> {item.title}</CardTitle>
            }
          </Card>

          <Card className='flex lg:hidden'>
            <CardTitle className='flex items-center justify-center '> {item.title}</CardTitle>
          </Card>

        </div>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full px-0 md:px-0 lg:px-2 overflow-hidden bg-transparent  group-hover:border-slate-700 relative z-20",
        className
      )}
    >
      <div className="relative z-50">
        <div className="px-2">{children}</div>
      </div>
    </div>
  );
};
export const CardTitle = ({
  className,
  children,
}) => {
  return (
    <h4 className={cn("text-zinc-100 font-bold tracking-wide mt-1", className)}>
      {children}
    </h4>
  );
};
export const CardDescription = ({
  className,
  children,
}) => {
  return (
    <p
      className={cn(
        "mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm",
        className
      )}
    >
      {children}
    </p>
  );
};
