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
        className="flex flex-col items-start h-[22%] w-[70%] font-light tracking-wider pb-2.5 bg-[#E1D8D5] mt-20 sm:w-[50%]"
      >
        <motion.div className="text-[30px] mb-2.5 sm:text-[48px]" variants={fadeInVariants}>Sohum Dalal.</motion.div>
        <motion.div className="text-[18px] mb-2.5 sm:text-[24px]" variants={fadeInVariants}>engineer +</motion.div>
        <motion.div className="flex flex-col items-start text-[18px] overflow-hidden h-[24px] sm:text-[24px]" variants={fadeInVariants}>
          <div className="relative animate-rotate">
            <div className="h-[24px] leading-[24px]">craftsman</div>
            <div className="h-[24px] leading-[24px]">chef</div>
            <div className="h-[24px] leading-[24px]">baker</div>
            <div className="h-[24px] leading-[24px]">barista</div>
            <div className="h-[24px] leading-[24px]">farmer</div>
            <div className="h-[24px] leading-[24px]">craftsman</div> {/* Repeat first element */}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Header