import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

/**
 * Animated section heading with optional eyebrow and subtitle.
 * Wrap a word in `highlight` to paint it with the candy gradient.
 *
 * @example <SectionTitle eyebrow="Fan favourites" title="Most Loved" highlight="Flavours" />
 */
export default function SectionTitle({
  eyebrow,
  title,
  highlight,
  subtitle,
  align = 'center',
  dark = false,
  as: Tag = 'h2',
  id,
  className = '',
}) {
  const alignment = align === 'center' ? 'mx-auto text-center items-center' : 'text-left items-start';

  return (
    <motion.div
      className={`flex max-w-3xl flex-col gap-4 ${alignment} ${className}`}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-80px' }}
      transition={{ staggerChildren: 0.12 }}
    >
      {eyebrow && (
        <motion.span variants={fadeUp} className={dark ? 'eyebrow bg-white/10 text-mango' : 'eyebrow'}>
          <span className="h-1.5 w-1.5 rounded-full bg-current" aria-hidden="true" />
          {eyebrow}
        </motion.span>
      )}
      <motion.div variants={fadeUp}>
        <Tag
          id={id}
          className={`text-balance text-4xl font-semibold leading-[1.05] sm:text-5xl lg:text-6xl ${
            dark ? 'text-cream' : 'text-choco'
          }`}
        >
          {title} {highlight && <span className="text-gradient">{highlight}</span>}
        </Tag>
      </motion.div>
      {subtitle && (
        <motion.p
          variants={fadeUp}
          className={`max-w-2xl text-base leading-relaxed sm:text-lg ${dark ? 'text-cream/75' : 'text-choco/70'}`}
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
}
