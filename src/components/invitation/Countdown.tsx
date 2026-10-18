import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { invitation } from "@/content/invitation";
import { LanternField } from "./LanternField";
import { SectionTitle } from "./Reveal";

function diff(target: number) {
  const ms = Math.max(0, target - Date.now());
  return {
    days: Math.floor(ms / 86_400_000),
    hours: Math.floor((ms / 3_600_000) % 24),
    minutes: Math.floor((ms / 60_000) % 60),
    seconds: Math.floor((ms / 1000) % 60),
  };
}

function Unit({ value, label }: { value: number; label: string }) {
  const text = String(value).padStart(2, "0");
  return (
    <div className="glass-plate flex min-w-0 flex-1 flex-col items-center justify-center rounded-xl sm:rounded-2xl px-1.5 py-3 sm:px-6 sm:py-6 border-2 border-[color-mix(in_oklab,var(--gold-deep)_35%,transparent)] shadow-sm">
      <div className="relative h-8 sm:h-14 overflow-hidden flex items-center justify-center">
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.span
            key={text}
            initial={{ y: 22, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -22, opacity: 0 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="block font-display text-2xl xs:text-3xl sm:text-5xl text-primary font-bold tabular-nums"
          >
            {text}
          </motion.span>
        </AnimatePresence>
      </div>
      <span className="mt-1.5 sm:mt-2 font-sans text-[9px] sm:text-sm tracking-[0.12em] sm:tracking-[0.25em] text-primary uppercase font-bold text-center">
        {label}
      </span>
    </div>
  );
}

export function Countdown() {
  const target = new Date(invitation.dateISO).getTime();
  // Start from a stable value so SSR and the first client render agree.
  const [left, setLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    setLeft(diff(target));
    const id = setInterval(() => setLeft(diff(target)), 1000);
    return () => clearInterval(id);
  }, [target]);


  return (
    <section className="relative overflow-hidden px-4 py-20 sm:px-5">
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(180deg, var(--ivory) 0%, color-mix(in oklab, var(--lavender) 30%, var(--ivory)) 55%, color-mix(in oklab, var(--peach) 26%, var(--ivory)) 100%)",
        }}
      />
      <LanternField count={6} className="opacity-70" travel={1.1} />

      <div className="relative mx-auto max-w-3xl">
        <SectionTitle
          eyebrow="Until We Say Forever"
          title="Counting Down to Our Wedding"
        />
        <div className="mt-10 grid grid-cols-4 gap-2 sm:gap-4 max-w-xl mx-auto w-full">
          <Unit value={left.days} label="Days" />
          <Unit value={left.hours} label="Hours" />
          <Unit value={left.minutes} label="Minutes" />
          <Unit value={left.seconds} label="Seconds" />
        </div>
        <p className="mt-8 text-center font-display text-lg sm:text-xl text-primary font-bold tracking-wide">
          #SYforever
        </p>
      </div>
    </section>
  );
}
