import { motion } from 'framer-motion';
import { stats } from '../../data/products';
import Counter from '../ui/Counter.jsx';
import DripDivider from '../ui/DripDivider.jsx';

/**
 * Chocolate band of count-up stats. Reused on the Achievements page.
 */
export default function Stats({ title = 'Scooping smiles, by the numbers' }) {
  return (
    <section aria-labelledby="stats-title" className="relative">
      <div className="absolute inset-x-0 top-0 z-10 -translate-y-px">
        <DripDivider color="#FFF6EC" />
      </div>
      <div className="relative overflow-hidden bg-choco pb-20 pt-32 text-cream sm:pb-24 sm:pt-40">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="absolute -left-20 top-1/3 h-72 w-72 rounded-full bg-strawberry/25 blur-3xl" />
          <div className="absolute -right-10 bottom-0 h-72 w-72 rounded-full bg-mango/20 blur-3xl" />
        </div>
        <div className="container-x relative">
          <h2 id="stats-title" className="mx-auto max-w-2xl text-center text-3xl font-semibold sm:text-4xl lg:text-5xl">
            {title}
          </h2>
          <dl className="mt-14 grid grid-cols-2 gap-5 lg:grid-cols-4 lg:gap-8">
            {stats.map((s, i) => (
              <motion.div
                key={s.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="glass-dark flex flex-col-reverse items-center rounded-3xl px-4 py-8 text-center sm:py-10"
              >
                <dt className="mt-2 text-sm font-medium uppercase tracking-[0.15em] text-cream/70 sm:text-base">{s.label}</dt>
                <dd className="font-display text-5xl font-semibold text-mango sm:text-6xl lg:text-7xl">
                  <Counter value={s.value} suffix={s.suffix} />
                </dd>
              </motion.div>
            ))}
          </dl>
        </div>
      </div>
      <DripDivider color="#3B1F1A" className="-mt-px" />
    </section>
  );
}
