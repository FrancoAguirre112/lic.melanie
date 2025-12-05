import React, { useRef } from "react";
import { Milestone } from "../types";
import {
  Building2,
  GraduationCap,
  Briefcase,
  Users,
  Quote,
} from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// STRICTLY PROFESSIONAL DATA
const milestones: Milestone[] = [
  {
    id: "1",
    title: "Inicios Institucionales",
    period: "Voluntariado y Práctica",
    description:
      "Práctica profesional en el Hospital Italiano de Buenos Aires (Internación pediátrica) y en AEDIN (Rehabilitación de trastornos neurológicos).",
    icon: <Building2 className="w-5 h-5 text-white" />,
  },
  {
    id: "2",
    title: "Ámbito Educativo",
    period: "Inclusión Escolar",
    description:
      "Desempeño como Maestra de Apoyo a la Inclusión en instituciones educativas. Trabajo interdisciplinario con docentes y equipos de orientación escolar.",
    icon: <Users className="w-5 h-5 text-white" />,
  },
  {
    id: "3",
    title: "Formación de Posgrado",
    period: "Especialización Clínica",
    description:
      "Posgrado en Clínica de Adolescentes y Adultos. Especialización en Trastornos de Ansiedad. Formación en Abordaje de Adicciones y Conductas de Riesgo.",
    icon: <GraduationCap className="w-5 h-5 text-white" />,
  },
  {
    id: "4",
    title: "Actividad Actual",
    period: "Práctica Clínica",
    description:
      "Psicóloga Clínica en consultorio privado (presencial y virtual). Integrante del staff profesional en el Equipo Terapéutico Villa Urquiza.",
    icon: <Briefcase className="w-5 h-5 text-white" />,
  },
];

const Experience: React.FC = () => {
  const container = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // 1. Text Section Animation (Fade Up)
      gsap.from(textRef.current, {
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 80%",
        },
        y: 30,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
      });

      // 2. Timeline Animation (Staggered Cards)
      const boxes = gsap.utils.toArray(".milestone-card");
      gsap.from(boxes, {
        scrollTrigger: {
          trigger: container.current,
          start: "top 70%",
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
    <section ref={container} id="about" className="bg-white">
      {/* SECTION A: THE NARRATIVE (The "Why") */}
      <div className="bg-rose-50/50 px-6 py-24">
        <div ref={textRef} className="mx-auto max-w-3xl">
          <div className="mb-12 text-center">
            <h2 className="mb-2 font-bold text-rose-400 text-sm uppercase tracking-widest">
              Mi Historia
            </h2>
            <h3 className="font-light text-rose-900 text-3xl md:text-4xl">
              Más allá del consultorio
            </h3>
            <div className="bg-rose-200 mx-auto mt-6 rounded-full w-16 h-1"></div>
          </div>

          <div className="space-y-6 font-light text-gray-600 text-lg leading-relaxed">
            <p>
              <span className="font-script font-medium text-rose-800">
                Hola, soy Melanie.
              </span>{" "}
              Mi vocación surgió mucho antes de recibirme. Inicié mi camino
              acompañando a niños con trastornos neurológicos. Lo que comenzó
              como una experiencia de dar, se transformó en un aprendizaje
              enorme:{" "}
              <span className="italic">
                quienes creí que iba a enseñar fueron, en realidad, quienes más
                me enseñaron a mí.
              </span>
            </p>

            {/* Pull Quote to break up text without an image */}
            <div className="relative bg-white shadow-sm my-8 p-6 pl-8 border-rose-300 border-l-4 italic">
              <Quote className="top-4 left-2 absolute opacity-20 w-8 h-8 text-rose-400" />
              <p className="text-rose-800 text-xl md:text-2xl">
                "Comprendí cuánto influyen las historias y emociones de los
                adultos en los vínculos con sus hijos. Ese insight fue mi punto
                de inflexión."
              </p>
            </div>

            <p>
              Esta experiencia me conectó profundamente con las preguntas de los
              padres y docentes. Entendí que para acompañar verdaderamente a un
              niño, era indispensable alojar también a los adultos en sus
              propios procesos.
            </p>

            <p>
              Fue entonces cuando sentí la necesidad de ampliar mi campo y
              formarme en la clínica de jóvenes y adultos, consolidando un{" "}
              <strong className="font-medium text-rose-800">
                enfoque psicoanalítico flexible e integrativo
              </strong>
              , adaptado a la singularidad de cada historia.
            </p>
          </div>
        </div>
      </div>

      {/* SECTION B: THE TIMELINE (The "Evidence") */}
      <div className="px-6 py-24">
        <div className="mx-auto max-w-4xl">
          <div className="mb-16 text-center">
            <h2 className="mb-2 font-bold text-rose-400 text-sm uppercase tracking-widest">
              Trayectoria Profesional
            </h2>
            <h3 className="font-light text-rose-900 text-3xl md:text-4xl">
              Formación Académica y Clínica
            </h3>
          </div>

          <div className="relative">
            {/* Vertical Line */}
            <div className="top-0 bottom-0 left-8 md:left-1/2 absolute bg-rose-100 w-px -translate-x-1/2 md:translate-x-0" />

            <div className="flex flex-col gap-12">
              {milestones.map((item, index) => (
                <div
                  key={item.id}
                  className={`milestone-card relative flex flex-col md:flex-row items-start ${
                    index % 2 === 0 ? "md:flex-row-reverse" : ""
                  } gap-8 opacity-1`}
                >
                  {/* Content Box */}
                  <div className="group flex-1 ml-16 md:ml-0 md:text-right">
                    <div
                      className={`p-6 rounded-2xl bg-bg-warm border border-rose-50 hover:border-rose-200 transition-all duration-300 hover:shadow-lg ${
                        index % 2 === 0 ? "md:text-left" : "md:text-right"
                      }`}
                    >
                      <span className="block mb-2 font-bold text-rose-400 text-xs uppercase tracking-wider">
                        {item.period}
                      </span>
                      <h4 className="mb-3 font-medium text-rose-800 text-xl">
                        {item.title}
                      </h4>
                      <p className="font-light text-rose-600 text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Icon Bubble */}
                  <div className="left-8 md:left-1/2 z-10 absolute flex justify-center items-center bg-rose-400 shadow-sm rounded-full ring-4 ring-white w-10 h-10 -translate-x-1/2">
                    {item.icon}
                  </div>

                  {/* Spacer for layout balance */}
                  <div className="hidden md:block flex-1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
