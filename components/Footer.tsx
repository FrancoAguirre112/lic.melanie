import React from "react";
import { Mail, MapPin } from "lucide-react";
import ContactForm from "./ContactForm";

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-bg-warm pt-20 pb-10">
      <div className="mx-auto px-6 max-w-4xl text-center">
        <h2 className="mb-6 font-light text-rose-900 text-3xl md:text-4xl">
          Empecemos a trabajar juntos
        </h2>
        <p className="mx-auto mb-10 max-w-xl font-light text-rose-600 text-lg">
          El primer paso es el más importante. Completá el formulario y
          coordinemos una entrevista por WhatsApp.
        </p>

        <div className="mb-16">
          <ContactForm />
        </div>

        <div className="gap-8 grid grid-cols-1 md:grid-cols-2 pt-10 border-rose-200 border-t text-rose-500 text-sm">
          <div className="flex flex-col items-center gap-2">
            <MapPin className="w-5 h-5 text-rose-400" />
            <span>
              Villa Urquiza | Palermo, CABA
              <br />
              Argentina
            </span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Mail className="w-5 h-5 text-rose-400" />
            <span>lic.melaniech@gmail.com</span>
          </div>
        </div>

        <div className="mt-12 text-[10px] text-rose-400 uppercase tracking-widest">
          © {new Date().getFullYear()} Lic. Melanie Chaffittelli - Todos los
          derechos reservados
        </div>
      </div>
    </footer>
  );
};

export default Footer;
