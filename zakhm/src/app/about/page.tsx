import Link from "next/link";

const principles = [
  {
    title: "الإنتاجية بلا جلد ذات",
    description:
      "الإنجاز الحقيقي لا يقاس بعدد المهام بل بقدرتك على الاستمرار. أي رسالة ضغط يتم فلترتها لتبقى نبرة زخم داعمة فقط.",
  },
  {
    title: "التوازن قبل التسارع",
    description:
      "نعيد صياغة اليوم بناءً على طاقتك، ونقترح استراحات وطقوس استشفاء تكون جزءاً من مخطط النجاح، لا نقطة ضعف.",
  },
  {
    title: "تصميم عربي الهوية",
    description:
      "من نوع الخط إلى المراجع الثقافية، كل تفصيل يعكس حياة المستخدم العربي وخصوصية سياقه اليومي.",
  },
];

const storyHighlights = [
  "بدأنا بقصص طلاب في الجامعات العربية، ومستقلين يعتمدون على دخلهم اليومي، وأهالٍ juggling بين العمل والرعاية.",
  "جلسات الاستماع قادتنا لفهم أن المشكلة ليست في الكسل، بل في بيئات العمل التي تتجاهل الطاقة الإنسانية.",
  "تعاوننا مع مختصين في العلاج السلوكي المعرفي لصياغة تدخلات رقمية تحترم المشاعر ولا تستنزفها.",
];

export default function AboutPage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-4xl flex-col gap-10 px-6 pb-20 pt-16 md:px-10 lg:px-0">
      <Link
        href="/"
        className="self-start rounded-full border border-white/20 px-4 py-2 text-xs text-white/60 transition hover:border-white hover:text-white"
      >
        ← العودة للصفحة الرئيسية
      </Link>

      <section className="space-y-5">
        <h1 className="text-4xl font-semibold text-white md:text-5xl">
          لماذا صممنا زخم؟
        </h1>
        <p className="text-lg text-white/70">
          لأننا مللنا من تطبيقات الإنتاجية التي تعامل الإنسان كآلة. أردنا منصة
          عربية تفهم أن الإرهاق جزء من الرحلة، وأن الدعم الحقيقي يوازن بين
          العاطفة والأداء.
        </p>
      </section>

      <section className="rounded-[32px] border border-white/10 bg-white/5 p-10 space-y-5">
        <h2 className="text-2xl font-semibold text-white">
          ثلاث مبادئ تقود كل قرار تصميمي
        </h2>
        <div className="grid gap-4 md:grid-cols-3">
          {principles.map((principle) => (
            <div
              key={principle.title}
              className="rounded-3xl border border-white/10 bg-[#101a26]/80 p-5 text-sm text-white/70"
            >
              <h3 className="text-lg font-semibold text-[#48e3c7]">
                {principle.title}
              </h3>
              <p className="mt-2 leading-relaxed">{principle.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-4 rounded-[32px] border border-white/10 bg-[#0f1822]/70 p-10">
        <h2 className="text-2xl font-semibold text-white">
          المنتج بني على قصص حقيقية
        </h2>
        <ul className="space-y-3 text-sm text-white/70">
          {storyHighlights.map((highlight) => (
            <li key={highlight}>• {highlight}</li>
          ))}
        </ul>
      </section>

      <section className="space-y-4 rounded-[32px] border border-[#1abc9c]/30 bg-[#13222f]/80 p-10">
        <h2 className="text-2xl font-semibold text-white">
          زاد: الرفيق الذكي الذي يرافقك يومياً
        </h2>
        <p className="text-sm leading-relaxed text-white/70">
          زاد ليس مجرد مساعد افتراضي؛ هو رفيق يفهم تقلباتك. يعتمد على تعلم
          مستمر من روتينك ليقترح أدوات تعاطفية: من رسائل تشجيع في وقتها، إلى
          إعادة جدولة ذكية للمهام، وحتى تذكيرك بفرح صغير إذا أصررت على العمل في
          يومك السيء. هدفه أن يذكرك بأنك لست وحدك.
        </p>
      </section>
    </main>
  );
}
