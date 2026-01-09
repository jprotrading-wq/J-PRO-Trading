
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import AboutPage from './components/AboutPage';
import Services from './components/Services';
import ServicesPage from './components/ServicesPage';
import News from './components/News';
import NewsPage from './components/NewsPage';
import PrivacyPolicyPage from './components/PrivacyPolicyPage';
import Footer from './components/Footer';
import { LanguageProvider } from './LanguageContext';

const App: React.FC = () => {
  const [view, setView] = useState<'home' | 'about' | 'services' | 'news' | 'privacy'>('home');

  // Ensure scroll to top when view changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [view]);

  return (
    <LanguageProvider>
      <div className="min-h-screen">
        <Header setView={setView} currentView={view} />
        <main>
          {view === 'home' && (
            <>
              <Hero />
              <About setView={setView} />
              <Services setView={setView} />
              <News setView={setView} />
            </>
          )}
          {view === 'about' && <AboutPage />}
          {view === 'services' && <ServicesPage />}
          {view === 'news' && <NewsPage />}
          {view === 'privacy' && <PrivacyPolicyPage />}
        </main>
        <Footer setView={setView} />
      </div>
    </LanguageProvider>
  );
};

export default App;
