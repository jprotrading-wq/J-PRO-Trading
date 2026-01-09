
import React from 'react';
import { useLanguage } from '../LanguageContext';
import { translations } from '../translations';

interface NewsProps {
  setView: (view: 'home' | 'about' | 'services' | 'news' | 'privacy') => void;
}

const News: React.FC<NewsProps> = ({ setView }) => {
  const { language } = useLanguage();
  const t = translations.news;

  const posts = [
    {
      id: 1,
      title: t.titles.t1[language],
      date: "2026",
      category: t.categories.market[language],
      imageUrl: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 2,
      title: t.titles.t2[language],
      date: "2026",
      category: t.categories.company[language],
      imageUrl: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 3,
      title: t.titles.t3[language],
      date: "2026",
      category: t.categories.strategy[language],
      imageUrl: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <section id="news" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <div>
            <h2 className="text-sm font-bold tracking-[0.3em] text-[#002366] uppercase mb-4">{t.header[language]}</h2>
            <p className="text-3xl md:text-4xl font-bold text-[#333333]">{t.subtitle[language]}</p>
          </div>
          <button 
            onClick={() => setView('news')}
            className="text-[#002366] font-semibold flex items-center gap-2 hover:opacity-70"
          >
            {t.viewAll[language]}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {posts.map((post) => (
            <article key={post.id} className="group cursor-pointer" onClick={() => setView('news')}>
              <div className="relative overflow-hidden mb-6 aspect-video bg-gray-100">
                <img 
                  src={post.imageUrl} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  onLoad={(e) => (e.currentTarget.style.opacity = '1')}
                  style={{ opacity: 0, transition: 'opacity 0.5s ease-in-out' }}
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 text-xs font-bold text-[#002366] uppercase tracking-wider">
                  {post.category}
                </div>
              </div>
              <div className="text-xs text-gray-400 mb-2 font-medium tracking-wider">{post.date}</div>
              <h3 className="text-xl font-bold text-[#333333] leading-tight group-hover:text-[#002366] transition-colors">
                {post.title}
              </h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;
