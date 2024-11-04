import { projectsData } from '@/utils/data/projects-data';
import ProjectCard from './project-card';
import Image from "next/image";
import GlowCard from "../../helper/glow-card";

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
                <div className="flex flex-col items-center gap-y-4 px-3 py-5">
                  <ProjectCard project={project} />
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
