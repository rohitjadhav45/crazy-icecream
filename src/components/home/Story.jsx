import { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import { story } from '../../data/products';
import SmartImage from '../ui/SmartImage.jsx';
import MagneticButton from '../ui/MagneticButton.jsx';

const reveal = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

/**
 * Split "Our Story" section: parallax image on one side, scroll-revealed copy on the other.
 */
export default function Story() {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const imgY = useTransform(scrollYProgress, [0, 1], reduce ? ['0%', '0%'] : ['8%', '-8%']);
  const badgeRotate = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [-20, 20]);

  return (
    <section ref={ref} aria-labelledby="story-title" className="section">
      <div className="container-x grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        {/* Image side */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-lg"
        >
          <div className="relative aspect-square overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-mango-100 via-strawberry-100 to-mint-100 shadow-soft">
            <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.9),transparent_55%)]" />
            <motion.div style={{ y: imgY }} className="absolute inset-0 p-8">
              <SmartImage
                src={story.image}
                alt="Crazy Ice Cream's range of handcrafted frozen desserts"
                width={600}
                height={600}
                className="h-full w-full object-contain drop-shadow-[0_30px_35px_rgba(59,31,26,0.25)]"
              />
            </motion.div>
          </div>
          {/* Rotating "since 1999" sticker */}
          <motion.div
            style={{ rotate: badgeRotate }}
            className="absolute -bottom-6 -right-2 flex h-28 w-28 flex-col items-center justify-center rounded-full bg-choco text-center text-cream shadow-soft sm:-right-6 sm:h-36 sm:w-36"
          >
            <span className="text-[0.65rem] uppercase tracking-[0.25em] text-mango sm:text-xs">Since</span>
            <span className="font-display text-3xl font-bold sm:text-5xl">1999</span>
          </motion.div>
          <div aria-hidden="true" className="absolute -left-6 -top-6 h-24 w-24 rounded-full bg-mint/60 blur-xl" />
        </motion.div>

        {/* Text side */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          transition={{ staggerChildren: 0.14 }}
        >
          <motion.span variants={reveal} className="eyebrow">
            Our story
          </motion.span>
          <motion.h2
            variants={reveal}
            id="story-title"
            className="mt-5 text-balance text-4xl font-semibold leading-[1.05] sm:text-5xl lg:text-6xl"
          >
            A scoop of <span className="text-gradient">Sangli</span>, served since 1999
          </motion.h2>
          {story.paragraphs.map((para) => (
            <motion.p key={para.slice(0, 20)} variants={reveal} className="mt-5 text-base leading-relaxed text-choco/75 sm:text-lg">
              {para}
            </motion.p>
          ))}
          <motion.ul variants={reveal} className="mt-8 grid gap-3 sm:grid-cols-3">
            {story.points.map((pt) => (
              <li key={pt} className="glass flex items-center gap-2 rounded-2xl px-4 py-3 text-sm font-medium shadow-soft">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-pistachio text-choco">
                  <Check className="h-3.5 w-3.5" aria-hidden="true" />
                </span>
                {pt}
              </li>
            ))}
          </motion.ul>
          <motion.div variants={reveal} className="mt-10">
            <MagneticButton to="/about" variant="dark" icon={ArrowRight}>
              Read our full story
            </MagneticButton>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
