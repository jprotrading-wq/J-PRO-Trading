
import React from 'react';
import { useLanguage } from '../LanguageContext';
import { translations } from '../translations';

interface ServicesProps {
  setView: (view: 'home' | 'about' | 'services') => void;
}

const Services: React.FC<ServicesProps> = ({ setView }) => {
  const { language } = useLanguage();
  const t = translations.services;

  const services = [
    {
      title: t.s1_title[language],
      description: t.s1_desc[language],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    {
      title: t.s2_title[language],
      description: t.s2_desc[language],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      )
    },
    {
      title: t.s3_title[language],
      description: t.s3_desc[language],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
        </svg>
      )
    }
  ];

  return (
    <section id="services" className="py-24 bg-[#F8F9FA]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-[0.3em] text-[#002366] uppercase mb-4">{t.header[language]}</h2>
          <p className="text-3xl md:text-4xl font-bold text-[#333333] mb-4">{t.subtitle[language]}</p>
          <button 
            onClick={() => setView('services')}
            className="text-[#002366] font-bold text-sm hover:underline flex items-center gap-1 mx-auto"
          >
            Explore Detailed Solutions
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div 
              key={idx} 
              className="group bg-white p-10 border border-gray-100 hover:border-[#002366] transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                 <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 4L12 12L4 20" stroke="#002366" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              
              <div className="mb-8 text-[#002366] transform group-hover:scale-110 transition-transform duration-300 inline-block">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-[#002366]">{service.title}</h3>
              <p className="text-gray-500 font-light leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
