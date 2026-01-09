
import React from 'react';
import { useLanguage } from '../LanguageContext';
import { translations } from '../translations';

const AboutPage: React.FC = () => {
  const { language } = useLanguage();
  const t = translations.about;

  return (
    <div className="pt-20">
      {/* 1. Large Meeting Image Header */}
      <div className="relative w-full h-[500px] md:h-[650px] overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=2070" 
          alt="Professional Team Meeting" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#002366] via-[#002366]/30 to-transparent"></div>
        <div className="absolute bottom-12 left-0 w-full">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <h1 className="text-white text-4xl md:text-6xl font-bold mb-6 animate-in slide-in-from-bottom duration-700">
              Our Visionary Journey
            </h1>
            <div className="w-24 h-2 bg-white rounded-full"></div>
          </div>
        </div>
      </div>

      {/* 2. Content Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <div className="space-y-12">
            <div>
              <span className="text-[#002366] font-bold tracking-[0.3em] uppercase text-sm mb-4 block">
                {t.tagline[language]}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 leading-tight">
                {t.title[language]}
              </h2>
              <div className="text-xl text-gray-700 font-light leading-relaxed space-y-8">
                <p className="first-letter:text-5xl first-letter:font-bold first-letter:text-[#002366] first-letter:mr-3 first-letter:float-left">
                  {t.p1[language]}
                </p>
                <div className="bg-[#F8F9FA] p-8 rounded-2xl border-l-8 border-[#002366] italic text-gray-600">
                   "{t.quote[language]}"
                </div>
                <p>
                  {t.p2[language]}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12">
              <div className="text-center p-8 bg-[#002366] text-white rounded-2xl">
                <div className="text-4xl font-bold mb-2">2018</div>
                <div className="text-xs uppercase tracking-widest opacity-60">Founded</div>
              </div>
              <div className="text-center p-8 bg-[#002366] text-white rounded-2xl">
                <div className="text-4xl font-bold mb-2">15+</div>
                <div className="text-xs uppercase tracking-widest opacity-60">Global Hubs</div>
              </div>
              <div className="text-center p-8 bg-[#002366] text-white rounded-2xl">
                <div className="text-4xl font-bold mb-2">Top 1%</div>
                <div className="text-xs uppercase tracking-widest opacity-60">Partner Satisfaction</div>
              </div>
            </div>

            <div className="pt-12 border-t border-gray-100">
              <h3 className="text-2xl font-bold text-[#002366] mb-8">Core Excellence</h3>
              <div className="grid grid-cols-1 gap-6">
                {[
                  { title: t.values.v1[language], desc: t.values.v1_desc[language] },
                  { title: t.values.v2[language], desc: t.values.v2_desc[language] },
                  { title: t.values.v3[language], desc: t.values.v3_desc[language] }
                ].map((v, i) => (
                  <div key={i} className="flex gap-6 items-start group">
                    <div className="w-12 h-12 flex-shrink-0 bg-blue-50 text-[#002366] rounded-full flex items-center justify-center font-bold text-xl group-hover:bg-[#002366] group-hover:text-white transition-colors">
                      {i + 1}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">{v.title}</h4>
                      <p className="text-gray-500 font-light">{v.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
