import { useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send, CheckCircle2, ChevronDown, RotateCcw } from 'lucide-react';

import PageTransition from '../components/layout/PageTransition.jsx';
import Seo from '../components/ui/Seo.jsx';
import PageHero from '../components/ui/PageHero.jsx';
import { InstagramIcon, FacebookIcon, LinkedinIcon, WhatsAppIcon } from '../components/ui/SocialIcons.jsx';
import { brand, enquiryTypes } from '../data/products';

// Map ?type= values from CTAs around the site to enquiry options.
const typeFromParam = { dealer: 'Become a dealer', distributor: 'Become a distributor', bulk: 'Bulk / party order' };

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/** Returns an object of field → error message. Empty object means valid. */
function validate(values) {
  const errors = {};
  if (values.name.trim().length < 2) errors.name = 'Please tell us your name.';
  const digits = values.phone.replace(/\D/g, '');
  if (!/^(91)?[6-9]\d{9}$/.test(digits)) errors.phone = 'Enter a valid 10-digit mobile number.';
  if (!EMAIL_RE.test(values.email.trim())) errors.email = 'Enter a valid email address.';
  if (values.city.trim().length < 2) errors.city = 'Which city or town are you in?';
  if (values.message.trim().length < 10) errors.message = 'Please add a few more details (at least 10 characters).';
  return errors;
}

