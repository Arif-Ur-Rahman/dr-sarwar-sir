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
        background: `
          radial-gradient(ellipse at 15% 50%, rgba(255,255,255,0.55) 0%, transparent 55%),
          radial-gradient(ellipse at 85% 15%, rgba(255,255,255,0.35) 0%, transparent 50%),
          radial-gradient(ellipse at 55% 85%, rgba(180,180,195,0.25) 0%, transparent 50%),
          repeating-linear-gradient(
            100deg,
            transparent 0px,
            transparent 18px,
            rgba(0,0,0,0.025) 18px,
            rgba(0,0,0,0.025) 20px,
            transparent 20px,
            transparent 38px,
            rgba(0,0,0,0.015) 38px,
            rgba(0,0,0,0.015) 40px
          ),
          linear-gradient(135deg, #d6d6dc 0%, #c4c4ce 30%, #bcbcc8 60%, #cecед6 100%)
        `,
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