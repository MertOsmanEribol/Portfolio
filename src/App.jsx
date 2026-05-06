import "./App.css";
import card1 from "/Imgs/sermak.png";
import card2 from "/Imgs/MoeEco.png";
import card4 from "/Imgs/Cncsite.png";
import card5 from "/Imgs/SpeedYat.png";
import card6 from "/Imgs/formoto1.jpg";
import card61 from "/Imgs/formoto2.jpg";
import card7 from "/Imgs/analizoto1.png";
import card71 from "/Imgs/analizoto2.png";
import card72 from "/Imgs/analizoto3.png";
import card73 from "/Imgs/analizoto4.png";
import card74 from "/Imgs/analizoto5.png";
import { useState, useEffect, useCallback } from "react";
import {
  FaHtml5, FaCss3Alt, FaReact, FaNodeJs,
  FaBootstrap, FaDatabase, FaGithub, FaLinkedin,
  FaEnvelope, FaExternalLinkAlt,
  FaChevronLeft, FaChevronRight, FaDownload,
} from "react-icons/fa";
import { SiJavascript, SiTailwindcss, SiN8N } from "react-icons/si";

/* Yeteneklerim ayarları */
const SKILLS = [
  { icon: <FaHtml5 />,       label: "HTML5",      color: "text-orange-500" },
  { icon: <FaCss3Alt />,     label: "CSS3",       color: "text-blue-500"   },
  { icon: <SiJavascript />,  label: "JavaScript", color: "text-yellow-400" },
  { icon: <FaReact />,       label: "React",      color: "text-cyan-400"   },
  { icon: <FaNodeJs />,      label: "Node.js",    color: "text-green-500"  },
  { icon: <SiTailwindcss />, label: "Tailwind",   color: "text-sky-400"    },
  { icon: <FaBootstrap />,   label: "Bootstrap",  color: "text-purple-500" },
  { icon: <FaDatabase />,    label: "MSSQL",      color: "text-blue-400"   },
  { icon: <SiN8N />,         label: "n8n",        color: "text-orange-400" },
];

const PROJECTS = [
  {
    img: card1, title: "Sermak Makina",
    tags: ["Javascript","React", "Tailwind","Aktif"],
    desc: "Kurumsal makina firması için sıfırdan tasarlandı. Backend entegrasyonu tamamlandığında canlıya alınacak.",
    url: "https://www.sermakmkn.com/",
  },
  {
    img: card5, title: "Speed Yat",
    tags: ["React", "Tailwind", "Javascript","Demo"],
    desc: "Yat kiralama firması için interaktif kurumsal site demosu. Animasyonlu hero bölümü ve rezervasyon akışı.",
    url: "https://speed-yat.vercel.app/",
  },
  {
    img: card4, title: "CNC Makine Site",
    tags: ["React", "Tailwind","Javascript","Demo"],
    desc: "Bir CNC firması için geliştirme aşamasındaki kurumsal site. Ürün kataloğu ve iletişim modülü.",
    url: "https://mertosmaneribol.github.io/Cncsite/",
  },
  {
    img: card2, title: "MoeEco",
    tags: ["React", "Node.js", "MSSQL", "Express.js","RESTful API","Google Cloud","DB Aktif Değil"],
    desc: " Frontend tarafında React ve Tailwind CSS ile mobil öncelikli bir deneyim sunarken; backend kısmında Node.js ve Express kullanarak Google Cloud üzerinde koşan MSSQL veritabanı ile entegre bir REST API yapısı kurdum. Vercel ve Google Cloud dağıtımlarıyla canlıya aldığım bu projede, dinamik ürün yönetimi ve akıcı sepet deneyimini performans odaklı bir yapıda birleştirdim",
    url: "https://moe-ecomerce.vercel.app/Homepage",
    
    
    
  },
  {
    title: " Uçtan Uca Form & Otomasyon Sistemi",
    tags: ["React", "Tailwind","N8N","Otomasyon","ClaudeAi","RESTful API"],
    desc: "React ile oluşturduğum formdan gelen verileri n8n üzerinde kurguladığım dinamik akışlarla işliyor; CV'leri Claude 3.5 Haiku ile 9 farklı kritere göre puanlayarak objektif bir değerlendirme sunuyorum. Google Drive ve Sheets API entegrasyonuyla kişiye özel dosyalama ve dinamik raporlama süreçlerini, WhatsApp Business API üzerinden ise anlık bildirim mekanizmasını manuel müdahale gerektirmeksizin %100 otonom hale getirdim.",
    url: null, soon: true,
    photos: [card6, card61],
    slides: [
      { label: "İş akışı durumu",   note: "Aktif" },
      { label: "Teknoloji", note: "N8N+ React + Tailwind + GoogleApi"  },
      { label: "Durum",     note: "SaaS paketleme"  },
    ],
  },
  {
    title: "Yapay Zeka Destekli İhale Takip Analiz Otomasyonu",
    tags: ["n8n","Python","Selenium","Supabase","PostgreSQL", "Javascript","Docker","Otomasyon","RESTful API"],
    desc: "Kamu ihalelerini Selenium ile otonom olarak tespit eden, Claude AI ile 100 üzerinden puanlayıp yüksek potansiyelli olanları anlık raporlayan bir çözüm geliştirdim.Sistemim her pazar günü otonom olarak bir haftalık özet ve analiz pdfsi üretip kullanıcıya gönderiyor. n8n, Python ve Supabase altyapısıyla kurguladığım bu sistem; veri toplama, risk analizi ve PDF raporlama süreçlerini sıfır insan müdahalesiyle yönetiyor. Ayrıca entegre ettiğim hata yönetim sistemi (Error Logger) sayesinde sürecin kesintisiz çalışmasını sağlıyorum",
    url: null, soon: true,
    photos: [card7, card71, card72, card73,card74],
    slides: [
      { label: "İş Akışı Durumu",  note: "Aktif ve Local kullanımda" },
      { label: "Teknoloji",  note: "N8n + Python(Selenium)+ Supabase(Postgre) +Docker + Claude Haiku 4.5 + Gotenberg (HTML → PDF)"   },
      { label: "Durum",  note: "Saas Paketleme ve Sunum "             },
    ],
  },
];

