import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const splashLogo = `${import.meta.env.BASE_URL}assets/landeer-logo-mark.png`;

export function SplashOverlay() {
  const { scrollY } = useScroll();
  const splashOpacity = useTransform(scrollY, [0, 520], [1, 0]);
  const logoOpacity = useTransform(scrollY, [0, 420], [1, 0]);
  const logoScale = useTransform(scrollY, [0, 520], [1, 0.82]);
  const hintOpacity = useTransform(scrollY, [0, 260], [1, 0]);

  return (
    <motion.div
      style={{ opacity: splashOpacity }}
      className="pointer-events-none fixed inset-0 z-[100] grid place-items-center overflow-hidden bg-black"
      aria-hidden="true"
    >
      <motion.img
        style={{ opacity: logoOpacity, scale: logoScale }}
        src={splashLogo}
        alt=""
        className="h-auto w-[min(62vw,21rem)] drop-shadow-[0_0_78px_rgba(123,61,255,0.3)] sm:w-[min(40vw,30rem)]"
      />
      <motion.div
        style={{ opacity: hintOpacity }}
        className="absolute bottom-10 left-1/2 flex -translate-x-1/2 flex-col items-center gap-3 text-landeer-text sm:bottom-12"
      >
        <span className="text-xs font-semibold uppercase tracking-[0.28em]">Role para ver</span>
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.35, repeat: Infinity, ease: 'easeInOut' }}
          className="grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-white/[0.04] text-landeer-cyan shadow-[0_0_40px_rgba(0,212,255,0.14)]"
        >
          <ChevronDown size={22} strokeWidth={2.2} />
        </motion.span>
      </motion.div>
    </motion.div>
  );
}
