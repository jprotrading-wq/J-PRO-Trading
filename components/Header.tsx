
import React, { useState, useEffect } from 'react';
import { Logo } from '../constants';
import { useLanguage } from '../LanguageContext';
import { Language, translations } from '../translations';

interface HeaderProps {
  setView: (view: 'home' | 'about' | 'services' | 'news' | 'privacy') => void;
  currentView: string;
}

const Header: React.FC<HeaderProps> = ({ setView, currentView }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage } = useLanguage();
  const [showLangs, setShowLangs] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50 || currentView !== 'home');
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentView]);

  const navItems = [
    { name: translations.nav.about[language], id: 'about' },
    { name: translations.nav.services[language], id: 'services' },
    { name: translations.nav.news[language], id: 'news' },
    { name: translations.nav.contact[language], id: 'contact' }
  ];

  const languages: { code: Language; label: string }[] = [
    { code: 'EN', label: 'English' },
    { code: 'KR', label: '한국어' },
    { code: 'CN', label: '中文' },
    { code: 'JP', label: '日本語' },
    { code: 'TH', label: 'ไทย' },
    { code: 'VN', label: 'Tiếng Việt' },
    { code: 'ID', label: 'Bahasa Indonesia' },
    { code: 'MY', label: 'Bahasa Melayu' }
  ];

  const handleNavClick = (id: string) => {
    setIsMobileMenuOpen(false);
    if (id === 'about') {
      setView('about');
    } else if (id === 'services') {
      setView('services');
    } else if (id === 'news') {
      setView('news');
    } else if (id === 'contact') {
      if (currentView !== 'home') {
        setView('home');
        setTimeout(() => {
          const el = document.getElementById('contact');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        const el = document.getElementById('contact');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      setView('home');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled || currentView !== 'home' ? 'bg-white shadow-md py-3' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center">
          <button onClick={() => { setView('home'); setIsMobileMenuOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
            <Logo dark={isScrolled || currentView !== 'home'} />
          </button>
          
          <div className="flex items-center space-x-4 md:space-x-8">
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <button 
                  key={item.id} 
                  onClick={() => handleNavClick(item.id)}
                  className={`text-sm font-medium tracking-wide hover:opacity-70 transition-colors ${isScrolled || currentView !== 'home' ? 'text-[#002366]' : 'text-white'}`}
                >
                  {item.name}
                </button>
              ))}
            </nav>

            <div className="relative">
              <button 
                onClick={() => setShowLangs(!showLangs)}
                className={`flex items-center gap-2 text-[10px] md:text-xs font-bold px-2 py-1 md:px-3 md:py-1.5 rounded border transition-all ${
                  isScrolled || currentView !== 'home'
                    ? 'border-[#002366] text-[#002366] hover:bg-[#002366] hover:text-white' 
                    : 'border-white text-white hover:bg-white hover:text-[#002366]'
                }`}
              >
                <i className="fas fa-globe"></i>
                {language}
              </button>
              
              {showLangs && (
                <div className="absolute top-full right-0 mt-2 w-40 bg-white shadow-xl border border-gray-100 py-2 rounded-lg max-h-[70vh] overflow-y-auto">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code);
                        setShowLangs(false);
                      }}
                      className={`w-full text-left px-4 py-2 text-xs font-medium hover:bg-gray-50 transition-colors ${
                        language === lang.code ? 'text-[#002366] font-bold bg-blue-50/50' : 'text-gray-600'
                      }`}
                    >
                      {lang.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button 
              className={`md:hidden p-2 transition-colors ${isScrolled || currentView !== 'home' ? 'text-[#002366]' : 'text-white'}`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </header>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden bg-[#002366] flex flex-col items-center justify-center space-y-8 animate-in fade-in duration-300">
          {navItems.map((item) => (
            <button 
              key={item.id} 
              onClick={() => handleNavClick(item.id)}
              className="text-2xl font-bold text-white tracking-widest hover:text-blue-200 transition-colors"
            >
              {item.name}
            </button>
          ))}
          <div className="pt-8 border-t border-white/10 w-32 flex justify-center">
             <button 
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
