import { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { ArrowRight, MapPin, Star } from 'lucide-react';
import { brand, heroImages } from '../../data/products';
import MagneticButton from '../ui/MagneticButton.jsx';
import SmartImage from '../ui/SmartImage.jsx';
import DripDivider from '../ui/DripDivider.jsx';

const headline = ['Indulge', 'in', 'the', 'Craziest', 'Ice', 'Cream', 'Delights!'];
const highlighted = new Set(['Craziest']);

const word = {
  hidden: { y: '110%', opacity: 0, rotate: 6 },
  show: { y: '0%', opacity: 1, rotate: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};

/**
 * Home hero: word-by-word headline reveal, parallax floating ice creams,
 * animated gradient blobs, two CTAs and a scroll indicator.
 */
export default function Hero() {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });

  // Parallax layers move at different speeds for depth.
  const yMain = useTransform(scrollYProgress, [0, 1], ['0%', reduce ? '0%' : '18%']);
  const yA = useTransform(scrollYProgress, [0, 1], ['0%', reduce ? '0%' : '-60%']);
  const yB = useTransform(scrollYProgress, [0, 1], ['0%', reduce ? '0%' : '-35%']);
  const yC = useTransform(scrollYProgress, [0, 1], ['0%', reduce ? '0%' : '-90%']);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', reduce ? '0%' : '25%']);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      aria-labelledby="hero-title"
      className="relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-gradient-to-br from-strawberry-100 via-cream to-mango-100"
    >
      {/* Animated gradient blobs */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-32 -top-32 h-[28rem] w-[28rem] animate-blob rounded-full bg-strawberry/35 blur-3xl" />
        <div className="absolute -right-24 top-1/4 h-[26rem] w-[26rem] animate-blob rounded-full bg-mango/40 blur-3xl [animation-delay:-5s]" />
        <div className="absolute bottom-0 left-1/3 h-[22rem] w-[22rem] animate-blob rounded-full bg-mint/40 blur-3xl [animation-delay:-9s]" />
        <div className="absolute right-1/3 top-10 h-40 w-40 animate-blob rounded-full bg-pistachio/40 blur-2xl [animation-delay:-2s]" />
      </div>

      <div className="container-x grid flex-1 items-center gap-10 pb-10 pt-32 sm:pt-36 lg:grid-cols-[1.1fr_1fr] lg:gap-6 lg:pb-20 lg:pt-28">
        {/* Copy */}
        <motion.div style={{ y: textY, opacity: fade }} className="relative z-10 text-center lg:text-left">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="glass inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-choco shadow-soft"
          >
            <span className="flex">
              {[0, 1, 2, 3, 4].map((i) => (
                <Star key={i} className="h-3.5 w-3.5 fill-mango text-mango" aria-hidden="true" />
              ))}
            </span>
            {brand.since}
          </motion.span>

          <motion.h1
            id="hero-title"
            className="mt-6 font-display text-[2.6rem] font-semibold leading-[1.02] text-choco min-[400px]:text-5xl sm:text-6xl lg:text-7xl xl:text-[5.25rem]"
            initial="hidden"
            animate="show"
            transition={{ staggerChildren: 0.09, delayChildren: 0.35 }}
            aria-label={brand.tagline}
          >
            {headline.map((w, i) => (
              <span key={i} className="inline-block overflow-hidden pb-2 align-bottom" aria-hidden="true">
                <motion.span variants={word} className={`inline-block ${highlighted.has(w) ? 'text-gradient' : ''}`}>
                  {w}
                </motion.span>
                {i < headline.length - 1 && ' '}
              </span>
            ))}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.7 }}
            className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-choco/75 sm:text-lg lg:mx-0"
          >
            Slow-churned from pure milk, loaded with real dry fruits and finished with a generous swirl of fun. From
            royal Rajbhog to classic Kesar Pista, every scoop is a little celebration, made with love in Sangli.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.7 }}
            className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start"
          >
            <MagneticButton to="/products" icon={ArrowRight} className="w-full sm:w-auto">
              Explore Flavours
            </MagneticButton>
            <MagneticButton to="/contact?type=dealer" variant="secondary" icon={MapPin} className="w-full sm:w-auto">
              Find a Dealer
            </MagneticButton>
          </motion.div>
        </motion.div>

        {/* Visual stack */}
        <div className="relative mx-auto aspect-square w-full max-w-[280px] min-[400px]:max-w-[340px] sm:max-w-[460px] lg:max-w-[560px]">
          {/* Glow plate */}
          <div
            aria-hidden="true"
            className="absolute inset-[8%] rounded-full bg-gradient-to-br from-white via-strawberry-100 to-mango-100 shadow-[0_40px_120px_-30px_rgba(255,79,139,0.6)]"
          />
          <motion.div
            style={{ y: yMain }}
            initial={{ scale: 0.6, opacity: 0, rotate: -10 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            transition={{ delay: 0.5, duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0"
          >
            <div className="h-full w-full animate-bob">
              <SmartImage
                src={heroImages.main}
                alt="An assortment of Crazy Ice Cream cones, cups and bars"
                eager
                width={700}
                height={700}
                className="h-full w-full object-contain drop-shadow-[0_35px_40px_rgba(59,31,26,0.28)]"
              />
            </div>
          </motion.div>

          {/* Floating flavours */}
          <motion.div
            style={{ y: yA }}
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="absolute -left-4 top-[2%] w-[30%] sm:-left-10"
          >
            <div className="animate-bob [animation-delay:-1.5s]">
              <SmartImage src={heroImages.floatA} alt="" width={240} height={240} className="w-full drop-shadow-xl" />
            </div>
          </motion.div>
          <motion.div
            style={{ y: yB }}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.25, duration: 0.8 }}
            className="absolute -right-2 bottom-[6%] w-[30%] sm:-right-8"
          >
            <div className="animate-bob [animation-delay:-3s]">
              <SmartImage src={heroImages.floatB} alt="" width={240} height={240} className="w-full drop-shadow-xl" />
            </div>
          </motion.div>
          <motion.div
            style={{ y: yC }}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.4, duration: 0.8 }}
            className="absolute -right-1 top-[4%] w-[22%]"
          >
            <div className="animate-bob [animation-delay:-2.2s]">
              <SmartImage src={heroImages.floatC} alt="" width={200} height={200} className="w-full drop-shadow-xl" />
            </div>
          </motion.div>

          {/* Glass badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6, duration: 0.6 }}
            className="glass absolute bottom-[4%] left-0 hidden items-center gap-3 rounded-2xl px-4 py-3 shadow-soft sm:flex"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-strawberry font-display text-lg font-bold text-white">
              25+
            </span>
            <span className="text-left text-sm leading-tight">
              <strong className="block font-semibold">Years of smiles</strong>
              <span className="text-choco/60">Made in Sangli</span>
            </span>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#loved-flavours"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="relative z-10 mx-auto mb-4 hidden flex-col items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-choco/60 sm:flex"
        aria-label="Scroll to most loved flavours"
      >
        <span className="flex h-10 w-6 justify-center rounded-full border-2 border-choco/30 pt-2">
          <span className="h-2 w-1.5 animate-scroll-dot rounded-full bg-strawberry" />
        </span>
        Scroll
      </motion.a>

      <DripDivider color="#FFF6EC" flip className="-mb-px" />
    </section>
  );
}
