import { Sparkles } from 'lucide-react';

/**
 * Infinite, seamless horizontal marquee. The list is rendered twice and the
 * track slides by -50%, so the loop never shows a gap. Pauses on hover and
 * stops entirely for users who prefer reduced motion.
 */
export default function Marquee({ items = [], reverse = false, fast = false, className = '', tone = 'pink' }) {
  const tones = {
    pink: 'bg-strawberry text-white',
    choco: 'bg-choco text-cream',
    mango: 'bg-mango text-choco',
  };

  const list = [...items, ...items];

  return (
    <div
      className={`group relative flex overflow-hidden py-5 ${tones[tone]} ${className}`}
      role="marquee"
      aria-label={`Flavours: ${items.join(', ')}`}
    >
      <ul
        className={`flex w-max shrink-0 items-center gap-8 pr-8 ${fast ? 'animate-marquee-fast' : 'animate-marquee'} group-hover:[animation-play-state:paused] motion-reduce:animate-none`}
        style={reverse ? { animationDirection: 'reverse' } : undefined}
        aria-hidden="true"
      >
        {list.map((item, i) => (
          <li key={`${item}-${i}`} className="flex items-center gap-8 whitespace-nowrap">
            <span className="font-display text-2xl font-semibold uppercase tracking-wide sm:text-3xl">{item}</span>
            <Sparkles className="h-5 w-5 opacity-80" />
          </li>
        ))}
      </ul>
    </div>
  );
}
