import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  CalendarDays,
  MapPin,
  Clock,
  Info,
  Users,
  ChevronRight,
} from 'lucide-react';
import { PageHero } from '../components/layout/PageHero';
import { Section, SectionHeading } from '../components/ui/Section';
import { Container } from '../components/ui/Container';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { useSeo } from '../hooks/useSeo';
import { cn } from '../lib/cn';
import {
  events,
  upcomingEvents,
  pastEvents,
  eventTypes,
  formatEventDate,
} from '../data/events';
import type { EventType } from '../data/events';

function dayParts(iso: string) {
  const d = new Date(`${iso}T00:00:00Z`);
  return {
    day: d.toLocaleDateString('en-NG', { day: '2-digit', timeZone: 'UTC' }),
    month: d.toLocaleDateString('en-NG', { month: 'short', timeZone: 'UTC' }),
    year: d.toLocaleDateString('en-NG', { year: 'numeric', timeZone: 'UTC' }),
  };
}

const typeTone: Record<EventType, string> = {
  Convention: 'bg-green-50 text-green-700',
  Campaign: 'bg-crimson-50 text-crimson-700',
  'Chapter meeting': 'bg-ink-100 text-ink-700',
  Training: 'bg-green-50 text-green-700',
  'Public forum': 'bg-ink-100 text-ink-700',
  Programme: 'bg-crimson-50 text-crimson-700',
};

function EventCard({ event }: { event: (typeof events)[number] }) {
  const { day, month, year } = dayParts(event.date);

  return (
    <Card as="li" interactive className="flex flex-col overflow-hidden">
      <div className="flex gap-5 p-6 sm:p-7">
        {/* Date block */}
        <div
          aria-hidden="true"
          className={cn(
            'flex h-20 w-20 shrink-0 flex-col items-center justify-center rounded-xl border-t-4',
            event.past
              ? 'border-ink-300 bg-ink-50 text-ink-500'
              : 'border-green-700 bg-green-50 text-green-800',
          )}
        >
          <span className="font-display text-2xl font-semibold leading-none">{day}</span>
          <span className="mt-0.5 text-[0.6875rem] font-semibold uppercase tracking-[0.12em]">
            {month}
          </span>
          <span className="text-[0.625rem] font-medium">{year}</span>
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <span
              className={cn(
                'rounded-full px-2.5 py-1 text-[0.6875rem] font-semibold uppercase tracking-[0.1em]',
                typeTone[event.type],
              )}
            >
              {event.type}
            </span>
            {event.featured && !event.past ? (
              <span className="rounded-full bg-crimson-600 px-2.5 py-1 text-[0.6875rem] font-semibold uppercase tracking-[0.1em] text-white">
                Key event
              </span>
            ) : null}
          </div>

          <h3 className="mt-3 font-display text-lg font-semibold leading-snug text-ink-900">
            <Link to={`/events/${event.slug}`} className="hover:text-green-700">
              {event.title}
            </Link>
          </h3>

          <p className="mt-2 text-pretty text-sm leading-relaxed text-ink-600">{event.summary}</p>

          <ul className="mt-4 space-y-1.5 text-xs text-ink-500">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0" aria-hidden="true" />
              {event.venue} · {event.state}
            </li>
            <li className="flex items-center gap-2">
              <Clock className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
              {event.time}
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-auto flex items-center justify-between border-t border-ink-200/80 px-7 py-4">
        <p className="text-xs font-medium uppercase tracking-[0.12em] text-ink-500">
          {formatEventDate(event.date, event.endDate)}
        </p>
        <Link
          to={`/events/${event.slug}`}
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-green-700 transition-colors hover:text-green-800"
        >
          Details
          <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
        </Link>
      </div>
    </Card>
  );
}

