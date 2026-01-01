"use client";

import { useMemo, useState } from "react";
import { EnergySelector, energyStateScale } from "./energy-selector";

type DemoTask = {
  id: number;
  title: string;
  energy: "عالي" | "متوسط" | "خفيف";
  duration: string;
  completed?: boolean;
};

const baseTasks: DemoTask[] = [
  {
    id: 1,
    title: "كتابة ملخص للمشروع",
    energy: "عالي",
    duration: "٤٥ دقيقة",
  },
  {
    id: 2,
    title: "الرد على رسائل العملاء",
    energy: "متوسط",
    duration: "٢٠ دقيقة",
  },
  {
    id: 3,
    title: "جلسة تمارين تنفس",
    energy: "خفيف",
    duration: "١٠ دقائق",
  },
];

function adaptTasks(energyValue: number): DemoTask[] {
  if (energyValue >= 3) {
    return baseTasks;
  }

  if (energyValue === 2) {
    return baseTasks.map((task) =>
      task.energy === "عالي"
        ? { ...task, title: "تحضير نقاط أساسية للمشروع", energy: "متوسط" }
        : task,
    );
  }

  if (energyValue === 1) {
    return [
      { ...baseTasks[1], title: "الرد على أهم رسالتين" },
      baseTasks[2],
      {
        id: 4,
        title: "اكتب لنفسك رسالة تشجيع",
        energy: "خفيف",
        duration: "٥ دقائق",
      },
    ];
  }

  return [
    {
      id: 5,
      title: "استراحة عميقة • صوتيات مهدئة",
      energy: "خفيف",
      duration: "بدون توقيت",
    },
    {
      id: 6,
      title: "تنظيف بسيط لمساحتك",
      energy: "خفيف",
      duration: "١٠ دقائق",
    },
  ];
}

export function InteractiveDemo() {
  const [energy, setEnergy] = useState(3);
  const [powerHour, setPowerHour] = useState(false);
  const [completedTaskIds, setCompletedTaskIds] = useState<number[]>([]);
  const [celebrationKey, setCelebrationKey] = useState(0);

  const tasks = useMemo(() => adaptTasks(energy), [energy]);

  const handleComplete = (taskId: number) => {
    if (completedTaskIds.includes(taskId)) return;
    setCompletedTaskIds((prev) => [...prev, taskId]);
    setCelebrationKey((key) => key + 1);
  };

  const progress = Math.round(
    (completedTaskIds.length / tasks.length) * 100 || 0,
  );

  return (
    <section
      id="demo"
      className="space-y-6 rounded-[40px] border border-white/10 bg-[#101a26]/90 p-12 backdrop-blur-2xl"
    >
      <div className="flex flex-col gap-3">
        <p className="text-sm uppercase tracking-[0.4em] text-[#e67e22]/70">
          جرّب زخم الآن
        </p>
        <h2 className="text-3xl font-semibold text-white md:text-4xl">
          محاكاة تفاعلية لطريقة عمل زخم
        </h2>
        <p className="max-w-2xl text-lg text-white/70">
          جرّب ضبط طاقتك، فعّل ساعة القوة، وأكمل مهمة لترى الاحتفاء اللطيف الذي
          يحمي دافعك.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1.15fr_1fr]">
        <div className="space-y-6 rounded-3xl border border-white/10 bg-white/5 p-6">
          <EnergySelector value={energy} onChange={setEnergy} />
          <div className="space-y-4">
            <div className="flex items-center justify-between gap-4 rounded-2xl bg-[#1b2b3a]/70 p-4">
              <div>
                <p className="text-sm text-white/60">مؤشر الإنجاز الهادئ</p>
                <p className="text-2xl font-semibold text-[#48e3c7]">
                  {progress}٪
                </p>
              </div>
              <button
                className={`rounded-full px-6 py-3 text-sm font-semibold transition ${
                  powerHour
                    ? "bg-[#e67e22] text-[#0f1923] hover:bg-[#f39c12]"
                    : "border border-white/30 bg-transparent text-white hover:border-white hover:bg-white/10"
                }`}
                onClick={() => setPowerHour((prev) => !prev)}
              >
                {powerHour ? "إيقاف ساعة القوة" : "تفعيل ساعة القوة"}
              </button>
            </div>
            <ul className="space-y-3">
              {tasks.map((task) => {
                const completed = completedTaskIds.includes(task.id);
                return (
                  <li
                    key={`${task.id}-${task.title}`}
                    className={`relative overflow-hidden rounded-3xl border border-white/10 p-4 transition ${
                      completed
                        ? "border-[#48e3c7]/40 bg-[#1abc9c]/10"
                        : "bg-white/5 hover:bg-white/10"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="space-y-1">
                        <p className="text-base font-semibold text-white">
                          {task.title}
                        </p>
                        <p className="text-xs text-white/60">
                          {task.duration} • طاقة {task.energy}
                        </p>
                      </div>
                      <button
                        onClick={() => handleComplete(task.id)}
                        className={`rounded-full px-4 py-2 text-xs font-semibold transition ${
                          completed
                            ? "bg-[#1abc9c] text-[#0f1923]"
                            : "border border-white/30 text-white hover:border-white hover:bg-white/10"
                        }`}
                        aria-label="وضع علامة منجز"
                      >
                        {completed ? "مُنجز" : "أنجزتها"}
                      </button>
                    </div>
                    {completed && (
                      <div className="absolute inset-0 pointer-events-none">
                        {Array.from({ length: 16 }).map((_, index) => (
                          <span
                            key={`${celebrationKey}-${index}`}
                            className="confetti-piece"
                            style={{
                              right: `${Math.random() * 100}%`,
                              top: `${Math.random() * 40}%`,
                              background:
                                index % 4 === 0
                                  ? "#48e3c7"
                                  : index % 4 === 1
                                    ? "#e67e22"
                                    : index % 4 === 2
                                      ? "#1abc9c"
                                      : "#e74c3c",
                              animationDelay: `${Math.random() * 0.4}s`,
                            }}
                          />
                        ))}
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <aside className="flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 p-6">
          <div className="rounded-2xl bg-[#1b2b3a]/80 p-5 text-sm text-white/70">
            <p className="text-xs uppercase tracking-[0.2em] text-[#48e3c7]">
              قراءة زاد
            </p>
            <p className="mt-3 leading-relaxed">
              {energyStateScale.find((state) => state.value === energy)?.mood}
            </p>
            {powerHour ? (
              <p className="mt-3 text-sm text-[#e67e22]">
                ساعة القوة مفعّلة: تذكّر أن تتنفس بین الجولات القصيرة.
              </p>
            ) : (
              <p className="mt-3 text-sm text-white/60">
                جرّب تفعيل ساعة القوة عندما تشعر باندفاع بسيط وتحتاج لتركيز
                محكوم.
              </p>
            )}
          </div>
          <div className="space-y-3 rounded-2xl bg-[#101823]/90 p-5">
            <p className="text-sm font-semibold text-white">
              ما الذي يحدث عند إكمال المهام؟
            </p>
            <ul className="space-y-2 text-sm text-white/70">
              <li>• ترتفع نقاطك بهدوء مع موسيقى احتفالية خفيفة.</li>
              <li>• يفتح لك محتوى نجاح جديد في خزنة الإلهام.</li>
              <li>• يتم تحليل سلوكك لتوقع لحظات التسويف القادمة.</li>
            </ul>
          </div>
        </aside>
      </div>
    </section>
  );
}
