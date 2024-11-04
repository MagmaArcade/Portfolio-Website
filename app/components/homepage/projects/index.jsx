import { projectsData } from '@/utils/data/projects-data';
import Image from "next/image";
import GlowCard from "../../helper/glow-card";
import React from 'react';  // Import React

const Projects = () => {
  return (
    <div id="projects" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      <Image
        src="/section.svg"
        alt="Section Background"
        width={1572}
        height={795}
        className="absolute top-0 -z-10"
      />

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Projects
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {projectsData.slice(0, 4).map((project, index) => (
            <GlowCard key={index} identifier={`project-${index + 1}`}>
              <div className="p-3 relative">
                <Image
                  src="/blur-23.svg"
                  alt="Background Blur"
                  width={1080}
                  height={200}
                  className="absolute bottom-0 opacity-80"
                />
                <div className="flex justify-center mb-4">
                  <p className="text-xs sm:text-sm text-[#16f2b3]">
                    {project.duration}
                  </p>
                </div>
                <div className="text-center text-[#16f2b3] text-base lg:text-xl">
                  {project.name}
                </div>
                <div className="overflow-hidden border-t-[2px] border-indigo-900 px-4 lg:px-8 py-4 lg:py-8">
                  <code className="font-mono text-xs md:text-sm lg:text-base">
                    <div className="blink">
                      <span className="mr-2 text-pink-500">const</span>
                      <span className="mr-2 text-white">project</span>
                      <span className="mr-2 text-pink-500">=</span>
                      <span className="text-gray-400">{'{'}</span>
                    </div>
                    <div>
                      <span className="ml-4 lg:ml-8 mr-2 text-white">name:</span>
                      <span className="text-gray-400">&apos;</span>
                      <span className="text-amber-300">{project.name}</span>
                      <span className="text-gray-400">&apos;,</span>
                    </div>

                    <div className="ml-4 lg:ml-8 mr-2">
                      <span className=" text-white">tools:</span>
                      <span className="text-gray-400">[&apos;</span>
                      {
                        project.tools.map((tag, i) => (
                          <React.Fragment key={i}>
                            <span className="text-amber-300">{tag}</span>
                            {
                              project.tools.length - 1 !== i &&
                              <span className="text-gray-400">&apos;, &apos;</span>
                            }
                          </React.Fragment>
                        ))
                      }
                      <span className="text-gray-400">{"],"}</span>
                    </div>
                    <div>
                      <span className="ml-4 lg:ml-8 mr-2 text-white">myRole:</span>
                      <span className="text-orange-400">{project.role}</span>
                      <span className="text-gray-400">,</span>
                    </div>
                    <div className="ml-4 lg:ml-8 mr-2">
                      <span className="text-white">Description:</span>
                      <span className="text-cyan-400">{' ' + project.description}</span>
                      <span className="text-gray-400">,</span>
                    </div>
                    <div><span className="text-gray-400">{`};`}</span></div>
                  </code>
                </div>
              </div>
            </GlowCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
