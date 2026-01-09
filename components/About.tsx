
import React from 'react';
import { useLanguage } from '../LanguageContext';
import { translations } from '../translations';

interface AboutProps {
  setView: (view: 'home' | 'about') => void;
}

const About: React.FC<AboutProps> = ({ setView }) => {
  const { language } = useLanguage();
  const t = translations.about;

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative group">
            <div className="absolute -inset-4 bg-[#002366]/5 rounded-xl transition-transform group-hover:scale-105 duration-500"></div>
            
            <div className="relative z-10 w-full h-[540px] bg-gray-200 rounded overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=2070" 
                alt="Definitive Business Handshake for Trust" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
            </div>
            
            <div className="absolute -bottom-6 -right-6 w-32 h-32 chevron-pattern z-0 opacity-20"></div>
          </div>
          
          <div className="flex flex-col">
            <div className="w-16 h-1 bg-[#002366] mb-8"></div>
            <h2 className="text-4xl font-bold text-[#002366] mb-8 leading-tight">
              {t.title[language]}
            </h2>
            <div className="space-y-6 text-lg text-gray-600 font-light leading-relaxed">
              <p>{t.p1[language]}</p>
              <p className="whitespace-pre-line">{t.p2[language]}</p>
            </div>
            
            <div className="mt-10">
              <button 
                onClick={() => setView('about')}
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#002366] text-white font-bold rounded hover:bg-[#001a4d] transition-all transform hover:translate-x-1"
              >
                Learn More About Us
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-8 border-t pt-10">
              <div>
                <div className="text-3xl font-bold text-[#002366] mb-1">100+</div>
                <div className="text-sm text-gray-400 uppercase tracking-widest font-semibold">{t.brands[language]}</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#002366] mb-1">15+</div>
                <div className="text-sm text-gray-400 uppercase tracking-widest font-semibold">{t.countries[language]}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
