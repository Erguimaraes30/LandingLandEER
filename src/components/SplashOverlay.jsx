import { motion, useScroll, useTransform } from 'framer-motion';

const splashLogo = `${import.meta.env.BASE_URL}assets/landeer-logo-mark.png`;

export function SplashOverlay() {
  const { scrollY } = useScroll();
  const splashOpacity = useTransform(scrollY, [0, 520], [1, 0]);
  const logoOpacity = useTransform(scrollY, [0, 420], [1, 0]);
  const logoScale = useTransform(scrollY, [0, 520], [1, 0.82]);

  return (
    <motion.div
      style={{ opacity: splashOpacity }}
      className="pointer-events-none fixed inset-0 z-[100] grid place-items-center bg-black"
      aria-hidden="true"
    >
      <motion.img
        style={{ opacity: logoOpacity, scale: logoScale }}
        src={splashLogo}
        alt=""
        className="h-auto w-[min(78vw,34rem)] drop-shadow-[0_0_90px_rgba(123,61,255,0.32)] sm:w-[min(54vw,44rem)]"
      />
    </motion.div>
  );
}
