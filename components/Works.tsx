import React, { useRef } from "react";
import { Cloud, HeartCrack, Sunset, Activity, Sparkles } from "lucide-react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

// Register Plugin
gsap.registerPlugin(ScrollTrigger);

const approaches = [
  {
    id: "1",
    title: "Ansiedad",
    description:
      "Herramientas para gestionar la incertidumbre y el malestar excesivo.",
    icon: <Cloud className="w-8 h-8 text-rose-500" />,
  },
  {
    id: "2",
    title: "Angustia",
    description:
      "Un espacio para poner en palabras eso que oprime y no encuentra salida.",
    icon: <HeartCrack className="w-8 h-8 text-rose-500" />,
  },
  {
    id: "3",
    title: "Duelos",
    description: "Acompañamiento en procesos de pérdida, cambios y despedidas.",
    icon: <Sunset className="w-8 h-8 text-rose-500" />,
  },
  {
    id: "4",
    title: "Crisis Vitales",
    description:
      "Momentos de ruptura o cambio de etapa que requieren re-preguntarse.",
    icon: <Activity className="w-8 h-8 text-rose-500" />,
  },
  {
    id: "5",
    title: "Autoestima",
    description:
      "Fortalecer la relación con uno mismo y la confianza personal.",
    icon: <Sparkles className="w-8 h-8 text-rose-500" />,
  },
];

const Works: React.FC = () => {
  const container = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from(".work-card", {
        scrollTrigger: {
          trigger: container.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        stagger: 0.2,
      });
    },
    { scope: container }
  );

  return (
    <section ref={container} id="approaches" className="bg-bg-warm px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <h2 className="mb-2 font-bold text-rose-400 text-sm uppercase tracking-widest">
            Especialidades
          </h2>
          <h3 className="font-light text-rose-900 text-3xl md:text-4xl">
            Abordajes Clínicos
          </h3>
          <p className="mx-auto mt-4 max-w-xl font-light text-rose-600">
            Trabajamos desde una perspectiva integradora, adaptando el
            tratamiento a las necesidades singulares de cada consultante.
          </p>
        </div>

        <div className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {approaches.map((item) => (
            <div
              key={item.id}
              className="group bg-white shadow-sm hover:shadow-lg p-8 border border-transparent hover:border-rose-200 rounded-2xl work-card"
            >
              <div className="flex justify-center items-center bg-rose-50 group-hover:bg-rose-100 mb-6 rounded-xl w-14 h-14 transition-colors">
                {item.icon}
              </div>
              <h4 className="mb-3 font-medium text-rose-800 text-xl">
                {item.title}
              </h4>
              <p className="font-light text-rose-500 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}

          {/* Decorative 'More' Card */}
          <div className="flex flex-col justify-center items-center bg-rose-400 shadow-sm p-8 rounded-2xl text-white text-center work-card">
            <h4 className="mb-2 font-medium text-xl">¿Algo más?</h4>
            <p className="mb-6 font-light text-rose-100 text-sm">
              Cada proceso es único. Si no ves tu motivo de consulta aquí,
              escríbeme.
            </p>
            <a
              href="https://wa.me/5491112345678"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white hover:bg-rose-50 px-6 py-2 rounded-full font-semibold text-rose-500 text-sm transition-colors"
            >
              Consultar
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Works;
