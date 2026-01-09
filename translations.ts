
export type Language = 'EN' | 'KR' | 'CN' | 'JP' | 'TH' | 'VN' | 'ID' | 'MY';

export const translations = {
  nav: {
    about: { EN: 'About', KR: '소개', CN: '关于', JP: '会社概要', TH: 'เกี่ยวกับ', VN: 'Giới thiệu', ID: 'Tentang', MY: 'Tentang' },
    services: { EN: 'Services', KR: '서비스', CN: '服务', JP: 'サービス', TH: 'บริการ', VN: 'Dịch vụ', ID: 'Layanan', MY: 'Perkhidmatan' },
    news: { EN: 'News', KR: '뉴스', CN: '新闻', JP: 'ニュース', TH: 'ข่าวสาร', VN: 'Tin tức', ID: 'Berita', MY: 'Berita' },
    contact: { EN: 'Contact', KR: '문의', CN: '联系', JP: 'お問い合わせ', TH: 'ติดต่อ', VN: 'Liên hệ', ID: 'Kontak', MY: 'Hubungi' },
  },
  hero: {
    title: { 
      EN: 'Connecting Trust, Crafting Shared Success.', 
      KR: '신뢰로 잇는 미래, 함께 만드는 위대한 성공.', 
      CN: '以信相连，共筑成功。', 
      JP: '信頼で繋ぐ未来、共に創る成功。', 
      TH: 'เชื่อมต่อด้วยความไว้วางใจ สร้างความสำเร็จร่วมกัน',
      VN: 'Kết nối niềm tin, Kiến tạo thành công.',
      ID: 'Menghubungkan Kepercayaan, Merajut Kesuksesan Bersama.',
      MY: 'Menghubungkan Kepercayaan, Membina Kejayaan Bersama.'
    },
    subtitle: { 
      EN: 'Beyond simple trade, we bridge visions to create a sustainable win-win future for every partner in the global market.', 
      KR: '단순한 무역을 넘어 파트너의 비전을 연결합니다. 전 세계 시장에서 함께 성장하는 진정한 윈윈(Win-Win)의 시작.', 
      CN: '超越贸易，连接愿景。通过共赢方案，与您一同开启全球商业的新篇章。', 
      JP: '単なる貿易を超え、パートナーのビジョンを繋ぎます。共に成長するためのウィンウィン・ソリューション。', 
      TH: 'ก้าวข้ามขีดจำกัดการค้าเพื่อเชื่อมโยงวิสัยทัศน์ของคุณ สู่ความสำเร็จแบบ Win-Win อย่างยั่งยืนในตลาดโลก',
      VN: 'Vượt xa thương mại đơn thuần, chúng tôi kết nối tầm nhìn để tạo ra tương lai bền vững cho mọi đối tác.',
      ID: 'Lebih dari sekadar perdagangan, kami menjembatani visi untuk menciptakan masa depan yang saling menguntungkan bagi setiap mitra.',
      MY: 'Melampaui perdagangan mudah, kami merapatkan visi untuk mencipta masa depan menang-menang yang mampan untuk setiap rakan kongsi.'
    },
    button: { EN: 'Get Started', KR: '시작하기', CN: '现在开始', JP: '今すぐ始める', TH: 'เริ่มต้นเลย', VN: 'Bắt đầu ngay', ID: 'Mulai Sekarang', MY: 'Mulakan Sekarang' },
  },
  about: {
    title: { 
      EN: 'Global Vision, Professional Excellence.', 
      KR: '글로벌 비전, 전문성의 탁월함.', 
      CN: '全球视野，卓越专业。', 
      JP: 'グローバルな視野、卓越した専門性。', 
      TH: 'วิสัยทัศน์ระดับโลก ความเป็นเลิศระดับมืออาชีพ',
      VN: 'Tầm nhìn toàn cầu, Sự xuất sắc chuyên nghiệp.',
      ID: 'Visi Global, Keunggulan Profesional.',
      MY: 'Visi Global, Kecemerlangan Profesional.'
    },
    tagline: {
      EN: 'Architects of the Global Supply Chain.',
      KR: '글로벌 공급망의 설계자.',
      CN: '全球供应链的构筑者。',
      JP: 'グローバルサプライチェーンの設計者。',
      TH: 'สถาปนิกแห่งห่วงโซ่อุปทานระดับโลก',
      VN: 'Kiến trúc sư của chuỗi cung ứng toàn cầu.',
      ID: 'Arsitek Rantai Pasokan Global.',
      MY: 'Arkitek Rangkaian Bekalan Global.'
    },
    quote: {
      EN: "We go beyond mere transactions to become a bridge that turns our partners' dreams into reality. Trust is our strongest asset, and professionalism is our only standard.",
      KR: "우리는 단순한 거래를 넘어, 전 세계 파트너사들이 꿈꾸는 미래를 현실로 만드는 징검다리가 되고자 합니다. 신뢰는 우리의 가장 강력한 자산이며, 전문성은 우리의 유일한 기준입니다.",
      CN: "我们超越单纯的交易，成为将合作伙伴的梦想变为现实的桥梁。信任是我们最强大的资产，专业是我们唯一的标准。",
      JP: "私たちは単なる取引を超え、パートナー企業の皆様の夢を現実にする架け橋となります。信頼は私たちの最大の資産であり、専門性は私たちの唯一の基準です。",
      TH: "เราก้าวไปไกลกว่าการทำธุรกรรมเพียงอย่างเดียว เพื่อเป็นสะพานเชื่อมที่เปลี่ยนความฝันของพันธมิตรให้กลายเป็นความจริง ความไว้วางใจคือสินทรัพย์ที่แข็งแกร่งที่สุดของเรา และความเป็นมืออาชีพคือมาตรฐานเดียวของเรา",
      VN: "Chúng tôi vượt xa các giao dịch đơn thuần để trở thành cầu nối biến ước mơ của đối tác thành hiện thực. Niềm tin là tài sản mạnh nhất và sự chuyên nghiệp là tiêu chuẩn duy nhất của chúng tôi.",
      ID: "Kami melampaui sekadar transaksi untuk menjadi jembatan yang mengubah impian mitra kami menjadi kenyataan. Kepercayaan adalah aset terkuat kami, dan profesionalisme adalah satu-satunya standar kami.",
      MY: "Kami melampaui sekadar transaksi untuk menjadi jambatan yang mengubah impian rakan kongsi kami menjadi kenyataan. Kepercayaan adalah aset terkuat kami, dan profesionalisme adalah satu-satunya piawaian kami."
    },
    p1: { 
      EN: 'J PRO Trading is not just a distributor; we are a strategic partner dedicated to navigating the complexities of international commerce. We believe that every transaction is an opportunity to build a lasting legacy of trust.', 
      KR: 'J PRO Trading은 단순한 유통사를 넘어 국제 무역의 복잡함을 함께 해결해 나가는 전략적 파트너입니다. 우리는 모든 거래가 지속 가능한 신뢰의 유산을 쌓는 기회라고 믿습니다.', 
      CN: 'J PRO Trading 不仅仅是一家分销商；我们是致力于应对国际贸易复杂性的战略合作伙伴。我们相信，每一次交易都是建立持久信任遗产的机会。', 
      JP: 'J PRO Tradingは単なる商社ではなく、国際貿易の複雑な課題を共に解決していく戦略的パートナーです。すべての取引が持続可能な信頼を築く機会であると確신しています。', 
      TH: 'J PRO Trading ไม่ใช่แค่ผู้จัดจำหน่าย แต่เราเป็นพันธมิตรเชิงกลยุทธ์ที่อุทิศตนเพื่อนำทางผ่านความซับซ้อนของการค้าระหว่างประเทศ เราเชื่อว่าทุกธุรกรรมคือโอกาสในการสร้างมรดกแห่งความไว้วางใจที่ยั่งยืน',
      VN: 'J PRO Trading không chỉ là nhà phân phối; chúng tôi là đối tác chiến lược tận tâm giải quyết các thách thức của thương mại quốc tế. Chúng tôi tin rằng mỗi giao dịch là một cơ hội để xây dựng di sản niềm tin bền vững.',
      ID: 'J PRO Trading bukan sekadar distributor; kami adalah mitra strategis yang berdedikasi untuk menavigasi kompleksitas perdagangan internasional. Kami percaya bahwa setiap transaksi adalah kesempatan untuk membangun warisan kepercayaan yang abadi.',
      MY: 'J PRO Trading bukan sekadar pengedar; kami adalah rakan strategik yang berdedikasi untuk mengemudi kerumitan perdagangan antarabangsa. Kami percaya bahawa setiap transaksi adalah peluang untuk membina warisan kepercayaan yang kekal.'
    },
    p2: { 
      EN: 'Since our inception, we have expanded our footprint across USA, Europe, Korea, and Japan, specialized in premium brand exports. Our mission is to empower local markets with global quality, ensuring that excellence knows no borders.', 
      KR: '창립 이래 우리는 미국, 유럽, 한국, 일본 전역으로 거점을 확장하며 프리미엄 브랜드 수출에 특화해 왔습니다. 우리의 미션은 글로벌 품질로 로컬 시장에 활력을 불어넣고, 탁월함에는 국경이 없음을 증명하는 것입니다.', 
      CN: '自成立以来，我们的足迹已扩展至美国、欧洲、韩国和日本，专注于高端品牌出口。我们的使命是用全球品质赋能本地市场，确保卓越无国界。', 
      JP: '創業以来、米国、欧州、韓国、日本全域に拠点を拡大し、プレミアムブランドの輸出に特化してきました。私たちのミッションは、グローバルな品質でローカル市場を活性化し、卓越性に国境がないことを証明することです。', 
      TH: 'นับตั้งแต่ก่อตั้ง เราได้ขยายขอบเขตการดำเนินงานไปยังสหรัฐอเมริกา ยุโรป เกาหลี และญี่ปุ่น โดยเชี่ยวชาญด้านการส่งออกแบรนด์ระดับพรีเมียม ภารกิจของเราคือการส่งเสริมตลาดท้องถิ่นด้วยคุณภาพระดับโลก เพื่อให้มั่นใจว่าความเหนือระดับนั้นไม่มีพรมแดน',
      VN: 'Kể từ khi thành lập, chúng tôi đã mở rộng phạm vi hoạt động khắp Hoa Kỳ, Châu Âu, Hàn Quốc và Nhật Bản, chuyên về xuất khẩu các thương hiệu cao cấp. Sứ mệnh của chúng tôi là nâng tầm thị trường nội địa bằng chất lượng toàn cầu.',
      ID: 'Sejak awal berdiri, kami telah memperluas jejak kami di AS, Eropa, Korea, dan Jepang, dengan spesialisasi ekspor merek premium. Misi kami adalah memberdayakan pasar lokal dengan kualitas global, memastikan bahwa keunggulan tidak mengenal batas.',
      MY: 'Sejak penubuhan kami, kami telah memperluas jejak kami di seluruh AS, Eropah, Korea, dan Jepun, khusus dalam eksport jenama premium. Misi kami adalah untuk memperkasakan pasaran tempatan dengan kualiti global, memastikan kecemerlangan tidak mengenal sempadan.'
    },
    values: {
      title: { EN: 'Core Values', KR: '핵심 가치', CN: '核心价值', JP: 'コアバリュー', TH: 'ค่านิยมหลัก', VN: 'Giá trị cốt lõi', ID: 'Nilai Inti', MY: 'Nilai Teras' },
      v1: { EN: 'Unwavering Integrity', KR: '흔들리지 않는 정직함', CN: '坚定的诚信', JP: '揺るぎない誠実さ', TH: 'ความซื่อสัตย์ที่มั่นคง', VN: 'Sự chính trực kiên định', ID: 'Integritas Tak Tergoyahkan', MY: 'Integriti Yang Teguh' },
      v1_desc: { EN: 'We build relationships on transparency and ethical conduct.', KR: '우리는 투명성과 윤리적 행동을 바탕으로 관계를 구축합니다.', CN: '我们以透明和道德的行为建立关系。', JP: '私たちは透明性と倫理的な行動に基づいた信頼関係を構築します。', TH: 'เราสร้างความสัมพันธ์บนพื้นฐานของความโปร่งใสและการดำเนินงานอย่างมีจริยธรรม', VN: 'Chúng tôi xây dựng quan hệ dựa trên sự minh bạch và đạo đức.', ID: 'Kami membangun hubungan berdasarkan transparansi dan perilaku etis.', MY: 'Kami membina hubungan berasaskan ketelusan dan tingkah laku beretika.' },
      v2: { EN: 'Strategic Innovation', KR: '전략적 혁신', CN: '战略创新', JP: '戦略的イノベーション', TH: 'นวัตกรรมเชิงกลยุทธ์', VN: 'Đổi mới chiến lược', ID: 'Inovasi Strategis', MY: 'Inovasi Strategik' },
      v2_desc: { EN: 'Constantly optimizing logistics to lead the market.', KR: '시장 선도를 위해 끊임없이 물류를 최적화합니다.', CN: '不断优化物流以引领市场。', JP: '市場をリードするため、物流の最適化に絶えず取り組んでいます。', TH: 'เพิ่มประสิทธิภาพโลจิสติกส์อย่างต่อเนื่องเพื่อเป็นผู้นำตลาด', VN: 'Không ngừng tối ưu hóa hậu cần để dẫn đầu thị trường.', ID: 'Terus mengoptimalkan logistik untuk memimpin pasar.', MY: 'Sentiasa mengoptimumkan logistik untuk menerajui pasaran.' },
      v3: { EN: 'Mutual Growth', KR: '동반 성장', CN: '共同成长', JP: '共生共栄', TH: 'การเติบโตไปด้วยกัน', VN: 'Cùng nhau phát triển', ID: 'Pertumbuhan Bersama', MY: 'Pertumbuhan Bersama' },
      v3_desc: { EN: 'Our success is measured by the success of our partners.', KR: '우리의 성공은 파트너사의 성공으로 측정됩니다.', CN: '我们的成功取决于合作伙伴的成功。', JP: '私たちの成功は、パートナー企業の成功によって測られます。', TH: 'ความสำเร็จของเราวัดจากความสำเร็จของพันธมิตรของเรา', VN: 'Thành công của chúng tôi được đo bằng thành công của đối tác.', ID: 'Kesuksesan kami diukur dari kesuksesan mitra kami.', MY: 'Kejayaan kami diukur melalui kejayaan rakan kongsi kami.' }
    },
    brands: { EN: 'Global Brands', KR: '글로벌 브랜드', CN: '全球品牌', JP: 'グローバルブランド', TH: 'แบรนด์ระดับโลก', VN: 'Thương hiệu toàn cầu', ID: 'Merek Global', MY: 'Jenama Global' },
    countries: { EN: 'Countries', KR: '진출 국가', CN: '覆盖国家', JP: '進出国', TH: 'ประเทศที่ดำเนินการ', VN: 'Quốc gia', ID: 'Negara', MY: 'Negara' },
  },
  services: {
    header: { EN: 'Our Services', KR: '우리의 서비스', CN: '我们的服务', JP: 'サービス内容', TH: 'บริการของเรา', VN: 'Dịch vụ của chúng tôi', ID: 'Layanan Kami', MY: 'Perkhidmatan Kami' },
    subtitle: { EN: 'Comprehensive Trade Solutions', KR: '포괄적인 무역 솔루션', CN: '全面的贸易解决方案', JP: '包括的な貿易ソリューション', TH: 'โซลูชั่นการค้าที่ครอบคลุม', VN: 'Giải pháp thương mại toàn diện', ID: 'Solusi Perdagangan Komprehensif', MY: 'Penyelesaian Perdagangan Komprehensif' },
    s1_title: { EN: 'Global Wholesale', KR: '글로벌 도매', CN: '全球批发', JP: 'グローバル卸売', TH: 'ขายส่งทั่วโลก', VN: 'Bán buôn toàn cầu', ID: 'Grosir Global', MY: 'Borong Global' },
    s1_desc: { EN: 'Large-scale distribution and competitive pricing for world-class brands.', KR: '세계적인 브랜드의 대규모 유통 및 경쟁력 있는 가격 공급.', CN: '为世界级品牌提供大规模分销和极具竞争力的定价。', JP: '世界的なブランドの大規模な流通と、競争力のある価格提供。', TH: 'การจัดจำหน่ายขนาดใหญ่และราคาที่แข่งขันได้สำหรับแบรนด์ระดับโลก', VN: 'Phân phối quy mô lớn và giá cả cạnh tranh cho các thương hiệu đẳng cấp thế giới.', ID: 'Distribusi skala besar dan harga kompetitif untuk merek kelas dunia.', MY: 'Pengedaran berskala besar dan harga kompetitif untuk jenama bertaraf dunia.' },
    s2_title: { EN: 'Premium Retail', KR: '프리미엄 리테일', CN: '高端零售', JP: 'プレミアム小売', TH: 'ขายปลีกพรีเมียม', VN: 'Bán lẻ cao cấp', ID: 'Ritel Premium', MY: 'Runcit Premium' },
    s2_desc: { EN: 'Tailored retail strategies targeting high-end luxury markets.', KR: '하이엔드 마켓을 타겟으로 한 맞춤형 리테일 전략.', CN: '针对高端奢侈品市场的定制零售策略。', JP: 'ハイエンド市場をターゲットとした、カスタマイ즈された小売戦略。', TH: 'กลยุทธ์การขายปลีกที่ปรับแต่งมาเพื่อตลาดหรูหราระดับไฮเอนด์', VN: 'Chiến lược bán lẻ được điều chỉnh cho các thị trường xa xỉ cao cấp.', ID: 'Strategi ritel khusus yang menargetkan pasar mewah kelas atas.', MY: 'Strategi runcit tersuai yang mensasarkan pasaran mewah mewah.' },
    s3_title: { EN: 'Trade & Logistics', KR: '무역 및 물류', CN: '贸易与物流', JP: '貿易・物流', TH: 'การค้าและโล지스틱ส์', VN: 'Thương mại & Hậu cần', ID: 'Perdagangan & Logistik', MY: 'Perdagangan & Logistik' },
    s3_desc: { EN: 'Customs clearance and optimized supply chain management solutions.', KR: '수출입 통관 및 최적화된 공급망 관리 솔루션.', CN: '进出口清关及优化的供应链管理解决方案。', JP: '輸出入通関および最適化されたサプライチェーン管理ソリューション。', TH: 'การพิธีการศุลกากรและโซลูชั่นการจัดการห่วงโซ่อุปทานที่เหมาะสมที่สุด', VN: 'Thông quan và các giải pháp quản lý chuỗi cung ứng tối ưu.', ID: 'Bea cukai dan solusi manajemen rantai pasokan yang dioptimalkan.', MY: 'Pelepasan kastam dan penyelesaian pengurusan rantaian bekalan yang dioptimumkan.' },
    pageHeader: { EN: 'Global Trade Excellence', KR: '글로벌 무역의 정점', CN: '全球贸易卓越', JP: 'グローバル貿易の頂点', TH: 'ความเป็นเลิศทางการค้าระหว่างประเทศ', VN: 'Xuất sắc trong thương mại toàn cầu', ID: 'Keunggulan Perdagangan Global', MY: 'Kecemerlangan Perdagangan Global' },
    pageSubtitle: { EN: 'Strategic Partner for Your Global Business Expansion.', KR: '당신의 글로벌 비즈니스 확장을 위한 전략적 파트너.', CN: '您全球业务扩张的战略合作伙伴。', JP: 'グローバルビジネス拡大のための戦略적파트너.', TH: 'พันธมิตรเชิงกลยุทธ์สำหรับการขยายธุรกิจระดับโลกของคุณ', VN: 'Đối tác chiến lược cho việc mở rộng kinh doanh toàn cầu của bạn.', ID: 'Mitra Strategis untuk Ekspansi Bisnis Global Anda.', MY: 'Rakan Strategik untuk Pengembangan Perniagaan Global Anda.' },
    exportSection: {
      title: { EN: 'Global Export Excellence', KR: '글로벌 수출 사업', CN: '全球出口业务', JP: 'グローバル輸出事業', TH: 'ความเป็นเลิศในการส่งออกทั่วโลก', VN: 'Xuất khẩu toàn cầu xuất sắc', ID: 'Keunggulan Ekspor Global', MY: 'Kecemerlangan Eksport Global' },
      subtitle: { EN: 'Bringing the Best of Brands to the World', KR: '최고의 브랜드를 세계 시장으로', CN: '将最好的品牌带向世界', JP: '最高のブランドを世界市場へ', TH: 'นำแบรนด์ที่ดีที่สุดสู่สายตาชาวโลก', VN: 'Mang những thương hiệu tốt nhất đến với thế giới', ID: 'Membawa Merek Terbaik ke Dunia', MY: 'Membawa Jenama Terbaik ke Dunia' },
      desc: { EN: 'We specialize in identifying premium local brands and strategically positioning them in international markets.', KR: '우리는 프리미엄 로컬 브랜드를 발굴하여 국제 시장에 전략적으로 포지셔닝하는 데 특화되어 있습니다.', CN: '我们专注于发现优质本土品牌并将其战略性地定位在国际市场。', JP: 'プレミアムなローカルブランドを発掘し、国際市場に戦略的にポジショニングすることに特化しています。', TH: 'เราเชี่ยวชาญในการเฟ้นหาแบรนด์ท้องถิ่นระดับพรีเมียมและจัดวางตำแหน่งเชิงกลยุทธ์ในตลาดต่างประเทศ', VN: 'Chúng tôi chuyên xác định các thương hiệu địa phương cao cấp và định vị chiến lược trên thị trường quốc tế.', ID: 'Kami berspesialisasi dalam mengidentifikasi merek lokal premium dan memposisikannya secara strategis di pasar internasional.', MY: 'Kami pakar dalam mengenal pasti jenama tempatan premium and meletakkannya secara strategik di pasaran antarabangsa.' }
    },
    importSection: {
      title: { EN: 'Global Import Solutions', KR: '글로벌 수입 사업', CN: '全球进口解决方案', JP: 'グローバル輸入ソリューション', TH: 'โซลูชั่นการนำเข้าทั่วโลก', VN: 'Giải pháp nhập khẩu toàn cầu', ID: 'Solusi Impor Global', MY: 'Penyelesaian Import Global' },
      subtitle: { EN: 'Sourcing Quality for Local Excellence', KR: '최상의 품질을 국내 시장으로', CN: '为本地卓越提供优质采购', JP: '最高の品質を国内市場へ', TH: 'การจัดหาคุณภาพเพื่อความเป็นเลิศในท้องถิ่น', VN: 'Tìm nguồn cung ứng chất lượng cho sự xuất sắc tại địa phương', ID: 'Sumber Kualitas untuk Keunggulan Lokal', MY: 'Pencarian Kualiti untuk Kecemerlangan Tempatan' },
      desc: { EN: 'Our global sourcing network allows us to bring world-class premium brands to local markets.', KR: '우리의 글로벌 소싱 네트워크는 세계적인 프리미엄 브랜드를 로컬 시장으로 연결합니다.', CN: '我们的全球采购网络使我们能够将世界级的优质品牌带入本地市场。', JP: 'グローバルなソーシングネットワークにより、世界的なプレミアムブランドをローカル市場へと繋げます。', TH: 'เครือข่ายการจัดหาระดับโลกของเราช่วยให้เรานำเข้าแบรนด์ระดับพรีเมียมมาสู่ตลาดท้องถิ่น', VN: 'Mạng lưới cung ứng toàn cầu của chúng tôi cho phép chúng tôi mang các thương hiệu cao cấp thế giới đến thị trường địa phương.', ID: 'Jaringan sumber global kami memungkinkan kami menghadirkan merek premium kelas dunia ke pasar lokal.', MY: 'Rangkaian sumber global kami membolehkan kami membawa jenama premium bertaraf dunia ke pasaran tempatan.' }
    }
  },
  news: {
    header: { EN: 'Latest Insights', KR: '최신 인사이트', CN: '最新见解', JP: '最新インサイト', TH: 'ข้อมูลเชิงลึกที่สำคัญ', VN: 'Cập nhật mới nhất', ID: 'Wawasan Terbaru', MY: 'Wawasan Terkini' },
    subtitle: { EN: 'News & Updates', KR: '뉴스 및 업데이트', CN: '新闻与动态', JP: 'ニュース＆アップデート', TH: 'ข่าวสารและอัปเดต', VN: 'Tin tức & Cập nhật', ID: 'Berita & Pembaruan', MY: 'Berita & Kemas Kini' },
    viewAll: { EN: 'View All Posts', KR: '전체 보기', CN: '查看全部', JP: '全記事を見る', TH: 'ดูโพสต์ทั้งหมด', VN: 'Xem tất cả bài viết', ID: 'Lihat Semua Postingan', MY: 'Lihat Semua Catatan' },
    categories: {
      market: { EN: 'Market Insights', KR: '시장 통찰', CN: '市场见解', JP: '市場インサイト', TH: 'ข้อมูลเชิงลึกของตลาด', VN: 'Thông tin thị trường', ID: 'Wawasan Pasar', MY: 'Wawasan Pasaran' },
      company: { EN: 'Company News', KR: '회사 뉴스', CN: '公司新闻', JP: '会社ニュース', TH: 'ข่าวบริษัท', VN: 'Tin tức công ty', ID: 'Berita Perusahaan', MY: 'Berita Syarikat' },
      strategy: { EN: 'Strategy', KR: '전략', CN: '战略', JP: '戦略', TH: 'กลยุทธ์', VN: 'Chiến lược', ID: 'Strategi', MY: 'Strategi' },
    },
    titles: {
      t1: {
        EN: "2026 Global Trade Trends: The Shift Towards Resilient Supply Chains",
        KR: "2026 글로벌 무역 트렌드: 회복 탄력적 공급망으로의 전환",
        CN: "2026年全球贸易趋势：向韧性供应链转型",
        JP: "2026年グローバル貿易トレンド：回復力のあるサプライチェーンへの転換",
        TH: "แนวโน้มการค้าโลกปี 2026: การเปลี่ยนผ่านสู่ห่วงโซ่อุปทานที่ยืดหยุ่น",
        VN: "Xu hướng thương mại toàn cầu 2026: Chuyển dịch sang chuỗi cung ứng bền bỉ",
        ID: "Tren Perdagangan Global 2026: Peralihan Menuju Rantai Pasokan yang Tangguh",
        MY: "Trend Perdagangan Global 2026: Peralihan Menuju Rangkaian Bekalan Berdaya Tahan"
      },
      t2: {
        EN: "J PRO Trading Expands Logistics Network in Southeast Asia",
        KR: "J PRO Trading, 동남아시아 물류 네트워크 확장",
        CN: "J PRO Trading 扩大东南亚物流网络",
        JP: "J PRO Trading、東南アジアの物流ネットワークを拡大",
        TH: "J PRO Trading ขยายเครือข่ายโลจิสติกส์ในเอเชียตะวันออกเฉียงใต้",
        VN: "J PRO Trading mở rộng mạng lưới hậu cần tại Đông Nam Á",
        ID: "J PRO Trading Memperluas Jaringan Logistik di Asia Tenggara",
        MY: "J PRO Trading Meluaskan Rangkaian Logistik di Asia Tenggara"
      },
      t3: {
        EN: "The Importance of Digital Transformation in Wholesale Distribution",
        KR: "도매 유통 부문 디지털 전환의 중요성",
        CN: "批发分销领域数字化转型的重点",
        JP: "卸売・流通部門におけるデジタルトランスフォーメーションの重要性",
        TH: "ความสำคัญของการเปลี่ยนแปลงทางดิจิทัลในภาคการค้าส่ง",
        VN: "Tầm quan trọng của chuyển đổi số trong lĩnh vực phân phối bán buôn",
        ID: "Pentingnya Transformasi Digital dalam Distribusi Grosir",
        MY: "Kepentingan Transformasi Digital dalam Pengedaran Borong"
      }
    },
    page: {
      title: { EN: 'Partner Offers & Insights', KR: '파트너를 위한 특별한 제안', CN: '合作伙伴优惠与见解', JP: 'パートナー様へのご提案とインサイト', TH: 'ข้อเสนอสำหรับพันธมิตร', VN: 'Ưu đãi & Thông tin cho đối tác', ID: 'Penawaran & Wawasan Mitra', MY: 'Tawaran & Wawasan Rakan Kongsi' },
      desc: { EN: 'We provide strategic proposals and the latest market intelligence to empower our global partners.', KR: '우리는 글로벌 파트너들의 성장을 위해 전략적인 비즈니스 제안과 최신 시장 지능을 제공합니다.', CN: '我们提供战略建议和最新的市场情报，以为我们的全球合作伙伴赋能。', JP: 'グローバルパートナーの皆様の成長のために、戦略的なビジネス提案と最新の市場インテリジェンスを提供します。', TH: 'เรามอบข้อเสนอเชิงกลยุทธ์และข้อมูลการตลาดล่าสุดเพื่อเพิ่มศักยภาพให้กับพันธมิตรทั่วโลกของเรา', VN: 'Chúng tôi cung cấp các đề xuất chiến lược và thông tin thị trường mới nhất để hỗ trợ đối tác.', ID: 'Kami memberikan proposal strategis dan kecerdasan pasar terbaru untuk memberdayakan mitra global kami.', MY: 'Kami menyediakan cadangan strategik and risikan pasaran terkini untuk memperkasakan rakan kongsi global kami.' },
      offers: [
        {
          title: { EN: 'Exclusive Strategic Partnership Offer', KR: '독점적 전략 파트너십 제안', CN: '独家战略合作伙伴优惠', JP: '独占的戦略パートナーシップの提案', TH: 'ข้อเสนอพันธมิตรพิเศษ', VN: 'Ưu đãi đối tác chiến lược độc quyền', ID: 'Penawaran Kemitraan Strategis Eksklusif', MY: 'Tawaran Perkongsian Strategik Eksklusif' },
          desc: { 
            EN: 'Access premium distribution channels and prioritized supply chains optimized for the 2026 global market.', 
            KR: '2026년 글로벌 시장에 최적화된 프리미엄 유통 채널과 우선 공급망을 확보하세요.', 
            CN: '获取针对 2026 年全球市场优化的优质分销渠道和优先供应链。', 
            JP: '2026年のグローバル市場に最適化されたプレミアム流通チャネルと優先的なサプライチェーンを確保してください。', 
            TH: 'เข้าถึงช่องทางการจัดจำหน่ายระดับพรีเมียมและห่วงโซ่อุปทานที่สำคัญสำหรับปี 2026', 
            VN: 'Tiếp cận các kênh phân phối cao cấp và chuỗi cung ứng ưu tiên được tối ưu hóa cho năm 2026.', 
            ID: 'Akses saluran distribusi premium dan rantai pasokan prioritas yang dioptimalkan untuk pasar global 2026.', 
            MY: 'Akses saluran pengedaran premium and rantaian bekalan keutamaan yang dioptimumkan untuk pasaran global 2026.' 
          },
          image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=2074"
        },
        {
          title: { EN: 'Market Entry Acceleration Program', KR: '시장 진입 가속화 프로그램', CN: '市场进入加速计划', JP: '市場参入加速プログラム', TH: 'โปรแกรมเร่งการเข้าสู่ตลาด', VN: 'Chương trình tăng tốc gia nhập thị trường', ID: 'Program Akselerasi Penetrasi Pasar', MY: 'Program Pecutan Kemasukan Pasaran' },
          desc: { 
            EN: 'Accelerate your brand presence in Asian, USA, and European markets through our proven local expertise.', 
            KR: '우리의 검증된 로컬 전문성을 통해 아시아 및 미국, 유럽 시장에서 브랜드 인지도를 빠르게 확장하세요.', 
            CN: '通过我们久经考验的本地专业知识，加速您在亚洲、美国和欧洲市场的品牌影响力。', 
            JP: '実証済みのローカルな専門知識を通じて、アジア、米国、および欧州市場でのブランド認知度を迅速に拡大してください。', 
            TH: 'เร่งการรับรู้แบรนด์ในตลาดเอเชีย สหรัฐอเมริกา และยุโรป ผ่านความเชี่ยวชาญท้องถิ่นที่ผ่านการพิสูจน์แล้วของเรา', 
            VN: 'Thúc đẩy sự hiện diện thương hiệu của bạn tại thị trường Châu Á, Hoa Kỳ và Châu Âu thông qua chuyên môn của chúng tôi.', 
            ID: 'Percepat kehadiran merek Anda di pasar Asia, AS, dan Eropa melalui keahlian lokal kami yang terbukti.', 
            MY: 'Pecut kehadiran jenama anda di pasaran Asia, AS, dan Eropah melalui kepakaran tempatan kami yang terbukti.' 
          },
          image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2026"
        },
        {
          title: { EN: 'Logistics Optimization Initiative', KR: '물류 최적화 이니셔티브', CN: '物流优化计划', JP: '物流最適化イニシアチブ', TH: 'โครงการปรับปรุงโล지스틱ส์', VN: 'Sáng kiến tối ưu hóa hậu cần', ID: 'Inisiatif Optimalisasi Logistik', MY: 'Inisiatif Pengoptimuman Logistik' },
          desc: { EN: 'Reduce operational costs and improve delivery efficiency with our next-generation logistics network.', KR: '차세대 물류 네트워크를 통해 운영 비용을 절감하고 배송 효율성을 획기적으로 개선하세요.', CN: '通过我们的下一代物流网络，降低运营成本并提高交付效率。', JP: '次世代の物流ネットワークを通じて運営コストを削減し、配送効率を画期的に改善してください。', TH: 'ลดต้นทุนการดำเนินงานและเพิ่มประสิทธิภาพการจัดส่งด้วยเครือข่ายโลจิสติกส์ยุคใหม่ของเรา', VN: 'Giảm chi phí vận hành và cải thiện hiệu quả giao hàng với mạng lưới hậu cần thế hệ mới của chúng tôi.', ID: 'Kurangi biaya operasional dan tingkatkan efisiensi pengiriman dengan jaringan logistik generasi berikutnya kami.', MY: 'Kurangkan kos operasi and tingkatkan kecekapan penghantaran dengan rangkaian logistik generasi seterusnya kami.' },
          image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=2070"
        }
      ]
    }
  },
  privacy: {
    title: { EN: 'Privacy Policy', KR: '개인정보 처리방침', CN: '隐私政策', JP: 'プライバシーポリシー', TH: 'นโยบายความเป็นส่วนตัว', VN: 'Chính sách bảo mật', ID: 'Kebijakan Privasi', MY: 'Dasar Privasi' },
    lastUpdated: { EN: 'Last Updated: February 20, 2024', KR: '최종 수정일: 2024년 2월 20일', CN: '最后更新：2024年2月20일', JP: '最終更新日：2024年2월 20일', TH: 'อัปเดตล่าสุด: 20 กุมภาพันธ์ 2024', VN: 'Cập nhật lần cuối: 20 tháng 2, 2024', ID: 'Terakhir Diperbarui: 20 Februari 2024', MY: 'Terakhir Dikemas Kini: 20 Februari 2024' },
    intro: {
      EN: 'At J PRO Trading, we respect your privacy and are committed to protecting your personal data.',
      KR: 'J PRO Trading은 귀하의 개인정보를 존중하며 보호하기 위해 최선을 다하고 있습니다.',
      CN: '在 J PRO Trading，我们尊重您的隐私并致力于保护您的个人数据。',
      JP: 'J PRO Tradingでは、お客様のプライバシーを尊重し、個人データの保護に努めています。',
      TH: 'ที่ J PRO Trading เราเคารพในความเป็นส่วนตัวของคุณและมุ่งมั่นที่จะปกป้องข้อมูลส่วนบุคคลของคุณ',
      VN: 'Tại J PRO Trading, chúng tôi tôn trọng quyền riêng tư của bạn và cam kết bảo vệ dữ liệu cá nhân của bạn.',
      ID: 'Di J PRO Trading, kami menghormati privasi Anda dan berkomitmen untuk melindungi data pribadi Anda.',
      MY: 'Di J PRO Trading, kami menghormati privasi anda and komited untuk melindungi data peribadi anda.'
    },
    sections: [
      {
        title: { EN: '1. Information We Collect', KR: '1. 수집하는 정보', CN: '1. 我们收集的信息', JP: '1. 収集する情報', TH: '1. ข้อมูลที่เราเก็บรวบรวม', VN: '1. Thông tin chúng tôi thu thập', ID: '1. Informasi yang Kami Kumpulkan', MY: '1. Maklumat yang Kami Kumpul' },
        content: { EN: 'We collect information you provide directly to us when contacting us through our messaging services or email.', KR: '우리는 메시지 서비스나 이메일을 통해 귀하가 직접 제공하는 정보를 수집합니다.', CN: '当您通过我们的消息服务或电子邮件与我们联系时，我们会收集您直接提供给我们的信息。', JP: 'メッセージサービスやメールを通じて直接提供された情報を収集します。', TH: 'เราเก็บรวบรวมข้อมูลที่คุณให้ไว้โดยตรงเมื่อติดต่อเราผ่านบริการส่งข้อความหรืออีเมล', VN: 'Chúng tôi thu thập thông tin bạn cung cấp trực tiếp cho chúng tôi khi liên hệ qua tin nhắn hoặc email.', ID: 'Kami mengumpulkan informasi yang Anda berikan langsung kepada kami saat menghubungi kami melalui layanan perpesanan atau email.', MY: 'Kami mengumpul maklumat yang anda berikan secara langsung kepada kami apabila menghubungi kami melalui perkhidmatan pesanan atau e-mel.' }
      },
      {
        title: { EN: '2. How We Use Your Information', KR: '2. 정보 활용 방법', CN: '2. 我们如何使用您的信息', JP: '2. 情報の利用目的', TH: '2. วิธีที่เราใช้ข้อมูลของคุณ', VN: '2. Cách chúng tôi sử dụng thông tin', ID: '2. Bagaimana Kami Menggunakan Informasi Anda', MY: '2. Bagaimana Kami Menggunakan Maklumat Anda' },
        content: { EN: 'Your information is used solely to respond to your inquiries and manage our business partnership.', KR: '귀하의 정보는 귀하의 문의에 응답하고 비즈니스 파트너십을 관리하는 용도로만 사용됩니다.', CN: '您的信息仅用于回复您的咨询并管理我们的业务合作伙伴关系。', JP: 'お客様の情報は、お問い合わせへの回答、およびビジネスパートナーシップの管理目的のみに使用されます。', TH: 'ข้อมูลของคุณจะถูกใช้เพื่อตอบข้อสงสัยของคุณและจัดการพันธมิตรทางธุรกิจของเราเท่านั้น', VN: 'Thông tin của bạn chỉ được sử dụng để trả lời các thắc mắc và quản lý quan hệ đối tác kinh doanh.', ID: 'Informasi Anda digunakan semata-mata untuk menanggapi pertanyaan Anda dan mengelola kemitraan bisnis kami.', MY: 'Maklumat anda digunakan semata-mata untuk menjawab pertanyaan anda and menguruskan perkongsian perniagaan kami.' }
      }
    ]
  },
  footer: {
    desc: { EN: 'J PRO Trading is a strategic partner in global commerce, dedicated to excellence in trade.', KR: 'J PRO Trading은 글로벌 커머스의 전략적 파트너로서 무역 우수성에 전념하고 있습니다.', CN: 'J PRO Trading 是全球商业的战略合作伙伴，致力于卓越贸易。', JP: 'J PRO Tradingは、グローバル・コマースの戦略的パートナーとして、貿易の卓越性に専念しています。', TH: 'J PRO Trading เป็นพันธมิตรเชิงกลยุทธ์ในการพาณิชย์ระดับโลก มุ่งมั่นสู่ความเป็นเลิศในการค้า', VN: 'J PRO Trading là đối tác chiến lược trong thương mại toàn cầu, tận tâm vì sự xuất sắc.', ID: 'J PRO Trading adalah mitra strategis dalam perdagangan global, berdedikasi pada keunggulan.', MY: 'J PRO Trading ialah rakan strategik dalam perdagangan global, berdedikasi kepada kecemerlangan.' },
    messaging: { EN: 'Instant Messaging', KR: '실시간 메시지 문의', CN: '即时通讯', JP: 'インスタントメッセージ', TH: 'ส่งข้อความด่วน', VN: 'Nhắn tin tức thời', ID: 'Pesan Instan', MY: 'Pesanan Segera' },
    scanToConnect: { EN: 'Scan the QR code to add J PRO Boss', KR: 'QR 코드를 스캔하여 J PRO Boss를 친구로 추가하세요', CN: '扫描二维码添加 J PRO Boss', JP: 'QRコードをスキャンして J PRO Boss を追加してください', TH: 'สแกนคิวอาร์โค้ดเพื่อเพิ่ม J PRO Boss', VN: 'Quét mã QR để thêm J PRO Boss', ID: 'Pindai kode QR untuk menambahkan J PRO Boss', MY: 'Imbas kod QR untuk menambah J PRO Boss' },
    contact: { EN: 'Contact Us', KR: '문의하기', CN: '联系我们', JP: 'お問い合わせ', TH: 'ติดต่อเรา', VN: 'Liên hệ', ID: 'Hubungi Kami', MY: 'Hubungi Kami' },
    address: { EN: '102-3107 Beomeo W, 2436 Dalgubeol-daero, Suseong-gu, Daegu, Republic of Korea', KR: '대한민국 대구광역시 수성구 달구벌대로 2436, 범어W 102동 3107호', CN: '大韩民国大邱广域市寿城区达句伐大路2436号, Beomeo W 102-3107', JP: '大韓民国大邱広域市寿城区達句伐大路2436、ボムW 102-3107', TH: '102-3107 Beomeo W, 2436 Dalgubeol-daero, Suseong-gu, Daegu, Republic of Korea', VN: '102-3107 Beomeo W, 2436 Dalgubeol-daero, Suseong-gu, Daegu, Republic of Korea', ID: '102-3107 Beomeo W, 2436 Dalgubeol-daero, Suseong-gu, Daegu, Republic of Korea', MY: '102-3107 Beomeo W, 2436 Dalgubeol-daero, Suseong-gu, Daegu, Republic of Korea' },
    links: { EN: 'Quick Links', KR: '빠른 링크', CN: '快速链接', JP: 'クイックリンク', TH: 'ลิงก์ด่วน', VN: 'Liên kết nhanh', ID: 'Tautan Cepat', MY: 'Pautan Pantas' },
  }
};
