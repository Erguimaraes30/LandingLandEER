import { useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';

const splashLogo = `${import.meta.env.BASE_URL}assets/landeer-logo-mark-compact.png`;

export function SplashOverlay() {
  const overlayRef = useRef(null);
  const logoRef = useRef(null);
  const cueRef = useRef(null);

  useEffect(() => {
    const overlay = overlayRef.current;
    const logo = logoRef.current;
    const cue = cueRef.current;
    let frame = 0;

    const clamp = (value, min = 0, max = 1) => Math.min(max, Math.max(min, value));

    function update() {
      frame = 0;
      const scrollY = window.scrollY || 0;
      const overlayOpacity = clamp(1 - scrollY / 520);
      const logoOpacity = clamp(1 - scrollY / 420);
      const cueOpacity = clamp(1 - scrollY / 260);
      const scale = 1 - clamp(scrollY / 520) * 0.18;

      if (overlay) {
        overlay.style.opacity = overlayOpacity.toFixed(3);
        overlay.style.visibility = overlayOpacity <= 0.01 ? 'hidden' : 'visible';
      }

      if (logo) {
        logo.style.opacity = logoOpacity.toFixed(3);
        logo.style.transform = `scale(${scale.toFixed(3)})`;
      }

      if (cue) {
        cue.style.opacity = cueOpacity.toFixed(3);
      }
    }

    function requestUpdate() {
      if (!frame) {
        frame = window.requestAnimationFrame(update);
      }
    }

    update();
    window.addEventListener('scroll', requestUpdate, { passive: true });
    window.addEventListener('resize', requestUpdate);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener('scroll', requestUpdate);
      window.removeEventListener('resize', requestUpdate);
    };
  }, []);

  return (
    <div
      ref={overlayRef}
      data-splash="true"
      className="pointer-events-none fixed inset-0 z-[100] grid place-items-center overflow-hidden bg-black"
      aria-hidden="true"
    >
      <img
        ref={logoRef}
        src={splashLogo}
        alt=""
        decoding="async"
        className="relative z-10 h-auto w-[min(34vw,10rem)] transform-gpu drop-shadow-[0_0_58px_rgba(123,61,255,0.36)] sm:w-[min(21vw,13.5rem)]"
      />
      <div className="absolute left-1/2 top-1/2 z-0 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-landeer-purple/24 blur-[86px] sm:h-96 sm:w-96" />
      <div className="absolute left-[58%] top-[46%] z-0 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-landeer-cyan/18 blur-[78px] sm:h-72 sm:w-72" />
      <div className="absolute left-[43%] top-[54%] z-0 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full bg-landeer-blue/18 blur-[72px] sm:h-64 sm:w-64" />
      <div
        ref={cueRef}
        className="absolute bottom-10 left-1/2 z-10 flex -translate-x-1/2 text-landeer-text sm:bottom-12"
      >
        <span
          className="scroll-cue grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-white/[0.04] text-landeer-cyan shadow-[0_0_40px_rgba(0,212,255,0.14)]"
        >
          <ChevronDown size={22} strokeWidth={2.2} />
        </span>
      </div>
    </div>
  );
}
