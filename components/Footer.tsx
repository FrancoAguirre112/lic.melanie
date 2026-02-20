import React from "react";
import { MessageCircle, Mail, MapPin } from "lucide-react";
import { pushToDataLayer } from "../utils/analytics";

const Footer: React.FC = () => {
  // Event handlers for tracking
  const handleWppClick = () => {
    pushToDataLayer("wpp", {
      button_location: "footer",
    });
  };

  const handleEmailClick = () => {
    pushToDataLayer("email", {
      button_location: "footer",
    });
  };

  // Pre-filled Email Configuration
  const emailAddress = "lic.melaniech@gmail.com";
  const emailSubject = "Agendar Consulta";
  const emailBody =
    "Hola! Me pongo en contacto a fin de coordinar una consulta. Puedo tener más información sobre los servicios y horarios de turnos disponibles?";

  // Safely encode the subject and body for the URL
  const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

  return (
    <footer id="contact" className="bg-bg-warm pt-20 pb-10">
      <div className="mx-auto px-6 max-w-4xl text-center">
        <h2 className="mb-6 font-light text-rose-900 text-3xl md:text-4xl">
          Empecemos a trabajar juntos
        </h2>
        <p className="mx-auto mb-10 max-w-xl font-light text-rose-600 text-lg">
          El primer paso es el más importante. Escribime para coordinar una
          entrevista y conocer cómo puedo acompañarte.
        </p>

        <div className="flex md:flex-row flex-col justify-center items-center gap-6 mb-16">
          <a
            href="https://wa.me/5491112345678"
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleWppClick}
            className="flex justify-center items-center gap-2 bg-[#E7888D] hover:bg-[#CF6D73] shadow-md px-8 py-4 rounded-xl w-full md:w-auto font-medium text-white transition-all"
          >
            <MessageCircle className="fill-current w-5 h-5" />
            Enviar WhatsApp
          </a>
          <a
            href={mailtoLink}
            onClick={handleEmailClick}
            className="flex justify-center items-center gap-2 bg-white hover:bg-rose-100 px-8 py-4 border border-rose-200 rounded-xl w-full md:w-auto font-medium text-rose-700 transition-all"
          >
            <Mail className="w-5 h-5" />
            lic.melaniech@gmail.com
          </a>
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
