const projectImage = (filename) => `${import.meta.env.BASE_URL}assets/images/portfolio/${filename}`;
const projectImageSrcset = (stem, widths = [480, 800, 1120]) => widths
  .map((width) => `${projectImage(`${stem}-${width}.webp`)} ${width}w`)
  .join(", ");

export const projects = [
  {
    category: "portfolio",
    title: { en: "Youssef El-Sayed Portfolio", ar: "Youssef El-Sayed Portfolio" },
    description: { en: "A visual portfolio for creative work and personal presentation.", ar: "بورتفوليو بصري لعرض الأعمال الإبداعية وتقديم الهوية الشخصية." },
    image: projectImage("youssef-el-sayed-800.webp"),
    imageSrcset: projectImageSrcset("youssef-el-sayed", [480, 800, 893]),
    imageWidth: 893,
    imageHeight: 768,
    url: "https://youssef-el-sayed-portfolio.pages.dev/"
  },
  {
    category: "portfolio",
    title: { en: "Rihal Portfolio", ar: "Rihal Portfolio" },
    description: { en: "A story-led portfolio experience for a travel and creative brand.", ar: "تجربة بورتفوليو قصصية لعلامة في السفر والمحتوى الإبداعي." },
    image: projectImage("rihal-portfolio-800.webp"),
    imageSrcset: projectImageSrcset("rihal-portfolio"),
    imageWidth: 1120,
    imageHeight: 800,
    url: "https://rihal-portfolio.pages.dev/"
  },
  {
    category: "portfolio",
    title: { en: "Kareem Portfolio", ar: "Kareem Portfolio" },
    description: { en: "A polished portfolio built to make selected work feel memorable.", ar: "بورتفوليو مصقول يجعل الأعمال المختارة أكثر حضورًا وتذكرًا." },
    image: projectImage("kareem-portfolio-800.webp"),
    imageSrcset: projectImageSrcset("kareem-portfolio"),
    imageWidth: 1120,
    imageHeight: 800,
    url: "https://qutoof-solutions.github.io/kareem-portfolio/"
  },
  {
    category: "website",
    title: { en: "Design Studio", ar: "Design Studio" },
    description: { en: "A premium studio website with a clear visual point of view.", ar: "موقع استوديو احترافي بهوية بصرية واضحة وحضور مميز." },
    image: projectImage("design-studio-800.webp"),
    imageSrcset: projectImageSrcset("design-studio"),
    imageWidth: 1120,
    imageHeight: 800,
    url: "https://design-studio-one.pages.dev/"
  },
  {
    category: "website",
    title: { en: "Ayada Dental Clinic", ar: "Ayada Dental Clinic" },
    description: { en: "A trustworthy clinic website designed around clarity and action.", ar: "موقع عيادة موثوق مصمم حول الوضوح وسهولة اتخاذ الخطوة التالية." },
    image: projectImage("care-dental-center-800.webp"),
    imageSrcset: projectImageSrcset("care-dental-center"),
    imageWidth: 1120,
    imageHeight: 800,
    url: "https://ayada-clinic-demo.pages.dev/"
  },
  {
    category: "website",
    title: { en: "Yaser Aladawy Law Office", ar: "Yaser Aladawy Law Office" },
    description: { en: "A professional legal website with an authoritative, focused tone.", ar: "موقع قانوني احترافي بنبرة موثوقة ومركزة." },
    image: projectImage("yaser-aladawy-800.webp"),
    imageSrcset: projectImageSrcset("yaser-aladawy"),
    imageWidth: 1120,
    imageHeight: 800,
    url: "https://qutoof-solutions.github.io/yaser-aladawy/"
  },
  {
    category: "website",
    title: { en: "Luna Beauty Studio", ar: "Luna Beauty Studio" },
    description: { en: "A beauty brand website that puts atmosphere and services first.", ar: "موقع لعلامة تجميل يضع الأجواء والخدمات في الواجهة." },
    image: projectImage("luna-makeup-artist-800.webp"),
    imageSrcset: projectImageSrcset("luna-makeup-artist"),
    imageWidth: 1120,
    imageHeight: 800,
    url: "https://luna-makeup-artist.pages.dev/"
  },
  {
    category: "landing",
    title: { en: "AURELLE Luxury Perfume", ar: "AURELLE Luxury Perfume" },
    description: { en: "A focused product landing page for a luxury fragrance launch.", ar: "صفحة هبوط مركزة لإطلاق عطر فاخر." },
    image: projectImage("aurelle-no-01-800.webp"),
    imageSrcset: projectImageSrcset("aurelle-no-01"),
    imageWidth: 1120,
    imageHeight: 800,
    url: "https://vanta-time-demo.pages.dev/"
  },
  {
    category: "landing",
    title: { en: "Légende Noire Perfume", ar: "Légende Noire Perfume" },
    description: { en: "An editorial perfume landing page with a strong sense of mood.", ar: "صفحة هبوط تحريرية لعطر بإحساس بصري ومزاج قوي." },
    image: projectImage("legende-noire-800.webp"),
    imageSrcset: projectImageSrcset("legende-noire"),
    imageWidth: 1120,
    imageHeight: 800,
    url: "https://perfume-landing-8nd.pages.dev/"
  },
  {
    category: "landing",
    title: { en: "Store One — Sneakers Product", ar: "Store One — Sneakers Product" },
    description: { en: "A product-first landing page built to make one offer feel irresistible.", ar: "صفحة هبوط تركز على المنتج وتجعل العرض الواحد أكثر جاذبية." },
    image: projectImage("store-one-sneakers-800.webp"),
    imageSrcset: projectImageSrcset("store-one-sneakers"),
    imageWidth: 1120,
    imageHeight: 800,
    url: "https://landing-page-new-27z.pages.dev/"
  }
];
