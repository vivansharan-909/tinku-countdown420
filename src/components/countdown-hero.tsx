"use client";

import { useEffect, useState } from "react";

import { getCountdownParts, getFormattedTarget } from "@/lib/countdown";
import type { CountdownConfig } from "@/lib/countdown-config";

type CountdownHeroProps = {
  config: CountdownConfig;
};

export function CountdownHero({ config }: CountdownHeroProps) {
  const [remaining, setRemaining] = useState(() =>
    getCountdownParts(config.targetIso),
  );

  useEffect(() => {
    const timer = window.setInterval(() => {
      setRemaining(getCountdownParts(config.targetIso));
    }, 1000);

    return () => window.clearInterval(timer);
  }, [config.targetIso]);

  const isComplete = remaining.totalMs === 0;

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 py-16">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute left-[-8rem] top-10 h-56 w-56 rounded-full bg-[#ff9c8f] blur-3xl" />
        <div className="absolute bottom-0 right-[-5rem] h-72 w-72 rounded-full bg-[#5d0000] blur-3xl" />
      </div>

      <section className="relative z-10 w-full max-w-6xl">
        <div className="mx-auto max-w-4xl rounded-[2rem] border border-white/15 bg-[rgba(80,0,0,0.16)] p-8 shadow-[0_30px_120px_rgba(54,0,0,0.45)] backdrop-blur md:p-12">
          <p className="text-sm uppercase tracking-[0.45em] text-[rgba(255,247,242,0.72)]">
            Tinku-Countdown420.vercel.app
          </p>

          <div className="mt-6 flex flex-col gap-10">
            <div className="max-w-2xl">
              <h1 className="text-5xl font-semibold tracking-[-0.05em] text-white md:text-7xl">
                {config.title}
              </h1>
              <p className="mt-4 max-w-xl text-lg leading-8 text-[rgba(255,247,242,0.82)] md:text-xl">
                {isComplete ? config.completedMessage : config.subtitle}
              </p>
            </div>

            <div
              className="grid grid-cols-2 gap-4 md:grid-cols-4"
              aria-live="off"
            >
              <TimerCard value={remaining.days} label="Days" />
              <TimerCard value={remaining.hours} label="Hours" />
              <TimerCard value={remaining.minutes} label="Minutes" />
              <TimerCard value={remaining.seconds} label="Seconds" />
            </div>

            <div className="flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-[rgba(255,247,242,0.76)] md:flex-row md:items-center md:justify-between">
              <p>
                Target date:
                {" "}
                <span className="font-medium text-white">
                  {getFormattedTarget(config.targetIso)}
                </span>
              </p>
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-[rgba(255,247,242,0.62)]">
                Single event countdown
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

type TimerCardProps = {
  label: string;
  value: number;
};

function TimerCard({ label, value }: TimerCardProps) {
  return (
    <div className="rounded-[1.6rem] border border-[rgba(255,240,232,0.18)] bg-[rgba(255,245,240,0.08)] px-5 py-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
      <div className="text-5xl font-semibold tracking-[-0.06em] text-white md:text-7xl">
        {String(value).padStart(2, "0")}
      </div>
      <div className="mt-2 text-sm uppercase tracking-[0.25em] text-[rgba(255,247,242,0.68)]">
        {label}
      </div>
    </div>
  );
}
