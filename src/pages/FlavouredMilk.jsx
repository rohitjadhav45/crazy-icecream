import { useCallback, useState } from 'react';
import { motion } from 'framer-motion';
import { Snowflake, Leaf, Zap, Eye } from 'lucide-react';

import PageTransition from '../components/layout/PageTransition.jsx';
import Seo from '../components/ui/Seo.jsx';
import PageHero from '../components/ui/PageHero.jsx';
import SectionTitle from '../components/ui/SectionTitle.jsx';
import SmartImage from '../components/ui/SmartImage.jsx';
import ProductModal from '../components/ui/ProductModal.jsx';
import DealerCTA from '../components/home/DealerCTA.jsx';
import { flavouredMilks } from '../data/products';

const perks = [
  { Icon: Leaf, title: 'Pure full-cream milk', text: 'Nothing watered down. Just rich, creamy goodness.', color: '#B8D982' },
  { Icon: Snowflake, title: 'Best served chilled', text: 'Grab a bottle straight from the cooler and refresh.', color: '#7FE0C5' },
  { Icon: Zap, title: 'Energy in every sip', text: 'A tasty dose of calcium and protein for busy days.', color: '#FFC93C' },
];

/**
 * Flavoured Milk: bottle cards tinted in their flavour colour; the bottle floats on hover.
 */
export default function FlavouredMilk() {
  const [selected, setSelected] = useState(null);
  const close = useCallback(() => setSelected(null), []);

  return (
    <PageTransition>
      <Seo
        title="Flavoured Milk"
        description="Chilled Crazy flavoured milk in Butterscotch, Chocolate, Badam and Kesar Pista, made from pure full-cream milk in Sangli."
        path="/flavoured-milk"
      />
      <PageHero
        tone="mango"
        eyebrow="Chilled & creamy"
        title="Flavoured milk that"
        highlight="hits the spot"
        subtitle="Pure full-cream milk, blended with real flavours and bottled cold. Shake it, sip it, love it."
      />

      <section aria-labelledby="milk-title" className="section pt-8">
        <div className="container-x">
          <SectionTitle id="milk-title" title="Pick your" highlight="bottle" />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {flavouredMilks.map((m, i) => (
              <motion.article
                key={m.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                whileHover="hover"
                className="group relative flex flex-col overflow-hidden rounded-[2.5rem] p-6 pb-7 shadow-soft"
                style={{ background: `linear-gradient(175deg, ${m.bg} 0%, ${m.bg}AA 55%, #ffffff 100%)` }}
              >
                {/* Bubbles */}
                <div aria-hidden="true" className="pointer-events-none absolute inset-0">
                  <span className="absolute left-6 top-10 h-3 w-3 rounded-full bg-white/70" />
                  <span className="absolute right-8 top-24 h-5 w-5 rounded-full bg-white/50" />
                  <span className="absolute left-10 top-44 h-2 w-2 rounded-full bg-white/80" />
                </div>

                <div className="relative aspect-[3/4] w-full">
                  {/* Shadow under the bottle shrinks as it floats */}
                  <motion.span
                    aria-hidden="true"
                    className="absolute bottom-1 left-1/2 h-4 w-1/2 -translate-x-1/2 rounded-[50%] bg-choco/20 blur-md"
                    variants={{ hover: { scale: 0.7, opacity: 0.5 } }}
                  />
                  <motion.div
                    className="h-full w-full"
                    variants={{ hover: { y: -22, rotate: -4 } }}
                    transition={{ type: 'spring', stiffness: 200, damping: 12 }}
                  >
                    <SmartImage
                      src={m.image}
                      alt={`${m.name} flavoured milk bottle`}
                      width={400}
                      height={530}
                      className="h-full w-full object-contain drop-shadow-[0_25px_25px_rgba(59,31,26,0.25)]"
                    />
                  </motion.div>
                </div>

                <div className="relative mt-5 text-center">
                  <h3 className="text-3xl font-semibold">{m.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-choco/70">{m.description}</p>
                  <button
                    type="button"
                    onClick={() => setSelected(m)}
                    className="mt-5 inline-flex min-h-[44px] items-center gap-2 rounded-full px-5 text-sm font-semibold text-white transition hover:brightness-110"
                    style={{ background: m.accent }}
                    aria-label={`View details of ${m.name} flavoured milk`}
                  >
                    <Eye className="h-4 w-4" aria-hidden="true" /> View Details
                  </button>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Perks */}
          <div className="mt-20 grid gap-5 md:grid-cols-3">
            {perks.map(({ Icon, title, text, color }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="glass flex items-start gap-4 rounded-3xl p-6 shadow-soft"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl text-choco" style={{ background: color }}>
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-xl font-semibold">{title}</h3>
                  <p className="mt-1 text-sm text-choco/70">{text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <DealerCTA />
      <ProductModal product={selected} categoryLabel="Flavoured Milk" accent={selected?.accent} onClose={close} />
    </PageTransition>
  );
}
