"use client";

import { useState } from "react";
import { EnergySelector } from "./energy-selector";
import Link from "next/link";

const energyMessages: Record<number, string> = {
  4: "لننطلق بخطط جريئة وواقعية.",
  3: "سنسند جدولك بما يناسب نبضك اليوم.",
  2: "زخم يوازن بين التركيز والراحة.",
  1: "سنخفف الحمل ونحمي طاقتك.",
  0: "اليوم سيء؟ زخم يحضنك ويحتفظ بإنجازاتك.",
};

export function Hero() {
  const [energy, setEnergy] = useState(3);

  return (
    <section className="relative isolate overflow-hidden rounded-[48px] border border-white/10 bg-white/5 px-8 py-16 shadow-[0_25px_80px_rgba(11,18,30,0.55)] backdrop-blur-2xl md:px-14">
      <div className="absolute inset-0 -z-10 opacity-60">
        <div className="absolute -left-10 top-20 h-64 w-64 rounded-full bg-[#1abc9c]/20 blur-[120px]" />
        <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-[#e67e22]/20 blur-[140px]" />
      </div>
      <div className="flex flex-col gap-12 lg:flex-row lg:items-start">
        <div className="flex-1 space-y-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm text-white/70">
            <span className="inline-block h-2 w-2 rounded-full bg-[#1abc9c] glow-ring" />
            منصة إنتاجية بنبض إنساني
          </div>
          <h1 className="max-w-2xl text-4xl font-semibold leading-[1.25] text-white md:text-5xl">
            <span className="gradient-text">زخم</span> – إنتاجية إنسانية، بدون ضغط
          </h1>
          <p className="max-w-2xl text-lg leading-relaxed text-white/75 md:text-xl">
            اكتشف منصة عربية تدعمك في أيام الحماس وحتى الأيام الرمادية. زخم يقرأ
            طاقتك، يكيّف المهام تلقائياً، ويحافظ على صحتك النفسية دون أن تفقد
            حس الإنجاز.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/pricing"
              className="rounded-full bg-[#1abc9c] px-8 py-3 text-base font-semibold text-[#0f1923] transition hover:bg-[#48e3c7]"
            >
              ابدأ مجاناً
            </Link>
            <a
              href="#demo"
              className="rounded-full border border-white/30 px-8 py-3 text-base font-semibold text-white transition hover:border-white hover:bg-white/10"
            >
              شاهد كيف يعمل
            </a>
          </div>
        </div>
        <div className="flex-1 space-y-6">
          <EnergySelector value={energy} onChange={setEnergy} />
          <div className="glass-card relative flex items-start gap-4 p-6">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#1abc9c] to-[#0f7b67] text-3xl shadow-[0_20px_50px_rgba(26,188,156,0.45)]">
              🤖
            </div>
            <div className="space-y-1">
              <p className="text-sm font-semibold text-[#48e3c7]">زاد • رفيقك</p>
              <p className="text-base leading-relaxed text-white/85">
                {energyMessages[energy]}
              </p>
            </div>
            <div className="absolute bottom-3 left-6 rounded-full bg-white/10 px-4 py-1 text-xs text-white/60">
              طاقة اليوم: {energy === 0 ? "يوم سيء" : `${energy * 25}%`}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
