"use client"
import { Projects } from "@/data"
import Link from "next/link"
import { motion } from "framer-motion"

import { CardBody, CardContainer, CardItem } from "./ui/3d-card";



const ProjectSection = () => {
  return (
    
    <section id="projects" className='h-full mb-10 sm:mb-32 w-full flex flex-col gap-7 px-5 py-2 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] rounded-xl shadow-[0_50px_50px_-45px_rgba(0,0,0,0.9)] shadow-slate-700'>
        <motion.div 
            whileInView={{y:0 , opacity: 1}}
            initial={{y:-50 , opacity:0}}
            transition={{duration:1}}
            className="about-up text-3xl sm:text-5xl flex items-center justify-center gap-2 pt-3"
        >
            Projects & <span className='text-blue-400'>Learning </span>
        </motion.div>

        <div className="about-down flex flex-col items-center gap-3 lg:gap-5 w-full xl:px-20">
            {
                Projects.map((project, index) => (
                    <div key={index} className="flex flex-col md:flex-row gap-0 md:gap-2 lg:gap-5 w-full pb-2">
                        <Link href={project.link} className="w-full sm:w-2/5 p-2 ">
                            <motion.div 
                                className="" 
                                whileInView={{x:0 , opacity: 1}}
                                initial={{x:-100 , opacity:0}}
                                transition={{duration:1}}>
                                <CardContainer className="inter-var ">
                                    <CardBody className=" group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-gray-950 dark:border-white/[0.2] border-black/[0.1] w-full sm:w-full h-auto rounded-2xl p-3 border-2  ">
                                        
                                        <CardItem translateZ="100" className="w-full">
                                            <img
                                                src={project.imagePC}
                                                height="1000"
                                                width="1000"
                                                className="h-40 md:h-32 lg:h-52 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                                                alt="thumbnail"
                                            />

                                            <CardItem
                                                translateZ="20"
                                                className="absolute top-1 right-1 text-sm font-bold dark:text-blue-500 hover:text-blue-600 bg-gray-700 hover:bg-gray-800 border border-white rounded-xl px-2 py-1"
                                            >
                                                Visit Now
                                            </CardItem>
                                        </CardItem>    

                                          
                                    </CardBody>
                                </CardContainer>
                            </motion.div>
                        </Link>

                        


                        <motion.div 
                            className="w-full sm:w-3/5 p-2 flex flex-col gap-2"
                            whileInView={{x:0 , opacity: 1}}
                            initial={{x:100 , opacity:0}}
                            transition={{duration:1}}
                        >
                            <Link href={project.link} >
                                <div className='text-lg hover:underline hover:text-blue-400'>{project.title}</div>
                            </Link>
                            <div className="text-neutral-400 ">{project.description}</div>
                            <div className="flex flex-wrap gap-2">
                                {project.technologies.map((tech, index) => (
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

export default ProjectSection