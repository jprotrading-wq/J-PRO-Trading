
import React from 'react';
import { useLanguage } from '../LanguageContext';
import { translations } from '../translations';

interface NewsProps {
  setView: (view: 'home' | 'about' | 'services' | 'news' | 'privacy') => void;
}

const News: React.FC<NewsProps> = ({ setView }) => {
  const { language } = useLanguage();
  const t = translations.news;

  const getTitle = (id: number) => {
    switch (id) {
      case 1:
        if (language === 'KR') return "2025 글로벌 무역 트렌드: 회복 탄력적 공급망으로의 전환";
        if (language === 'JP') return "2025年グローバル貿易トレンド：回復力のあるサプライチェーンへの転換";
        if (language === 'CN') return "2025年全球贸易趋势：向韧性供应链转型";
        if (language === 'TH') return "แนวโน้มการค้าโลกปี 2025: การเปลี่ยนผ่านสู่ห่วงโซ่อุปทานที่ยืดหยุ่น";
        if (language === 'VN') return "Xu hướng thương mại toàn cầu 2025: Chuyển dịch sang chuỗi cung ứng bền bỉ";
        if (language === 'ID') return "Tren Perdagangan Global 2025: Peralihan Menuju Rantai Pasokan yang Tangguh";
        if (language === 'MY') return "Trend Perdagangan Global 2025: Peralihan Menuju Rangkaian Bekalan Berdaya Tahan";
        return "2025 Global Trade Trends: The Shift Towards Resilient Supply Chains";
      case 2:
        if (language === 'KR') return "J PRO Trading, 동남아시아 물류 네트워크 확장";
        if (language === 'JP') return "J PRO Trading、東南アジアの物流ネットワークを拡大";
        if (language === 'CN') return "J PRO Trading 扩大东南亚物流网络";
        if (language === 'TH') return "J PRO Trading ขยายเครือข่ายโลจิสติกส์ในเอเชียตะวันออกเฉียงใต้";
        if (language === 'VN') return "J PRO Trading mở rộng mạng lưới hậu cần tại Đông Nam Á";
        if (language === 'ID') return "J PRO Trading Memperluas Jaringan Logistik di Asia Tenggara";
        if (language === 'MY') return "J PRO Trading Meluaskan Rangkaian Logistik di Asia Tenggara";
        return "J PRO Trading Expands Logistics Network in Southeast Asia";
      case 3:
        if (language === 'KR') return "도매 유통 부문 디지털 전환의 중요성";
        if (language === 'JP') return "卸売・流通部門におけるデジタルトランスフォーメーションの重要性";
        if (language === 'CN') return "批发分销领域数字化转型的重点";
        if (language === 'TH') return "ความสำคัญของการเปลี่ยนแปลงทางดิจิทัลในภาคการค้าส่ง";
        if (language === 'VN') return "Tầm quan trọng của chuyển đổi số trong lĩnh vực phân phối bán buôn";
        if (language === 'ID') return "Pentingnya Transformasi Digital dalam Distribusi Grosir";
        if (language === 'MY') return "Kepentingan Transformasi Digital dalam Pengedaran Borong";
        return "The Importance of Digital Transformation in Wholesale Distribution";
      default:
        return "";
    }
  };

  const posts = [
    {
      id: 1,
      title: getTitle(1),
      date: "2025",
      category: t.categories.market[language],
      imageUrl: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 2,
      title: getTitle(2),
      date: "2025",
      category: t.categories.company[language],
      imageUrl: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 3,
      title: getTitle(3),
      date: "2025",
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
