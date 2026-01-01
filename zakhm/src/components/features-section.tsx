const features = [
  {
    title: "نظام الطاقة الذكي",
    description: "يتابع مستوياتك اليومية ويتعلم منها ليبني روتيناً مرناً.",
    icon: "⚡️",
  },
  {
    title: "زر اليوم السيء",
    description: "ضغطة واحدة تعيد جدولة كل شيء وتمنحك مساحة للتعافي بلا ذنب.",
    icon: "🛑",
  },
  {
    title: "ساعة القوة",
    description: "وضع تركيز مكثف مع موسيقى وألوان مريحة ومدد قصيرة محفّزة.",
    icon: "⏱️",
  },
  {
    title: "نظام النقاط والشارات",
    description: "احتفالات هادئة لكل تقدم، مع شارات تدعم التقدم العميق لا السريع.",
    icon: "🏅",
  },
  {
    title: "وضع الإنقاذ",
    description: "عندما يتراكم كل شيء، يساعدك زخم على تفكيك الفوضى إلى خطوات.",
    icon: "🛟",
  },
  {
    title: "وضع البقاء",
    description: "يحافظ على المهام الضرورية فقط ويؤجل الباقي بدون فقدان للسياق.",
    icon: "🌙",
  },
  {
    title: "الانتقام من المهام",
    description: "طور مسلٍ يعيدك لمواجهة المهام العنيدة بنبرة محفزة ولطيفة.",
    icon: "🎮",
  },
  {
    title: "الرفيق الذكي زاد",
    description: "ذكاء آلي يتذكر عاداتك، يقرأ إشارات التسويف، ويقترح رعاية ذاتية.",
    icon: "🤖",
  },
];

export function FeaturesSection() {
  return (
    <section
      id="features"
      className="space-y-6 rounded-[40px] border border-white/10 bg-gradient-to-br from-[#152130]/90 via-[#101a26]/90 to-[#1b2b3a]/80 p-12 backdrop-blur-2xl"
    >
      <div className="flex flex-col gap-4">
        <h2 className="text-3xl font-semibold text-white md:text-4xl">
          قدرات زخم بعيون إنسانية
        </h2>
        <p className="max-w-3xl text-lg text-white/70">
          كل ميزة تعزز إنتاجيتك دون أن تضع صحتك النفسية في الخلفية، وتعمل معاً
          لصناعة روتين يدوم.
        </p>
      </div>
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {features.map((feature) => (
          <article
            key={feature.title}
            className="group flex h-full flex-col gap-3 rounded-3xl border border-white/10 bg-white/5 p-6 transition-all duration-200 hover:-translate-y-1 hover:border-[#1abc9c]/40 hover:bg-white/10"
          >
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#152130] text-2xl transition group-hover:scale-110">
              {feature.icon}
            </div>
            <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
            <p className="text-sm leading-relaxed text-white/70">
              {feature.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
