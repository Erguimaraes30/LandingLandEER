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
        className="relative z-10 h-auto w-[min(42vw,13rem)] drop-shadow-[0_0_58px_rgba(123,61,255,0.36)] sm:w-[min(26vw,18rem)]"
      />
      <div className="absolute left-1/2 top-1/2 z-0 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-landeer-purple/24 blur-[86px] sm:h-96 sm:w-96" />
      <div className="absolute left-[58%] top-[46%] z-0 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-landeer-cyan/18 blur-[78px] sm:h-72 sm:w-72" />
      <div className="absolute left-[43%] top-[54%] z-0 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full bg-landeer-blue/18 blur-[72px] sm:h-64 sm:w-64" />
      <motion.div
        style={{ opacity: hintOpacity }}
        className="absolute bottom-10 left-1/2 z-10 flex -translate-x-1/2 text-landeer-text sm:bottom-12"
      >
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
