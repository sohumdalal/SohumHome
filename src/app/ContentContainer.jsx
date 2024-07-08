// import React from 'react'

// const ContentContainer = () => {
//   return (
//     <div className="contentContainer">
//       <div className="bio">
//         <p id="helloBlurb">Hello! Thanks for stopping by.</p>
//         <p id="infoParagraph">
//           I’m Sohum. I’m a software engineer and craftsman. I appreciate technology systems that are well-organized, functional first, and modular to enable future innovation. Outside of a development environment, you can find me applying the same principles to other pursuits, namely baking bread. You can learn more about me and my work at the links below:
//         </p>
//         <ul>
//           <li><a href="https://www.linkedin.com/in/sohum-dalal-985076a6/" target="_blank"><span>LinkedIn</span>↗</a></li>
//           <li><a href="https://github.com/sohumdalal" target="_blank"><span>GitHub</span>↗</a></li>
//           <li><a href="https://www.instagram.com/sohumdalal/" target="_blank"><span>Instagram</span>↗</a></li>
//           <li><a href="https://twitter.com/SohumDalal" target="_blank"><span>X</span>↗</a></li>
//           <li><a href="https://medium.com/@sohumdalal" target="_blank"><span>Medium</span>↗</a> (technical work)</li>
//           <li><a href="https://substack.com/@sohumdalal" target="_blank"><span>Substack</span>↗</a> (other thoughts)</li>
//           <li><a href="https://www.pinterest.com/dsohum/" target="_blank"><span>Pinterest</span>↗</a></li>
//         </ul>
//       </div>
//       <div className="colophon">
//         <p>Created by Sohum Dalal with Next.js. 2024</p>
//       </div>
//     </div>
//   )
// }

// export default ContentContainer


import React from 'react'

const ContentContainer = () => {
  return (
    <div className="flex flex-col h-[78%] w-[50%] text-[calc(18px-2px)] mt-10 font-light">
      <div className="bio">
        <p id="helloBlurb">Hello! Thanks for stopping by.</p>
        <p id="infoParagraph" className="mt-5">
          I’m Sohum. I’m a software engineer and craftsman. I appreciate technology systems that are well-organized, functional first, and modular to enable future innovation. Outside of a development environment, you can find me applying the same principles to other pursuits, namely baking bread. You can learn more about me and my work at the links below:
        </p>
        <ul className="list-none mt-10 p-0">
          <li className="mt-4 text-[0.9rem]"><a href="https://www.linkedin.com/in/sohum-dalal-985076a6/" target="_blank" className="text-black no-underline relative hover:underline"><span>LinkedIn</span>↗</a></li>
          <li className="mt-4 text-[0.9rem]"><a href="https://github.com/sohumdalal" target="_blank" className="text-black no-underline relative hover:underline"><span>GitHub</span>↗</a></li>
          <li className="mt-4 text-[0.9rem]"><a href="https://www.instagram.com/sohumdalal/" target="_blank" className="text-black no-underline relative hover:underline"><span>Instagram</span>↗</a></li>
          <li className="mt-4 text-[0.9rem]"><a href="https://twitter.com/SohumDalal" target="_blank" className="text-black no-underline relative hover:underline"><span>X</span>↗</a></li>
          <li className="mt-4 text-[0.9rem]"><a href="https://medium.com/@sohumdalal" target="_blank" className="text-black no-underline relative hover:underline"><span>Medium</span>↗</a> (technical work)</li>
          <li className="mt-4 text-[0.9rem]"><a href="https://substack.com/@sohumdalal" target="_blank" className="text-black no-underline relative hover:underline"><span>Substack</span>↗</a> (other thoughts)</li>
          <li className="mt-4 text-[0.9rem]"><a href="https://www.pinterest.com/dsohum/" target="_blank" className="text-black no-underline relative hover:underline"><span>Pinterest</span>↗</a></li>
        </ul>
      </div>
      <div className="text-center mt-24 text-[0.8rem] text-gray-500 font-light">
        <p>Created by Sohum Dalal with Next.js. 2024</p>
      </div>
    </div>
  )
}

export default ContentContainer

