import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Works from "./components/Works";
import About from "./components/About"; 
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

function App() {
  return (
    <div className="bg-bg-warm selection:bg-rose-200 min-h-screen selection:text-rose-900">
      <Header />
      <main>
        <Hero />
        <Experience /> {/* Sobre Mí / Timeline */}
        <Works /> {/* Abordajes / Cards */}
        <About /> {/* Modalidad / Online vs Presencial */}
        <FloatingWhatsApp />
      </main>
      <Footer />
    </div>
  );
}

export default App;
