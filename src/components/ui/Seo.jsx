import { Helmet } from 'react-helmet-async';
import { brand } from '../../data/products';

/**
 * Per-page <title> and meta tags.
 * @param {{ title: string, description: string, path?: string }} props
 */
export default function Seo({ title, description, path = '' }) {
  const fullTitle = title ? `${title} | ${brand.name}` : `${brand.name} | ${brand.tagline}`;
  const url = typeof window !== 'undefined' ? `${window.location.origin}${path}` : path;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={brand.name} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={brand.logo} />
      <meta property="og:url" content={url} />
      <meta name="twitter:card" content="summary_large_image" />
    </Helmet>
  );
}
