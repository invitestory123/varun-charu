import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Calendar, Clock, MapPin } from "lucide-react";
const garden = "https://media.invitestory.in/ever-after-bloom/src/assets/garden-courtyard.jpg";
import { invitation } from "@/content/invitation";
import { Ornament, Reveal, SectionTitle } from "./Reveal";

const romanNumerals = ["I", "II", "III", "IV", "V"];

/** Illustrated wedding celebrations timeline stitched together with an animated vine. */
export function Timeline() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 78%", "end 60%"],
  });
  const draw = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="celebrations" className="relative overflow-hidden px-5 py-24">
      <img
        src={garden}
        alt=""
        aria-hidden
        loading="lazy"
        width={1536}
        height={1024}
        className="absolute inset-0 -z-10 h-full w-full object-cover opacity-25"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(180deg, var(--ivory) 0%, color-mix(in oklab, var(--ivory) 78%, transparent) 30%, color-mix(in oklab, var(--ivory) 78%, transparent) 70%, var(--ivory) 100%)",
        }}
      />

      <div className="mx-auto max-w-3xl">
        <SectionTitle
          eyebrow="Itinerary & Auspicious Ceremonies"
          title="Wedding Celebrations"
          note="Join us in every step of this joyous celebration"
        />
        <Ornament className="mt-8" />

        <div ref={ref} className="relative mt-16 pl-12 sm:pl-16">
          {/* Animated vine that draws down as the guest scrolls */}
          <svg
            aria-hidden
            className="absolute top-0 left-3 h-full w-8 sm:left-5 pointer-events-none"
            viewBox="0 0 40 1200"
            preserveAspectRatio="none"
            fill="none"
          >
            <motion.path
              d="M20 0 C34 140, 6 260, 20 400 C34 540, 6 680, 20 820 C34 960, 6 1080, 20 1200"
              stroke="var(--olive)"
              strokeWidth="2.2"
              strokeLinecap="round"
              opacity="0.65"
              style={{ pathLength: draw }}
            />
            {[120, 380, 690, 1010].map((y, i) => (
              <motion.ellipse
                key={y}
                cx={i % 2 ? 30 : 10}
                cy={y}
                rx="9"
                ry="4.5"
                fill="var(--sage)"
                opacity="0.75"
                transform={`rotate(${i % 2 ? 24 : -24} ${i % 2 ? 30 : 10} ${y})`}
                style={{ scale: draw }}
              />
            ))}
          </svg>

          <ol className="space-y-10 sm:space-y-12">
            {invitation.celebrations.map((event, i) => (
              <li key={event.id}>
                <Reveal delay={i * 0.06}>
                  <motion.div
                    whileHover={{ x: 6 }}
                    transition={{ type: "spring", stiffness: 220, damping: 20 }}
                    className="plate paper-grain relative rounded-[1.8rem] px-6 py-7 sm:px-8 border border-[color-mix(in_oklab,var(--gold)_25%,transparent)] shadow-sm"
                  >
                    {/* Badge */}
                    <span
                      className="absolute -left-[3.15rem] top-7 flex h-9 w-9 items-center justify-center rounded-full font-display text-xs text-primary-foreground sm:-left-[4.3rem] shadow-sm font-semibold"
                      style={{ background: "var(--gradient-gold)" }}
                    >
                      {romanNumerals[i] || String(i + 1)}
                    </span>

                    <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[color-mix(in_oklab,var(--gold-deep)_25%,transparent)] pb-3">
                      <h3 className="font-display text-3xl sm:text-4xl font-bold tracking-wide text-primary uppercase">
                        {event.name}
                      </h3>
                      <span className="rounded-full bg-[color-mix(in_oklab,var(--gold)_20%,transparent)] px-3.5 py-1 font-sans text-xs sm:text-sm tracking-[0.18em] text-primary font-bold uppercase border border-[color-mix(in_oklab,var(--gold-deep)_30%,transparent)]">
                        {i === 2 && event.date === invitation.celebrations[i - 1]?.date
                          ? "Same Day · 5:30 PM"
                          : event.date}
                      </span>
                    </div>

                    <p className="mt-3 text-base sm:text-lg leading-relaxed text-primary/90 font-medium">
                      {event.description}
                    </p>

                    <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                      <div className="flex items-center gap-2.5 text-primary">
                        <Clock size={18} className="text-gold-deep shrink-0 font-bold" />
                        <span className="font-sans text-sm sm:text-base font-bold">
                          {event.time}
                        </span>
                      </div>
                      <div className="flex items-center gap-2.5 text-primary">
                        <MapPin size={18} className="text-gold-deep shrink-0 font-bold" />
                        <span className="font-sans text-sm sm:text-base font-bold">
                          {event.venue}
                        </span>
                      </div>
                    </div>

                    <div className="mt-5 pt-3 border-t border-[color-mix(in_oklab,var(--gold-deep)_20%,transparent)] flex items-center justify-between">
                      <span className="font-script text-base sm:text-lg text-primary font-semibold italic">
                        Venue: {event.venue}
                      </span>
                      <a
                        href={
                          event.mapsUrl ||
                          `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(event.mapsQuery)}`
                        }
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 font-sans text-xs tracking-[0.2em] uppercase text-primary hover:text-gold-deep transition-colors font-bold"
                      >
                        <MapPin size={15} /> View Map
                      </a>
                    </div>
                  </motion.div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
