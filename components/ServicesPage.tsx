
import React from 'react';
import { useLanguage } from '../LanguageContext';
import { translations } from '../translations';

const ServicesPage: React.FC = () => {
  const { language } = useLanguage();
  const t = translations.services;

  return (
    <div className="pt-20">
      {/* 1. Impactful Header Image */}
      <div className="relative w-full h-[450px] md:h-[600px] overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=2070" 
          alt="Global Trade and Logistics" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#002366] via-[#002366]/60 to-transparent"></div>
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 md:px-8 w-full">
            <div className="max-w-3xl">
              <h1 className="text-white text-4xl md:text-6xl font-bold mb-6 animate-in fade-in slide-in-from-left duration-700">
                {t.pageHeader[language]}
              </h1>
              <p className="text-xl md:text-2xl text-white/90 font-light leading-relaxed mb-8">
                {t.pageSubtitle[language]}
              </p>
              <div className="w-32 h-2 bg-white rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Business Sectors Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          
          {/* Export Section */}
          <div className="mb-32 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 space-y-8">
              <div className="inline-block px-4 py-1.5 bg-[#002366] text-white text-[10px] font-bold uppercase tracking-widest rounded">
                Export Excellence
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                {t.exportSection.title[language]}
              </h2>
              <p className="text-xl font-medium text-[#002366]">
                {t.exportSection.subtitle[language]}
              </p>
              <div className="text-lg text-gray-600 font-light leading-relaxed border-l-4 border-[#002366]/20 pl-8">
                {t.exportSection.desc[language]}
              </div>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                {['Market Entry Strategy', 'Brand Localization', 'Distribution Setup', 'Global Logistics Management'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-gray-500 font-medium">
                    <svg className="w-5 h-5 text-[#002366]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="order-1 lg:order-2 rounded-2xl overflow-hidden shadow-2xl h-[400px] lg:h-[500px]">
              <img 
                src="https://images.unsplash.com/photo-1494412651409-8963ce7935a7?auto=format&fit=crop&q=80&w=2070" 
                alt="Export Logistics" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>

          {/* Import Section - Fixed Image URL */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="rounded-2xl overflow-hidden shadow-2xl h-[400px] lg:h-[500px]">
              <img 
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=2070" 
                alt="Global Supply Chain and Import" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="space-y-8">
              <div className="inline-block px-4 py-1.5 bg-[#002366] text-white text-[10px] font-bold uppercase tracking-widest rounded">
                Import Solutions
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                {t.importSection.title[language]}
              </h2>
              <p className="text-xl font-medium text-[#002366]">
                {t.importSection.subtitle[language]}
              </p>
              <div className="text-lg text-gray-600 font-light leading-relaxed border-l-4 border-[#002366]/20 pl-8">
                {t.importSection.desc[language]}
              </div>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                {['Global Sourcing Network', 'Regulatory Compliance', 'Customs Clearance', 'Warehouse & Fulfillment'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-gray-500 font-medium">
                    <svg className="w-5 h-5 text-[#002366]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* 3. Call to Action */}
      <section className="py-20 bg-[#F8F9FA]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-[#002366] mb-8">Ready to Expand Your Global Footprint?</h3>
          <p className="text-gray-500 font-light mb-10 leading-relaxed">
            Whether you are looking to export your local brand or import world-class products, J PRO Trading provides the expertise and network you need.
          </p>
          <button 
            onClick={() => {
              const el = document.getElementById('contact');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 px-10 py-4 bg-[#002366] text-white font-bold rounded shadow-lg hover:bg-[#001a4d] transition-all transform hover:-translate-y-1"
          >
            Consult With Our Experts
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </button>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
