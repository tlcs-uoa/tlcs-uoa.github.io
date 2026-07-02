import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/sections/About";
import HowItWorks from "@/components/sections/HowItWorks";
import Principles from "@/components/sections/Principles";
import Process from "@/components/sections/Process";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="main">
        <Hero />
        <About />
        <HowItWorks />
        <Principles />
        <Process />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
