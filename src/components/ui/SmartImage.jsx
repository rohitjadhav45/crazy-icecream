import { useState } from 'react';
import { FALLBACK_IMAGE } from '../../data/products';

/**
 * Image with lazy loading, async decoding, a soft fade-in once loaded,
 * and an on-brand fallback if the remote file fails.
 *
 * Wrap it in a box with a fixed aspect ratio (e.g. `aspect-square`) to avoid layout shift.
 */
export default function SmartImage({
  src,
  alt,
  className = '',
  eager = false,
  width = 600,
  height = 600,
  ...rest
}) {
  const [current, setCurrent] = useState(src);
  const [loaded, setLoaded] = useState(false);

  return (
    <img
      src={current}
      alt={alt}
      width={width}
      height={height}
      loading={eager ? 'eager' : 'lazy'}
      decoding="async"
      fetchpriority={eager ? 'high' : undefined}
      onLoad={() => setLoaded(true)}
      onError={() => {
        if (current !== FALLBACK_IMAGE) setCurrent(FALLBACK_IMAGE);
      }}
      className={`transition-opacity duration-700 ${loaded ? 'opacity-100' : 'opacity-0'} ${className}`}
      draggable="false"
      {...rest}
    />
  );
}
