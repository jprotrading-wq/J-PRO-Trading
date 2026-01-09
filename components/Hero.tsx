
import React from 'react';
import { useLanguage } from '../LanguageContext';
import { translations } from '../translations';

const Hero: React.FC = () => {
  const { language } = useLanguage();
  const t = translations.hero;

  return (
    <section id="home" className="relative h-screen min-h-[600px] flex items-center overflow-hidden bg-[#002366]">
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1570710891163-6d3b5c47248b?auto=format&fit=crop&q=80&w=2070" 
          alt="Global Air Cargo Logistics Aircraft" 
          className="w-full h-full object-cover opacity-60"
          loading="eager"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-[#002366] via-[#002366]/60 to-transparent"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 w-full">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
            {t.title[language]}
          </h1>
          <p className="text-lg md:text-xl text-blue-50/90 font-light leading-relaxed">
            {t.subtitle[language]}
          </p>
        </div>
      </div>
      <div className="absolute bottom-10 right-10 opacity-20 hidden lg:block">
        <svg width="200" height="200" viewBox="0 0 100 100" fill="none" stroke="white" strokeWidth="1">
          <path d="M0 0L50 50L0 100" />
          <path d="M20 0L70 50L20 100" />
          <path d="M40 0L90 50L40 100" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