/** Text input / textarea with a floating label and inline error. */
function Field({ id, label, error, as = 'input', ...props }) {
  const Tag = as;
  return (
    <div className={`field ${error ? 'field-error' : ''}`}>
      <Tag
        id={id}
        name={id}
        placeholder=" "
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        className={`field-input peer ${as === 'textarea' ? 'min-h-[150px] resize-y' : ''}`}
        {...props}
      />
      <label htmlFor={id} className="field-label">
        {label}
      </label>
      <AnimatePresence>
        {error && (
          <motion.p
            id={`${id}-error`}
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="mt-1.5 pl-2 text-sm font-medium text-strawberry-700"
            role="alert"
          >
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Contact() {
  const [params] = useSearchParams();
  const initialType = typeFromParam[params.get('type')] ?? enquiryTypes[0];

  const empty = { name: '', phone: '', email: '', city: '', type: initialType, message: '' };
  const [values, setValues] = useState(empty);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const onChange = (e) => {
    const next = { ...values, [e.target.name]: e.target.value };
    setValues(next);
    if (touched[e.target.name]) setErrors(validate(next));
  };
  const onBlur = (e) => {
    setTouched((t) => ({ ...t, [e.target.name]: true }));
    setErrors(validate(values));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const errs = validate(values);
    setErrors(errs);
    setTouched({ name: true, phone: true, email: true, city: true, message: true });
    if (Object.keys(errs).length) {
      document.getElementById(Object.keys(errs)[0])?.focus();
      return;
    }
    setSubmitted(true);
  };

  // Pre-composed message used by the WhatsApp / email hand-off after validation.
  const composed = useMemo(
    () =>
      `Hello Crazy Ice Cream,\n\nEnquiry: ${values.type}\nName: ${values.name}\nPhone: ${values.phone}\nEmail: ${values.email}\nCity: ${values.city}\n\n${values.message}`,
    [values]
  );
  const waLink = `${brand.whatsappHref.split('?')[0]}?text=${encodeURIComponent(composed)}`;
  const mailLink = `mailto:${brand.email}?subject=${encodeURIComponent(`${values.type} – ${values.name}`)}&body=${encodeURIComponent(composed)}`;

  const contactCards = [
    { Icon: Phone, title: 'Call us', value: brand.phone, href: brand.phoneHref, color: '#FF4F8B' },
    { Icon: Mail, title: 'Email us', value: brand.email, href: `mailto:${brand.email}`, color: '#FFC93C' },
    {
      Icon: MapPin,
      title: 'Visit the factory',
      value: `${brand.address.line1}, ${brand.address.line2}, ${brand.address.line3}`,
      href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
        `${brand.address.line1}, ${brand.address.line2}, ${brand.address.line3}`
      )}`,
      color: '#7FE0C5',
      external: true,
    },
  ];

  return (
    <PageTransition>
      <Seo
        title="Contact Us & Dealer Enquiry"
        description="Call 800 786 9028, email Crazyicecreamcompany@gmail.com or visit our factory at Vasantdada Industrial Estate, Sangli. Enquire about becoming a Crazy Ice Cream dealer."
        path="/contact"
      />
      <PageHero
        eyebrow="Contact"
        title="Let's talk"
        highlight="ice cream"
        subtitle="Questions, party orders, feedback or dealership enquiries: drop us a line and the Crazy team will scoop it up."
      />

      {/* Contact cards */}
      <section aria-label="Contact details" className="pt-8">
        <div className="container-x grid gap-5 md:grid-cols-3">
          {contactCards.map(({ Icon, title, value, href, color, external }, i) => (
            <motion.a
              key={title}
              href={href}
              {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="group flex items-start gap-4 rounded-3xl bg-white p-6 shadow-soft transition-shadow hover:shadow-glow"
            >
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl text-choco" style={{ background: color }}>
                <Icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <span className="min-w-0">
                <span className="block text-sm font-medium text-choco/60">{title}</span>
                <span className="mt-1 block break-words font-display text-lg font-semibold leading-snug group-hover:text-strawberry-700">
                  {value}
                </span>
              </span>
            </motion.a>
          ))}
        </div>
      </section>

      {/* Form + map */}
      <section aria-labelledby="form-title" className="section">
        <div className="container-x grid gap-10 lg:grid-cols-[1.1fr_1fr]">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative overflow-hidden rounded-[2.5rem] bg-white/80 p-6 shadow-soft backdrop-blur sm:p-10"
          >
            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.form
                  key="form"
                  noValidate
                  onSubmit={onSubmit}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, y: -20 }}
                  aria-labelledby="form-title"
                >
                  <h2 id="form-title" className="text-3xl font-semibold sm:text-4xl">
                    Send us an <span className="text-gradient">enquiry</span>
                  </h2>
                  <p className="mt-2 text-choco/70">We usually reply within one working day.</p>

                  <div className="mt-8 grid gap-5 sm:grid-cols-2">
                    <Field id="name" label="Your name" autoComplete="name" value={values.name} onChange={onChange} onBlur={onBlur} error={touched.name && errors.name} />
                    <Field id="phone" label="Mobile number" type="tel" inputMode="tel" autoComplete="tel" value={values.phone} onChange={onChange} onBlur={onBlur} error={touched.phone && errors.phone} />
                    <Field id="email" label="Email address" type="email" autoComplete="email" value={values.email} onChange={onChange} onBlur={onBlur} error={touched.email && errors.email} />
                    <Field id="city" label="City / Town" autoComplete="address-level2" value={values.city} onChange={onChange} onBlur={onBlur} error={touched.city && errors.city} />

                    {/* Enquiry type (label always floated) */}
                    <div className="field sm:col-span-2">
                      <select
                        id="type"
                        name="type"
                        value={values.type}
                        onChange={onChange}
                        className="field-input appearance-none pr-12"
                      >
                        {enquiryTypes.map((t) => (
                          <option key={t}>{t}</option>
                        ))}
                      </select>
                      <label htmlFor="type" className="pointer-events-none absolute left-4 top-2 text-xs font-semibold text-strawberry-700">
                        I'm interested in
                      </label>
                      <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-choco/50" aria-hidden="true" />
                    </div>

                    <div className="sm:col-span-2">
                      <Field id="message" as="textarea" label="Your message" rows={5} value={values.message} onChange={onChange} onBlur={onBlur} error={touched.message && errors.message} />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="mt-8 inline-flex min-h-[52px] w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-strawberry to-[#FF7A6B] px-8 font-semibold text-white shadow-pink transition hover:brightness-105 sm:w-auto"
                  >
                    <Send className="h-5 w-5" aria-hidden="true" /> Send enquiry
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="done"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center py-8 text-center"
                  role="status"
                >
                  <motion.span
                    initial={{ scale: 0, rotate: -45 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ type: 'spring', stiffness: 260, damping: 14, delay: 0.1 }}
                    className="flex h-20 w-20 items-center justify-center rounded-full bg-mint text-choco"
                  >
                    <CheckCircle2 className="h-10 w-10" aria-hidden="true" />
                  </motion.span>
                  <h2 className="mt-6 text-3xl font-semibold">Almost there, {values.name.split(' ')[0]}!</h2>
                  <p className="mt-3 max-w-md text-choco/70">
                    Your enquiry is ready. Choose how you'd like to send it and we'll get back to you faster than a
                    scoop melts in May.
                  </p>
                  <div className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
                    <a
                      href={waLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 font-semibold text-white transition hover:brightness-95"
                    >
                      <WhatsAppIcon className="h-5 w-5" /> Send on WhatsApp
                    </a>
                    <a
                      href={mailLink}
                      className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full bg-choco px-6 font-semibold text-cream transition hover:bg-choco-500"
                    >
                      <Mail className="h-5 w-5" aria-hidden="true" /> Send by email
                    </a>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setValues(empty);
                      setTouched({});
                      setErrors({});
                    }}
                    className="mt-6 inline-flex min-h-[44px] items-center gap-2 text-sm font-semibold text-choco/60 hover:text-strawberry-700"
                  >
                    <RotateCcw className="h-4 w-4" aria-hidden="true" /> Start a new enquiry
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Map + socials */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="flex flex-col gap-6"
          >
            <div className="relative min-h-[320px] flex-1 overflow-hidden rounded-[2.5rem] shadow-soft">
              <iframe
                title="Map showing the Crazy Ice Cream factory in Sangli"
                src={brand.mapEmbed}
                className="absolute inset-0 h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
            <div className="rounded-[2rem] bg-choco p-6 text-cream sm:p-8">
              <h2 className="font-display text-2xl font-semibold">Follow the crazy</h2>
              <p className="mt-1 text-cream/70">New flavours, offers and happy faces, every week.</p>
              <div className="mt-5 flex flex-wrap gap-3">
                {[
                  { href: brand.socials.instagram, label: brand.socials.instagramHandle, Icon: InstagramIcon },
                  { href: brand.socials.facebook, label: 'Facebook', Icon: FacebookIcon },
                  { href: brand.socials.linkedin, label: 'LinkedIn', Icon: LinkedinIcon },
                ].map(({ href, label, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-[44px] items-center gap-2 rounded-full bg-white/10 px-4 text-sm font-medium transition hover:bg-strawberry"
                  >
                    <Icon className="h-5 w-5" /> {label}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
}
