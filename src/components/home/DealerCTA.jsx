import { motion } from 'framer-motion';
import { ArrowRight, Phone, Store, Truck, Users } from 'lucide-react';
import { brand } from '../../data/products';
import MagneticButton from '../ui/MagneticButton.jsx';

const perks = [
  { Icon: Store, text: 'Fast-moving, much-loved brand' },
  { Icon: Truck, text: 'Reliable cold-chain supply' },
  { Icon: Users, text: 'Marketing & freezer support' },
];

/**
 * Full-width animated gradient banner inviting dealers & distributors.
 */
export default function DealerCTA() {
  return (
    <section aria-labelledby="dealer-title" className="section">
      <div className="container-x">
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative isolate overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-strawberry via-[#FF6F7D] to-mango px-6 py-14 text-white shadow-pink sm:px-12 sm:py-20 lg:px-20"
        >
          {/* Animated blobs */}
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute -left-16 -top-16 h-72 w-72 animate-blob rounded-full bg-white/25 blur-3xl" />
            <div className="absolute -bottom-24 right-10 h-80 w-80 animate-blob rounded-full bg-mint/40 blur-3xl [animation-delay:-6s]" />
            <svg className="absolute right-0 top-0 h-full w-1/2 opacity-15" viewBox="0 0 200 200" preserveAspectRatio="xMaxYMid slice">
              {Array.from({ length: 30 }).map((_, i) => (
                <circle key={i} cx={(i * 37) % 200} cy={(i * 53) % 200} r={(i % 4) + 2} fill="#fff" />
              ))}
            </svg>
          </div>

          <div className="grid items-center gap-10 lg:grid-cols-[1.4fr_1fr]">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] backdrop-blur">
                Partner with us
              </span>
              <h2 id="dealer-title" className="mt-5 text-balance text-4xl font-semibold leading-[1.05] sm:text-5xl lg:text-6xl">
                Become a Crazy Ice Cream dealer
              </h2>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-white/90 sm:text-lg">
                Bring Sangli's favourite scoops to your neighbourhood. Join a growing family of dealers and
                distributors who sell smiles every single day.
              </p>
              <ul className="mt-7 grid gap-3 sm:grid-cols-3">
                {perks.map(({ Icon, text }) => (
                  <li key={text} className="flex items-center gap-2 text-sm font-medium">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/25">
                      <Icon className="h-4 w-4" aria-hidden="true" />
                    </span>
                    {text}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row lg:flex-col lg:items-end">
              <MagneticButton to="/contact?type=dealer" variant="light" icon={ArrowRight} className="w-full sm:w-auto">
                Apply to be a dealer
              </MagneticButton>
              <MagneticButton href={brand.phoneHref} variant="dark" icon={Phone} className="w-full sm:w-auto">
                Call {brand.phone}
              </MagneticButton>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
