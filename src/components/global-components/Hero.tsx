// components/HeroSection.tsx (Alternative)
"use client";

import { Facebook, Github, Linkedin, MessageCircle } from "lucide-react";
import Image from "next/image";

const HeroSection = () => {
  const handleGetInTouch = () => {
    // Add your get in touch logic here
    console.log("Get in touch clicked");
  };

  const handleDownloadCV = () => {
    // Add your download CV logic here
    const link = document.createElement("a");
    link.href = "/cv-arafat-hossain-sobuj.pdf"; // Update with your CV path
    link.download = "Arafat_Hossain_Sobuj_CV.pdf";
    link.click();
  };

  return (
    <section className="w-full px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-2">
            {/* Main Heading */}
            <div className="space-y-6">
              <div className="space-y-3">
                <h1 className="text-sm font-bold text-white leading-tight">
                  I AM <span className="text-[#B94A5B] ">ARAFAT </span> HOSSAIN
                  SOBUJ
                </h1>
              </div>

              {/* Subtitle */}
              <p className="h-[63px] px-[10px] py-3 text-[11px] font-bold text-[#FFFFFF] bg-[#2A2A3A94]/58 leading-100% tracking-wider rounded-[10px]">
                Full-Stack Mobile App Developer | 9+ Years Experience
                <br />
                Expert in Flutter & Node.js | 40+ Successful Projects Delivered
              </p>
            </div>

            {/* CTA Section */}
            <div className="space-y-6 pt-4">
              <div className="space-y-4">
                <h2 className="w-[281px] text-[18px] leading-6 font-semibold text-white tracking-wider">
                  Maximize Your Business{" "}
                  <span className="text-[#B94A5B]">Potential</span> with Custom
                  Web Development{" "}
                  <span className="text-[#6A4FFF]"> Solutions!</span>
                </h2>
                <p className="w-[232px] text-[11px] font-normal text-[#DBB9B9] max-w-2xl">
                  Take your business to the next level with custom web
                  development solutions.
                </p>
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={handleGetInTouch}
                  className="w-[95px] h-[25px] bg-[conic-gradient(from_180deg_at_-50%_50%,_#B94A5B_0deg,_#6A4FFF_129.81deg,_#6A4FFF_162.69deg,_#B94A5B_360deg)] border-1 border-[#2A2A3A] text-white font-semibold text-[10px] rounded-sm transition-all duration-300 ease-in-out transform hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
                >
                  Get In Touch
                  <span className="group-hover:translate-x-1 transition-transform duration-200">
                    →
                  </span>
                </button>
                <button
                  onClick={handleDownloadCV}
                  className="w-[95px] h-[25px] bg-[conic-gradient(from_180deg_at_-50%_50%,_#B94A5B_0deg,_#6A4FFF_129.81deg,_#6A4FFF_162.69deg,_#B94A5B_360deg)] border-1 border-[#2A2A3A] text-white font-semibold text-[10px] rounded-sm transition-all duration-300 ease-in-out transform hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
                >
                  Download CV
                </button>
              </div>
            </div>
          </div>

          {/* Right Side - Illustration/Image */}
          <div className="relative flex flex-col items-center justify-center p-12 rounded-3xl">
            {/* Profile with gradient ring */}
            <div className="relative w-[280px] h-[280px] mb-8">
              {/* Gradient ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#E5398F] via-[#8B5CF6] to-[#E5398F] p-1.5">
                <div className="w-full h-full left-20 rounded-full bg-[#9CA3AF] overflow-hidden">
                  <img
                    src="/sobuj.png"
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div
                className="absolute -left-20 top-[30%] bg-[#E5398F] text-white text-center font-bold -rotate-[15deg] shadow-lg"
                style={{
                  width: "120px",
                  height: "90px",
                  borderRadius: "50% 50% 50% 50% / 60% 60% 40% 40%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div>
                  <div className="text-xl leading-tight">30+</div>
                  <div className="text-sm leading-tight">Clients</div>
                </div>
              </div>

              <div
                className="absolute -right-20 top-[30%] bg-[#E5398F] text-white text-center font-bold rotate-[15deg] shadow-lg"
                style={{
                  width: "120px",
                  height: "90px",
                  borderRadius: "50% 50% 50% 50% / 60% 60% 40% 40%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div>
                  <div className="text-xl leading-tight">40+</div>
                  <div className="text-sm leading-tight">Projects</div>
                </div>
              </div>
            </div>

            <div className="relative w-[280px] h-16 flex items-start justify-center">
              <a
                href="#"
                className="absolute w-[26px] h-[26px] border border-[#E5E7EB] rounded-full bg-gradient-to-b from-[#B94A5B] via-[#6A4FFF] via-[33.33%] to-[#6A4FFF] to-[66.67%] flex items-center justify-center hover:scale-110 transition-transform shadow-md"
                style={{ left: "10px", top: "8px" }}
                aria-label="WhatsApp"
              >
                <Image src="/icons/Whatsapp.png" alt="WhatsApp" width={15} height={15} />
              </a>
              <a
                href="#"
                className="absolute w-[26px] h-[26px] border border-[#E5E7EB] rounded-full bg-gradient-to-b from-[#B94A5B] via-[#6A4FFF] via-[33.33%] to-[#6A4FFF] to-[66.67%] flex items-center justify-center hover:scale-110 transition-transform shadow-md"
                style={{ left: "75px", top: "20px" }}
                aria-label="LinkedIn"
              >
                <Image src="/icons/mdi_linkedin.svg" alt="LinkedIn" width={15} height={15} />
              </a>
              <a
                href="#"
                className="absolute w-[26px] h-[26px] border border-[#E5E7EB] rounded-full bg-gradient-to-b from-[#B94A5B] via-[#6A4FFF] via-[33.33%] to-[#6A4FFF] to-[66.67%] flex items-center justify-center hover:scale-110 transition-transform shadow-md"
                style={{ right: "75px", top: "20px" }}
                aria-label="Facebook"
              >
                <Image src="/icons/fb.svg" alt="LinkedIn" width={15} height={15} />
              </a>
              <a
                href="#"
                className="absolute w-[26px] h-[26px] rounded-full bg-gradient-to-b from-[#B94A5B] via-[#6A4FFF] via-[33.33%] to-[#6A4FFF] to-[66.67%] flex items-center justify-center hover:scale-110 transition-transform shadow-md"
                style={{ right: "10px", top: "8px" }}
                aria-label="GitHub"
              >
                <Image src="/icons/mdi_github.svg" alt="LinkedIn" width={15} height={15} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
