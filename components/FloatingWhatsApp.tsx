import React from "react";
import { MessageCircle } from "lucide-react";
import { pushToDataLayer } from "../utils/analytics";

const FloatingWhatsApp: React.FC = () => {
  // Event handler for tracking the floating button
  const handleWppClick = () => {
    pushToDataLayer("wpp", {
      button_location: "floating",
    });
  };

  return (
    <a
      href="https://wa.me/5491112345678"
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleWppClick}
      className="group right-6 bottom-6 z-40 fixed flex justify-center items-center bg-[#E7888D] hover:bg-[#CF6D73] shadow-lg hover:shadow-xl p-4 rounded-full text-white hover:scale-110 transition-all duration-300"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="fill-current w-7 h-7" />
      <span className="right-full absolute bg-white opacity-0 group-hover:opacity-100 shadow-md mr-4 px-3 py-1 rounded-lg font-medium text-gray-800 text-sm whitespace-nowrap transition-opacity pointer-events-none">
        ¡Hablemos!
      </span>
    </a>
  );
};

export default FloatingWhatsApp;