const SOCIALS = [
  { href: "https://github.com/MertOsmanEribol",      icon: <FaGithub />,   label: "GitHub"   },
  { href: "https://www.linkedin.com/in/merteribol/", icon: <FaLinkedin />, label: "LinkedIn" },
  { href: "mailto:mertosmaneribol@hotmail.com",      icon: <FaEnvelope />, label: "E-posta"  },
];

/* CV indirme ayarları */
const CV_DRIVE_DOWNLOAD_URL = "https://drive.google.com/uc?export=download&id=1Ui4ntvbRZ2QAdpxRvIuEZeB5kX83OLBG";

function handleCvDownload() {
  window.open(CV_DRIVE_DOWNLOAD_URL, "_blank");
}

/* Daktiolo efekt ayarları (TypeWriter) */
function TypeWriter({ words }) {
  const [idx, setIdx] = useState(0);
  const [text, setText] = useState("");
  const [del, setDel] = useState(false);

  useEffect(() => {
    const w = words[idx];
    const speed = del ? 60 : 110;
    const t = setTimeout(() => {
      if (!del && text === w)  { setTimeout(() => setDel(true), 1200); return; }
      if (del  && text === "") { setDel(false); setIdx(i => (i + 1) % words.length); return; }
      setText(del ? text.slice(0, -1) : w.slice(0, text.length + 1));
    }, speed);
    return () => clearTimeout(t);
  }, [text, del, idx, words]);

  return (
    <span className="text-white/90">
      {text}
      <span className="text-amber-400 animate-pulse ml-0.5">|</span>
    </span>
  );
}

