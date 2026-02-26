import ClientReviews from "@/components/global-components/ClientReviews";
import Connect from "@/components/global-components/Connect";
import ContactSection from "@/components/global-components/Contact";
import HeroSection from "@/components/global-components/Hero";
import Navbar from "@/components/global-components/Navbar";
import ProjectsSection from "@/components/global-components/Projects";
import Services from "@/components/global-components/Services";
import Skills from "@/components/global-components/Skills";
import Stats from "@/components/global-components/Stats";

export default function Home() {
  return (
    <div 
      className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20"
      style={{
       background:
            "radial-gradient(ellipse 80% 60% at 20% 30%, #e2e2e7 0%, transparent 60%)," +
            "radial-gradient(ellipse 70% 60% at 80% 70%, #d8d8e0 0%, transparent 60%)," +
            "radial-gradient(ellipse 90% 80% at 50% 50%, #ececf1 0%, #d4d4db 100%)",
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