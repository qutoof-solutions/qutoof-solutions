const projectImage = (filename) => `${import.meta.env.BASE_URL}assets/images/portfolio/${filename}`;

export const projects = [
  {
    category: "portfolio",
    title: { en: "Luna Makeup Artist", ar: "Luna Makeup Artist" },
    description: { en: "Bridal makeup artist portfolio", ar: "بورتفوليو مكياج العروس والمناسبات" },
    image: projectImage("luna-makeup-artist.webp"),
    url: "https://luna-makeup-artist.pages.dev/"
  },
  {
    category: "portfolio",
    title: { en: "Kareem Portfolio", ar: "كريم الشريف" },
    description: { en: "Interior design portfolio", ar: "بورتفوليو تصميم داخلي" },
    image: projectImage("kareem-portfolio.webp"),
    url: "https://kram2556-dot.github.io/kareem-portfolio/"
  },
  {
    category: "portfolio",
    title: { en: "Youssef El-Sayed", ar: "يوسف السيد" },
    description: { en: "Graphic design and visual identity portfolio", ar: "بورتفوليو تصميم جرافيك وهوية بصرية" },
    image: projectImage("youssef-el-sayed.webp"),
    url: "https://youssef-el-sayed-portfolio.pages.dev/"
  },
  {
    category: "landing",
    title: { en: "Légende Noire", ar: "Légende Noire" },
    description: { en: "Arabic fragrance product landing page", ar: "صفحة هبوط عربية لمنتج عطر" },
    image: projectImage("legende-noire.webp"),
    url: "https://perfume-landing-8nd.pages.dev/"
  },
  {
    category: "landing",
    title: { en: "Yasser Al-Adawi Law Office", ar: "مكتب ياسر العدوي" },
    description: { en: "Law office landing page", ar: "صفحة هبوط لمكتب محاماة" },
    image: projectImage("yasser-law-office.webp"),
    url: "https://kram2556-dot.github.io/luna-master/"
  },
  {
    category: "landing",
    title: { en: "AURELLE No. 01", ar: "AURELLE No. 01" },
    description: { en: "Perfume product landing page", ar: "صفحة هبوط لمنتج عطر" },
    image: projectImage("aurelle-no-01.webp"),
    url: "https://vanta-time-demo.pages.dev/"
  },
  {
    category: "website",
    title: { en: "Care Dental Center", ar: "مركز Care Dental Center" },
    description: { en: "Dental clinic website", ar: "موقع لمركز أسنان" },
    image: projectImage("care-dental-center.webp"),
    url: "https://ayada-clinic-demo.pages.dev/"
  },
  {
    category: "website",
    title: { en: "Decor Studio", ar: "Decor Studio" },
    description: { en: "Interior design studio website", ar: "موقع لاستوديو تصميم داخلي" },
    image: projectImage("decor-studio.webp"),
    url: "https://decor-studio-78m.pages.dev/"
  },
  {
    category: "website",
    title: { en: "Rihal Travel Studio", ar: "Rihal Travel Studio" },
    description: { en: "Travel studio website", ar: "موقع لاستوديو رحلات" },
    image: projectImage("rihal-travel-studio.webp"),
    url: "https://studio-kayan-design.pages.dev/"
  }
];
