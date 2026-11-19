import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ArrowUpRight } from 'lucide-react';
import { brand, navLinks, productCategories } from '../../data/products';
import DripDivider from '../ui/DripDivider.jsx';
import SmartImage from '../ui/SmartImage.jsx';
import { InstagramIcon, FacebookIcon, LinkedinIcon } from '../ui/SocialIcons.jsx';

/**
 * Site footer with a melting drip top edge.
 */
export default function Footer() {
  const year = new Date().getFullYear();
  const socials = [
    { href: brand.socials.instagram, label: 'Instagram', Icon: InstagramIcon },
    { href: brand.socials.facebook, label: 'Facebook', Icon: FacebookIcon },
    { href: brand.socials.linkedin, label: 'LinkedIn', Icon: LinkedinIcon },
  ];

  return (
    <footer className="relative mt-10 bg-choco text-cream">
      {/* Drip edge: cream page melting into the chocolate footer */}
      <div className="absolute inset-x-0 top-0 -translate-y-px">
        <DripDivider color="#FFF6EC" />
      </div>

      <div className="container-x relative grid gap-12 pb-10 pt-32 sm:pt-40 md:grid-cols-2 lg:grid-cols-12">
        {/* Brand */}
        <div className="lg:col-span-4">
          <Link to="/" className="inline-block rounded-2xl bg-cream/95 p-3" aria-label={`${brand.name} – home`}>
            <SmartImage src={brand.logo} alt={`${brand.name} logo`} width={160} height={64} className="h-14 w-auto" />
          </Link>
          <p className="mt-6 max-w-sm text-cream/75">
            Handcrafted ice creams, kulfis and dairy delights from Sangli, made with pure milk, real dry fruits and a
            generous scoop of craziness.
          </p>
          <p className="mt-3 font-display text-xl text-mango">{brand.since}</p>
          <div className="mt-6 flex gap-3">
            {socials.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${brand.name} on ${label}`}
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-cream transition hover:-translate-y-1 hover:bg-strawberry"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>

        {/* Quick links */}
        <nav aria-label="Footer" className="lg:col-span-2">
          <h2 className="font-display text-lg font-semibold text-white">Quick links</h2>
          <ul className="mt-4 space-y-1">
            {navLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="inline-flex min-h-[40px] items-center text-cream/70 transition hover:text-mango">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Products */}
        <div className="lg:col-span-2">
          <h2 className="font-display text-lg font-semibold text-white">Our range</h2>
          <ul className="mt-4 space-y-1">
            {productCategories
              .filter((c) => c.id !== 'all')
              .map((c) => (
                <li key={c.id}>
                  <Link
                    to={`/products?category=${c.id}`}
                    className="inline-flex min-h-[40px] items-center text-cream/70 transition hover:text-mango"
                  >
                    {c.label}
                  </Link>
                </li>
              ))}
          </ul>
        </div>

        {/* Contact */}
        <address className="not-italic md:col-span-2 lg:col-span-4">
          <h2 className="font-display text-lg font-semibold text-white">Get in touch</h2>
          <ul className="mt-4 space-y-4 text-cream/80">
            <li>
              <a href={brand.phoneHref} className="flex min-h-[44px] items-center gap-3 transition hover:text-mango">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10">
                  <Phone className="h-4 w-4" aria-hidden="true" />
                </span>
                {brand.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${brand.email}`} className="flex min-h-[44px] items-center gap-3 break-all transition hover:text-mango">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10">
                  <Mail className="h-4 w-4" aria-hidden="true" />
                </span>
                {brand.email}
              </a>
            </li>
            <li className="flex gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10">
                <MapPin className="h-4 w-4" aria-hidden="true" />
              </span>
              <span>
                {brand.address.line1},<br />
                {brand.address.line2},<br />
                {brand.address.line3}
              </span>
            </li>
          </ul>
          <Link
            to="/contact?type=dealer"
            className="mt-6 inline-flex min-h-[48px] items-center gap-2 rounded-full bg-mango px-6 py-3 font-semibold text-choco transition hover:bg-white"
          >
            Become a dealer <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </address>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-2 py-6 text-center text-sm text-cream/60 sm:flex-row sm:text-left">
          <p>
            © {year} {brand.company}. All rights reserved.
          </p>
          <p>Made with 🍦 in Sangli, Maharashtra</p>
        </div>
      </div>
    </footer>
  );
}
