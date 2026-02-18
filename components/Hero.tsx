import React, { useRef } from "react";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import avatar from "@/public/assets/images/avatar.webp";

const Hero: React.FC = () => {
  const container = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      // Animate text elements stagger
      gsap.from(".hero-element", {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        stagger: 0.2,
        delay: 0.2,
      });

      // Animate image separately
      gsap.from(".hero-image", {
        x: 50,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        delay: 0.6,
      });
    },
    { scope: container }
  );

  return (
    <section
      ref={container}
      id="home"
      className="relative flex flex-col justify-center bg-bg-warm px-6 pt-32 pb-20 min-h-[90vh] overflow-hidden"
    >
      {/* Abstract Background Shapes */}
      <div className="top-0 right-0 absolute bg-[#F7E2E1] blur-3xl rounded-full w-[600px] h-[600px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="bottom-0 left-0 absolute bg-[#EAECF2] blur-3xl rounded-full w-[400px] h-[400px] -translate-x-1/4 translate-y-1/3 pointer-events-none" />

      <div className="z-10 relative items-center gap-12 grid grid-cols-1 lg:grid-cols-12 mx-auto w-full max-w-6xl">
        {/* Text Content */}
        <div className="flex flex-col gap-6 order-2 lg:order-1 lg:col-span-7 lg:text-left text-center">
          <div className="inline-block bg-rose-100 mx-auto lg:mx-0 px-4 py-1.5 rounded-full w-fit font-semibold text-rose-600 text-xs uppercase tracking-widest hero-element">
            Espacio Terapéutico
          </div>

          <h1 className="font-script font-light text-rose-800 text-5xl md:text-6xl lg:text-7xl leading-[1.1] tracking-tight hero-element">
            Lic. Melanie <br className="hidden lg:block" />
            <span className="font-medium text-rose-500">Chaffittelli</span>
          </h1>

          <p className="mx-auto lg:mx-0 max-w-2xl font-light text-rose-600 text-lg md:text-xl leading-relaxed hero-element">
            Acompaño a Adolescentes y Adultos en procesos atravesados por
            ansiedad, angustia, duelos y crisis personales, ofreciendo un
            espacio de escucha, sostén y reflexión para abrir oportunidades de
            cambio.
          </p>

          <div className="flex sm:flex-row flex-col justify-center lg:justify-start gap-4 mt-4 hero-element">
            <a
              href="https://wa.me/5491112345678"
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center items-center gap-2 bg-rose-400 hover:bg-rose-500 shadow-lg shadow-rose-200/50 hover:shadow-xl px-8 py-4 rounded-full font-medium text-white transition-all hover:-translate-y-1"
            >
              Solicitar Turno <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#modality"
              className="flex justify-center items-center bg-white hover:bg-rose-50 px-8 py-4 border border-rose-200 rounded-full font-medium text-rose-600 transition-colors"
            >
              Ver Modalidad
            </a>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative flex justify-center lg:justify-end order-1 lg:order-2 lg:col-span-5">
          <div className="relative w-72 md:w-96 lg:w-[450px] h-72 md:h-96 lg:h-[550px] hero-image">
            {/* Decorative Frame */}
            <div className="absolute inset-0 border-[1px] border-rose-200 rounded-[2rem] translate-x-4 translate-y-4" />

            {/* Image Container */}
            <div className="absolute inset-0 bg-rose-100 shadow-2xl rounded-[2rem] overflow-hidden">
              <img
                src={avatar}
                alt="Lic. Melanie Chaffittelli"
                className="opacity-90 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
