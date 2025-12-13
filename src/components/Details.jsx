import React from 'react'
import { LampContainer } from './ui/lamp'
import { motion } from "framer-motion";

const Details = () => {
  return (
    <div className='max-w-[90%] md:max-w-[70%] mx-auto' id='challenge'>
      <LampContainer>
        <motion.h1
            initial={{ opacity: 0.5, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
            }}
            className="py-4 mt-8 text-4xl text-center text-white sm:text-5xl font-poppins"
        >
            CHALLENGE DETAILS
        </motion.h1>
        <motion.ul
            initial={{ opacity: 0.5, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
            }}
            className="mt-8 text-white text-[14px] md:text-[16px] sm:px-6 md:px-10 space-y-4 list-disc list-inside"
        >
          <li>The journey begins with registration, where participants express their interest in the competition.</li>
          <li>An online introductory session will follow, providing detailed information about the challenge and team formation.</li>
          <li>Teams consisting of up to five members, must then submit a proposal outlining their idea and team details.</li>
          <li>Each participant can only be part of one team and each team should appoint a leader and the organizing committee will communicate to the leaders directly regarding any announcements in the competition.</li>
          <li>To support participants in reaching their full potential, a series of workshops will be conducted at University of Moratuwa (or near Colombo) and online.</li>
          <li>The competition will consist of multiple elimination rounds, leading up to the final round, which will be held physically at the University of Moratuwa.</li>
          <li>The most outstanding teams and individuals will be rewarded with exciting prizes for their creativity, innovation and impact.</li>
        </motion.ul>
        
       </LampContainer>
    </div>
  )
};

export default Details;