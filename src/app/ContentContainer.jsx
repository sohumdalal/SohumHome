'use client'
import React from 'react'
import { GoArrowUpRight } from "react-icons/go";
import { motion, AnimatePresence } from "framer-motion";

const ContentContainer = ({ toggleDarkMode, isDarkMode }) => {

  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
        staggerChildren: 0.0,
        delayChildren: 0.7
      }
    }
  };

  const listVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
        delay: 0.7  // Adjust the delay as needed
      }
    }
  };

  const footerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
        delay: 0.7
      }
    }
  };

  return (
    <div className="flex flex-col h-[190%] w-[70%] text-[calc(18px-2px)] mt-5 font-light sm:w-[50%] sm:mt-10 text-dynamic-color">
      <AnimatePresence>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInVariants}
          exit="hidden"
        >
          <div className="bio">
            <motion.p id="helloBlurb" variants={fadeInVariants}>
              Thanks for stopping by!
            </motion.p>
            <motion.p id="infoParagraph" className="mt-5" variants={fadeInVariants}>
              I’m a software engineer and educator, passionate about building dependable systems and fostering a culture of craftsmanship.
              Outside of engineering, you’ll usually find me baking bread or climbing rocks—mostly the indoor kind. You can learn more about me and my work at the links below, or you can email me <a href="mailto:dsohum@gmail.com" target="_blank" className="email-link text-dynamic-color no-underline relative hover:underline">here<GoArrowUpRight /></a>.
              If you prefer a conversation, you can book some time <a href="https://calendly.com/dsohum" target="_blank" className="email-link text-dynamic-color no-underline relative hover:underline">here <GoArrowUpRight /></a>.
            </motion.p>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={listVariants}
              exit="hidden"
            >
              <ul className="list-none mt-10 p-0">
                {[
                  { href: "https://www.linkedin.com/in/sohum-dalal-985076a6/", label: "LinkedIn" },
                  { href: "https://github.com/sohumdalal", label: "GitHub" },
                  { href: "https://medium.com/@sohumdalal", label: "Medium", description: "(technical work)" },
                  { href: "https://substack.com/@sohumdalal", label: "Substack", description: "(other thoughts)" },
                ].map((link, index) => (
                  <li key={index} className="mt-4 text-[0.9rem]">
                    <a href={link.href} target="_blank" className="flex items-center text-dynamic-color no-underline relative hover:underline">
                      <span>{link.label} {link.description && <span>{link.description}</span>}</span>
                      <GoArrowUpRight />
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Footer div containing Toggle Dark Mode and Colophon */}
      <motion.div
        className="flex flex-wrap justify-between items-center mt-10"
        initial="hidden"
        animate="visible"
        variants={footerVariants}
      >
        {/* Colophon */}
        <div className="w-1/2 text-[0.8rem] text-gray-500 font-light">
          <p>Created by Sohum Dalal with Next.js. 2025</p>
        </div>

        {/* Toggle Dark Mode button */}
        {/* <div
          onClick={toggleDarkMode}
          className="flex w-1/2 text-[12px] px-2 py-1 border border-transparent justify-end"
        >
          <button className={`${isDarkMode ? 'border-[#E1D8D5]' : 'border-[#282727]'} inline-block border p-1`}>
            {isDarkMode ? 'Light' : 'Dark'}
          </button>
        </div> */}

        {/* Third div */}
        <div className="w-full mb-10 h-[20%]"></div>
      </motion.div>
    </div>
  );
}

export default ContentContainer;
