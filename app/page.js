"use client"
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import ExperienceSection from "@/components/ExperienceSection";
import HeroSection from "@/components/HeroSection";
import ProjectSection from "@/components/ProjectSection";
import TechnologySection from "@/components/TechnologySection";




export default function Home() {

  


  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-between px-3 sm:px-5 md:px-10 lg:px-14 xl:px-24 text-white">


      {/* Hero Section */}
      <HeroSection/>

      {/* About Section */}
      <AboutSection/>

      {/* Technologies Section */}
      <TechnologySection/>

      {/* Projects Section */}
      <ProjectSection/>

      {/* Experience Section */}
      {/* No experience hence commented */}
      {/* <ExperienceSection/> */}

      {/* Contact Section */}
      <ContactSection/>


    </main>
  );
}
