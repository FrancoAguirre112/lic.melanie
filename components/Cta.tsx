import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const Cta: React.FC = () => {
  return (
    <section className="px-6 py-12">
      <div className="max-w-7xl mx-auto relative rounded-3xl overflow-hidden h-[500px] flex items-center justify-center bg-neutral-900 text-white">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 z-0 opacity-40 bg-neutral-800">
           <img src="" className="w-full h-full object-cover" alt="Imagen de fondo para llamada a la acción" />
           <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
        </div>

        <div className="relative z-10 text-center max-w-2xl px-6">
            <span className="text-xs uppercase tracking-widest mb-4 block text-neutral-400">(Colaboración & Asesoría)</span>
            <h2 className="text-4xl md:text-5xl font-semibold mb-6 leading-tight">
                ¿Tienes una visión para transformar el deporte?
            </h2>
            <p className="text-neutral-400 text-sm md:text-base mb-10 max-w-lg mx-auto">
                Discutamos cómo llevar tus proyectos al siguiente nivel con una estrategia global integral.
            </p>
            <a href="mailto:marina.mendez@gmail.com" className="inline-flex items-center gap-2 text-sm border-b border-white pb-1 hover:text-neutral-300 hover:border-neutral-300 transition-colors">
                Contactar Ahora <ArrowUpRight className="w-4 h-4" />
            </a>
        </div>
      </div>
    </section>
  );
};

export default Cta;