import React, { useRef, useState } from "react";
import { Milestone } from "../types";
import {
  Building2,
  GraduationCap,
  Briefcase,
  Users,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// --- DATA: STRICTLY PROFESSIONAL LISTS ---
interface ExtendedMilestone extends Omit<Milestone, "description"> {
  description: string | string[];
}

const milestones: ExtendedMilestone[] = [
  {
    id: "1",
    title: "Inicios y Voluntariado",
    period: "Fundación",
    description:
      "Inicié mi recorrido profesional como voluntaria en el Hospital Italiano de Buenos Aires, acompañando a pacientes pediátricos en internación, y en AEDIN, trabajando con niños y niñas con trastornos neurológicos.",
    icon: <Building2 className="w-5 h-5 text-white" />,
  },
  {
    id: "2",
    title: "Educación e Inclusión",
    period: "Experiencia en Campo",
    description:
      "Me desempeñé como maestra de apoyo a la inclusión en distintos colegios, acompañando procesos de aprendizaje y adaptación. Un recorrido que fortaleció mi mirada empática y flexible.",
    icon: <Users className="w-5 h-5 text-white" />,
  },
  {
    id: "3",
    title: "Formación de Posgrado",
    period: "Especialización Clínica",
    // Converted to Array for line breaks
    description: [
      "Posgrado en Clínica de Adolescentes y Adultos",
      "Especialización en Trastornos de Ansiedad",
      "Formación en el Abordaje de Adicciones y Conductas de Riesgo",
    ],
    icon: <GraduationCap className="w-5 h-5 text-white" />,
  },
  {
    id: "4",
    title: "Actividad Actual",
    period: "Práctica Profesional",
    // Converted to Array for line breaks
    description: [
      "Psicóloga Clínica en consultorio privado (presencial y virtual).",
      "Integrante del staff profesional en el Equipo Terapéutico Villa Urquiza.",
    ],
    icon: <Briefcase className="w-5 h-5 text-white" />,
  },
];

const Experience: React.FC = () => {
  const container = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  const [isExpanded, setIsExpanded] = useState(false);

  useGSAP(
    () => {
      // Animate Text Section
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

      // Animate Timeline
      const boxes = gsap.utils.toArray(".milestone-card");
      gsap.from(boxes, {
        scrollTrigger: {
          trigger: timelineRef.current,
          start: "top 75%",
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
      {/* --- PART 1: THE STORY (VERBATIM TEXT) --- */}
      <div className="bg-rose-50/50 px-6 py-24 transition-all duration-500 ease-in-out">
        <div ref={textRef} className="mx-auto max-w-3xl">
          <div className="mb-12 text-center">
            <h2 className="mb-2 font-bold text-rose-400 text-sm uppercase tracking-widest">
              Mi Recorrido
            </h2>
            <h3 className="font-light text-rose-900 text-3xl md:text-4xl">
              Más allá del consultorio
            </h3>
            <div className="bg-rose-200 mx-auto mt-6 rounded-full w-16 h-1"></div>
          </div>

          <div className="space-y-6 font-light text-gray-600 text-lg leading-relaxed">
            {/* --- VISIBLE PARAGRAPH (THE HOOK) --- */}
            <p>
              <span className="font-script font-bold text-rose-900">
                ¡Hola! Soy Melanie.
              </span>{" "}
              Lic. En Psicología, especializada en Clínica de Adultos y
              Adolescentes.
              <br /> <br />
              Mi vocación surgió mucho antes de recibirme. Inicié mi recorrido
              profesional como voluntaria en el Hospital Italiano de Buenos
              Aires, acompañando a pacientes pediátricos en internación, y en
              AEDIN, trabajando con niños y niñas con trastornos neurológicos.
              <br />
              Ese contacto con el mundo de la discapacidad despertó en mí un
              profundo interés por seguir formándome y adquirir más herramientas
              para poder ayudar. Lo que comenzó como una experiencia de
              acompañamiento se transformó en un aprendizaje enorme:{" "}
              <span className="font-medium text-rose-800 italic">
                quienes creí que iba a enseñar fueron, en realidad, quienes más
                me enseñaron a mí.
              </span>
            </p>
            <p></p>

            {/* --- HIDDEN PARAGRAPHS (THE FULL STORY) --- */}
            <div
              className={`overflow-hidden transition-all duration-1000 ease-in-out ${
                isExpanded ? "max-h-[3000px] opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="space-y-6 pt-2">
                <p>
                  Esa experiencia en AEDIN me atravesó profundamente y me
                  impulsó a continuar mi camino trabajando como maestra de apoyo
                  a la inclusión en distintos colegios, acompañando a niños y
                  niñas en sus procesos de aprendizaje y adaptación. Ese
                  recorrido me permitió conocer de cerca las diferentes maneras
                  de habitar el mundo y fortalecer mi mirada empática, paciente
                  y flexible frente a cada historia.
                </p>

                <p>
                  Con el tiempo, el trabajo diario con los niños me fue
                  conectando cada vez más con las historias, las emociones y las
                  preguntas de los adultos que los acompañaban —padres, madres y
                  docentes—. Fui comprendiendo cuánto influyen sus propias
                  historias y emociones en los vínculos con sus hijos, y cómo
                  muchas de las dificultades que emergen en la infancia están
                  profundamente ligadas a experiencias no elaboradas, mandatos,
                  miedos y heridas de los adultos a su alrededor.
                </p>

                {/* Highlighted Insight */}
                <div className="pl-6 border-rose-300 border-l-4 text-rose-900 italic">
                  "Ese insight fue un punto de inflexión: comprendí que para
                  acompañar verdaderamente a un niño también era indispensable
                  poder acompañar a los adultos en sus propios procesos."
                </div>

                <p>
                  Fue entonces cuando sentí la necesidad de ampliar mi campo de
                  trabajo y dar lugar a un nuevo desafío: el acompañamiento
                  terapéutico de jóvenes y adultos. Inicié un largo camino de
                  formación continua, participando de diversos cursos y
                  capacitaciones orientados al trabajo clínico. Con el tiempo,
                  fui consolidando mi práctica y conocimientos, culminando el
                  Posgrado en Clínica de Adolescentes y Adultos, la Formación en
                  el Abordaje de Adicciones y Conductas de Riesgo, y la
                  Especialización en Trastornos de Ansiedad.
                </p>

                <p>
                  Actualmente me desempeño como Psicóloga Clínica, con un{" "}
                  <strong className="font-medium text-rose-900">
                    enfoque psicoanalítico flexible e integrativo
                  </strong>
                  , adaptado a las necesidades y singularidad de cada persona.
                </p>

                <p>
                  Concibo el espacio terapéutico como un lugar de escucha,
                  reflexión y transformación, donde acompañar con empatía y
                  compromiso los procesos subjetivos, respetando los tiempos
                  propios de cada recorrido.
                </p>

                <p>
                  Actualmente atiendo tanto en modalidad presencial como
                  virtual. Además, me desempeño como Psicóloga Clínica en{" "}
                  <strong className="font-medium text-rose-900">
                    Equipo Terapéutico Villa Urquiza
                  </strong>
                  , una institución orientada al trabajo interdisciplinario en
                  salud mental.
                </p>
              </div>
            </div>

            {/* BUTTON */}
            <div className="flex justify-center mt-8">
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="flex items-center gap-2 hover:bg-rose-100 px-6 py-2 rounded-full font-medium text-rose-500 hover:text-rose-700 text-sm uppercase tracking-widest transition-colors cursor-pointer"
              >
                {isExpanded ? "Leer menos" : "Leer historia completa"}
                {isExpanded ? (
                  <ChevronUp className="w-4 h-4" />
                ) : (
                  <ChevronDown className="w-4 h-4" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* --- PART 2: THE TIMELINE (STRUCTURED DATA) --- */}
      <div ref={timelineRef} className="bg-white px-6 py-24">
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
            <div className="top-0 bottom-0 left-8 md:left-1/2 absolute bg-rose-100 w-px -translate-x-1/2 md:translate-x-0" />

            <div className="flex flex-col gap-12">
              {milestones.map((item, index) => (
                <div
                  key={item.id}
                  className={`milestone-card relative flex flex-col md:flex-row items-start ${
                    index % 2 === 0 ? "md:flex-row-reverse" : ""
                  } gap-8 opacity-1`}
                >
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

                      {/* RENDERING LIST OR STRING */}
                      <div className="font-light text-rose-600 text-sm leading-relaxed">
                        {Array.isArray(item.description) ? (
                          <ul
                            className={`flex flex-col gap-1 mt-2 ${
                              index % 2 === 0
                                ? "md:items-start"
                                : "md:items-end"
                            }`}
                          >
                            {item.description.map((line, i) => (
                              <li key={i} className="block">
                                {line}
                              </li>
                            ))}
                          </ul>
                        ) : (
                          <p>{item.description}</p>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="left-8 md:left-1/2 z-10 absolute flex justify-center items-center bg-rose-400 shadow-sm rounded-full ring-4 ring-white w-10 h-10 -translate-x-1/2">
                    {item.icon}
                  </div>

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
