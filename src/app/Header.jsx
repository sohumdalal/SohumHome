'use client'
import React from 'react';
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
        staggerChildren: 0.1// Stagger the children to fade in one by one
      }
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInVariants}
        exit="hidden"
        className="flex flex-col items-start h-[7%] w-[70%] font-light tracking-wider pb-2.5 bg-[#E1D8D5] mt-20 sm:w-[50%]"
        style={{ backgroundColor: 'var(--backgroundColor)' }}
      >
        <div className="flex items-center space-x-4">
          <motion.div className="text-[30px] mb-2.5 sm:text-[48px]" variants={fadeInVariants}>
            Hi, I'm Sohum.
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Header