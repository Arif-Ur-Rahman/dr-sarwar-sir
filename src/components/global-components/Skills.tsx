// components/SkillsSection.tsx
"use client";
import Image from "next/image";

const Skills = () => {
  const languages = [
    {
      name: "Flutter",
      icon: "/icons/skills/flutter1.png",
      bg: "bg-white",
      size: "w-[86px] h-[29px]",
    },
    {
      name: "MySQL",
      icon: "/icons/skills/mySQL.png",
      bg: "bg-transparent",
      size: "w-[43px] h-[42px]",
    },
    {
      name: "java",
      icon: "/icons/skills/java.png",
      bg: "bg-transparent",
      size: "w-[42px] h-[42px]",
    },
    {
      name: "mern",
      icon: "/icons/skills/mern.png",
      bg: "bg-transparent",
      size: "w-[53px] h-[54px]",
    },
    {
      name: "aws",
      icon: "/icons/skills/aws.png",
      bg: "bg-white",
      size: "w-10 h-10",
    },
    {
      name: "DO",
      icon: "/icons/skills/do.png",
      bg: "bg-white",
      size: "w-[42px] h-[42px]",
    },
    {
      name: "Python",
      icon: "/icons/skills/python.png",
      bg: "bg-transparent",
      size: "w-[42px] h-[42px]",
    },
    {
      name: "figma",
      icon: "/icons/skills/figma.png",
      bg: "bg-transparent",
      size: "w-[42px] h-[42px]",
    },
    {
      name: "Node.js",
      icon: "/icons/skills/php.png",
      bg: "bg-transparent",
      size: "w-[63px] h-[34px]",
    },
    {
      name: "React",
      icon: "/icons/skills/laravel.png",
      bg: "bg-transparent",
      size: "w-11 h-[42px]",
    },
  ];

  const frameworks = [
    {
      category: "Front-End",
      items: ["HTML", "CSS", "JavaScript"],
    },
    {
      category: "Frameworks",
      items: ["React", "Vue", "Angular"],
    },
    {
      category: "CSS Libraries",
      items: ["Tailwind", "Bootstrap"],
    },
    {
      category: "Version Control",
      items: ["Git/GitHub"],
    },
    {
      category: "Tools",
      items: ["Figma", "Photoshop"],
    },
    {
      category: "Back-End",
      items: ["Python", "Java", "Node.js", "PHP", "C#", "Go"],
    },
    {
      category: "Backend Frameworks",
      items: ["Django", "Flask", "Express.js", "Spring Boot", "Laravel"],
    },
    {
      category: "Databases",
      items: ["MySQL", "PostgreSQL", "MongoDB", "Redis"],
    },
    {
      category: "API Development",
      items: ["REST", "GraphQL"],
    },
    {
      category: "Server Deployment",
      items: ["AWS", "Heroku", "DigitalOcean"],
    },
    {
      category: "Version Control",
      items: ["Git/GitHub"],
    }
  ];

  // Split into 4 columns: 3, 3, 3, 1
  const columns = [
    languages.slice(0, 3), // Column 1: 3 items
    languages.slice(3, 6), // Column 2: 3 items
    languages.slice(6, 9), // Column 3: 3 items
    languages.slice(9, 10), // Column 4: 1 item
  ];

  return (
    <section className="w-full py-20 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Header - Above the background and on the left side */}
        <div className="mb-16">
          <div className="flex items-center gap-4">
            {/* Icon before heading */}
            <div className="w-[46px] h-[46px] flex items-center justify-center">
              <Image
                src="/icons/Frame.png" // Replace with your actual icon path
                alt="Skills Icon"
                width={46}
                height={46}
                className="object-contain"
              />
            </div>
            <div>
              <h1 className="text-[28px] font-semibold text-white font-roboto">
                My Skills
              </h1>
              
            </div>
          </div>
        </div>

        {/* Skills Content with Background */}
        <div className="bg-[#6E6E6E30] backdrop-blur-[35px] rounded-2xl p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - Languages with 4 columns */}
            <div>
              <div className="bg-[#303030] h-[295px] rounded-[15px] p-6 border border-[#FFFFFF26]">
                <div className="grid grid-cols-4 h-full">
                  {columns.map((column, columnIndex) => (
                    <div
                      key={columnIndex}
                      className="flex flex-col gap-4 justify-center items-center"
                    >
                      {column.map((language, index) => (
                        <div
                          key={index}
                          className={`flex items-center justify-center hover:scale-110 transition-transform duration-300 ${language.bg} ${language.size} p-2`}
                        >
                          <Image
                            src={language.icon}
                            alt={language.name}
                            width={40}
                            height={40}
                            className="object-contain w-full h-full"
                          />
                        </div>
                      ))}
                      {/* Add empty space in the last column to match height */}
                      {columnIndex === 3 &&
                        Array.from({ length: 2 }).map((_, i) => (
                          <div key={`empty-${i}`} className="w-12 h-12 opacity-0">
                            {/* Empty space */}
                          </div>
                        ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Frameworks & Tools */}
            <div>
              <div className="bg-[#303030] rounded-[15px] py-[17px] px-[10px] border border-[#FFFFFF26] h-[295px] font-roboto text-[12px] font-medium leading-[150%] tracking-normal">
                <div className="h-full flex flex-col gap-6">
                  {/* Upper Div - Frontend Technologies */}
                  <div className="flex-1 border border-[#FFFFFF1A] p-2 gap-[3px] leading-[150%] tracking-normal">
                    <div className="space-y-1/2">
                      {frameworks
                        .filter((section) =>
                          [
                            "Front-End",
                            "Frameworks",
                            "CSS Libraries",
                            "Version Control",
                            "Tools",
                          ].includes(section.category)
                        )
                        .map((section, index) => (
                          <div
                            key={index}
                            className="flex items-start gap-3 group"
                          >
                            <span className="text-white min-w-[140px] flex items-start gap-2 group-hover:text-white transition-colors">
                              <span className="text-white">•</span>
                              {section.category}:
                            </span>
                            <div className="flex-1">
                              <span className="text-[#DBB9B9BA] text-[12px] group-hover:text-white transition-colors">
                                {section.items.join(", ")}
                              </span>
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>

                  {/* Lower Div - Backend Technologies */}
                  <div className="flex-1 border border-[#FFFFFF1A]">
                    <div className="space-y-1/2 p-2 gap-[3px] leading-[150%] tracking-normal">
                      {frameworks
                        .filter((section) =>
                          [
                            "Back-End",
                            "Backend Frameworks",
                            "Databases",
                            "API Development",
                            "Server Deployment",
                            "API Interagration",
                          ].includes(section.category)
                        )
                        .map((section, index) => (
                          <div
                            key={index}
                            className="flex items-start gap-3 group"
                          >
                            <span className="text-white min-w-[140px] flex items-start gap-2 group-hover:text-white transition-colors">
                              <span className="text-white">•</span>
                              {section.category}:
                            </span>
                            <div className="flex-1">
                              <span className="text-[#DBB9B9BA] text-[12px] group-hover:text-white transition-colors">
                                {section.items.join(", ")}
                              </span>
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;