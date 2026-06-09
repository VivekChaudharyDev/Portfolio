import React from 'react';
import { projects } from '../../constants';
import Tilt from "react-parallax-tilt";
import { FaGithub } from "react-icons/fa";
import { HiOutlineExternalLink } from "react-icons/hi";

const Projects = () => {
  return (
    <section 
      id="projects" 
      className="py-20 pb-24 px-[8vw] md:px-[7vw] lg:px-[15vw] font-sans relative dark:bg-skills-gradient-dark bg-skills-gradient-light clip-path-custom"
    >
      {/* Section Title */}
      <div className='text-center mb-16'>
        <h2 className="text-3xl sm:text-4xl font-bold dark:text-dark-text text-light-text uppercase tracking-wider">PROJECTS</h2>
        <div className='w-24 h-1 bg-global-clr mx-auto mt-2'></div>
        <p className="text-lg dark:text-dark-para text-light-para mt-4 font-semibold max-w-2xl mx-auto">
          A showcase of the projects I've worked on. Highlighting my skills and experience. Feel free to check them out!
        </p>
      </div>

      {/* Projects Grid */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto'>
        {projects.map((project) => (
          <Tilt
            key={project.id}
            tiltMaxAngleX={10}
            tiltMaxAngleY={10}
            perspective={1000}
            scale={1.02}
            transitionSpeed={800}
            className="rounded-2xl"
          >
            <div className='bg-light-bg dark:bg-dark-bg p-6 sm:p-8 rounded-2xl border border-global-clr/30 shadow-[0_0_8px_rgba(15,187,255,0.25),0_0_20px_rgba(15,187,255,0.1)] hover:border-global-clr transition-all h-full flex flex-col'>

              {/* Project Image */}
              <div className="relative overflow-hidden rounded-xl mb-4">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className='w-full h-44 object-cover transform hover:scale-110 transition-transform duration-500' 
                />
              </div>

              {/* Title & Description */}
              <h3 className="text-xl font-bold text-global-clr leading-tight mb-1 py-2">{project.title}</h3>
              <p className="dark:text-dark-para text-light-para text-sm leading-relaxed flex-grow mb-4">
                {project.description}
              </p>

              {/* Tags Section */}
              <div className="flex flex-wrap gap-2 mb-5">
                {project.tags.map((skill, index) => (
                  <div 
                    key={index} 
                    className="flex items-center justify-center bg-transparent border-2 border-gray-700 rounded-3xl py-1 px-3 text-center transition-all hover:shadow-[0_0_10px_rgba(15,187,255,0.4)] hover:border-global-clr group"
                  >
                    <span className="text-[10px] sm:text-xs dark:text-dark-para text-light-para font-medium uppercase tracking-wider group-hover:text-global-clr transition-colors">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3 mt-auto">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl border-2 border-gray-700 dark:text-dark-para text-light-para text-sm font-semibold uppercase tracking-wider hover:border-global-clr hover:text-global-clr hover:shadow-[0_0_10px_rgba(15,187,255,0.3)] transition-all"
                  >
                    <FaGithub size={16} />
                    GitHub
                  </a>
                )}
                {project.webapp && (
                  <a
                    href={project.webapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl border-2 border-global-clr text-global-clr text-sm font-semibold uppercase tracking-wider hover:bg-global-clr hover:text-dark-bg hover:shadow-[0_0_15px_rgba(15,187,255,0.4)] transition-all"
                  >
                    <HiOutlineExternalLink size={16} />
                    Live Demo
                  </a>
                )}
              </div>

            </div>
          </Tilt>
        ))}
      </div>
    </section>
  )
}

export default Projects;