import React from 'react'

const ContentContainer = () => {
  return (
    <div className="contentContainer">
      <div className="bio">
        <p>Hello! Thanks for stopping by.</p>
        <p>
          I’m Sohum. I’m a software engineer and craftsman. I appreciate technology systems that are well-organized, functional first, and modular to enable future innovation. Outside of a development environment, you can find me applying the same principles to other pursuits, namely baking bread and (coming soon) woodworking. While I continue to build out my website here, you can learn more about me and my work at the links below:
        </p>
        <ul>
          <li><a href="https://www.linkedin.com/in/sohum-dalal-985076a6/" target="_blank"><span>LinkedIn</span>↗</a></li>
          <li><a href="https://github.com/sohumdalal" target="_blank"><span>GitHub</span>↗</a></li>
          <li><a href="https://www.instagram.com/sohumdalal/" target="_blank"><span>Instagram</span>↗</a></li>
          <li><a href="https://twitter.com/SohumDalal" target="_blank"><span>X</span>↗</a></li>
          <li><a href="https://medium.com/@sohumdalal" target="_blank"><span>Medium</span>↗</a> (technical work)</li>
          <li><a href="https://substack.com/@sohumdalal" target="_blank"><span>Substack</span>↗</a> (other thoughts)</li>
          <li><a href="https://www.pinterest.com/dsohum/" target="_blank"><span>Pinterest</span>↗</a></li>
        </ul>
      </div>
      <div class="colophon">
        <p>Created by Sohum Dalal with Next.js. 2024</p>
      </div>
    </div>
  )
}

export default ContentContainer

