import React from "react";
import { MapPin, Globe, CheckCircle2 } from "lucide-react";

const About: React.FC = () => {
  return (
    <section id="modality" className="bg-white px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <h2 className="mb-2 font-bold text-rose-400 text-sm uppercase tracking-widest">
            Atención
          </h2>
          <h3 className="font-light text-rose-900 text-3xl md:text-4xl">
            Modalidad de Consulta
          </h3>
        </div>

        <div className="gap-8 lg:gap-16 grid grid-cols-1 md:grid-cols-2">
          {/* Presencial Card */}
          <div className="group relative bg-bg-warm p-8 lg:p-12 border border-rose-100 hover:border-rose-300 rounded-[2rem] overflow-hidden transition-colors">
            <div className="top-0 right-0 absolute opacity-10 group-hover:opacity-20 p-8 transition-opacity">
              <MapPin className="w-32 h-32 text-rose-900" />
            </div>

            <div className="z-10 relative">
              <div className="flex justify-center items-center bg-rose-200 mb-6 rounded-full w-12 h-12 text-rose-700">
                <MapPin className="w-6 h-6" />
              </div>
              <h4 className="mb-4 font-medium text-rose-800 text-2xl">
                Atención Presencial
              </h4>
              <p className="mb-8 text-rose-600 leading-relaxed">
                Un espacio cuidado y confidencial diseñado para el encuentro
                terapéutico. Ideal para quienes valoran el cara a cara y el
                espacio físico compartido.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 w-5 h-5 text-rose-400 shrink-0" />
                  <span className="font-medium text-rose-700">
                    Consultorios en Villa Urquiza y Palermo
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 w-5 h-5 text-rose-400 shrink-0" />
                  <span className="text-rose-700">
                    Clima cálido y reservado
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 w-5 h-5 text-rose-400 shrink-0" />
                  <span className="text-rose-700">
                    Fácil acceso y transporte
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Online Card - Updated Background */}
          <div className="group relative bg-[#E7888D] p-8 lg:p-12 rounded-[2rem] overflow-hidden text-white">
            <div className="top-0 right-0 absolute opacity-5 group-hover:opacity-10 p-8 transition-opacity">
              <Globe className="w-32 h-32 text-white" />
            </div>

            <div className="z-10 relative">
              <div className="flex justify-center items-center bg-rose-700 mb-6 rounded-full w-12 h-12 text-white">
                <Globe className="w-6 h-6" />
              </div>
              <h4 className="mb-4 font-medium text-white text-2xl">
                Atención Online
              </h4>
              <p className="mb-8 text-rose-50 leading-relaxed">
                Terapia estés donde estés. Una modalidad flexible que mantiene
                la calidad del vínculo terapéutico sin barreras geográficas.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 w-5 h-5 text-rose-200 shrink-0" />
                  <span className="font-medium text-rose-50">
                    Atención a todo el mundo (Habla Hispana)
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 w-5 h-5 text-rose-200 shrink-0" />
                  <span className="text-rose-50">
                    Videollamada (Meet/Zoom/WhatsApp)
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 w-5 h-5 text-rose-200 shrink-0" />
                  <span className="text-rose-50">Flexibilidad horaria</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
