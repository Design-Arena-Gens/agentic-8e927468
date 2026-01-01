import Link from "next/link";

const plans = [
  {
    name: "الباقة المجانية",
    price: "مجانية للأبد",
    description: "مثالية لبناء العادات اليومية واستكشاف أساسيات زخم.",
    features: [
      "تحديد الطاقة اليومي",
      "وضع البقاء + زر اليوم السيء",
      "خزنة النجاحات • مستوى الشرارة",
      "جلسات أسبوعية مع زاد",
    ],
  },
  {
    name: "بريميوم الإنسانية",
    price: "٦٫٩٩$ / شهر",
    description: "تجربة كاملة مع تحليلات متقدمة ودعم ذهني متكامل.",
    features: [
      "تحليل عادات متعمق + تنبؤ بالتسويف",
      "خزنة النجاحات الكاملة بكل مستوياتها",
      "ساعة القوة التكيفية + موسيقى علاجية",
      "دعم بشري عربي متخصص بالصحة النفسية",
    ],
  },
];

export function PricingPreview() {
  return (
    <section className="space-y-6 rounded-[40px] border border-white/10 bg-[#152130]/90 p-12 backdrop-blur-2xl">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h2 className="text-3xl font-semibold text-white md:text-4xl">
            خطط بسيطة تُبقي الضغط بعيداً
          </h2>
          <p className="mt-2 text-lg text-white/70">
            اختر الخطة التي تناسب وتيرة حياتك؛ كلاهما يدعم الأيام الجيدة والسيئة.
          </p>
        </div>
        <Link
          href="/pricing"
          className="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10"
        >
          اكتشف التفاصيل الكاملة
        </Link>
      </div>
      <div className="grid gap-6 lg:grid-cols-2">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className="flex h-full flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 p-6"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-semibold text-white">
                {plan.name}
              </h3>
              <span className="rounded-full bg-[#1abc9c]/20 px-4 py-1 text-xs text-[#48e3c7]">
                {plan.price}
              </span>
            </div>
            <p className="text-sm text-white/70">{plan.description}</p>
            <ul className="space-y-2 text-sm text-white/65">
              {plan.features.map((feature) => (
                <li key={feature}>• {feature}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
