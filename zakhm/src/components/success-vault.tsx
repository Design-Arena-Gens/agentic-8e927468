const vaultMilestones = [
  {
    level: "مستوى الشرارة",
    unlock: "٣ أيام من الاستمرارية",
    content: "روتينات صباحية واقعية وملاحظات من رواد أعمال عرب.",
  },
  {
    level: "مستوى الزخم",
    unlock: "١٠ إنجازات متتابعة",
    content: "دروس مصغرة من ماسك وغيتس حول إدارة الطاقة لا الوقت فقط.",
  },
  {
    level: "مستوى الطيران",
    unlock: "٤ أسابيع من التقدم الهادئ",
    content: "تحليلات عادات موسعة وتمارين عقلية مستوحاة من جيف بيزوس.",
  },
];

export function SuccessVault() {
  return (
    <section className="space-y-6 rounded-[40px] border border-white/10 bg-[#121f2d]/90 p-12 backdrop-blur-2xl">
      <div className="flex flex-col gap-4">
        <p className="text-sm uppercase tracking-[0.4em] text-[#1abc9c]/70">
          خزنة النجاحات
        </p>
        <h2 className="text-3xl font-semibold text-white md:text-4xl">
          محتوى ينفتح تدريجياً مع تقدمك الحقيقي
        </h2>
        <p className="max-w-3xl text-lg text-white/70">
          نؤمن بأن التعلم العميق يأتي مع الانخراط الهادئ. خزنة زخم تقدم لك مواد
          مستوحاة من تجارب ناجحة — من إيلون ماسك إلى بيل غيتس وجيف بيزوس — لكن
          بصياغة تعليمية عملية، لا مجرد اقتباسات.
        </p>
      </div>
      <div className="grid gap-5 md:grid-cols-3">
        {vaultMilestones.map((item) => (
          <div
            key={item.level}
            className="flex h-full flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 p-6"
          >
            <div className="text-sm text-[#48e3c7]">{item.unlock}</div>
            <h3 className="text-xl font-semibold text-white">{item.level}</h3>
            <p className="text-sm leading-relaxed text-white/70">
              {item.content}
            </p>
            <div className="mt-auto rounded-2xl bg-[#1b2b3a]/70 p-4 text-xs text-white/60">
              • يتم فتح المحتوى بالتدريج للحفاظ على الحماس.
              <br />• كل مادة تتضمن مهام تطبيقية قصيرة تدعم التوازن النفسي.
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
