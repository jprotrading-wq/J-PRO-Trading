
import React from 'react';
import { useLanguage } from '../LanguageContext';
import { translations } from '../translations';

const NewsPage: React.FC = () => {
  const { language } = useLanguage();
  const t = translations.news.page;

  return (
    <div className="pt-20">
      {/* 1. Header with Impactful Image */}
      <div className="relative w-full h-[400px] md:h-[500px] overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=2070" 
          alt="Partnership and Success" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#002366] via-[#002366]/40 to-transparent"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h1 className="text-white text-4xl md:text-5xl font-bold mb-4 animate-in fade-in duration-700">
              {t.title[language]}
            </h1>
            <p className="text-white/80 text-lg md:text-xl font-light">
              {t.desc[language]}
            </p>
          </div>
        </div>
      </div>

      {/* 2. Sequential Offers Section */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 md:px-8">
          <div className="space-y-32">
            {t.offers.map((offer, index) => (
              <div 
                key={index} 
                className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 md:gap-20 items-center group`}
              >
                {/* Image Part */}
                <div className="w-full md:w-1/2">
                  <div className="relative overflow-hidden rounded-2xl shadow-xl aspect-[4/3]">
                    <img 
                      src={offer.image} 
                      alt={offer.title[language]} 
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                    <div className="absolute top-0 left-0 w-full h-full bg-[#002366]/10 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                </div>

                {/* Text Part */}
                <div className="w-full md:w-1/2 space-y-6">
                  <div className="flex items-center gap-4">
                    <span className="w-10 h-10 rounded-full bg-[#002366] text-white flex items-center justify-center font-bold text-lg">
                      {index + 1}
                    </span>
                    <div className="h-px bg-gray-100 flex-grow"></div>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight group-hover:text-[#002366] transition-colors">
                    {offer.title[language]}
                  </h2>
                  <p className="text-lg text-gray-500 font-light leading-relaxed">
                    {offer.desc[language]}
                  </p>
                  <div className="pt-4">
                    <button 
                      onClick={() => {
                        const el = document.getElementById('contact');
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="inline-flex items-center gap-2 text-[#002366] font-bold hover:underline"
                    >
                      Inquire About This Offer
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Call to Action Footer */}
      <section className="py-20 bg-[#F8F9FA] border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-block p-4 bg-white rounded-2xl shadow-sm mb-8">
            <svg className="w-12 h-12 text-[#002366]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <h3 className="text-3xl font-bold text-[#002366] mb-6">Let's Build Your Legacy Together.</h3>
          <p className="text-gray-500 font-light mb-10 max-w-2xl mx-auto">
            Our strategic offers are tailored to meet the dynamic needs of global commerce. Contact us today to discuss how we can customize a proposal for your specific market requirements.
          </p>
          <button 
            onClick={() => {
              const el = document.getElementById('contact');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-10 py-4 bg-[#002366] text-white font-bold rounded shadow-lg hover:shadow-xl transition-all"
          >
            Request Custom Proposal
          </button>
        </div>
      </section>
    </div>
  );
};

export default NewsPage;
