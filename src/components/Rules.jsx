import React, { useState } from 'react';
import { motion } from "framer-motion";

import GuilineHeader from "./GuideLineHeader";

import DownloadPDFButton from "./DownloadPDFButton";
import MagicButton from './ui/MagicButton';




const Rules = () => {

  return (
    <>
     <GuilineHeader />
    <div className="h-screen  flex flex-col items-center justify-center align-middle  px-[4%] md:px-[5%] lg:px-[10%]">
    

    
      <motion.h2
        initial={{opacity:0,y:50}}
        whileInView={{opacity:1, y:0,  
        transition: {
            duration: 2 
        }}} 
        className="mt-10 text-xl text-center text-white sm:text-xl font-poppins">
          SLIoT 2025 Proposal Submission Rules and Regulations
      </motion.h2>
    
  
      <a
        className="mt-4"
        href="SLIOT Challenge 2025 - Rules and Regulations.pdf"
        target="_blank"
  rel="noopener noreferrer"

  aria-label="Download guidelines"
      >
        <MagicButton title="Download" />
      </a>



      <a
        className="mt-4"
        href="https://forms.gle/3Hhpjj3iW6u2YSLB6"
        target="_blank"
  rel="noopener noreferrer"

  aria-label="Download guidelines"
      >
        <MagicButton title="Submit Your Proposal" />
      </a>
    
    </div>
    </>
  );
};

export default Rules;
