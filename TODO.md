# TODO — Qutoof Solutions

## هوية العلامة وبنية الملفات
- [x] **هوية قطوف والهيكل المطلوب:** استخدم الشعار المرفق المطابق تمامًا في `/assets/images/logo.png`. الألوان: Primary Black `#0F1419`، Brand Green `#0ABF8A` / `#10B981`، Background Beige `#F9F7F2` / `#F5F3EF`، White `#FFFFFF` للبطاقات، وGray Text `#6B7280`. اجعل الموقع فاتحًا وليس داكنًا، بأسلوب Minimal Tech وخطوط sans مستديرة لا serif؛ EN: Satoshi أو General Sans أو Inter، Bold لـ Qutoof، وtracking `0.3em` لـ SOLUTIONS؛ AR: IBM Plex Sans Arabic. استخدم الخطين الأفقيين الأخضرين كفواصل أسفل العناوين، والأخضر لإبراز اللمسات والإحصاءات وحالات hover. أنشئ `/css/main.css` و`/css/animations.css` و`/js/main.js` و`/js/lang.js`. خلفية الموقع `#F9F7F2` مع نسيج ضوضاء 1%؛ الحد الأقصى لعرض المحتوى 1200px.

## التنقل والمحتوى واللغتان
- [x] **التنقل وHero ثنائي اللغة:** رأس أبيض زجاجي ضبابي sticky، شعار إلى اليسار، تنقل في الوسط، ومبدل EN/AR وزر Contact في الجهة اليمنى؛ تصميم متجاوب. اللغة EN افتراضيًا، وعند AR تُضبط `dir="rtl"` ويُستخدم IBM Plex Sans Arabic ويُترجم كل المحتوى إلى العربية، مع حفظ الاختيار في `localStorage`. يتضمن Hero العنوان “We Turn Decor Stores Into Selling Machines” والعربي “نحول متاجر الديكور إلى ماكينات بيع”، والنص “Websites that close clients while you sleep”، وزر View Work أسود وزر WhatsApp بإطار أخضر.
- [x] **الأقسام ومحتواها:** Services، Portfolio يضم 9 بطاقات، Process، Pricing بالريال السعودي SAR، Testimonials، Contact، والتذييل؛ بطاقات بيضاء بحواف دائرية 24px وظل `0 8px 30px rgba(0,0,0,0.04)` وحد 1px بلون `#eee`. أدرج شارات إحصاء خضراء مثل “+125% sales”. أي إحصاءات/أعمال/شهادات غير مؤكدة تُعرض كأمثلة موضحة لا كادعاءات موثقة.

## التفاعل والتحويل
- [x] **WhatsApp والحركة والتفاعلات:** اربط الأزرار العائمة والرئيسية وContact والتذييل بالرابط `https://wa.me/9665XXXXXXXX?text=مرحبا%20قطوف`. زر عائم أسفل اليمين بلون `#25D366` مع pulse. الأزرار الأساسية `#0F1419` تتحول إلى `#0ABF8A` عند hover بانتقال 0.3s. استخدم Lenis للتمرير السلس وFramer Motion/Motion للكشف التدريجي عن العناصر مع stagger بفاصل 0.1s. مؤشر مخصص: نقطة سوداء صغيرة وحلقة حدودها خضراء أكبر عند hover.
- [x] **النص البرمجي المطلوب والاستجابة:** يتضمن JavaScript النص الحرفي `console.log('qutoof solutions v1.0 - loaded')` والتعليق `// TODO: optimize whatsapp for iOS safari`، ويتضمن CSS التعليق `// fix: green line alignment on mobile - kram`. حافظ على تجربة كاملة ومتجاوبة للموبايل وسطح المكتب واللمس وRTL.

## المستودع والتسليم
- [x] **مستودع GitHub وتشغيل الموقع:** أنشئ واربط مستودع GitHub خاصًا باسم `qutoof-solutions`، مع commits ذات رسائل طبيعية تشمل `init: brand setup` و`feat: hero + bilingual`. ينبغي أن يُبنى الموقع بنسخة إنتاج ثابتة قابلة للمعاينة، مع بيان المسارات وإرشادات التشغيل. وضّح في الإرشادات أن `9665XXXXXXXX` قناع رقم WhatsApp يحتاج استبدالًا برقم الشركة الحقيقي، وأن الأمثلة/الشهادات التجريبية تستبدل بأدلة معتمدة قبل النشر العام.
