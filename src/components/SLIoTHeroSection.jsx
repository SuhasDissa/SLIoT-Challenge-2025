import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import { robot, sltLogo } from "@/assets";
import { BackgroundBeams } from "./ui/background-beams";
import {motion} from "framer-motion"
const SLIoTHeroSection = () => {
  return (
    <section
      className="relative flex flex-col items-center justify-center gap-4 px-4 antialiased md:flex-row md:px-6 lg:px-12 lg:gap-0"
      style={{ fontFamily: "Arial, sans-serif" }}
    >
      <BackgroundBeams className="absolute top-0 left-0 w-full h-full -z-40" />
      <div className="container flex flex-col items-center mx-auto md:flex-row">
        <div className="text-center md:text-left">
          <div className="p-4 md:p-6">
            <h1 className="relative z-10 text-6xl tracking-wide text-transparent md:text-7xl lg:text-8xl font-nicoMoji bg-clip-text bg-gradient-to-b from-neutral-200 to-neutral-400">
              SLIoT 
            </h1>
            <h2 className="relative z-10 text-4xl text-pink-500 lg:text-5xl font-nicoMoji">Challenge 2025</h2>
            <p className="relative mt-4 md:mt-6 text-sm lg:text-base text-n-1 leading-relaxed mb-6 md:mb-10 max-w-full md:max-w-[550px] z-10">
              The SLIoT Challenge is a competition that aims to provide a platform
              for students to showcase their innovative ideas and solutions in the
              field of Internet of Things (IoT). The competition is open to all
              undergraduate students from universities and higher education
              institutes in Sri Lanka.
            </p>
        
            <motion.div
            initial={{ scale: 1,opacity:0 }}
            whileTap={{ scale: 0.9 }}
                animate={{scale:1,opacity:1}}
            transition={{duration:0.2}}
            className="relative inline-block">
              <div className="absolute inset-0 translate-x-1 translate-y-1 border-2 border-gray-400 lg:translate-y-2 lg:translate-x-2 rounded-xl"></div>
                <button
               
                 
                 className="relative z-10 px-8 py-2 text-base text-white transition duration-300 shadow-lg lg:px-12 lg:py-3 lg:text-lg font-nicoMoji rounded-xl bg-gradient-to-r from-pink-500 to-purple-600">
                  Join Now
                </button>
              </motion.div>
          
            
            <div className="relative flex items-end justify-center gap-6 mt-6 md:justify-end md:mt-10 lg:-mt-10 md:gap-10">
              <div className="relative z-10 flex flex-col items-center mt-4 text-sm font-bold text-n-1 md:items-end md:mt-8">
                Powered By
                <img 
                  src={sltLogo}
                  alt="SLT-Mobitel-logo"
                  className="relative w-32 h-auto md:w-48"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <CardContainer className="relative z-10 inter-var">
        <CardBody className="group/card w-auto sm:w-[20rem] md:w-[24rem] lg:w-[30rem] h-auto z-10 relative">
          <CardItem translateZ="100" className="relative z-10 w-full mt-4">
            <img
              src={robot}
              className="relative z-10 object-cover w-full rounded-xl"
              alt="thumbnail"
            />
          </CardItem>
        </CardBody>
      </CardContainer>
    </section>
  );
};

export default SLIoTHeroSection;