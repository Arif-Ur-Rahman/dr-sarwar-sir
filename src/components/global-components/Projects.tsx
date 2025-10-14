// components/ProjectsSection.tsx
"use client";
import Image from "next/image";

const ProjectsSection = () => {
  const projects = [
    {
      title: "SCIBAL, Diag. & SNS for veggie",
      description: "An integrated app that uses AI to instantly solve vegetable health problems by diagnosing over 100 issues. Features a social platform (SNS) for expert gardening advice and user collaboration.",
      image: "/projects/project1.png",
      link: "#",
      hasLink: true
    },
    {
      title: "Job Circular",
      description: "This app is about all types of job circular application forms, event schedule, event results, any other information about examination and job exam preparation.",
      image: "/projects/project2.png",
      link: "#",
      hasLink: true
    },
    {
      title: "Transcom Digital",
      description: "A mobile platform for Transcom Digital, focusing on delivering the brands priority of value for money and genuine products.",
      image: "/projects/project3.png",
      link: "#",
      hasLink: true
    },
    {
      title: "Cinebaz",
      description: "Cinebaz is an entertainment app where can watch movies, web series and big budget films.",
      image: "/projects/project4.png",
      link: "#",
      hasLink: true
    },
    {
      title: "Project 5",
      description: "Description for project 5. This is an additional project card to make total 8 cards.",
      image: "/projects/project5.png",
      link: "#",
      hasLink: true
    },
    {
      title: "Project 6",
      description: "Description for project 6. This is an additional project card to make total 8 cards.",
      image: "/projects/project6.png",
      link: "#",
      hasLink: true
    },
    {
      title: "Project 7",
      description: "Description for project 7. This is an additional project card to make total 8 cards.",
      image: "/projects/project7.png",
      link: "#",
      hasLink: true
    },
    {
      title: "Project 8",
      description: "Description for project 8. This is an additional project card to make total 8 cards.",
      image: "/projects/project8.png",
      link: "#",
      hasLink: true
    }
  ];

  return (
    <section className="w-full sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-4">
          <div className="flex items-center gap-4">
            {/* Icon Image */}
            <div className="w-12 h-12 flex items-center justify-center">
              <Image
                src="/icons/Frame.png"
                alt="Projects Icon"
                width={48}
                height={48}
                className="object-contain"
              />
            </div>
            <div>
              <h1 className="text-[28px] font-semibold text-white font-roboto text-left">
                My Recent Projects
              </h1>
            </div>
          </div>
        </div>

        {/* Introduction Text */}
        <div className="text-left mb-12 mx-auto">
          <p className="text-[#DBB9B9BA] text-[12px] font-medium leading-relaxed">
            I want to become a skilled full stack developer, proficient in both frontend and backend <br />technologies. My goal is to build visually appealing and high-performing web applications.
          </p>
        </div>

        {/* Projects Grid - 3 columns on large screens, 2 columns on medium, 1 column on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-[26px] gap-x-[23px]">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-[#11111F] rounded-[10px] border border-[#E5E7EB] py-[9px] px-[10px] overflow-hidden group hover:border-[#B94A5B] h-[304px] w-full transition-all duration-300"
            >
              {/* Project Image */}
              <div className="h-[199px] w-[300px] bg-white relative overflow-hidden rounded-[30px]">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-contain"
                />
              </div>
              
              {/* Project Content */}
              <div className="p-2">
                {/* Project Title */}
                <h3 className="text-[11px] font-semibold mb-2 text-white tracking-[-1.1%] leading-[150%] font-roboto group-hover:text-[#B94A5B] transition-colors">
                  {project.title}
                </h3>
                
                {/* Project Description */}
                <p className="text-[#666666] font-normal text-[8px] leading-3 tracking-normal mb-3 line-clamp-2">
                  {project.description}
                </p>
                
                {/* Visit Link - Only show if hasLink is true */}
                {project.hasLink && (
                  <div className="flex items-center">
                    <a
                      href={project.link}
                      className="text-[#B94A5B] font-semibold hover:text-white transition-colors flex items-center gap-1 text-[8px]"
                    >
                      Click to Visit
                      <span className="text-sm">→</span>
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;