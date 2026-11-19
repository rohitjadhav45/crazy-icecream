import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useMotionValue, useSpring, useReducedMotion } from 'framer-motion';
import { useFinePointer } from '../../hooks/useMediaQuery';

const variants = {
  primary:
    'bg-gradient-to-r from-strawberry to-[#FF7A6B] text-white shadow-pink hover:shadow-[0_25px_50px_-12px_rgba(255,79,139,0.65)]',
  secondary: 'glass text-choco shadow-soft hover:bg-white',
  dark: 'bg-choco text-cream shadow-soft hover:bg-choco-500',
  light: 'bg-white text-choco shadow-soft hover:bg-cream',
  mango: 'bg-mango text-choco shadow-mango hover:bg-[#FFD35F]',
};

const MotionLink = motion.create(Link);

/**
 * CTA button that gently follows the cursor on desktop ("magnetic" effect).
 * Renders a router <Link> (to), an <a> (href), or a <button>.
 */
export default function MagneticButton({
  to,
  href,
  children,
  variant = 'primary',
  className = '',
  strength = 0.35,
  icon: Icon,
  ...rest
}) {
  const ref = useRef(null);
  const fine = useFinePointer();
  const reduce = useReducedMotion();
  const enabled = fine && !reduce;

  const x = useSpring(useMotionValue(0), { stiffness: 220, damping: 15, mass: 0.4 });
  const y = useSpring(useMotionValue(0), { stiffness: 220, damping: 15, mass: 0.4 });

  const onMove = (e) => {
    if (!enabled || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - (rect.left + rect.width / 2)) * strength);
    y.set((e.clientY - (rect.top + rect.height / 2)) * strength);
  };
  const reset = () => {
    x.set(0);
    y.set(0);
  };

  const classes = `group relative inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full px-7 py-3 text-base font-semibold transition-[background-color,box-shadow,color] duration-300 ${variants[variant]} ${className}`;

  const content = (
    <>
      <span className="relative z-10">{children}</span>
      {Icon && (
        <Icon
          className="relative z-10 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
          aria-hidden="true"
        />
      )}
    </>
  );

  const motionProps = {
    ref,
    style: { x, y },
    onMouseMove: onMove,
    onMouseLeave: reset,
    whileTap: { scale: 0.96 },
    className: classes,
    'data-cursor': 'hover',
    ...rest,
  };

  if (to) return <MotionLink to={to} {...motionProps}>{content}</MotionLink>;
  if (href) return <motion.a href={href} {...motionProps}>{content}</motion.a>;
  return <motion.button type="button" {...motionProps}>{content}</motion.button>;
}
