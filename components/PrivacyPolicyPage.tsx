
import React from 'react';
import { useLanguage } from '../LanguageContext';
import { translations } from '../translations';

const PrivacyPolicyPage: React.FC = () => {
  const { language } = useLanguage();
  const t = translations.privacy;

  return (
    <div className="pt-20">
      {/* Subtle Header */}
      <div className="bg-[#002366] py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-white text-3xl md:text-5xl font-bold mb-4">
            {t.title[language]}
          </h1>
          <p className="text-white/60 text-sm tracking-widest uppercase">
            {t.lastUpdated[language]}
          </p>
        </div>
      </div>

      {/* Document Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="prose prose-blue max-w-none">
            <p className="text-xl text-gray-600 font-light leading-relaxed mb-16">
              {t.intro[language]}
            </p>

            <div className="space-y-16">
              {t.sections.map((section, index) => (
                <div key={index} className="border-l-4 border-[#002366]/10 pl-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    {section.title[language]}
                  </h2>
                  <p className="text-lg text-gray-500 font-light leading-relaxed">
                    {section.content[language]}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-24 p-8 bg-[#F8F9FA] rounded-2xl border border-gray-100">
              <h3 className="text-lg font-bold text-[#002366] mb-4">Contacting Our Data Protection Representative</h3>
              <p className="text-gray-500 font-light">
                If you have any questions regarding this Privacy Policy or how we handle your data, please contact us at <a href="mailto:jprotrading@gmail.com" className="text-[#002366] font-medium underline">jprotrading@gmail.com</a>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicyPage;
