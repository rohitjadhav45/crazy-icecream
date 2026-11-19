import { useEffect } from 'react';
import Lenis from 'lenis';

/**
 * A single shared Lenis instance so other modules (route changes, modals)
 * can scroll to top or pause smooth scrolling.
 */
let lenis = null;

/**
 * Initialise Lenis smooth scrolling. Disabled when the user prefers reduced motion.
 * @param {boolean} enabled
 */
export default function useSmoothScroll(enabled = true) {
  useEffect(() => {
    if (!enabled) return undefined;

    lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    let frame;
    const raf = (time) => {
      lenis?.raf(time);
      frame = requestAnimationFrame(raf);
    };
    frame = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frame);
      lenis?.destroy();
      lenis = null;
    };
  }, [enabled]);
}

/** Jump to the top of the page instantly (used on route change). */
export function scrollToTop() {
  if (lenis) lenis.scrollTo(0, { immediate: true, force: true });
  window.scrollTo(0, 0);
}

/** Pause / resume page scrolling, e.g. while a modal or the mobile menu is open. */
export function setScrollLocked(locked) {
  document.documentElement.style.overflow = locked ? 'hidden' : '';
  if (!lenis) return;
  if (locked) lenis.stop();
  else lenis.start();
}
