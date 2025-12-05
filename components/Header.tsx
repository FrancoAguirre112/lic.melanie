import React, { useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
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
        <a href="#home" className="max-w-[20%] cursor-pointer">
          <img src={logo} alt="Melanie Chaffittelli" />
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

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="z-[60] fixed inset-0 flex flex-col justify-end">
          <div
            className="absolute inset-0 bg-rose-800/20 backdrop-blur-sm animate-in duration-300 fade-in"
            onClick={() => setIsMobileMenuOpen(false)}
          />

          <div className="relative flex flex-col bg-[#FAF9F6] shadow-2xl p-8 pt-12 rounded-t-[2rem] w-full max-h-[85vh] overflow-hidden animate-slideUp">
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="top-6 right-6 absolute hover:bg-rose-100 p-2 rounded-full text-rose-500 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="flex flex-col items-center gap-8 mt-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="font-light text-rose-800 hover:text-rose-500 text-xl transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="bg-rose-400 shadow-sm mt-4 px-8 py-3 rounded-full w-full text-white text-lg text-center"
              >
                Contacto
              </a>
            </div>

            <div className="mt-12 text-center">
              <p className="text-rose-400 text-xs uppercase tracking-widest">
                Lic. Melanie Chaffittelli
              </p>
              <p className="mt-1 text-rose-300 text-xs">M.N. 12345</p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
