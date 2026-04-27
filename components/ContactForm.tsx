import React, { useState, useRef, useEffect, type FormEvent, type ChangeEvent } from "react";
import { MessageCircle } from "lucide-react";
import { pushToDataLayer } from "../utils/analytics";

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  location: string;
  reason: string;
}

const WHATSAPP_NUMBER = "5491124524091";
const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbwY5uuE4TDEZslFeUliZo9e5jsIi7udKo1TYkX8VoYEVSaWLkbimEV4Unsc4awtAO4N/exec";

const ContactForm: React.FC = () => {
  const utmData = useRef({ campaign: "", adset: "", ad: "" });

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    utmData.current = {
      campaign: params.get("utm_campaign") || params.get("campaign_name") || "",
      adset: params.get("utm_content") || params.get("adset_name") || "",
      ad: params.get("utm_term") || params.get("ad_name") || "",
    };
  }, []);

  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    location: "",
    reason: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStarted, setFormStarted] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFocus = () => {
    if (!formStarted) {
      pushToDataLayer("form_start", { form_name: "contact_form" });
      setFormStarted(true);
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (Object.values(formData).some((v) => v.trim() === "")) {
      alert("Por favor, completá todos los campos.");
      return;
    }

    setIsSubmitting(true);
    pushToDataLayer("form_submit", { form_name: "contact_form" });

    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, ...utmData.current }),
      });
    } catch (error) {
      console.error("Error sending to Google Sheets", error);
    } finally {
      setIsSubmitting(false);
    }

    const message = `
¡Hola Melanie! Quisiera coordinar una consulta:
----------------------------------
*Nombre y Apellido:* ${formData.fullName}
*Email:* ${formData.email}
*Teléfono:* ${formData.phone}
*Localidad / Barrio:* ${formData.location}
----------------------------------
*Motivo de la consulta:*
${formData.reason}
${utmData.current.ad ? `\n*Vengo del anuncio:* ${utmData.current.ad}` : ""}
    `.trim();

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.location.href = whatsappUrl;
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5 bg-white/70 shadow-sm backdrop-blur-sm mx-auto p-6 md:p-8 border border-rose-100 rounded-2xl w-full max-w-xl text-left"
    >
      <div>
        <label
          htmlFor="fullName"
          className="block mb-1 font-medium text-rose-800 text-sm"
        >
          Nombre y Apellido
        </label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          onFocus={handleFocus}
          className="bg-white p-3 border border-rose-200 focus:border-rose-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-200 w-full text-rose-900 placeholder:text-rose-300"
          placeholder="Tu nombre completo"
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="block mb-1 font-medium text-rose-800 text-sm"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          onFocus={handleFocus}
          className="bg-white p-3 border border-rose-200 focus:border-rose-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-200 w-full text-rose-900 placeholder:text-rose-300"
          placeholder="tu@correo.com"
        />
      </div>

      <div>
        <label
          htmlFor="phone"
          className="block mb-1 font-medium text-rose-800 text-sm"
        >
          Teléfono
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          onFocus={handleFocus}
          className="bg-white p-3 border border-rose-200 focus:border-rose-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-200 w-full text-rose-900 placeholder:text-rose-300"
          placeholder="Ej. 11 1234 5678"
        />
      </div>

      <div>
        <label
          htmlFor="location"
          className="block mb-1 font-medium text-rose-800 text-sm"
        >
          Localidad / Barrio
        </label>
        <input
          type="text"
          id="location"
          name="location"
          value={formData.location}
          onChange={handleChange}
          onFocus={handleFocus}
          className="bg-white p-3 border border-rose-200 focus:border-rose-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-200 w-full text-rose-900 placeholder:text-rose-300"
          placeholder="Ej. Villa Urquiza, Palermo, etc."
        />
      </div>

      <div>
        <label
          htmlFor="reason"
          className="block mb-1 font-medium text-rose-800 text-sm"
        >
          Motivo de la Consulta
        </label>
        <textarea
          id="reason"
          name="reason"
          rows={4}
          value={formData.reason}
          onChange={handleChange}
          onFocus={handleFocus}
          className="bg-white p-3 border border-rose-200 focus:border-rose-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-200 w-full text-rose-900 placeholder:text-rose-300 resize-none"
          placeholder="Contame brevemente qué te trae..."
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className={`flex justify-center items-center gap-2 bg-[#E7888D] hover:bg-[#CF6D73] shadow-md px-8 py-4 rounded-xl w-full font-medium text-white transition-all ${
          isSubmitting ? "opacity-70 cursor-wait" : "hover:cursor-pointer"
        }`}
      >
        <MessageCircle className="fill-current w-5 h-5" />
        {isSubmitting ? "Enviando..." : "Enviar por WhatsApp"}
      </button>
    </form>
  );
};

export default ContactForm;
