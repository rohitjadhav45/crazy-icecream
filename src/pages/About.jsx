import { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Target, Eye, Sparkles, CheckCircle2, Factory } from 'lucide-react';

import PageTransition from '../components/layout/PageTransition.jsx';
import Seo from '../components/ui/Seo.jsx';
import PageHero from '../components/ui/PageHero.jsx';
import SectionTitle from '../components/ui/SectionTitle.jsx';
import SmartImage from '../components/ui/SmartImage.jsx';
import Stats from '../components/home/Stats.jsx';
import DealerCTA from '../components/home/DealerCTA.jsx';
import { timeline, missionVision, qualityPoints, categoryShowcase } from '../data/products';

const icons = { Target, Eye, Sparkles };

/** Vertical timeline whose centre line "draws" as you scroll. */
function Timeline() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 75%', 'end 60%'] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 120, damping: 25 });

  return (
    <div ref={ref} className="relative mx-auto mt-16 max-w-5xl">
      {/* Track + animated fill */}
      <div aria-hidden="true" className="absolute bottom-0 left-5 top-0 w-1 rounded-full bg-choco/10 md:left-1/2 md:-translate-x-1/2" />
      <motion.div
        aria-hidden="true"
        style={{ scaleY }}
        className="absolute bottom-0 left-5 top-0 w-1 origin-top rounded-full bg-gradient-to-b from-strawberry via-mango to-mint md:left-1/2 md:-translate-x-1/2"
      />

      <ol className="space-y-12 md:space-y-20">
        {timeline.map((t, i) => {
          const right = i % 2 === 1;
          return (
            <li key={t.year} className="relative md:grid md:grid-cols-2 md:gap-16">
              {/* Dot */}
              <motion.span
                aria-hidden="true"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                className="absolute left-5 top-6 z-10 flex h-6 w-6 -translate-x-1/2 items-center justify-center rounded-full bg-white shadow-pink ring-4 ring-strawberry md:left-1/2"
              >
                <span className="h-2 w-2 rounded-full bg-strawberry" />
              </motion.span>

              <motion.div
                initial={{ opacity: 0, x: right ? 60 : -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className={`ml-14 md:ml-0 ${right ? 'md:col-start-2' : 'md:col-start-1 md:text-right'}`}
              >
                <div className="glass rounded-3xl p-6 shadow-soft sm:p-8">
                  <span className="font-display text-5xl font-bold text-gradient sm:text-6xl">{t.year}</span>
                  <h3 className="mt-2 text-2xl font-semibold">{t.title}</h3>
                  <p className="mt-3 leading-relaxed text-choco/70">{t.text}</p>
                </div>
              </motion.div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

export default function About() {
  return (
    <PageTransition>
      <Seo
        title="About Us"
        description="The story of Crazy Ice Cream: from a small batch freezer in Sangli in 1999 to a much-loved Maharashtrian ice cream and dairy brand."
        path="/about"
      />
      <PageHero
        eyebrow="About Crazy Ice Cream"
        title="Sweetening lives"
        highlight="since 1999"
        subtitle="A Sangli family business with a simple obsession: making ice cream so good it makes people a little bit crazy."
      />

      {/* Timeline */}
      <section aria-labelledby="journey-title" className="section pt-8">
        <div className="container-x">
          <SectionTitle
            id="journey-title"
            eyebrow="Our journey"
            title="Two decades of"
            highlight="happy scoops"
            subtitle="Every milestone, from the first batch to the newest flavour, was built on the same promise of pure milk and honest taste."
          />
          <Timeline />
        </div>
      </section>

      {/* Mission & vision */}
      <section aria-labelledby="mission-title" className="section">
        <div className="container-x">
          <SectionTitle id="mission-title" eyebrow="What drives us" title="Mission, vision" highlight="& values" />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {missionVision.map((m, i) => {
              const Icon = icons[m.icon];
              return (
                <motion.article
                  key={m.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.7, delay: i * 0.12 }}
                  whileHover={{ y: -8 }}
                  className="relative overflow-hidden rounded-[2rem] bg-white p-8 shadow-soft"
                >
                  <div
                    aria-hidden="true"
                    className="absolute -right-12 -top-12 h-40 w-40 rounded-full opacity-30 blur-2xl"
                    style={{ background: m.color }}
                  />
                  <span className="relative flex h-14 w-14 items-center justify-center rounded-2xl text-choco" style={{ background: m.color }}>
                    <Icon className="h-7 w-7" aria-hidden="true" />
                  </span>
                  <h3 className="relative mt-6 text-3xl font-semibold">{m.title}</h3>
                  <p className="relative mt-3 leading-relaxed text-choco/70">{m.text}</p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Factory & quality */}
      <section aria-labelledby="quality-title" className="section">
        <div className="container-x grid items-center gap-14 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.9 }}
            className="relative order-2 lg:order-1"
          >
            <div className="grid grid-cols-2 gap-4">
              {categoryShowcase.map((c, i) => (
                <div
                  key={c.id}
                  className={`flex aspect-square items-center justify-center rounded-[2rem] bg-gradient-to-br ${c.gradient} p-5 shadow-soft ${
                    i === 0 ? 'col-span-2 aspect-[2/1]' : ''
                  }`}
                >
                  <SmartImage
                    src={c.image}
                    alt={`${c.title} made in our Sangli factory`}
                    width={500}
                    height={i === 0 ? 250 : 500}
                    className="h-full w-full object-contain drop-shadow-xl"
                  />
                </div>
              ))}
            </div>
            <div className="glass absolute -bottom-6 left-1/2 flex -translate-x-1/2 items-center gap-3 whitespace-nowrap rounded-full px-5 py-3 shadow-soft">
              <Factory className="h-5 w-5 text-strawberry" aria-hidden="true" />
              <span className="text-sm font-semibold">Vasantdada Industrial Estate, Sangli</span>
            </div>
          </motion.div>

          <div className="order-1 lg:order-2">
            <SectionTitle
              id="quality-title"
              align="left"
              eyebrow="Factory & quality"
              title="Hygiene you can"
              highlight="taste"
              subtitle="Our modern plant on Madhavnagar Road is where pure milk becomes pure joy, under strict hygiene and quality controls at every step."
            />
            <ul className="mt-10 grid gap-4 sm:grid-cols-2">
              {qualityPoints.map((q, i) => (
                <motion.li
                  key={q.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="rounded-3xl bg-white/80 p-5 shadow-soft"
                >
                  <CheckCircle2 className="h-6 w-6 text-mint-600" aria-hidden="true" />
                  <h3 className="mt-3 text-lg font-semibold">{q.title}</h3>
                  <p className="mt-1 text-sm text-choco/70">{q.text}</p>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <Stats title="A little crazy, a lot of love" />
      <DealerCTA />
    </PageTransition>
  );
}
