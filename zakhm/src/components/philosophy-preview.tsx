import Link from "next/link";

export function PhilosophyPreview() {
  return (
    <section className="space-y-5 rounded-[40px] border border-white/10 bg-[#0f1923]/80 p-12 backdrop-blur-xl">
      <div className="flex flex-col gap-4">
        <h2 className="text-3xl font-semibold text-white md:text-4xl">
          فلسفة زخم: إنتاجية بلا احتراق
        </h2>
        <p className="max-w-3xl text-lg text-white/70">
          بنينا زخم لأننا نؤمن أن الإنسان الحقيقي يمر بأيام ملونة بالفتور
          والشرارة معاً. التصميم قائم على احترام جسدك، وإعادة تعريف الإنجاز على
          أنه تقدم صغير، متراكم، وقابل للتعاطف.
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-5 text-sm text-white/70">
          <h3 className="text-lg font-semibold text-[#48e3c7]">
            بني من تجارب واقعية
          </h3>
          <p className="mt-2 leading-relaxed">
            جلسات مطولة مع طلاب، مستقلين، وأهالٍ، لصياغة منتج يتعامل مع التشتت
            والضغط باحترام.
          </p>
        </div>
        <div className="rounded-3xl border border-white/10 bg-white/5 p-5 text-sm text-white/70">
          <h3 className="text-lg font-semibold text-[#48e3c7]">
            التوازن فوق كل شيء
          </h3>
          <p className="mt-2 leading-relaxed">
            كل ميزة تذكرك بالراحة، التنفس، والإنجاز البشري الذي يقبل التعرجات.
          </p>
        </div>
        <div className="rounded-3xl border border-white/10 bg-white/5 p-5 text-sm text-white/70">
          <h3 className="text-lg font-semibold text-[#48e3c7]">
            دعم ذهني حقيقي
          </h3>
          <p className="mt-2 leading-relaxed">
            تعاون مع مختصين في العلاج السلوكي المعرفي لصياغة رسائل لا تحكم ولا
            تتلاعب بمشاعرك.
          </p>
        </div>
      </div>
      <Link
        href="/about"
        className="inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10"
      >
        اقرأ القصة كاملة
      </Link>
    </section>
  );
}
