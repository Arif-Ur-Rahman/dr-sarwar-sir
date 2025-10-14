import ClientReviews from "@/components/global-components/ClientReviews";
import Connect from "@/components/global-components/Connect";
import ContactSection from "@/components/global-components/Contact";
import HeroSection from "@/components/global-components/Hero";
import Navbar from "@/components/global-components/Navbar";
import ProjectsSection from "@/components/global-components/Projects";
import Services from "@/components/global-components/Services";
import Skills from "@/components/global-components/Skills";
import Stats from "@/components/global-components/Stats";
import Image from "next/image";

export default function Home() {
  return (
    <div 
      className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20"
      style={{
        background: "#1b1b52"
      }}
    >
      <Navbar />
      <HeroSection />
      <Stats />
      <Services />
      <ContactSection />
      <Skills />
      <ProjectsSection />
      <ClientReviews />
      <Connect />
    </div>
  );
}