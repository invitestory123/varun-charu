import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Music, Volume2, VolumeX } from "lucide-react";

export function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = new Audio("/bgm.mp3");
    audio.loop = true;
    audio.preload = "auto";
    audioRef.current = audio;

    // Safety listener to ensure gapless loop on mobile browsers
    const handleEnded = () => {
      audio.currentTime = 0;
      void audio.play().catch(() => {});
    };
    audio.addEventListener("ended", handleEnded);

    // Listen for custom trigger from IntroGate or direct user gesture
    const startAudio = () => {
      setHasInteracted(true);
      audio
        .play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch(() => {
          // Autoplay was blocked; will wait for user tap
        });
    };

    window.addEventListener("play-bgm", startAudio);

    // Also auto-start on first document touch/click anywhere on page
    const handleFirstGesture = () => {
      if (!hasInteracted) {
        startAudio();
      }
    };
    window.addEventListener("pointerdown", handleFirstGesture, { once: true });
    window.addEventListener("keydown", handleFirstGesture, { once: true });

    return () => {
      audio.removeEventListener("ended", handleEnded);
      window.removeEventListener("play-bgm", startAudio);
      window.removeEventListener("pointerdown", handleFirstGesture);
      window.removeEventListener("keydown", handleFirstGesture);
      audio.pause();
      audioRef.current = null;
    };
  }, []);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio
        .play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch(() => {});
    }
  };

  return (
    <div className="fixed top-4 right-4 sm:top-6 sm:right-6 z-50">
      <motion.button
        type="button"
        onClick={togglePlay}
        aria-label={isPlaying ? "Mute background music" : "Play background music"}
        title={isPlaying ? "Pause music" : "Play music"}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.94 }}
        className="group relative flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-full border-2 border-[var(--gold-deep)] bg-[color-mix(in_oklab,var(--ivory)_88%,transparent)] shadow-lg backdrop-blur-md cursor-pointer transition-colors duration-300 hover:bg-[color-mix(in_oklab,var(--ivory)_98%,transparent)]"
      >
        {/* Animated aura ring when music is playing */}
        <AnimatePresence>
          {isPlaying && (
            <motion.span
              initial={{ scale: 0.9, opacity: 0.6 }}
              animate={{ scale: [1, 1.35, 1], opacity: [0.6, 0, 0.6] }}
              exit={{ opacity: 0 }}
              transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
              className="pointer-events-none absolute inset-0 rounded-full border-2 border-[var(--gold)]"
            />
          )}
        </AnimatePresence>

        {/* Music Disc Icon with Rotation */}
        <motion.div
          animate={isPlaying ? { rotate: 360 } : { rotate: 0 }}
          transition={
            isPlaying
              ? { duration: 6, repeat: Infinity, ease: "linear" }
              : { duration: 0.3 }
          }
          className="flex items-center justify-center text-primary"
        >
          {isPlaying ? (
            <Music size={19} className="text-primary font-bold" />
          ) : (
            <VolumeX size={19} className="text-primary/70" />
          )}
        </motion.div>

        {/* Floating audio wave bars */}
        {isPlaying && (
          <div className="absolute -bottom-1 flex items-end gap-0.5 h-2 px-1">
            <span className="w-0.5 bg-[var(--gold-deep)] rounded-full animate-bounce h-1.5" />
            <span className="w-0.5 bg-[var(--gold-deep)] rounded-full animate-bounce [animation-delay:0.15s] h-2.5" />
            <span className="w-0.5 bg-[var(--gold-deep)] rounded-full animate-bounce [animation-delay:0.3s] h-2" />
          </div>
        )}
      </motion.button>
    </div>
  );
}
