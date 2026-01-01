"use client";

import Link from "next/link";
import { useState } from "react";

const plans = [
  {
    name: "الباقة المجانية",
    price: "٠ ر.س",
    description:
      "أساسيات زخم مع دعم يومي لقياس طاقتك، وإدارة مهام مرنة لطلاب، مستقلين، ومحترفين.",
    highlights: [
      "تخصيص الطاقة اليومية والتذكير بالراحة",
      "وضع الإنقاذ + اليوم السيء بلا خسارة للتقدم",
      "خزنة النجاحات • مستوى الشرارة",
      "نقاط وجوائز مهدئة لكل إنجاز صغير",
    ],
    cta: "اشترك مجاناً",
  },
  {
    name: "بريميوم الإنسانية",
    price: "٢٦ ر.س / الشهر",
    description:
      "تحليلات عميقة، ذكاء استباقي ضد التسويف، ومكتبة محتوى كاملة ترافقك للمدى الطويل.",
    highlights: [
      "تنبؤ التسويف المبكر + توصيات مخصصة من زاد",
      "خزنة النجاحات بكل مستوياتها ومشاريع تطبيقية",
      "ساعة القوة التكيفية + جلسات صوتية علاجية",
      "دعم بشري عربي بخلفية في الصحة النفسية",
    ],
    cta: "ابدأ الفترة التجريبية الهادئة",
    popular: true,
  },
];

const faq = [
  {
    question: "هل يمكنني التبديل بين الخطط بسهولة؟",
    answer:
      "نعم. يمكنك الترقية أو الرجوع إلى الخطة المجانية في أي وقت، دون فقد لحساباتك أو نقاطك.",
  },
  {
    question: "كيف تحمي زخم خصوصيتي؟",
    answer:
      "نستخدم تشفيراً شاملاً، ولا نقوم ببيع بياناتك، ويمكنك طلب حذف كامل لجميع السجلات بلمسة واحدة.",
  },
  {
    question: "ماذا يحدث في الأيام السيئة؟",
    answer:
      "زر اليوم السيء يعيد جدولة المهام، يفعّل وضع البقاء، ويطلق رسائل دعم من زاد دون أن تفقد إنجازك.",
  },
  {
    question: "هل يوجد خصم للطلاب أو الفرق؟",
    answer:
      "نعم، خصم ٣٠٪ للطلاب، وتسعير مرن للفرق الصغيرة. تواصل معنا لإعداد خطة إنسانية تناسب فريقك.",
  },
];

export default function PricingPage() {
  const [billing, setBilling] = useState<"monthly" | "yearly">("monthly");

  return (
    <main className="mx-auto flex min-h-screen max-w-5xl flex-col gap-10 px-6 pb-20 pt-16 md:px-10 lg:px-0">
      <Link
        href="/"
        className="self-start rounded-full border border-white/20 px-4 py-2 text-xs text-white/60 transition hover:border-white hover:text-white"
      >
        ← العودة للصفحة الرئيسية
      </Link>

      <section className="space-y-4">
        <h1 className="text-4xl font-semibold text-white md:text-5xl">
          استثمر في طاقتك، لا فقط في وقتك
        </h1>
        <p className="max-w-2xl text-lg text-white/70">
          خطط زخم مصممة لإبقاء الدافع حياً من دون ضغط. كل خطة تحترم التذبذب
          الطبيعي للطاقة وتقدم لك أدوات تعاطفية تساعدك على التقدم بثبات.
        </p>
        <div className="flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70">
          <span>الفوترة</span>
          <button
            className={`rounded-full px-4 py-1 text-xs transition ${
              billing === "monthly"
                ? "bg-[#1abc9c] text-[#0f1923]"
                : "text-white/60"
            }`}
            onClick={() => setBilling("monthly")}
          >
            شهرية
          </button>
          <button
            className={`rounded-full px-4 py-1 text-xs transition ${
              billing === "yearly"
                ? "bg-[#e67e22] text-[#0f1923]"
                : "text-white/60"
            }`}
            onClick={() => setBilling("yearly")}
          >
            سنوية - وفر ٢٠٪
          </button>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        {plans.map((plan) => (
          <article
            key={plan.name}
            className={`glass-card flex flex-col gap-5 p-8 ${
              plan.popular ? "border-[#1abc9c]/40 bg-[#13202d]/90" : ""
            }`}
          >
            {plan.popular && (
              <span className="self-start rounded-full bg-[#1abc9c]/20 px-3 py-1 text-xs font-semibold text-[#48e3c7]">
                الخيار الأكثر توازناً
              </span>
            )}
            <div>
              <h2 className="text-2xl font-semibold text-white">
                {plan.name}
              </h2>
              <p className="mt-2 text-sm text-white/70">
                {plan.description}
              </p>
            </div>
            <div className="text-3xl font-semibold text-[#48e3c7]">
              {billing === "monthly"
                ? plan.price
                : plan.name === "الباقة المجانية"
                  ? plan.price
                  : "٦٩ ر.س / السنة"}
            </div>
            <ul className="space-y-3 text-sm text-white/70">
              {plan.highlights.map((highlight) => (
                <li key={highlight}>• {highlight}</li>
              ))}
            </ul>
            <button className="mt-auto rounded-full bg-[#1abc9c] px-6 py-3 text-sm font-semibold text-[#0f1923] transition hover:bg-[#48e3c7]">
              {plan.cta}
            </button>
          </article>
        ))}
      </section>

      <section className="space-y-4 rounded-[32px] border border-white/10 bg-white/5 p-10">
        <h2 className="text-2xl font-semibold text-white">الأسئلة الشائعة</h2>
        <div className="space-y-4">
          {faq.map((item) => (
            <details
              key={item.question}
              className="group rounded-3xl border border-white/10 bg-[#0f1923]/70 p-5 transition hover:border-[#1abc9c]/40"
            >
              <summary className="cursor-pointer text-base font-semibold text-white">
                {item.question}
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-white/65">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </section>
    </main>
  );
}
