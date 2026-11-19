import { motion } from 'framer-motion';
import { Flag, Award, Store, IceCreamCone, BadgeCheck, Trophy } from 'lucide-react';

import PageTransition from '../components/layout/PageTransition.jsx';
import Seo from '../components/ui/Seo.jsx';
import PageHero from '../components/ui/PageHero.jsx';
import SectionTitle from '../components/ui/SectionTitle.jsx';
import Stats from '../components/home/Stats.jsx';
import DealerCTA from '../components/home/DealerCTA.jsx';
import { achievements } from '../data/products';

const icons = { Flag, Award, Store, IceCreamCone, BadgeCheck, Trophy };

/**
 * Achievements: award cards with a shine-sweep hover and an animated counters band.
 */
export default function Achievements() {
  return (
    <PageTransition>
      <Seo
        title="Achievements"
        description="Milestones, recognitions and the growing dealer network behind Crazy Ice Cream, Sangli's favourite ice cream brand since 1999."
        path="/achievements"
      />
      <PageHero
        tone="choco"
        eyebrow="Achievements"
        title="Proud moments,"
        highlight="sweet milestones"
        subtitle="Every award and milestone belongs to the families, dealers and ice cream lovers who made Crazy what it is today."
      />

      <section aria-labelledby="awards-title" className="section pt-8">
        <div className="container-x">
          <SectionTitle id="awards-title" eyebrow="Hall of fame" title="Scoops of" highlight="recognition" />

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {achievements.map((a, i) => {
              const Icon = icons[a.icon];
              return (
                <motion.article
                  key={a.id}
                  tabIndex={0}
                  initial={{ opacity: 0, y: 40, rotateX: 15 }}
                  whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.7, delay: (i % 3) * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ y: -10 }}
                  className="shine group relative rounded-[2rem] border border-white/70 bg-white p-8 shadow-soft transition-shadow duration-500 hover:shadow-glow"
                >
                  <div
                    aria-hidden="true"
                    className="absolute inset-x-0 top-0 h-1.5 rounded-t-[2rem]"
                    style={{ background: a.color }}
                  />
                  <div className="flex items-start justify-between gap-4">
                    <span
                      className="flex h-16 w-16 items-center justify-center rounded-2xl text-choco transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110"
                      style={{ background: a.color }}
                    >
                      <Icon className="h-8 w-8" aria-hidden="true" />
                    </span>
                    <span className="rounded-full bg-cream px-3 py-1 font-display text-sm font-semibold text-choco/70">
                      {a.year}
                    </span>
                  </div>
                  <h3 className="mt-6 text-2xl font-semibold">{a.title}</h3>
                  <p className="mt-3 leading-relaxed text-choco/70">{a.text}</p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <Stats title="Milestones that keep melting our hearts" />
      <DealerCTA />
    </PageTransition>
  );
}
