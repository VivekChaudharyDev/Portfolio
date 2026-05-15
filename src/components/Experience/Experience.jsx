import React from "react";
import { experiences } from "../../constants";
import Tilt from "react-parallax-tilt";

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-24 pb-24 px-4 md:px-[7vw] lg:px-[15vw] font-sans dark:bg-skills-gradient-dark bg-skills-gradient-light overflow-x-hidden"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold dark:text-dark-text text-light-text uppercase tracking-wider">
          EXPERIENCE
        </h2>
        <div className="w-24 h-1 bg-global-clr mx-auto mt-2"></div>
        <p className="dark:text-dark-para text-light-para mt-4 text-lg font-semibold max-w-2xl mx-auto">
          A collection of my work experience and the roles I have taken in various organizations
        </p>
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* Vertical Center Line */}
        <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-[2px] bg-global-clr/30"></div>

        {experiences.map((experience, index) => {
          const isEven = index % 2 === 0;

          return (
            <div key={experience.id} className="relative flex items-center mb-12 w-full">
              
              {/* Timeline Circle pinned to center line */}
              <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 z-20">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full border-2 border-global-clr bg-light-bg dark:bg-dark-bg p-1 flex items-center justify-center shadow-[0_0_15px_rgba(15,187,255,0.4)]">
                  <img src={experience.img} alt="" className="w-full h-full object-contain rounded-full" />
                </div>
              </div>

              {/* Layout Wrapper - Alternates direction on Desktop */}
              <div className={`flex w-full items-center ${isEven ? "md:flex-row-reverse" : "md:flex-row"}`}>
                
                {/* 1. Card Container */}
                <div className="w-full md:w-1/2 pl-12 md:pl-0">
                  <div className={`${isEven ? "md:pl-4 lg:pl-4" : "md:pr-4 lg:pr-4"}`}>
                    <Tilt
                      tiltMaxAngleX={10}
                      tiltMaxAngleY={10}
                      perspective={1000}
                      scale={1.02}
                      transitionSpeed={800}
                      className="rounded-2xl"
                    >
                      <div className="bg-light-bg dark:bg-dark-bg p-6 sm:p-8 rounded-2xl border border-global-clr/30 shadow-[0_0_8px_rgba(15,187,255,0.25),0_0_20px_rgba(15,187,255,0.1)] hover:border-global-clr transition-all">
                        
                        {/* Card Header */}
                        <div className="flex items-center gap-4 mb-4">
                          <div className="w-12 h-12 bg-white rounded-lg p-1 shrink-0">
                            <img src={experience.img} alt={experience.company} className="w-full h-full object-contain" />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold dark:text-dark-text text-light-text leading-tight">
                              {experience.role}
                            </h3>
                            <p className="text-global-clr font-semibold text-sm">
                              {experience.company}
                            </p>
                            <p className="dark:text-dark-para text-light-para text-xs mt-1 opacity-70">
                              {experience.date}
                            </p>
                          </div>
                        </div>

                        <p className="dark:text-dark-para text-light-para text-sm leading-relaxed mb-6">
                          {experience.desc}
                        </p>

                        {/* Skills Section */}
                        <div className="flex flex-wrap gap-2">
                          {experience.skills?.map((skill, i) => (
                            <div 
                              key={i} 
                              className="flex items-center justify-center bg-transparent border-2 border-gray-700 rounded-3xl py-1 px-3 text-center transition-all hover:shadow-[0_0_10px_rgba(15,187,255,0.4)] hover:border-global-clr"
                            >
                              <span className="text-[10px] sm:text-xs dark:text-dark-para text-light-para font-medium uppercase tracking-wider">
                                {skill}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </Tilt>
                  </div>
                </div>

                {/* 2. Empty Spacer for the opposite side */}
                <div className="hidden md:block md:w-1/2"></div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Experience;