/* Slider ayarlarım*/
function PhotoSlider({ photos }) {
  const [cur, setCur] = useState(0);
  const [dir, setDir] = useState(null); // "left" | "right"
  const [animating, setAnimating] = useState(false);
  const timerRef = useRef(null);

  const go = useCallback((nextIdx, direction) => {
    if (animating) return;
    setDir(direction);
    setAnimating(true);
    setTimeout(() => {
      setCur(nextIdx);
      setAnimating(false);
      setDir(null);
    }, 320);
  }, [animating]);

  const prev = () => go((cur - 1 + photos.length) % photos.length, "left");
  const next = useCallback(() => go((cur + 1) % photos.length, "right"), [cur, photos.length, go]);

  // otomatik geçme
  useEffect(() => {
    timerRef.current = setInterval(next, 10000);
    return () => clearInterval(timerRef.current);
  }, [next]);

  const slideClass = animating
    ? dir === "right"
      ? "translate-x-[-8px] opacity-0"
      : "translate-x-[8px] opacity-0"
    : "translate-x-0 opacity-100";

  return (
    <div className="relative h-48 bg-[#0d0d10] overflow-hidden group">
      {/* fotoğraf */}
      <img
        key={cur}
        src={photos[cur]}
        alt={`slide-${cur}`}
        className={`w-full h-full object-cover transition-all duration-300 ease-out ${slideClass}`}
      />

      {/* karartma overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

      {/* ok butonları — hover'da görünür */}
      <button
        onClick={e => { e.stopPropagation(); clearInterval(timerRef.current); prev(); }}
        className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center rounded-full bg-black/50 border border-white/10 text-white/70 hover:text-amber-400 hover:border-amber-400/40 opacity-0 group-hover:opacity-100 transition-all duration-200"
      >
        <FaChevronLeft className="text-xs" />
      </button>
      <button
        onClick={e => { e.stopPropagation(); clearInterval(timerRef.current); next(); }}
        className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center rounded-full bg-black/50 border border-white/10 text-white/70 hover:text-amber-400 hover:border-amber-400/40 opacity-0 group-hover:opacity-100 transition-all duration-200"
      >
        <FaChevronRight className="text-xs" />
      </button>

      {/* nokta göstergesi */}
      <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 flex gap-1.5">
        {photos.map((_, i) => (
          <button
            key={i}
            onClick={e => { e.stopPropagation(); go(i, i > cur ? "right" : "left"); }}
            className={`h-1 rounded-full transition-all duration-300 ${i === cur ? "w-5 bg-amber-400" : "w-1.5 bg-white/30"}`}
          />
        ))}
      </div>

      {/* Otomasyon belirten rozet */}
      <span className="absolute top-2.5 right-2.5 bg-amber-400/10 border border-amber-400/25 text-amber-400 text-[0.62rem] uppercase tracking-wider px-2.5 py-0.5 rounded-full">
        Otomasyon
      </span>
    </div>
  );
}

// useRef'i burada import etmeyi unuttuk, düzeltiyoruz
import { useRef } from "react";

/* ── InfoSlider ──────────────────────────────────────────── */
function InfoSlider({ slides }) {
  const [cur, setCur] = useState(0);
  return (
    <div className="mt-3 rounded-xl border border-amber-500/20 bg-amber-500/5 p-4">
      <div className="flex items-center justify-between mb-2.5">
        <button
          onClick={() => setCur(i => (i - 1 + slides.length) % slides.length)}
          className="w-7 h-7 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 text-white/50 hover:text-amber-400 hover:border-amber-400/40 transition-colors"
        >
          <FaChevronLeft className="text-xs" />
        </button>
        <span className="text-amber-400 text-xs uppercase tracking-widest font-semibold">
          {slides[cur].label}
        </span>
        <button
          onClick={() => setCur(i => (i + 1) % slides.length)}
          className="w-7 h-7 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 text-white/50 hover:text-amber-400 hover:border-amber-400/40 transition-colors"
        >
          <FaChevronRight className="text-xs" />
        </button>
      </div>
      <p className="text-center text-xs text-white/45 leading-relaxed">{slides[cur].note}</p>
      <div className="flex justify-center gap-1.5 mt-2.5">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCur(i)}
            className={`h-1 rounded-full transition-all duration-300 ${i === cur ? "w-4 bg-amber-400" : "w-1.5 bg-white/15"}`}
          />
        ))}
      </div>
    </div>
  );
}

