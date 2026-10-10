import { Image as ImageIcon } from 'lucide-react';
import { cn } from '../../lib/cn';

/**
 * Renders a gallery image if one is supplied, otherwise a deterministic
 * branded placeholder derived from `seed`. This keeps the gallery fully
 * functional — no broken tiles, no network dependency — until real
 * photographs are dropped into `public/gallery/`.
 */

/** Deterministic 0–1 value from a seed and a salt, so renders are stable. */
function pseudo(seed: number, salt: number): number {
  const x = Math.sin(seed * 12.9898 + salt * 78.233) * 43758.5453;
  return x - Math.floor(x);
}

const palettes = [
  { from: '#113f2a', via: '#177945', to: '#072318' },
  { from: '#0d110e', via: '#146139', to: '#134d31' },
  { from: '#134d31', via: '#289658', to: '#113f2a' },
  { from: '#161c17', via: '#177945', to: '#39403a' },
  { from: '#134d31', via: '#146139', to: '#16221a' },
  { from: '#0d110e', via: '#289658', to: '#0a1a11' },
] as const;

export function GalleryFrame({
  src,
  alt,
  seed,
  className,
  iconClassName,
  loading = 'lazy',
}: {
  src?: string;
  alt: string;
  seed: number;
  className?: string;
  iconClassName?: string;
  loading?: 'lazy' | 'eager';
}) {
  if (src) {
    return (
      <img
        src={src}
        alt={alt}
        loading={loading}
        decoding="async"
        className={cn('h-full w-full object-cover', className)}
      />
    );
  }

  const palette = palettes[Math.floor(pseudo(seed, 1) * palettes.length)];
  const angle = 100 + Math.floor(pseudo(seed, 2) * 120);
  const dotOffset = Math.floor(pseudo(seed, 3) * 40);

  return (
    <div
      role="img"
      aria-label={alt}
      className={cn('relative h-full w-full overflow-hidden', className)}
      style={{ backgroundImage: `linear-gradient(${angle}deg, ${palette.from}, ${palette.via}, ${palette.to})` }}
    >
      {/* Soft light source, offset deterministically per item. */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background: `radial-gradient(60% 60% at ${20 + dotOffset}% ${15 + dotOffset / 2}%, rgba(255,255,255,0.16), transparent 70%)`,
        }}
      />
      {/* Tricolour floor — a nod to the party flag. */}
      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 flex h-2">
        <span className="flex-1 bg-green-600/80" />
        <span className="flex-1 bg-white/70" />
        <span className="flex-1 bg-crimson-600/80" />
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            'linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />
      <ImageIcon
        className={cn(
          'absolute left-1/2 top-1/2 h-8 w-8 -translate-x-1/2 -translate-y-1/2 text-white/25',
          iconClassName,
        )}
        aria-hidden="true"
      />
    </div>
  );
}
