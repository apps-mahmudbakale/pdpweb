import { useMemo, useState } from 'react';
import { ZoomIn, ImageOff, Info } from 'lucide-react';
import { PageHero } from '../components/layout/PageHero';
import { Section, SectionHeading } from '../components/ui/Section';
import { Container } from '../components/ui/Container';
import { GalleryFrame } from '../components/ui/GalleryFrame';
import { Lightbox } from '../components/ui/Lightbox';
import { useSeo } from '../hooks/useSeo';
import { cn } from '../lib/cn';
import { galleryItems, galleryCategories, formatGalleryDate } from '../data/gallery';
import type { GalleryCategory } from '../data/gallery';

export default function Gallery() {
  const [category, setCategory] = useState<GalleryCategory | 'All'>('All');
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useSeo({
    title: 'Gallery',
    description:
      'Photographs from the Peoples Democratic Party: national and state conventions, campaigns, chapter meetings, programmes and constituency activity.',
  });

  const filtered = useMemo(
    () =>
      category === 'All'
        ? galleryItems
        : galleryItems.filter((item) => item.category === category),
    [category],
  );

  const placeholderCount = galleryItems.filter((i) => !i.image).length;

  const move = (delta: number) =>
    setOpenIndex((current) => {
      if (current === null) return current;
      return (current + delta + filtered.length) % filtered.length;
    });

  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="The record, in pictures."
        lede="Conventions, campaigns, chapter meetings and the programmes where the party's positions get argued out in public."
      />

      <Section tone="muted">
        <Container>
          <div className="flex flex-wrap items-center justify-between gap-6">
            <SectionHeading eyebrow="Browse" title="All photographs" className="max-w-2xl" />
          </div>

          {/* Filter */}
          <div
            role="group"
            aria-label="Filter gallery by category"
            className="mt-10 flex flex-wrap gap-2"
          >
            {galleryCategories.map((c) => {
              const count =
                c === 'All' ? galleryItems.length : galleryItems.filter((i) => i.category === c).length;
              return (
                <button
                  key={c}
                  type="button"
                  onClick={() => setCategory(c)}
                  aria-pressed={category === c}
                  className={cn(
                    'rounded-full px-4 py-2 text-sm font-medium transition-colors',
                    category === c
                      ? 'bg-green-700 text-white'
                      : 'bg-white text-ink-600 ring-1 ring-ink-200 hover:text-ink-900',
                  )}
                >
                  {c}
                  <span className={cn('ml-1.5 text-xs', category === c ? 'text-white/70' : 'text-ink-400')}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Grid */}
          {filtered.length > 0 ? (
            <ul className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((item) => {
                const index = filtered.indexOf(item);
                return (
                  <li key={item.id}>
                    <button
                      type="button"
                      onClick={() => setOpenIndex(index)}
                      aria-label={`Open image: ${item.title}`}
                      className="group relative block aspect-[4/3] w-full overflow-hidden rounded-2xl border border-ink-200/80 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-green-300 hover:shadow-lift focus-visible:ring-offset-0"
                    >
                      <GalleryFrame
                        src={item.image}
                        alt={item.caption}
                        seed={item.id}
                        className="transition-transform duration-500 group-hover:scale-105"
                        iconClassName="h-10 w-10"
                      />

                      {/* Hover scrim */}
                      <span
                        aria-hidden="true"
                        className="absolute inset-0 bg-ink-950/0 transition-colors duration-300 group-hover:bg-ink-950/45"
                      />

                      {/* Zoom affordance */}
                      <span
                        aria-hidden="true"
                        className="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 scale-75 items-center justify-center rounded-full bg-white/95 text-green-800 opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100"
                      >
                        <ZoomIn className="h-5 w-5" />
                      </span>

                      {/* Caption bar */}
                      <span className="absolute inset-x-0 bottom-0 flex flex-col gap-1.5 bg-gradient-to-t from-ink-950 via-ink-950/75 to-transparent p-4 pt-10 text-left">
                        <span className="flex items-center gap-2">
                          <span className="rounded-full bg-white/15 px-2 py-0.5 text-[0.625rem] font-semibold uppercase tracking-[0.1em] text-white/90">
                            {item.category}
                          </span>
                          <span className="text-[0.625rem] font-medium uppercase tracking-[0.1em] text-white/55">
                            {formatGalleryDate(item.date)}
                          </span>
                        </span>
                        <span className="font-display text-sm font-semibold leading-snug text-white">
                          {item.title}
                        </span>
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          ) : (
            <p className="mt-16 text-center text-ink-500">No photographs in this category yet.</p>
          )}

          {placeholderCount > 0 ? (
            <p className="mt-12 flex items-start gap-3 rounded-2xl border border-ink-200 bg-white p-5 text-sm leading-relaxed text-ink-600">
              <ImageOff className="mt-0.5 h-4 w-4 shrink-0 text-ink-400" aria-hidden="true" />
              <span className="text-pretty">
                {placeholderCount} of {galleryItems.length} tiles are generated placeholders, not
                photographs. Add your images to{' '}
                <code className="rounded bg-ink-100 px-1.5 py-0.5 text-xs">public/gallery/</code>{' '}
                and set the <code className="rounded bg-ink-100 px-1.5 py-0.5 text-xs">image</code>{' '}
                field on each item in{' '}
                <code className="rounded bg-ink-100 px-1.5 py-0.5 text-xs">src/data/gallery.ts</code>.
                Tiles with a real image swap over automatically.
              </span>
            </p>
          ) : null}

          <p className="mt-6 flex items-start gap-3 text-sm leading-relaxed text-ink-500">
            <Info className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
            <span className="text-pretty">
              Captions and dates are placeholders for the real archive record. Replace them before
              launch.
            </span>
          </p>
        </Container>
      </Section>

      <Lightbox
        items={filtered}
        index={openIndex}
        onClose={() => setOpenIndex(null)}
        onPrev={() => move(-1)}
        onNext={() => move(1)}
        render={(item) => (
          <div className="aspect-[4/3] w-full bg-ink-900">
            <GalleryFrame src={item.image} alt={item.caption} seed={item.id} />
          </div>
        )}
      />
    </>
  );
}
