const comparisonPoints = [
  {
    category: "التصميم المتمحور حول الإنسان",
    zakhm: "تجربة عربية RTL، نبرة حانية، وواجهة تحترم المزاج.",
    tiimo: "واجهة عامة لا تركّز على الثقافة أو اللغة العربية.",
  },
  {
    category: "الصحة النفسية",
    zakhm: "زر اليوم السيء، وضع البقاء، ورفيق يلتقط علامات الإرهاق.",
    tiimo: "مراقبة المهام التقليدية بدون تدخل مبكر للصحة النفسية.",
  },
  {
    category: "الجاميفيكاشن",
    zakhm: "شارات هادئة، احتفالات خفيفة، وانتقام من المهام بحس فكاهي.",
    tiimo: "تحفيز بسيط مع تركيز على الجداول فقط.",
  },
  {
    category: "التسعير",
    zakhm: "مجاني + باقة بريميوم إنسانية (٦٫٩٩$ شهرياً).",
    tiimo: "خطة مدفوعة أعلى سعراً مع محاكاة عامة.",
  },
  {
    category: "اللغة والدعم",
    zakhm: "لغة عربية، دعم بشري يفهم سياقك، ونصائح ثقافية.",
    tiimo: "دعم متعدد اللغات ولكن ليست عربية بالكامل.",
  },
];

export function ComparisonSection() {
  return (
    <section className="space-y-6 rounded-[40px] border border-white/10 bg-[#111d2a]/90 p-12 backdrop-blur-2xl">
      <div className="space-y-4">
        <h2 className="text-3xl font-semibold text-white md:text-4xl">
          لماذا زخم مختلف عن Tiimo؟
        </h2>
        <p className="text-lg text-white/70">
          جدول مقارنة سريع يوضح الفلسفة الإنسانية العميقة التي يقود بها زخم
          تجربتك اليومية.
        </p>
      </div>
      <div className="overflow-hidden rounded-3xl border border-white/10">
        <table className="min-w-full border-collapse text-right text-sm text-white/80">
          <thead className="bg-white/10 text-white">
            <tr>
              <th className="px-6 py-4 font-semibold">المحور</th>
              <th className="px-6 py-4 font-semibold">زخم</th>
              <th className="px-6 py-4 font-semibold">Tiimo</th>
            </tr>
          </thead>
          <tbody>
            {comparisonPoints.map((row, index) => (
              <tr
                key={row.category}
                className={index % 2 === 0 ? "bg-white/5" : "bg-transparent"}
              >
                <td className="px-6 py-4 text-white/90">{row.category}</td>
                <td className="px-6 py-4 font-medium text-[#48e3c7]">
                  {row.zakhm}
                </td>
                <td className="px-6 py-4 text-white/60">{row.tiimo}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