/* ── App ─────────────────────────────────────────────────── */
export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <div className="bg-[#0a0a0c] text-white/90 font-mono min-h-screen overflow-x-hidden">

      {/* grid overlay */}
      <div className="fixed inset-0 z-0 pointer-events-none" style={{
        backgroundImage: "linear-gradient(rgba(245,158,11,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(245,158,11,0.03) 1px,transparent 1px)",
        backgroundSize: "64px 64px",
      }} />

      {/* background image */}
      <div
        className="fixed inset-0 z-0 pointer-events-none bg-cover bg-center bg-fixed opacity-[0.07]"
        style={{ backgroundImage: "url('/Imgs/backgroundimg3.jpg')" }}
      />

      {/* ── NAV ── */}
      <nav className={`sticky top-0 z-50 px-[5vw] py-3.5 flex items-center justify-between backdrop-blur-lg transition-all duration-300 ${scrolled ? "bg-black/90 border-b border-amber-500/20" : "bg-black/60 border-b border-white/5"}`}>
        <span className="font-['Plus_Jakarta_Sans',sans-serif] text-lg font-extrabold text-amber-400 tracking-tight">
          MOE<span className="text-white/85"> .Dev</span>
        </span>
        <div className="hidden md:flex gap-7">
          {[["#skills","Yetenekler"],["#projects","Projeler"],["mailto:mertosmaneribol@hotmail.com","İletişim"]].map(([h,l]) => (
            <a key={l} href={h} className="text-white/45 hover:text-amber-400 transition-colors text-xs uppercase tracking-widest">{l}</a>
          ))}
        </div>
        <div className="flex items-center gap-4">
          <div className="flex gap-4">
            {SOCIALS.map(({ href, icon, label }) => (
              <a key={label} href={href} aria-label={label}
                className="text-white/45 hover:text-amber-400 hover:-translate-y-0.5 transition-all text-lg"
                target={href.startsWith("mailto") ? undefined : "_blank"} rel="noopener noreferrer">
                {icon}
              </a>
            ))}
          </div>
          <button className="md:hidden text-white/70 hover:text-amber-400 transition-colors text-xl"
            onClick={() => setMenuOpen(o => !o)} aria-label="Menü">
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="md:hidden bg-black/95 border-b border-amber-500/15 px-[5vw] py-5 flex flex-col gap-4 relative z-40">
          {[["#skills","Yetenekler"],["#projects","Projeler"],["mailto:mertosmaneribol@hotmail.com","İletişim"]].map(([h,l]) => (
            <a key={l} href={h} onClick={() => setMenuOpen(false)}
              className="text-white/60 hover:text-amber-400 transition-colors text-sm uppercase tracking-widest">{l}</a>
          ))}
        </div>
      )}

      {/* ── HERO ── */}
      <section className="relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-16 px-[5vw] pt-20 pb-24 lg:pt-[90px] lg:pb-[100px] min-h-[88vh]">
          <div className="flex-1 max-w-xl text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-amber-500/8 border border-amber-500/22 px-4 py-1.5 rounded-full text-amber-400 text-[0.68rem] uppercase tracking-widest mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
              Çalışmaya Açık
            </div>
            <h1 className="font-['Plus_Jakarta_Sans',sans-serif] text-[clamp(2.4rem,5.5vw,4.2rem)] font-extrabold leading-[1.05] tracking-[-2px] mb-5">
              Mert Osman<br /><span className="text-amber-400">Eribol</span>
            </h1>
            <div className="text-white/50 text-base mb-7 min-h-7">
              <span className="text-amber-400 mr-1.5">{">"}</span>
              <TypeWriter words={["Frontend Developer", "React Geliştirici", "n8n Otomasyon"]} />
            </div>
            <p className="text-sm text-white/45 leading-[1.85] max-w-[440px] mx-auto lg:mx-0 mb-10">
              <strong className="text-white/85 font-medium">HTML, CSS, Tailwind, Bootstrap, JavaScript ve React</strong> ile projeler geliştirdim.{" "}
              <strong className="text-white/85 font-medium">n8n otomasyonları</strong> ile yapay zeka destekli iş akışları kurdum.{" "}
              <strong className="text-white/85 font-medium">Node.js ve MSSQL</strong> ile back-end tecrübem de bulunuyor.
            </p>
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
              <a href="#projects" className="px-7 py-3 rounded-lg bg-amber-400 text-[#0a0a0c] text-sm font-bold hover:bg-amber-300 hover:-translate-y-0.5 transition-all">
                Projeleri Gör
              </a>
              <a href="mailto:mertosmaneribol@hotmail.com"
                className="px-7 py-3 rounded-lg border border-white/14 text-white/85 text-sm hover:border-amber-400 hover:text-amber-400 hover:-translate-y-0.5 transition-all inline-flex items-center gap-2">
                <FaEnvelope className="text-xs" /> Bana Yaz
              </a>
              <button
                onClick={handleCvDownload}
                className="px-7 py-3 rounded-lg border cursor-pointer border-white/14 text-white/85 text-sm hover:border-amber-400 hover:text-amber-400 hover:-translate-y-0.5 transition-all inline-flex items-center gap-2"
              >
                <FaDownload className="text-xs" /> Özgeçmişi İndir
              </button>
            </div>
          </div>

          <div className="flex-1 flex justify-center">
            <div className="relative w-[300px] h-[300px] lg:w-[360px] lg:h-[360px]">
              <div className="absolute inset-[-18px] rounded-full border border-dashed border-amber-400/25 animate-spin" style={{ animationDuration: "22s" }} />
              <div className="absolute inset-[-34px] rounded-full border border-dashed border-amber-400/10 animate-spin" style={{ animationDuration: "36s", animationDirection: "reverse" }} />
              <img
                src="https://avatars.githubusercontent.com/u/147248513?s=400&u=2075f965132830262bef7656ddab67004a691e8b&v=4"
                alt="Mert Osman Eribol"
                className="w-full h-full rounded-full object-cover border-2 border-amber-400/30 relative z-10"
              />
              <div className="hidden xl:block absolute z-20 top-7 -left-[88px] bg-[#18181c] border border-white/8 rounded-lg px-3.5 py-2 text-[0.7rem] text-white/70 whitespace-nowrap">
                <span className="text-amber-400">■ </span>Frontend Dev
              </div>
              <div className="hidden xl:block absolute z-20 bottom-8 -right-[76px] bg-[#18181c] border border-white/8 rounded-lg px-3.5 py-2 text-[0.7rem] text-white/70 whitespace-nowrap">
                <span className="text-amber-400">■ </span>Istanbul, TR
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="relative mx-[5vw] h-px bg-white/7 z-10">
        <div className="absolute top-0 left-0 w-20 h-px bg-amber-400" />
      </div>

      {/* ── SKILLS ── */}
      <section id="skills" className="relative z-10 px-[5vw] py-20">
        <p className="text-amber-400 text-[0.68rem] uppercase tracking-[2px] mb-2 before:content-['//\00a0']">yetenekler</p>
        <h2 className="font-['Plus_Jakarta_Sans',sans-serif] text-[clamp(1.8rem,3vw,2.5rem)] font-extrabold tracking-[-1.5px] mb-11">
          Teknoloji Yığınım
        </h2>
        <div className="flex flex-wrap gap-2.5">
          {SKILLS.map(({ icon, label, color }) => (
            <div key={label}
              className="flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-[#18181c] border border-white/8 text-sm font-medium cursor-default hover:-translate-y-1 hover:bg-white/4 transition-all duration-200"
            >
              <span className={`text-xl leading-none ${color}`}>{icon}</span>
              <span>{label}</span>
            </div>
          ))}
        </div>
      </section>

      <div className="relative mx-[5vw] h-px bg-white/7 z-10">
        <div className="absolute top-0 left-0 w-20 h-px bg-amber-400" />
      </div>

      {/* ── PROJECTS ── */}
      <section id="projects" className="relative z-10 px-[5vw] py-20">
        <p className="text-amber-400 text-[0.68rem] uppercase tracking-[2px] mb-2 before:content-['//\00a0']">projeler</p>
        <h2 className="font-['Plus_Jakarta_Sans',sans-serif] text-[clamp(1.8rem,3vw,2.5rem)] font-extrabold tracking-[-1.5px] mb-11">
          Geliştirdiğim İşler
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
          {PROJECTS.map(({ img, photos, title, tags, desc, url, soon, slides }) => (
            <div key={title}
              className={`bg-[#111114] rounded-2xl border border-white/7 overflow-hidden flex flex-col hover:-translate-y-1.5 hover:border-amber-400/30 transition-all duration-250 ${soon ? "opacity-75" : ""}`}
            >
             
              {soon && photos
                ? <PhotoSlider photos={photos} />
                : <div className="relative h-48 bg-[#0d0d10] overflow-hidden">
                    {img
                      ? <img src={img} alt={title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                      : <div className="w-full h-full flex items-center justify-center">
                          <span className="font-mono text-4xl font-bold text-white/6 tracking-[-2px]">{"</>"}</span>
                        </div>
                    }
                  </div>
              }

              <div className="p-5 flex flex-col gap-2.5 flex-1">
                <div className="flex flex-wrap gap-1.5">
                  {tags.map(t => (
                    <span key={t} className="text-[0.62rem] uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-amber-400/7 border border-amber-400/18 text-amber-400">{t}</span>
                  ))}
                </div>
                <h3 className="font-['Plus_Jakarta_Sans',sans-serif] text-base font-bold tracking-tight">{title}</h3>
                <p className="text-[0.78rem] text-white/40 leading-relaxed flex-1">{desc}</p>

                {url
                  ? <a href={url} target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-amber-400 text-[0.76rem] font-semibold mt-1 hover:opacity-70 transition-opacity">
                      Siteye Git <FaExternalLinkAlt className="text-[0.65rem]" />
                    </a>
                  : slides && <InfoSlider slides={slides} />
                }
                
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="relative z-10 border-t border-white/7 px-[5vw] py-9 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <p className="text-[0.74rem] text-white/30">
          © {new Date().getFullYear()} <span className="text-amber-400">Mert Osman Eribol</span> — Tüm Hakları Saklıdır
        </p>
        <div className="flex gap-4">
          {SOCIALS.map(({ href, icon, label }) => (
            <a key={label} href={href} aria-label={label}
              className="text-white/35 hover:text-amber-400 hover:-translate-y-0.5 transition-all text-lg"
              target={href.startsWith("mailto") ? undefined : "_blank"} rel="noopener noreferrer">
              {icon}
            </a>
          ))}
        </div>
      </footer>
    </div>
  );
}