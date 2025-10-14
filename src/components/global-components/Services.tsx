// components/Services.tsx
"use client";
import Image from "next/image";

const Services = () => {
  const services = [
    {
      title: "Web Application",
      description:
        "I will create a responsive and user-friendly web application that meets your business needs. I will ensure that your web...",
      icon: "/icons/service1.png", // Update with your actual file names
    },
    {
      title: "Web Development",
      description:
        "I will create a responsive and user-friendly web application that meets your business needs. I will ensure that your web...",
      icon: "/icons/service2.png",
    },
    {
      title: "Data Management",
      description:
        "I will create a responsive and user-friendly web application that meets your business needs. I will ensure that your web...",
      icon: "/icons/service3.png",
    },
    {
      title: "Data Analysis",
      description:
        "I will create a responsive and user-friendly web application that meets your business needs. I will ensure that your web...",
      icon: "/icons/service4.png",
    },
    {
      title: "App Development",
      description:
        "I will create a responsive and user-friendly web application that meets your business needs. I will ensure that your web...",
      icon: "/icons/service5.png",
    },
    {
      title: "Web Design",
      description:
        "I will create a responsive and user-friendly web application that meets your business needs. I will ensure that your web...",
      icon: "/icons/service6.png",
    },
  ];

  const handleLearnMore = (serviceTitle: string) => {
    console.log(`Learn more about ${serviceTitle}`);
    // Add your navigation logic here
  };

  return (
    <section className="w-full py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-left mb-20">
          {/* Icon and H1 in a flex container */}
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 flex items-center justify-center">
              <Image
                src="/icons/Frame.png" // Update with your actual icon path
                alt="Services Icon"
                width={46}
                height={46}
                className="object-contain border-none outline-none"
              />
            </div>
            <h1 className="text-[28px] sm:text-5xl text-white font-roboto font-semibold">
              My Services
            </h1>
          </div>
          <p className="text-[11px] font-normal text-[#DBB9B9BA] mx-auto leading-[130%]">
            I am a highly experienced Full-Stack Mobile App Developer with over seven years in the industry. I specialize in Flutter for mobile development and Node.js for backend solutions. With a deep understanding of scalable architectures, I have successfully delivered 40+ high-performance applications across various industries, ensuring seamless user experiences and efficient backend systems.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[42px]">
          {services.map((service, index) => (
            <div key={index} className="group">
              <div className="bg-[#11111F] hover:bg-gradient-to-b from-[#F94A5B] to-[#6A4FFF] rounded-sm p-4 hover:shadow-2xl transition-all duration-300 ease-in-out border border-[#E5E7EB] hover:border-primary-100 flex flex-col h-full">
                {/* Icon with Gradient Background */}
                <div className="w-[47px] h-[47px] bg-[linear-gradient(180deg,#B94A5B_0%,#6A4FFF_50%)] rounded-sm flex items-center justify-center group-hover:scale-110 transition-all duration-300 p-1">
                  <Image
                    src={service.icon}
                    alt={`${service.title} Icon`}
                    width={35}
                    height={35}
                    className="object-contain"
                  />
                </div>

                {/* Service Title */}
                <h3 className="text-[12px] leading-[18px] font-semibold text-white mb-4 font-roboto group-hover:text-white transition-colors duration-200 mt-4">
                  {service.title}
                </h3>

                {/* Service Description */}
                <p className="text-[#FFFFFFCC] text-[8px] mb-6 leading-relaxed flex-grow">
                  {service.description}
                </p>

                {/* Learn More Link */}
                <button
                  onClick={() => handleLearnMore(service.title)}
                  className="text-white font-semibold text-[9px] flex items-center gap-2 group-hover:gap-3 transition-all duration-200 mt-auto w-fit hover:text-gray-200"
                >
                  Learn More
                  <span className="group-hover:translate-x-1 transition-transform duration-200">
                    →
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;