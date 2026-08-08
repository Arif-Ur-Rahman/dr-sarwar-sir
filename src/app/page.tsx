import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import Publications from "@/components/sections/Publications";
import Research from "@/components/sections/Research";
import Statement from "@/components/sections/Statement";
import Teaching from "@/components/sections/Teaching";
import Backdrop from "@/components/ui/Backdrop";

export default function Home() {
  return (
    <>
      <Backdrop />
      <a
        href="#about"
        className="btn-accent sr-only focus:not-sr-only focus:absolute focus:left-6 focus:top-6 focus:z-[60] focus:rounded-full focus:px-5 focus:py-2.5 focus:text-sm focus:font-semibold"
      >
        Skip to content
      </a>
      <Header />
      <main>
        <Hero />
        <About />
        <Statement />
        <Research />
        {/* Both render nothing until their arrays in src/content/site.ts are filled. */}
        <Publications />
        <Teaching />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
