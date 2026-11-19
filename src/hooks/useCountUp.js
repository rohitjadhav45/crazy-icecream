import { useEffect, useState } from 'react';

const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

/**
 * Animates a number from 0 to `end` once `start` becomes true.
 * Jumps straight to the final value when the user prefers reduced motion.
 *
 * @param {number} end - final value
 * @param {object} options
 * @param {boolean} options.start - begin counting when true
 * @param {number} options.duration - duration in ms
 * @param {boolean} options.reduceMotion - skip the animation
 */
export default function useCountUp(end, { start = true, duration = 1800, reduceMotion = false } = {}) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!start) return undefined;
    if (reduceMotion) {
      setValue(end);
      return undefined;
    }

    let frame;
    let startTime;

    const tick = (now) => {
      if (startTime === undefined) startTime = now;
      const progress = Math.min((now - startTime) / duration, 1);
      setValue(Math.round(easeOutCubic(progress) * end));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [end, start, duration, reduceMotion]);

  return value;
}
