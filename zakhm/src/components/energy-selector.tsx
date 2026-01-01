"use client";

import { useMemo } from "react";

const energyStates = [
  {
    value: 4,
    label: "100٪",
    mood: "طاقتك في القمة",
  },
  {
    value: 3,
    label: "75٪",
    mood: "متحمس مع حذر",
  },
  {
    value: 2,
    label: "50٪",
    mood: "توازن بين الراحة والإنجاز",
  },
  {
    value: 1,
    label: "25٪",
    mood: "نبضات بسيطة",
  },
  {
    value: 0,
    label: "يوم سيء",
    mood: "رفقاً بنفسك اليوم",
  },
];

type EnergySelectorProps = {
  value: number;
  onChange?: (value: number) => void;
  compact?: boolean;
};

export function EnergySelector({
  value,
  onChange,
  compact = false,
}: EnergySelectorProps) {
  const currentState = useMemo(
    () => energyStates.find((state) => state.value === value) ?? energyStates[2],
    [value],
  );

  return (
    <div className="flex flex-col gap-3 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
      <div className="flex items-center justify-between">
        <span className="text-sm text-white/70">كيف تشعر اليوم؟</span>
        <span className="rounded-full bg-gradient-to-l from-[#48e3c7]/20 to-[#e67e22]/20 px-3 py-1 text-xs text-white/80">
          {currentState.label}
        </span>
      </div>
      <div className="relative">
        <div className="energy-track h-2 rounded-full"></div>
        <input
          type="range"
          min={0}
          max={4}
          step={1}
          value={value}
          onChange={(event) => onChange?.(Number(event.target.value))}
          className="absolute inset-0 h-2 w-full appearance-none rounded-full opacity-0"
          aria-label="مستوى الطاقة لليوم"
        />
        <div
          className="pointer-events-none absolute -top-3 h-8 w-8 -translate-x-1/2 rounded-full border-2 border-white/40 bg-[#1abc9c] transition-all duration-300"
          style={{
            right: `${(value / 4) * 100}%`,
            boxShadow: "0 10px 25px rgba(26,188,156,0.45)",
          }}
        />
      </div>
      {!compact && (
        <div className="grid grid-cols-5 gap-2 text-center text-[11px] text-white/60">
          {energyStates.map((state) => (
            <div
              key={state.value}
              className={`rounded-lg border border-transparent px-2 py-1 transition ${
                state.value === value
                  ? "border-white/30 bg-white/10 text-white"
                  : ""
              }`}
            >
              <div className="font-semibold">{state.label}</div>
              <div className="mt-1 leading-snug">{state.mood}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export const energyStateScale = energyStates;
