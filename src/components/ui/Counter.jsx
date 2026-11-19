import { useRef } from 'react';
import { useInView, useReducedMotion } from 'framer-motion';
import useCountUp from '../../hooks/useCountUp';

/**
 * A number that counts up from 0 the first time it scrolls into view.
 */
export default function Counter({ value, suffix = '', prefix = '', duration = 2000, className = '' }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const reduce = useReducedMotion();
  const current = useCountUp(value, { start: inView, duration, reduceMotion: reduce });

  return (
    <span ref={ref} className={`tabular-nums ${className}`}>
      {/* Screen readers get the final value straight away */}
      <span className="sr-only">
        {prefix}
        {value}
        {suffix}
      </span>
      <span aria-hidden="true">
        {prefix}
        {current}
        {suffix}
      </span>
    </span>
  );
}
