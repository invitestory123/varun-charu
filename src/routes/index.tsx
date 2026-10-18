import { useEffect } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { IntroGate } from "@/components/invitation/IntroGate";
import { MusicPlayer } from "@/components/invitation/MusicPlayer";
import { Hero } from "@/components/invitation/Hero";

import { CoupleStory } from "@/components/invitation/CoupleStory";
import { Countdown } from "@/components/invitation/Countdown";
import { Details } from "@/components/invitation/Details";
import { Timeline } from "@/components/invitation/Timeline";
import { Footer } from "@/components/invitation/Footer";
import { invitation } from "@/content/invitation";

const title = `${invitation.couple.groom} Weds ${invitation.couple.bride} #SYforever — Wedding Invitation`;
const description = `With Heavenly Blessings of Late Smt. Mahimawanti Jain & Late Sh. Dev Raj Jain & Smt. Usha Jain & Sh. Surinder Kumar Jain, cordially invite you to celebrate the wedding celebrations of Subahu & Yashika at The Elysium Grand. #SYforever`;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:site_name", content: `${invitation.couple.title} #SYforever` },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "/og-image-subahu-yashika.png?v=3" },
      { property: "og:image:secure_url", content: "/og-image-subahu-yashika.png?v=3" },
      { property: "og:image:type", content: "image/png" },
      { property: "og:image:width", "content": "1200" },
      { property: "og:image:height", "content": "630" },
      { property: "og:image:alt", content: `${invitation.couple.title} #SYforever Wedding Celebration Invitation Card` },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: "/og-image-subahu-yashika.png?v=3" },
    ],
  }),
  component: Index,
});

function Index() {
  useEffect(() => {
    document.title = title;
  }, []);

  return (
    <main className="relative w-full overflow-x-hidden">
      <MusicPlayer />
      <IntroGate />
      <Hero />
      <CoupleStory />
      <Countdown />
      <Details />
      <Timeline />
      <Footer />
    </main>
  );
}

