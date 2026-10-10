import { Link } from 'react-router-dom';
import { CalendarDays, MapPin, ArrowRight, Images } from 'lucide-react';
import { Section } from '../ui/Section';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';
import { GalleryFrame } from '../ui/GalleryFrame';
import { upcomingEvents, formatEventDate } from '../../data/events';
import { galleryItems, formatGalleryDate } from '../../data/gallery';

export function WhatsOn() {
  const next = upcomingEvents[0];
  const featured = galleryItems.slice(0, 2);

  return (
    <Section tone="muted" dividers>
      <Container>
        <div className="grid gap-6 lg:grid-cols-2">
          {/* Next event */}
          {next ? (
            <div className="flex flex-col rounded-2xl border border-ink-200/80 bg-white p-7 sm:p-8">
              <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-green-700">
                <CalendarDays className="h-4 w-4" aria-hidden="true" />
                Next on the calendar
              </p>
              <h3 className="mt-4 text-balance font-display text-2xl font-semibold leading-snug text-ink-900">
                <Link to={`/events/${next.slug}`} className="hover:text-green-700">
                  {next.title}
                </Link>
              </h3>
              <p className="mt-3 flex-1 text-pretty text-sm leading-relaxed text-ink-600">
                {next.summary}
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-ink-500">
                <span className="rounded-full bg-ink-100 px-2.5 py-1 font-semibold uppercase tracking-[0.1em] text-ink-700">
                  {next.type}
                </span>
                <span>{formatEventDate(next.date, next.endDate)}</span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                  {next.state}
                </span>
              </div>
              <Button to="/events" size="sm" variant="outline" className="mt-7 self-start">
                Full calendar
                <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
              </Button>
            </div>
          ) : null}

          {/* Gallery teaser */}
          <div className="flex flex-col rounded-2xl border border-ink-200/80 bg-white p-7 sm:p-8">
            <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-green-700">
              <Images className="h-4 w-4" aria-hidden="true" />
              From the archive
            </p>
            <h3 className="mt-4 text-balance font-display text-2xl font-semibold leading-snug text-ink-900">
              The record, in pictures
            </h3>

            <ul className="mt-5 flex-1 space-y-3">
              {featured.map((item) => (
                <li key={item.id}>
                  <Link
                    to="/gallery"
                    className="group flex items-center gap-4 rounded-xl border border-ink-200/80 p-3 transition-colors hover:border-green-300 hover:bg-green-50/40"
                  >
                    <span className="h-16 w-20 shrink-0 overflow-hidden rounded-lg">
                      <GalleryFrame src={item.image} alt="" seed={item.id} />
                    </span>
                    <span className="min-w-0">
                      <span className="block font-display text-sm font-semibold text-ink-900 group-hover:text-green-700">
                        {item.title}
                      </span>
                      <span className="mt-0.5 block text-xs text-ink-500">
                        {item.category} · {formatGalleryDate(item.date)}
                      </span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>

            <Button to="/gallery" size="sm" variant="outline" className="mt-7 self-start">
              Open the gallery
              <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
