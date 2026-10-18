import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Heart, Sparkles } from "lucide-react";
const sunset = "https://media.invitestory.in/ever-after-bloom/src/assets/sunset-sky.jpg";
const lanternImg = "https://media.invitestory.in/ever-after-bloom/src/assets/lantern.png";
import { invitation } from "@/content/invitation";
import { LanternField } from "./LanternField";
import { Ornament } from "./Reveal";

const blessings = [
  "May your evenings always be filled with joy and warmth.",
  `May the journey of ${invitation.couple.groom} & ${invitation.couple.bride} be blessed with abundance.`,
  "May laughter and peace echo in your home forever.",
  "May Bhagwan Mahavira shower endless grace upon the couple.",
  "May your bond grow stronger with each passing sunrise.",
];

/** A soft aurora wash — pure CSS, no canvas, cheap on mobile. */
function AuroraGlow() {
  const reduced = useReducedMotion();
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="absolute h-[70%] w-[70%] rounded-full blur-[90px]"
          style={{
            left: `${i * 26 - 10}%`,
            top: `${8 + i * 12}%`,
            background: [
              "color-mix(in oklab, var(--lavender) 55%, transparent)",
              "color-mix(in oklab, var(--peach) 50%, transparent)",
              "color-mix(in oklab, var(--skyblue) 48%, transparent)",
            ][i],
            mixBlendMode: "screen",
            opacity: 0.55,
          }}
          animate={reduced ? {} : { x: [0, 40, -30, 0], y: [0, -26, 18, 0] }}
          transition={{ duration: 30 + i * 11, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}

export function Footer() {
  const [released, setReleased] = useState<{ id: number; text: string; left: number }[]>([]);

  const release = () => {
    const id = Date.now();
    setReleased((prev) => [
      ...prev,
      {
        id,
        text: blessings[Math.floor(Math.random() * blessings.length)]!,
        left: 18 + Math.random() * 64,
      },
    ]);
    setTimeout(() => setReleased((prev) => prev.filter((r) => r.id !== id)), 7000);
  };

  return (
    <footer className="relative overflow-hidden pt-28 pb-14">
      <img
        src={sunset}
        alt=""
        aria-hidden
        loading="lazy"
        width={1920}
        height={1024}
        className="absolute inset-0 h-full w-full object-cover opacity-60"
      />
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, var(--ivory) 0%, color-mix(in oklab, var(--ivory) 40%, transparent) 26%, color-mix(in oklab, var(--lavender) 30%, transparent) 100%)",
        }}
      />
      <AuroraGlow />
      <LanternField count={7} travel={1.05} className="opacity-90" />

      {/* Released wish lanterns */}
      <AnimatePresence>
        {released.map((r) => (
          <motion.div
            key={r.id}
            className="pointer-events-none absolute bottom-10 z-10 flex w-44 flex-col items-center text-center"
            style={{ left: `${r.left}%` }}
            initial={{ y: 0, opacity: 0, scale: 0.7 }}
            animate={{ y: -520, opacity: [0, 1, 1, 0], scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 7, ease: "easeOut" }}
          >
            <img
              src={lanternImg}
              alt=""
              width={580}
              height={751}
              className="w-10 drop-shadow-[0_0_18px_color-mix(in_oklab,var(--gold)_65%,transparent)]"
            />
            <span className="mt-2 font-script text-sm text-primary italic font-medium">{r.text}</span>
          </motion.div>
        ))}
      </AnimatePresence>

      <div className="relative z-20 mx-auto max-w-xl px-6 text-center">
        <Ornament />

        {/* Wish Lantern Action */}
        <motion.button
          type="button"
          onClick={release}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.95 }}
          className="glass-plate mt-8 rounded-full px-8 py-4 font-sans text-xs sm:text-sm tracking-[0.28em] text-primary uppercase shadow-md border-2 border-[color-mix(in_oklab,var(--gold-deep)_40%,transparent)] cursor-pointer font-bold"
        >
          ✨ Release a wish lantern for {invitation.couple.groom} &amp; {invitation.couple.bride}
        </motion.button>

        {/* #SYforever */}
        <div className="mt-10">
          <span className="inline-block rounded-full bg-[color-mix(in_oklab,var(--gold)_25%,var(--ivory))] px-6 py-2 font-sans text-sm sm:text-base font-bold tracking-[0.35em] text-primary uppercase shadow-xs border border-[color-mix(in_oklab,var(--gold)_50%,transparent)]">
            #SYforever
          </span>
        </div>

        {/* With Love and Regards */}
        <div className="mt-10 space-y-1.5">
          <p className="font-script text-2xl text-primary italic font-semibold">
            {invitation.compliments.regards}
          </p>
          <h2 className="font-display text-3xl sm:text-4xl text-primary font-bold tracking-wide uppercase">
            {invitation.compliments.family}
          </h2>
          {invitation.compliments.firm && (
            <p className="font-sans text-sm tracking-[0.25em] text-gold-deep uppercase font-bold">
              {invitation.compliments.firm}
            </p>
          )}
        </div>

        <p className="mt-10 inline-flex items-center gap-2 font-sans text-xs tracking-[0.25em] text-primary/80 uppercase font-semibold">
          Made with <Heart size={14} className="fill-rose text-rose" /> for our families and friends
        </p>
      </div>
    </footer>
  );
}
