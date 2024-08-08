"use client"
import { motion } from "framer-motion"



const AboutSection = () => {
  return (
    <section id="about" className='h-full lg:h-[70vh] xl:h-[83vh] w-full flex flex-col gap-3 sm:gap-7 px-5 py-2 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] rounded-xl shadow-[0_50px_50px_-45px_rgba(0,0,0,0.9)] shadow-slate-700 pb-10 lg:pb-0'>
        <motion.div 
            className="about-up text-3xl sm:text-5xl flex items-center justify-center gap-2 pt-3"
            whileInView={{y:0 , opacity: 1}}
            initial={{y:-50 , opacity:0}}
            transition={{duration:1}}
        >
            About <span className='text-blue-400'>Me</span>
        </motion.div>

        <div className="about-down flex flex-col md:flex-row justify-between items-center lg:items-start w-full">
            <motion.div 
                className="down-left md:w-1/3 px-12 md:px-4  py-4 sm:p-0"
                whileInView={{x:0 , opacity: 1}}
                initial={{x:-100 , opacity:0}}
                transition={{duration:1}}
            >   
                
                <img src="/profile.jpg" alt="Developer Image" className='rounded-full'/>  
            </motion.div>
            <motion.div 
                className="down-right sm:w-2/3"
                whileInView={{x:0 , opacity: 1}}
                initial={{x:100 , opacity:0}}
                transition={{duration:1}}
            >
                Welcome to my digital playground, where creativity meets technology. I'm a Full Stack Developer, a problem-solver at heart, and a visionary who thrives on pushing boundaries. With a solid foundation in both front-end and back-end technologies, I craft seamless web experiences that resonate with users and drive business goals forward. My journey has been fueled by a passion for learning, a knack for efficient coding, and a relentless pursuit of excellence. Whether it's building intuitive interfaces or architecting robust server-side logic, I bring a blend of innovation, precision, and a user-centric approach to every project I undertake. Dive in to explore my work, learn more about my journey, and let's create something amazing together.
            </motion.div>
        </div>
              
    </section>
  )
}

export default AboutSection

