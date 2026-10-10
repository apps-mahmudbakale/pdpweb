import { useCallback, useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';
import { GalleryFrame } from '../ui/GalleryFrame';
import { galleryItems, formatGalleryDate } from '../../data/gallery';
import type { GalleryItem } from '../../data/gallery';
import { cn } from '../../lib/cn';

/**
 * Auto-advancing image slides for the home page hero.
 *
 * Reuses `galleryItems` so a photograph added in `src/data/gallery.ts` shows up
 * here as well as in the gallery. Items without an `image` fall back to the
 * branded placeholder from GalleryFrame, so the band is never empty.
 */

/** Ids pulled from the gallery, chosen to span categories and eras. */
const slideIds = [1, 8, 5, 3, 10];

const slides: GalleryItem[] = slideIds
  .map((id) => galleryItems.find((item) => item.id === id))
  .filter((item): item is GalleryItem => Boolean(item));

const intervalMs = 6000;

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  );

  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)');
    const onChange = () => setReduced(query.matches);
    query.addEventListener('change', onChange);
    return () => query.removeEventListener('change', onChange);
  }, []);

  return reduced;
}

export function HeroSlides() {
  const count = slides.length;
  const reducedMotion = usePrefersReducedMotion();
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(true);

  const goTo = useCallback(
    (next: number) => setIndex(((next % count) + count) % count),
    [count],
  );

  const step = useCallback((delta: number) => setIndex((current) => ((current + delta) % count + count) % count), [count]);

  // Autoplay. Restarts whenever the active slide or play state changes, and
  // never runs when the visitor has asked for reduced motion.
  const canAutoPlay = count > 1 && playing && !reducedMotion;

  useEffect(() => {
    if (!canAutoPlay) return;
    const timer = window.setInterval(() => step(1), intervalMs);
    return () => window.clearInterval(timer);
  }, [canAutoPlay, index, step]);

  const active = slides[index];

  const slidesList = useMemo(
    () =>
      slides.map((item, i) => ({
        item,
        isActive: i === index,
        position: i + 1,
      })),
    [index],
  );

  if (!active) return null;

  return (
    <section aria-labelledby="hero-slides-heading" className="mt-16 sm:mt-20">
      <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
        <h2
          id="hero-slides-heading"
          className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-green-300"
        >
          <span aria-hidden="true" className="h-px w-8 bg-green-300/50" />
          From the archive
        </h2>
        <Link
          to="/gallery"
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-white/55 transition-colors hover:text-white"
        >
          View the full gallery
          <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
        </Link>
      </div>

      <div
        role="group"
        aria-roledescription="carousel"
        aria-label="Photographs from the party archive"
        className="mt-6"
      >
        <div
          className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] shadow-seal sm:aspect-[16/9] lg:aspect-[21/9]"
          onMouseEnter={() => setPlaying(false)}
          onMouseLeave={() => setPlaying(true)}
        >
          {slidesList.map(({ item, isActive, position }) => (
            <div
              key={item.id}
              role="group"
              aria-roledescription="slide"
              aria-label={`${position} of ${count}: ${item.title}`}
              aria-hidden={!isActive}
              className={cn(
                'absolute inset-0 transition-opacity duration-700 ease-out motion-reduce:transition-none',
                isActive ? 'opacity-100' : 'pointer-events-none opacity-0',
              )}
            >
              <GalleryFrame
                src={item.image}
                alt={item.caption}
                seed={item.id}
                loading={isActive ? 'eager' : 'lazy'}
                iconClassName="h-10 w-10"
              />
            </div>
          ))}

          {/* Caption scrim */}
          <div
            aria-hidden="true"
            className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-ink-950 via-ink-950/70 to-transparent"
          />

          {/* Caption for the active slide */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 p-5 sm:p-7 lg:p-8">
            <div key={active.id} className="max-w-2xl animate-fade-rise">
              <p className="flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-white/15 px-2.5 py-1 text-[0.625rem] font-semibold uppercase tracking-[0.1em] text-white/90">
                  {active.category}
                </span>
                <span className="text-[0.625rem] font-medium uppercase tracking-[0.1em] text-white/55">
                  {formatGalleryDate(active.date)}
                </span>
              </p>
              <p className="mt-2.5 font-display text-lg font-semibold leading-snug text-white sm:text-xl">
                {active.title}
              </p>
            </div>
          </div>

          {/* Controls */}
          <div className="absolute right-4 top-4 flex items-center gap-2 sm:right-6 sm:top-6">
            <button
              type="button"
              onClick={() => setPlaying((value) => !value)}
              aria-label={playing ? 'Pause slideshow' : 'Play slideshow'}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-ink-950/60 text-white/85 backdrop-blur-sm transition-colors hover:bg-ink-950/85 hover:text-white"
            >
              {playing ? (
                <Pause className="h-4 w-4" aria-hidden="true" />
              ) : (
                <Play className="h-4 w-4" aria-hidden="true" />
              )}
            </button>
            <button
              type="button"
              onClick={() => step(-1)}
              aria-label="Previous slide"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-ink-950/60 text-white/85 backdrop-blur-sm transition-colors hover:bg-ink-950/85 hover:text-white"
            >
              <ChevronLeft className="h-5 w-5" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => step(1)}
              aria-label="Next slide"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-ink-950/60 text-white/85 backdrop-blur-sm transition-colors hover:bg-ink-950/85 hover:text-white"
            >
              <ChevronRight className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>

        {/* Dots + counter */}
        <div className="mt-5 flex flex-wrap items-center justify-between gap-4">
          <div role="group" aria-label="Choose slide" className="flex items-center gap-2">
            {slidesList.map(({ item, isActive, position }) => (
              <button
                key={item.id}
                type="button"
                aria-current={isActive ? 'true' : undefined}
                aria-label={`Show slide ${position}: ${item.title}`}
                onClick={() => goTo(position - 1)}
                className={cn(
                  'h-1.5 rounded-full transition-all duration-300 motion-reduce:transition-none',
                  isActive ? 'w-9 bg-green-400' : 'w-1.5 bg-white/25 hover:bg-white/50',
                )}
              />
            ))}
          </div>

          <p className="text-xs font-medium tabular-nums text-white/45">
            {index + 1} / {count}
          </p>
        </div>

        {reducedMotion ? (
          <p className="mt-3 text-xs text-white/35">
            Slides are paused because your system asks for reduced motion. Use the controls to step
            through them.
          </p>
        ) : null}
      </div>
    </section>
  );
}
