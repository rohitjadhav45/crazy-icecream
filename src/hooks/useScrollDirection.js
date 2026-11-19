import { useEffect, useRef, useState } from 'react';

/**
 * Tracks scroll direction and whether the page has been scrolled at all.
 * Used by the navbar to shrink after scrolling and to hide on scroll down.
 *
 * @param {number} threshold - minimum px delta before direction flips (avoids jitter)
 * @returns {{ direction: 'up' | 'down', scrollY: number, scrolled: boolean }}
 */
export default function useScrollDirection(threshold = 8) {
  const [state, setState] = useState({ direction: 'up', scrollY: 0, scrolled: false });
  const lastY = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    lastY.current = window.scrollY;

    const update = () => {
      const y = window.scrollY;
      const delta = y - lastY.current;

      setState((prev) => {
        let direction = prev.direction;
        if (Math.abs(delta) >= threshold) {
          direction = delta > 0 ? 'down' : 'up';
          lastY.current = y;
        }
        const scrolled = y > 20;
        if (direction === prev.direction && scrolled === prev.scrolled && Math.abs(prev.scrollY - y) < 40) {
          return prev; // avoid needless re-renders
        }
        return { direction, scrollY: y, scrolled };
      });
      ticking.current = false;
    };

    const onScroll = () => {
      if (!ticking.current) {
        ticking.current = true;
        window.requestAnimationFrame(update);
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [threshold]);

  return state;
}
