import { motion } from "motion/react";
import { Sparkles, Heart } from "lucide-react";
import { invitation } from "@/content/invitation";
import { Ornament, Reveal, SectionTitle } from "./Reveal";

const groomLocal = "/portrait-groom.jpg";
const brideLocal = "/portrait-bride.jpg";

function CoupleCard({
  imageSrc,
  fallbackSrc,
  imageAlt,
  name,
  role,
  parentage,
  text,
  flip,
}: {
  imageSrc: string;
  fallbackSrc?: string;
  imageAlt: string;
  name: string;
  role: string;
  parentage?: string;
  text: string;
  flip?: boolean;
}) {
  return (
    <Reveal delay={flip ? 0.12 : 0} className="group">
      <motion.article
        whileHover={{ y: -6 }}
        transition={{ type: "spring", stiffness: 180, damping: 20 }}
        className="plate paper-grain h-full overflow-hidden rounded-[2.2rem] border-2 border-[color-mix(in_oklab,var(--gold-deep)_35%,transparent)] shadow-lg flex flex-col justify-between"
      >
        <div className="w-full flex flex-col items-center">
          {/* Royal Portrait Frame */}
          <div className="relative w-full aspect-square overflow-hidden border-b-2 border-[color-mix(in_oklab,var(--gold-deep)_30%,transparent)] bg-[color-mix(in_oklab,var(--ivory)_85%,transparent)]">
            <motion.img
              src={imageSrc}
              onError={(e) => {
                if (fallbackSrc && e.currentTarget.src !== fallbackSrc) {
                  e.currentTarget.src = fallbackSrc;
                }
              }}
              alt={imageAlt}
              loading="lazy"
              width={1024}
              height={1024}
              className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
              initial={{ scale: 1.05 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
            />
            {/* Subtle Vignette & Shimmer */}
            <div
              aria-hidden
              className="absolute inset-0 bg-gradient-to-t from-[color-mix(in_oklab,var(--ivory)_40%,transparent)] via-transparent to-transparent pointer-events-none"
            />
            <div
              aria-hidden
              className="absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100 pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle at 50% 60%, color-mix(in oklab, var(--gold) 18%, transparent), transparent 70%)",
              }}
            />
          </div>

          <div className="p-6 sm:p-8 pt-6 w-full flex flex-col items-center text-center">
            <p className="font-sans text-xs sm:text-sm tracking-[0.4em] text-gold-deep uppercase font-bold">
              {role}
            </p>
            <h3 className="mt-2 font-display text-4xl sm:text-5xl text-primary font-bold tracking-wide">
              {name}
            </h3>
            {parentage ? (
              <p className="mt-3 text-base sm:text-lg font-sans font-bold text-primary/90 tracking-wide">
                {parentage}
              </p>
            ) : null}
            <div className="mx-auto my-4 h-px w-20 bg-gradient-to-r from-transparent via-[var(--gold-deep)] to-transparent" />
            <p className="font-script text-lg sm:text-xl text-primary/90 italic leading-relaxed">
              &ldquo;{text}&rdquo;
            </p>
          </div>
        </div>
      </motion.article>
    </Reveal>
  );
}

export function CoupleStory() {
  const { story, heavenlyBlessings, inviteLead, shloka } = invitation;

  return (
    <section className="relative overflow-hidden px-5 py-24 sm:py-28">
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(180deg, var(--ivory) 0%, color-mix(in oklab, var(--blush) 26%, var(--ivory)) 50%, var(--ivory) 100%)",
        }}
      />
      <div className="mx-auto max-w-5xl">
        {/* Heavenly Blessings Card */}
        <Reveal className="mx-auto max-w-2xl text-center">
          <div className="glass-plate rounded-[2rem] p-8 sm:p-10 border border-[color-mix(in_oklab,var(--gold)_40%,transparent)] shadow-sm">
            <div className="flex items-center justify-center gap-2 text-gold-deep mb-3">
              <Sparkles size={18} />
              <p className="font-sans text-xs sm:text-sm tracking-[0.38em] uppercase font-bold">
                {heavenlyBlessings.title}
              </p>
              <Sparkles size={18} />
            </div>

            <p className="mt-4 font-display text-xl sm:text-2xl text-primary leading-snug font-bold">
              Late Smt. Mahimawanti Jain &amp; Late Sh. Dev Raj Jain
            </p>

            <div className="mt-5 space-y-3">
              <p className="font-display text-xl sm:text-2xl text-primary leading-snug font-bold">
                Smt. Usha Jain &amp; Sh. Surinder Kumar Jain
              </p>
              <p className="font-script text-xl sm:text-2xl text-primary italic leading-relaxed font-medium">
                &ldquo;together with their families, cordially invite you to celebrate the wedding celebrations of their beloved Grandson&rdquo;
              </p>
            </div>
          </div>
        </Reveal>

        <Ornament className="mt-12" />

        {/* The Couple Cards */}
        <div className="mt-12">
          <SectionTitle
            eyebrow="The Beginning of Our Forever"
            title={`${invitation.couple.title} #SYforever`}
            note="Two loving families uniting in celebration"
          />

          <div className="mt-12 grid gap-8 sm:grid-cols-2 sm:gap-10">
            <CoupleCard
              imageSrc={(story.groom as any).image || groomLocal}
              fallbackSrc={groomLocal}
              imageAlt={`Portrait of the groom ${story.groom.name}`}
              name={story.groom.name}
              role={story.groom.role}
              parentage={story.groom.parentage}
              text={story.groom.text}
            />
            <CoupleCard
              imageSrc={(story.bride as any).image || brideLocal}
              fallbackSrc={brideLocal}
              imageAlt={`Portrait of the bride ${story.bride.name}`}
              name={story.bride.name}
              role={story.bride.role}
              parentage={story.bride.parentage}
              text={story.bride.text}
              flip
            />
          </div>
        </div>

        {/* Sacred Jain Mangalacharan Shloka */}
        <Reveal delay={0.16} className="mt-14 mx-auto max-w-2xl">
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="glass-plate rounded-3xl p-6 sm:p-8 text-center border border-[color-mix(in_oklab,var(--gold)_35%,transparent)] relative overflow-hidden"
          >
            <div className="flex justify-center mb-3 text-gold-deep opacity-80">
              <Heart size={18} className="fill-[var(--gold)]" />
            </div>
            <p
              className="text-lg sm:text-xl md:text-2xl text-primary font-bold leading-relaxed tracking-wide"
              style={{ fontFamily: "var(--font-devanagari)" }}
            >
              मंगलम् भगवान वीरो, मंगलं गौतमो गणी।
              <br />
              मंगलम् कुन्दकुन्दार्यो, जैन धर्मोऽस्तु मंगलम्॥
            </p>
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}