export default function Events() {
  const [tab, setTab] = useState<'upcoming' | 'past'>('upcoming');
  const [type, setType] = useState<EventType | 'All'>('All');

  useSeo({
    title: 'Events',
    description:
      'The Peoples Democratic Party calendar: national and state conventions, ward congresses, organiser training, public forums and campaign events.',
  });

  const source = tab === 'upcoming' ? upcomingEvents : pastEvents;
  const filtered = useMemo(
    () => (type === 'All' ? source : source.filter((e) => e.type === type)),
    [source, type],
  );

  const next = upcomingEvents[0];

  return (
    <>
      <PageHero
        eyebrow="Party calendar"
        title="Where the party actually happens."
        lede="Conventions, congresses, training and the public forums where the platform gets argued over. Members and non-members are welcome at every open event."
      />

      {/* Next up */}
      {next ? (
        <Section tone="white" dividers className="!py-14">
          <Container>
            <Card className="overflow-hidden">
              <div className="grid lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)]">
                <div className="p-8 sm:p-10">
                  <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-crimson-600">
                    <CalendarDays className="h-4 w-4" aria-hidden="true" />
                    Next on the calendar
                  </p>
                  <h2 className="mt-4 text-balance font-display text-2xl font-semibold text-ink-900 sm:text-3xl">
                    {next.title}
                  </h2>
                  <p className="mt-4 text-pretty leading-relaxed text-ink-600">{next.summary}</p>
                  <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-ink-600">
                    <li className="flex items-center gap-2">
                      <CalendarDays className="h-4 w-4 text-green-700" aria-hidden="true" />
                      {formatEventDate(next.date, next.endDate)}
                    </li>
                    <li className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-green-700" aria-hidden="true" />
                      {next.venue}
                    </li>
                  </ul>
                  <Button to={`/events/${next.slug}`} className="mt-8">
                    Event details
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Button>
                </div>

                <div className="flex flex-col justify-center gap-4 border-t border-ink-200/80 bg-ink-50 p-8 lg:border-l lg:border-t-0">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-500">
                    Bring with you
                  </p>
                  <ul className="space-y-3">
                    {next.agenda.slice(0, 3).map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm text-ink-700">
                        <span
                          aria-hidden="true"
                          className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-green-700"
                        />
                        <span className="text-pretty">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-2 flex items-center gap-2 border-t border-ink-200 pt-4 text-xs text-ink-500">
                    <Users className="h-4 w-4" aria-hidden="true" />
                    Open to the public
                  </p>
                </div>
              </div>
            </Card>
          </Container>
        </Section>
      ) : null}

      {/* Calendar */}
      <Section tone="muted">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Schedule"
              title="Full calendar"
              className="max-w-2xl"
            />
          </div>

          {/* Tabs */}
          <div
            role="tablist"
            aria-label="Event period"
            className="mt-10 inline-flex rounded-full border border-ink-200 bg-white p-1"
          >
            {(
              [
                { key: 'upcoming', label: `Upcoming (${upcomingEvents.length})` },
                { key: 'past', label: `Past (${pastEvents.length})` },
              ] as const
            ).map((t) => (
              <button
                key={t.key}
                type="button"
                role="tab"
                aria-selected={tab === t.key}
                onClick={() => setTab(t.key)}
                className={cn(
                  'rounded-full px-5 py-2.5 text-sm font-semibold transition-colors',
                  tab === t.key ? 'bg-green-700 text-white' : 'text-ink-600 hover:text-ink-900',
                )}
              >
                {t.label}
              </button>
            ))}
          </div>

          {/* Type filter */}
          <div
            role="group"
            aria-label="Filter events by type"
            className="mt-5 flex flex-wrap gap-2"
          >
            {eventTypes.map((t) => (
              <button
                key={t}
                type="button"
                onClick={() => setType(t)}
                aria-pressed={type === t}
                className={cn(
                  'rounded-full px-3.5 py-1.5 text-xs font-medium transition-colors',
                  type === t
                    ? 'bg-ink-900 text-white'
                    : 'bg-white text-ink-600 ring-1 ring-ink-200 hover:text-ink-900',
                )}
              >
                {t}
              </button>
            ))}
          </div>

          {filtered.length > 0 ? (
            <ul className="mt-10 grid gap-5 lg:grid-cols-2">
              {filtered.map((event) => (
                <EventCard key={event.slug} event={event} />
              ))}
            </ul>
          ) : (
            <p className="mt-16 text-center text-ink-500">
              No {type.toLowerCase()} events {tab === 'upcoming' ? 'scheduled yet' : 'on record'}.
            </p>
          )}

          <p className="mt-12 flex items-start gap-3 rounded-2xl border border-ink-200 bg-white p-5 text-sm leading-relaxed text-ink-600">
            <Info className="mt-0.5 h-4 w-4 shrink-0 text-ink-400" aria-hidden="true" />
            <span className="text-pretty">
              These entries are illustrative. Replace them with the confirmed schedule in{' '}
              <code className="rounded bg-ink-100 px-1.5 py-0.5 text-xs">src/data/events.ts</code>{' '}
              before launch — the upcoming and past tabs sort themselves from the dates you enter.
            </span>
          </p>
        </Container>
      </Section>
    </>
  );
}
