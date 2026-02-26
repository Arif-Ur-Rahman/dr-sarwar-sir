"use client";

import Image from "next/image";

const HeroSection = () => {
  const handleGetInTouch = () => {
    console.log("Get in touch clicked");
  };

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/cv-sarwar-kamal.pdf";
    link.download = "Dr_Sarwar_Kamal_CV.pdf";
    link.click();
  };

  return (
    <section className="relative w-full min-h-[88vh] flex items-center justify-center overflow-hidden">

      {/* ── Layered gradient background (silver / light gray mesh) ── */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 20% 30%, #e2e2e7 0%, transparent 60%)," +
            "radial-gradient(ellipse 70% 60% at 80% 70%, #d8d8e0 0%, transparent 60%)," +
            "radial-gradient(ellipse 90% 80% at 50% 50%, #ececf1 0%, #d4d4db 100%)",
        }}
      />

      {/* Optional: very subtle noise texture */}
      <div
        className="absolute inset-0 -z-10 opacity-[0.03]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
          backgroundRepeat: "repeat",
          backgroundSize: "128px",
        }}
      />

      {/* ── Content ── */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-3xl mx-auto gap-7">

        {/* Main headline */}
        <h1
          className="text-[clamp(2.5rem,7vw,2.5rem)] font-black text-gray-900 leading-[1.08] tracking-[-0.03em]"
          style={{ fontFamily: "'Inter', 'SF Pro Display', system-ui, sans-serif" }}
        >
          Data Analytics, <br /> Sydney, New South Wales, Australia 
          
          
        </h1>

        {/* Subtitle */}
        <p className="text-[clamp(1.1rem,1.8vw,1.1rem)] text-gray-500 font-normal leading-relaxed max-w-2xl">
          I have been working in data mining and machine learning since 2012. Moreover, I have worked in a software firm to develop gaming software. In data analytics, I have worked for business data analysis, social network data analysis and large biological data mining. I like and love to connect and apply information technology in other disciplines like Biology, Business, and Social netoworking to address and support their demands and every interaction inspires action
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
          <button
            onClick={handleGetInTouch}
            className="px-8 py-3.5 bg-gray-900 text-white text-[15px] font-semibold rounded-full shadow-lg hover:bg-gray-800 active:scale-95 transition-all duration-200 tracking-wide min-w-[180px]"
          >
            Consultancy?
          </button>
          <button
            onClick={handleDownloadCV}
            className="px-8 py-3.5 bg-white/70 backdrop-blur-sm border border-gray-300 text-gray-800 text-[15px] font-semibold rounded-full shadow-sm hover:bg-white hover:border-gray-400 active:scale-95 transition-all duration-200 tracking-wide min-w-[180px]"
          >
            Download CV
          </button>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;