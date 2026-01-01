const steps = [
  {
    title: "اختر مستوى طاقتك",
    description: "من ١٠٠٪ إلى يوم سيء – زخم يبدأ اليوم على نبضك الحقيقي.",
    icon: "🔋",
  },
  {
    title: "المهام تتكيّف فوراً",
    description: "الأولوية، المدة، والجرعة الذهنية تتغير تلقائياً لتناسب وضعك.",
    icon: "🎯",
  },
  {
    title: "مكافآت صحية",
    description: "نقاط، شارات، واحتفالات خفيفة تشجعك دون ضغط أو جلد ذات.",
    icon: "🎉",
  },
  {
    title: "ذكاء يتنبأ بالتسويف",
    description: "زاد يلتقط علامات الإرهاق مبكراً ويقترح خطط إنقاذ لطيفة.",
    icon: "🧠",
  },
];

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="space-y-6 rounded-[40px] border border-white/10 bg-[#152130]/80 p-12 backdrop-blur-xl"
    >
      <div className="space-y-4">
        <p className="text-sm uppercase tracking-[0.4em] text-[#48e3c7]/70">
          كيف يعمل زخم؟
        </p>
        <h2 className="text-3xl font-semibold text-white md:text-4xl">
          رحلة بسيطة في أربع خطوات إنسانية
        </h2>
        <p className="max-w-2xl text-lg text-white/70">
          كل خطوة مصممة لتخفيف الضغط عنك، وتذكيرك بأن إنتاجيتك انعكاس لصحتك،
          لا خصم عليها.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {steps.map((step) => (
          <div
            key={step.title}
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#48e3c7]/40 hover:bg-white/10"
          >
            <div className="absolute -left-10 top-0 h-24 w-24 rounded-full bg-[#1abc9c]/10 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#1b2b3a]/70 text-2xl">
                {step.icon}
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">
                  {step.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
