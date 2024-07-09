import React from 'react'
import { GoArrowUpRight } from "react-icons/go";

const ContentContainer = () => {
  return (
    <div className="flex flex-col h-[78%] w-[70%] text-[calc(18px-2px)] mt-5 font-light sm:w-[50%] sm:mt-10">
      <div className="bio">
        <p id="helloBlurb">Hello! Thanks for stopping by.</p>
        <p id="infoParagraph" className="mt-5">
          I’m Sohum. I’m a software engineer and craftsman. I appreciate technology systems that are well-organized, functional first, and modular. Outside of a development environment, you can find me applying the same principles to other pursuits, namely baking bread. You can learn more about me and my work at the links below, or you can email me <a href="mailto:dsohum@gmail.com" target="_blank" className="email-link text-black no-underline relative hover:underline">here <GoArrowUpRight /></a>
        </p>

        <ul className="list-none mt-10 p-0">
          <li className="mt-4 text-[0.9rem]">
            <a href="https://www.linkedin.com/in/sohum-dalal-985076a6/" target="_blank" className="flex items-center text-black no-underline relative hover:underline">
              <span>LinkedIn</span>
              <GoArrowUpRight />
            </a>
          </li>
          <li className="mt-4 text-[0.9rem]">
            <a href="https://github.com/sohumdalal" target="_blank" className="flex items-center text-black no-underline relative hover:underline">
              <span>GitHub</span>
              <GoArrowUpRight />
            </a>
          </li>
          <li className="mt-4 text-[0.9rem]">
            <a href="https://www.instagram.com/sohumdalal/" target="_blank" className="flex items-center text-black no-underline relative hover:underline">
              <span>Instagram</span>
              <GoArrowUpRight />
            </a>
          </li>
          <li className="mt-4 text-[0.9rem]">
            <a href="https://twitter.com/SohumDalal" target="_blank" className="flex items-center text-black no-underline relative hover:underline">
              <span>X</span>
              <GoArrowUpRight />
            </a>
          </li>
          <li className="mt-4 text-[0.9rem]">
            <a href="https://medium.com/@sohumdalal" target="_blank" className="flex items-center text-black no-underline relative hover:underline">
              <span>Medium</span>
              <GoArrowUpRight />
              <span>(technical work)</span>
            </a>
          </li>
          <li className="mt-4 text-[0.9rem]">
            <a href="https://substack.com/@sohumdalal" target="_blank" className="flex items-center text-black no-underline relative hover:underline">
              <span>Substack</span>
              <GoArrowUpRight />
              <span>(other thoughts)</span>
            </a>
          </li>
          <li className="mt-4 text-[0.9rem]">
            <a href="https://www.pinterest.com/dsohum/" target="_blank" className="flex items-center text-black no-underline relative hover:underline">
              <span>Pinterest</span>
              <GoArrowUpRight />
            </a>
          </li>
        </ul>
      </div>
      <div className="text-top mt-20 text-[0.8rem] text-gray-500 font-light">
        <p>Created by Sohum Dalal with Next.js. 2024</p>
      </div>
    </div>
  );
}

export default ContentContainer;
