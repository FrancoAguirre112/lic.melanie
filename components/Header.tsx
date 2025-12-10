import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/public/assets/icons/logo.webp";

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "Inicio", href: "#home" },
    { label: "Sobre mí", href: "#about" },
    { label: "Abordajes", href: "#approaches" },
    { label: "Modalidad", href: "#modality" },
  ];

  return (
    <header className="top-0 right-0 left-0 z-50 fixed bg-white/90 backdrop-blur-md border-rose-100 border-b">
      <div className="flex justify-between items-center mx-auto px-6 max-w-6xl h-20">
        {/* Logo */}
        <a
          href="#home"
          className="max-w-[50dvw] md:max-w-[150px] cursor-pointer"
        >
          <img
            src={logo}
            alt="Melanie Chaffittelli"
            className="w-full h-auto"
          />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 font-medium text-rose-600 text-sm">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="after:-bottom-1 after:left-0 after:absolute relative after:bg-rose-400 after:w-0 hover:after:w-full after:h-px hover:text-rose-800 after:content-[''] transition-colors after:transition-all"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-rose-400 hover:bg-rose-500 shadow-sm hover:shadow-md px-5 py-2 rounded-full text-white text-sm transition-colors"
          >
            Contacto
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden z-50 relative p-2 text-rose-800"
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Menu Overlay - FIXED SHEET STYLE */}
      {isMobileMenuOpen && (
        <div className="z-[60] fixed inset-0 h-dvh">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-rose-900/20 backdrop-blur-sm animate-in duration-300 fade-in"
            onClick={() => setIsMobileMenuOpen(false)}
          />

          {/* Bottom Sheet Container */}
          <div className="bottom-0 z-[70] absolute flex flex-col bg-[#FAF9F6] shadow-[0_-10px_40px_rgba(0,0,0,0.1)] p-8 pt-12 rounded-t-[2.5rem] w-full max-h-[90vh] overflow-y-auto animate-slideUp">
            {/* Close Button */}
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="top-8 right-8 absolute hover:bg-rose-100 p-2 rounded-full text-rose-500 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Menu Content */}
            <div className="flex flex-col flex-1 mt-2">
              <nav className="flex flex-col items-center gap-6 mb-8">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="font-light text-rose-800 hover:text-rose-500 text-2xl transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
              </nav>

              {/* Contact CTA */}
              <div className="p-6 rounded-2xl text-center">
                <a
                  href="#contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="inline-block bg-rose-400 shadow-sm hover:shadow-md px-8 py-3 rounded-full w-full text-white text-lg transition-all"
                >
                  Contacto
                </a>

                {/* License Info */}
                <div className="mt-6 text-center">
                  <a
                    href="#home"
                    className="max-w-[120px] md:max-w-[150px] cursor-pointer"
                  >
                    <img
                      src={logo}
                      alt="Melanie Chaffittelli"
                      className="w-full h-auto"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
