
import React, { useState } from 'react';
import { Logo } from '../constants';
import { useLanguage } from '../LanguageContext';
import { translations } from '../translations';

interface FooterProps {
  setView?: (view: 'home' | 'about' | 'services' | 'news' | 'privacy') => void;
}

const Footer: React.FC<FooterProps> = ({ setView }) => {
  const { language } = useLanguage();
  const t = translations.footer;
  const navT = translations.nav;
  const privT = translations.privacy;
  const [showWeChatQR, setShowWeChatQR] = useState(false);
  const [showLineQR, setShowLineQR] = useState(false);
  const [showKakaoQR, setShowKakaoQR] = useState(false);
  const [showWhatsAppQR, setShowWhatsAppQR] = useState(false);

  const chatLinks = [
    { 
      name: 'KakaoTalk',
      svg: (
        <svg viewBox="0 0 24 24" className="w-7 h-7" fill="currentColor">
          <path d="M12 3C6.477 3 2 6.48 2 10.75c0 2.8 1.91 5.25 4.8 6.6-.2.75-.72 2.65-.82 3.05-.13.51.18.5.38.37.15-.1 2.45-1.65 3.45-2.32.36.07.74.1 1.12.1 5.523 0 10-3.477 10-7.75S17.523 3 12 3z" />
          <text x="12" y="12.5" fontSize="5" fontWeight="900" textAnchor="middle" fill="#FEE500" fontFamily="Arial, sans-serif">TALK</text>
        </svg>
      ),
      href: '#', 
      bgColor: 'bg-[#FEE500]',
      textColor: 'text-[#3C1E1E]',
      isModal: true,
      onClick: () => setShowKakaoQR(true),
    },
    { 
      name: 'WeChat',
      svg: (
        <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
          <path d="M8.2 14.2c0-2.8 2.6-5 5.8-5 3.2 0 5.8 2.2 5.8 5s-2.6 5-5.8 5c-.7 0-1.3-.1-1.9-.3l-1.8 1 .4-1.7c-1.6-1-2.5-2.4-2.5-4z" />
          <path d="M3 8.5c0-3.5 3.2-6.5 7.2-6.5 4 0 7.2 3 7.2 6.5s-3.2 6.5-7.2 6.5c-.8 0-1.6-.1-2.4-.4L5 16l.6-2c-1.8-1.2-2.6-3.1-2.6-5.5z" opacity="0.9" />
        </svg>
      ),
      href: '#', 
      bgColor: 'bg-[#07C160]',
      textColor: 'text-white',
      isModal: true,
      onClick: () => setShowWeChatQR(true),
    },
    { 
      name: 'LINE',
      svg: (
        <svg viewBox="0 0 24 24" className="w-7 h-7" fill="currentColor">
          <path d="M22 10.5c0-4.7-4.5-8.5-10-8.5S2 5.8 2 10.5c0 4.2 3.6 7.7 8.4 8.4.3.07.7.2.8.5.1.3.1.7 0 1l-.1.9c0 .3-.2 1.1.9.6 1.1-.5 5.8-3.6 7.9-6.1 1.4-1.6 2.1-3.3 2.1-5.3z" />
          <text x="12" y="12" fontSize="4.5" fontWeight="900" textAnchor="middle" fill="#06C755" fontFamily="Arial, sans-serif">LINE</text>
        </svg>
      ),
      href: '#', 
      bgColor: 'bg-[#06C755]',
      textColor: 'text-white',
      isModal: true,
      onClick: () => setShowLineQR(true),
    },
    { 
      name: 'WhatsApp',
      svg: (
        <svg viewBox="0 0 24 24" className="w-7 h-7" fill="currentColor">
          <path d="M12.03 6.17c-3.18 0-5.76 2.58-5.77 5.76-.001 1.3.38 2.27 1.02 3.28l-.54 1.4 1.43-.52c.95.56 1.91.87 2.92.88 3.18 0 5.76-2.59 5.77-5.77 0-3.18-2.59-5.76-5.83-5.77zm3.35 8.31c-.12.35-.64.63-.88.65-.24.02-.47.08-1.6-.38-1.13-.46-1.86-1.61-1.91-1.69-.06-.08-.46-.61-.46-1.15 0-.55.28-.82.39-.93.1-.11.22-.14.3-.14s.15.01.22.01c.06 0 .15-.01.23.19.08.2.27.67.3.72.02.05.04.11.01.18-.03.07-.05.11-.1.17-.05.06-.1.13-.15.17-.05.05-.1.11-.04.21.06.1.26.43.56.69.38.35.71.45.81.5.1.05.16.04.22-.03.06-.07.25-.29.32-.39.07-.1.13-.08.22-.05.09.03.57.27.67.32.1.05.17.08.19.12.02.04.02.24-.1.59z" transform="scale(1.2) translate(-2,-2)"/>
          <path d="M19.06 4.94A9.9 9.9 0 0012.03 2.04C6.55 2.04 2.09 6.5 2.08 11.99c0 1.76.46 3.47 1.33 4.98L2.03 22l5.13-1.35c1.45.79 3.09 1.21 4.87 1.21h.01c5.49 0 9.95-4.47 9.95-9.95 0-2.66-1.03-5.16-2.93-7.06zm-7.03 15.39h-.01c-1.49 0-2.95-.4-4.22-1.16l-.3-.18-3.13.82.84-3.06-.2-.31c-.83-1.33-1.27-2.86-1.27-4.45.01-4.54 3.7-8.24 8.24-8.24 2.2 0 4.27.86 5.82 2.41 1.56 1.56 2.41 3.63 2.41 5.83-.01 4.54-3.7 8.24-8.25 8.24z" />
        </svg>
      ),
      href: '#', 
      bgColor: 'bg-[#25D366]',
      textColor: 'text-white',
      isModal: true,
      onClick: () => setShowWhatsAppQR(true),
    },
  ];

  const QRModal: React.FC<{ 
    isOpen: boolean; 
    onClose: () => void; 
    title: string; 
    iconColor: string;
    id: string;
    svg: React.ReactNode;
  }> = ({ isOpen, onClose, title, iconColor, id, svg }) => {
    if (!isOpen) return null;
    const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(id)}`;
    
    return (
      <div 
        className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300"
        onClick={onClose}
      >
        <div 
          className="bg-white rounded-3xl p-8 max-w-sm w-full shadow-2xl relative animate-in zoom-in-95 duration-300"
          onClick={(e) => e.stopPropagation()}
        >
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 p-2 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-6">
              <div className={`${iconColor} text-white p-2 rounded-lg`}>
                {svg}
              </div>
              <h3 className="font-bold text-lg text-[#333]">{title}</h3>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-2xl mb-6 flex items-center justify-center overflow-hidden">
              <img 
                src={qrUrl} 
                alt={`${title} QR`} 
                className="w-full max-w-[240px] h-auto rounded-lg shadow-inner"
              />
            </div>
            
            <p className="text-sm text-gray-500 font-medium px-4">
              {t.scanToConnect[language]}
            </p>
            <p className="mt-2 text-xs text-gray-400 font-light uppercase tracking-widest">ID: {id}</p>
          </div>
        </div>
      </div>
    );
  };

  const handleLinkClick = (view: 'about' | 'services' | 'news' | 'privacy') => {
    if (setView) {
      setView(view);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer id="contact" className="bg-[#F8F9FA] pt-20 pb-10 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <Logo dark className="mb-6" />
            <p className="text-gray-500 max-w-sm font-light leading-relaxed mb-8">
              {t.desc[language]}
            </p>
            
            <div className="space-y-4">
              <h4 className="text-[10px] uppercase tracking-[0.25em] text-[#002366] font-bold">
                {t.messaging[language]}
              </h4>
              <div className="flex flex-wrap gap-4">
                {chatLinks.map((chat, i) => (
                  <button 
                    key={i} 
                    onClick={(e) => {
                      if (chat.isModal) {
                        e.preventDefault();
                        chat.onClick?.();
                      }
                    }}
                    aria-label={chat.name}
                    title={chat.name}
                    className={`w-11 h-11 flex items-center justify-center rounded-[20%] shadow-sm transition-all duration-300 ${chat.bgColor} ${chat.textColor} hover:shadow-md hover:scale-105 active:scale-95`}
                  >
                    {chat.svg}
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-[#002366] mb-6 uppercase tracking-wider text-sm">{t.contact[language]}</h4>
            <ul className="space-y-5 text-gray-600 font-light">
              <li className="flex gap-3 items-start">
                <svg className="w-5 h-5 text-[#002366] flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-sm">{t.address[language]}</span>
              </li>
              <li className="flex gap-3 items-center">
                <svg className="w-5 h-5 text-[#002366] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:jprotrading@gmail.com" className="hover:text-[#002366] transition-colors">jprotrading@gmail.com</a>
              </li>
              <li className="flex gap-3 items-center">
                <svg className="w-5 h-5 text-[#002366] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+821035264799" className="hover:text-[#002366] transition-colors font-medium">+82 10-3526-4799</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-[#002366] mb-6 uppercase tracking-wider text-sm">{t.links[language]}</h4>
            <ul className="space-y-4 text-gray-600 font-light text-sm">
              <li>
                <button onClick={() => handleLinkClick('about')} className="hover:text-[#002366] transition-colors text-left">
                  {navT.about[language]}
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('services')} className="hover:text-[#002366] transition-colors text-left">
                  {navT.services[language]}
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('news')} className="hover:text-[#002366] transition-colors text-left">
                  {navT.news[language]}
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('privacy')} className="hover:text-[#002366] transition-colors text-left">
                  {privT.title[language]}
                </button>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-10 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
          <p>© 2024 J PRO Trading. All Rights Reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <button onClick={() => handleLinkClick('privacy')} className="hover:text-gray-600 transition-colors">Terms of Service</button>
            <button onClick={() => handleLinkClick('privacy')} className="hover:text-gray-600 transition-colors">Cookie Policy</button>
          </div>
        </div>
      </div>

      <QRModal 
        isOpen={showKakaoQR} 
        onClose={() => setShowKakaoQR(false)} 
        title="KakaoTalk QR Code"
        iconColor="bg-[#FEE500]"
        id="jproboss"
        svg={
          <svg viewBox="0 0 24 24" className="w-5 h-5 text-[#3C1E1E]" fill="currentColor">
            <path d="M12 3C6.477 3 2 6.48 2 10.75c0 2.8 1.91 5.25 4.8 6.6-.2.75-.72 2.65-.82 3.05-.13.51.18.5.38.37.15-.1 2.45-1.65 3.45-2.32.36.07.74.1 1.12.1 5.523 0 10-3.477 10-7.75S17.523 3 12 3z" />
          </svg>
        }
      />

      <QRModal 
        isOpen={showWeChatQR} 
        onClose={() => setShowWeChatQR(false)} 
        title="WeChat QR Code"
        iconColor="bg-[#07C160]"
        id="jproboss"
        svg={
          <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
            <path d="M8.2 14.2c0-2.8 2.6-5 5.8-5 3.2 0 5.8 2.2 5.8 5s-2.6 5-5.8 5c-.7 0-1.3-.1-1.9-.3l-1.8 1 .4-1.7c-1.6-1-2.5-2.4-2.5-4z" />
            <path d="M3 8.5c0-3.5 3.2-6.5 7.2-6.5 4 0 7.2 3 7.2 6.5s-3.2 6.5-7.2 6.5c-.8 0-1.6-.1-2.4-.4L5 16l.6-2c-1.8-1.2-2.6-3.1-2.6-5.5z" opacity="0.9" />
          </svg>
        }
      />

      <QRModal 
        isOpen={showLineQR} 
        onClose={() => setShowLineQR(false)} 
        title="LINE QR Code"
        iconColor="bg-[#06C755]"
        id="jproboss"
        svg={
          <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
            <path d="M22 10.5c0-4.7-4.5-8.5-10-8.5S2 5.8 2 10.5c0 4.2 3.6 7.7 8.4 8.4.3.07.7.2.8.5.1.3.1.7 0 1l-.1.9c0 .3-.2 1.1.9.6 1.1-.5 5.8-3.6 7.9-6.1 1.4-1.6 2.1-3.3 2.1-5.3z" />
          </svg>
        }
      />

      <QRModal 
        isOpen={showWhatsAppQR} 
        onClose={() => setShowWhatsAppQR(false)} 
        title="WhatsApp QR Code"
        iconColor="bg-[#25D366]"
        id="821035264799"
        svg={
          <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
            <path d="M12.03 6.17c-3.18 0-5.76 2.58-5.77 5.76-.001 1.3.38 2.27 1.02 3.28l-.54 1.4 1.43-.52c.95.56 1.91.87 2.92.88 3.18 0 5.76-2.59 5.77-5.77 0-3.18-2.59-5.76-5.83-5.77zm3.35 8.31c-.12.35-.64.63-.88.65-.24.02-.47.08-1.6-.38-1.13-.46-1.86-1.61-1.91-1.69-.06-.08-.46-.61-.46-1.15 0-.55.28-.82.39-.93.1-.11.22-.14.3-.14s.15.01.22.01c.06 0 .15-.01.23.19.08.2.27.67.3.72.02.05.04.11.01.18-.03.07-.05.11-.1.17-.05.06-.1.13-.15.17-.05.05-.1.11-.04.21.06.1.26.43.56.69.38.35.71.45.81.5.1.05.16.04.22-.03.06-.07.25-.29.32-.39.07-.1.13-.08.22-.05.09.03.57.27.67.32.1.05.17.08.19.12.02.04.02.24-.1.59z" />
          </svg>
        }
      />
    </footer>
  );
};

export default Footer;
