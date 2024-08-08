"use client"
import { Experiences } from '@/data'
import { motion } from "framer-motion"



const ExperienceSection = () => {

  return (
    <section id="experience" className='h-full w-full flex flex-col gap-7 px-5 py-2 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] rounded-xl shadow-[0_50px_50px_-45px_rgba(0,0,0,0.9)] shadow-slate-700'>
        <motion.div 
            className="about-up text-3xl sm:text-5xl flex items-center justify-center gap-2 pt-3"
            whileInView={{y:0 , opacity: 1}}
            initial={{y:-50 , opacity:0}}
            transition={{duration:1}}
        >
            Work <span className='text-blue-400'>Experience </span>
        </motion.div>

        <div className="about-down flex flex-col items-center gap-3 lg:gap-5 w-full xl:px-32">
            {
                Experiences.map((experience, index) => (
                    <div key={index} className="flex flex-col sm:flex-row w-full pb-2">
                        <motion.div 
                            className="w-full md:w-1/5 lg:w-1/4 p-2"
                            whileInView={{x:0 , opacity: 1}}
                            initial={{x:-100 , opacity:0}}
                            transition={{duration:1}}
                        >
                            <p className='text-lg'>{experience.year}</p>
                        </motion.div>
                        <motion.div 
                            className="w-full md:w-4/5 lg:w-3/4 p-2 flex flex-col gap-2"
                            whileInView={{x:0 , opacity: 1}}
                            initial={{x:100 , opacity:0}}
                            transition={{duration:1}}
                        >
                            <div className='text-lg'>{experience.role}</div>
                            <div className="text-neutral-400 ">{experience.description}</div>
                            <div className="flex flex-wrap gap-2">
                                {experience.technologies.map((tech, index) => (
                                    <div key={index} className="py-1 px-2 text-blue-500 bg-gray-800 rounded-xl">
                                        {tech}
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                ))
            }
        </div>
        
              
    </section>
  )
}

export default ExperienceSection