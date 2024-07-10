'use client'
import React from 'react'
import { GoArrowUpRight } from "react-icons/go";
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from "framer-motion";

const ContentContainer = ({ toggleDarkMode }) => {

  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
        staggerChildren: 0.1 // Stagger the children to fade in one by one
      }
    }
  };

  return (
    <div className="flex flex-col h-[78%] w-[70%] text-[calc(18px-2px)] mt-5 font-light sm:w-[50%] sm:mt-10">
      <AnimatePresence>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInVariants}
          exit="hidden"
        >
          <div className="bio">
            <motion.p id="helloBlurb" variants={fadeInVariants}>
              Hello! Thanks for stopping by.
            </motion.p>
            <motion.p id="infoParagraph" className="mt-5" variants={fadeInVariants}>
              I'm Sohum. I'm a software engineer and craftsman. I appreciate technology systems that are well-organized, functional first, and modular. Outside of a development environment, you can find me applying the same principles to other pursuits, namely baking bread. You can learn more about me and my work at the links below, or you can email me <a href="mailto:dsohum@gmail.com" target="_blank" className="email-link text-black no-underline relative hover:underline">here <GoArrowUpRight /></a>
            </motion.p>

            <motion.ul className="list-none mt-10 p-0" variants={fadeInVariants}>
              {[
                { href: "https://www.linkedin.com/in/sohum-dalal-985076a6/", label: "LinkedIn" },
                { href: "https://github.com/sohumdalal", label: "GitHub" },
                { href: "https://www.instagram.com/sohumdalal/", label: "Instagram" },
                { href: "https://twitter.com/SohumDalal", label: "X" },
                { href: "https://medium.com/@sohumdalal", label: "Medium", description: "(technical work)" },
                { href: "https://substack.com/@sohumdalal", label: "Substack", description: "(other thoughts)" },
                { href: "https://www.pinterest.com/dsohum/", label: "Pinterest" }
              ].map((link, index) => (
                <motion.li key={index} className="mt-4 text-[0.9rem]" variants={fadeInVariants}>
                  <a href={link.href} target="_blank" className="flex items-center text-black no-underline relative hover:underline">
                    <span>{link.label} {link.description && <span>{link.description}</span>}</span>
                    <GoArrowUpRight />
                  </a>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </motion.div>
      </AnimatePresence>
      <button onClick={toggleDarkMode} className="mt-5">
        Toggle Dark Mode
      </button>
      <motion.div className="text-top mt-20 text-[0.8rem] text-gray-500 font-light" initial="hidden" animate="visible" variants={fadeInVariants}>
        <p>Created by Sohum Dalal with Next.js. 2024</p>
      </motion.div>
    </div>
  );
}

export default ContentContainer;
