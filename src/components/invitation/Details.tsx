import { motion } from "motion/react";
import { CalendarPlus, MapPin } from "lucide-react";
const mapPlate = "https://media.invitestory.in/ever-after-bloom/src/assets/map-plate.jpg";
const car = "https://media.invitestory.in/ever-after-bloom/src/assets/wedding-car.png";
import { invitation } from "@/content/invitation";
import { Ornament, Reveal, SectionTitle } from "./Reveal";

function buildIcs() {
  const start = new Date(invitation.dateISO);
  const end = new Date(start.getTime() + 5 * 3_600_000);
  const stamp = (d: Date) => d.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";
  const lines = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Wedding Storybook//EN",
    "BEGIN:VEVENT",
    `UID:${start.getTime()}@wedding`,
    `DTSTAMP:${stamp(new Date())}`,
    `DTSTART:${stamp(start)}`,
    `DTEND:${stamp(end)}`,
    `SUMMARY:${invitation.couple.groom} Weds ${invitation.couple.bride} — Wedding`,
    `LOCATION:${invitation.venue.name}, ${invitation.venue.address}`,
    "DESCRIPTION:No Gifts, No Shagun, Only Blessings. With Love and Regards, Jain Family",
    "END:VEVENT",
    "END:VCALENDAR",
  ];
  return `data:text/calendar;charset=utf-8,${encodeURIComponent(lines.join("\r\n"))}`;
}

export function Details() {
  const maps =
    invitation.venue.mapsUrl ||
    `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(invitation.venue.mapsQuery)}`;

  return (
    <section id="details" className="relative overflow-hidden px-5 py-20">
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(180deg, color-mix(in oklab, var(--peach) 26%, var(--ivory)) 0%, var(--cream) 45%, var(--ivory) 100%)",
        }}
      />
      <div className="mx-auto max-w-4xl text-center">
        <SectionTitle
          eyebrow="Celebration Venue"
          title={invitation.venue.name}
          note="Join us with your warm blessings and love"
        />
        <Ornament className="mt-6" />

        <Reveal delay={0.1} className="mt-10 flex flex-wrap justify-center gap-4">
          <motion.a
            href={buildIcs()}
            download={`${invitation.couple.groom.toLowerCase()}-${invitation.couple.bride.toLowerCase()}-wedding.ics`}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-sans text-[0.66rem] tracking-[0.24em] text-primary-foreground uppercase shadow-md"
          >
            <CalendarPlus size={15} strokeWidth={1.6} /> Add to Calendar
          </motion.a>
          <motion.a
            href={maps}
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="glass-plate inline-flex items-center gap-2 rounded-full px-6 py-3 font-sans text-[0.66rem] tracking-[0.24em] text-primary uppercase border border-[color-mix(in_oklab,var(--gold)_40%,transparent)] shadow-xs"
          >
            <MapPin size={15} strokeWidth={1.6} /> Directions to {invitation.venue.name}
          </motion.a>
        </Reveal>

        {/* Illustrated map plate with the wedding car rolling in */}
        <Reveal delay={0.14} className="mt-12">
          <div className="plate relative overflow-hidden rounded-[2rem] border border-[color-mix(in_oklab,var(--gold)_20%,transparent)] shadow-md">
            <img
              src={mapPlate}
              alt="Hand-painted illustrated map of the old city with the wedding destination"
              loading="lazy"
              width={1280}
              height={1024}
              className="h-64 w-full object-cover sm:h-80"
            />
            <div
              aria-hidden
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(0deg, color-mix(in oklab, var(--cream) 55%, transparent), transparent 55%)",
              }}
            />
            <motion.img
              src={car}
              alt=""
              aria-hidden
              loading="lazy"
              width={1175}
              height={567}
              className="absolute bottom-2 left-0 w-40 sm:w-56"
              initial={{ x: -80, opacity: 0 }}
              whileInView={{ x: 24, opacity: 1 }}
              viewport={{ once: true, margin: "-15%" }}
              transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
