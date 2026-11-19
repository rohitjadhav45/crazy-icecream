import { motion } from 'framer-motion';
import { Milk, Nut, ShieldCheck, Heart } from 'lucide-react';
import { whyChooseUs } from '../../data/products';
import SectionTitle from '../ui/SectionTitle.jsx';

const icons = { Milk, Nut, ShieldCheck, Heart };

/**
 * Four icon cards explaining what makes Crazy Ice Cream special.
 */
export default function WhyChooseUs() {
  return (
    <section aria-labelledby="why-title" className="section">
      <div className="container-x">
        <SectionTitle
          id="why-title"
          eyebrow="Why Crazy?"
          title="Real ingredients."
          highlight="Really crazy taste."
          subtitle="Great ice cream isn't magic. It's pure milk, honest ingredients and a team that refuses to cut corners."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {whyChooseUs.map((item, i) => {
            const Icon = icons[item.icon];
            return (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -8 }}
                className="group relative overflow-hidden rounded-3xl border border-white/70 bg-white/70 p-7 shadow-soft backdrop-blur"
              >
                <div
                  aria-hidden="true"
                  className="absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-30 blur-2xl transition-all duration-500 group-hover:scale-150 group-hover:opacity-60"
                  style={{ background: item.color }}
                />
                <span
                  className="relative flex h-16 w-16 items-center justify-center rounded-2xl text-choco transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110"
                  style={{ background: item.color }}
                >
                  <Icon className="h-8 w-8" aria-hidden="true" />
                </span>
                <h3 className="relative mt-6 text-2xl font-semibold">{item.title}</h3>
                <p className="relative mt-3 text-sm leading-relaxed text-choco/70">{item.text}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
