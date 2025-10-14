// components/ContactSection.tsx
"use client";
import Image from "next/image";

const ContactSection = () => {
  const handleContactClick = () => {
    console.log("Contact me clicked");
    // Add your contact logic here
  };

  return (
    <section className="w-full min-h-[200px] sm:min-h-[180px] lg:h-35 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-4 items-start gap-4 lg:gap-0">
          {/* Left Side - Image (1 column) - Full space */}
          <div className="flex justify-center lg:justify-start lg:col-span-1 w-full h-full">
            <div className="relative w-[120px] h-[100px] sm:w-[140px] sm:h-[120px] lg:w-full lg:h-full">
              <Image
                src="/images/contact.jpg"
                fill
                alt="A. Arafat Hossain Sobuj"
                className="object-cover rounded-lg lg:rounded-none"
              />
            </div>
          </div>

          {/* Right Side - Content (3 columns) */}
          <div className="lg:col-span-3 flex flex-col h-full lg:pl-4">
            {/* Heading with Icon at Top */}
            <div className="flex items-center mb-2 lg:mb-0">
              <div className="w-[10px] h-[10px] flex items-center justify-center flex-shrink-0">
                <Image
                  src="/icons/contact-icon.svg"
                  alt="Contact Icon"
                  width={10}
                  height={10}
                  className="object-contain"
                />
              </div>
              <h1 className="text-sm sm:text-base font-bold text-white font-dancing ml-2">
                <span className="text-[#B94A5B]">Dr. </span> Sarwar Kamal
              </h1>
            </div>

            {/* Subtitle */}
            <h2 className="text-[13.51px] sm:text-[15px] text-white font-roboto font-bold leading-5 mb-2 lg:mb-0">
              Data Analytics(Certified Professional (CP)), 
            </h2>

            {/* Paragraph in the Middle */}
            <div className="flex-grow mb-4 lg:mb-0">
              <p className="text-[9px] sm:text-[10px] font-normal font-roboto text-[#DBB9B9BA] leading-relaxed">
                I have been working in data mining and machine learning since 2012. Moreover, I have worked in a software firm to develop gaming software. In data analytics, I have worked for business data analysis, social network data analysis and large biological data mining. I like and love to connect and apply information technology in other disciplines like Biology, Business, and Social netoworking to address and support their demands.
              </p>
            </div>

            {/* Button at the Bottom */}
            <div className="mt-auto">
              <button
                onClick={handleContactClick}
                className="bg-[conic-gradient(from_180deg_at_-50%_50%,_#B94A5B_0deg,_#6A4FFF_129.81deg,_#6A4FFF_162.69deg,_#B94A5B_360deg)] text-white font-semibold text-[9.45px] sm:text-[11px] w-22 sm:w-24 h-[25px] sm:h-[28px] rounded-sm hover:scale-105 transition-transform duration-200"
              >
                Contact Me
                <span className="pl-1 leading-[15px] tracking-normal group-hover:translate-x-1 transition-transform duration-200">
                  →
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;