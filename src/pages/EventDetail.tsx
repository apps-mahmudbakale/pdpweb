import { Link, useParams } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  MapPin,
  Clock,
  ListChecks,
  Users,
} from 'lucide-react';
import { Section } from '../components/ui/Section';
import { Container } from '../components/ui/Container';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { useSeo } from '../hooks/useSeo';
import { getEvent, formatEventDate, events } from '../data/events';

function dayParts(iso: string) {
  const d = new Date(`${iso}T00:00:00Z`);
  return {
    day: d.toLocaleDateString('en-NG', { day: '2-digit', timeZone: 'UTC' }),
    month: d.toLocaleDateString('en-NG', { month: 'long', timeZone: 'UTC' }),
    year: d.toLocaleDateString('en-NG', { year: 'numeric', timeZone: 'UTC' }),
  };
}

export default function EventDetail() {
  const { slug = '' } = useParams();
  const event = getEvent(slug);

  useSeo({
    title: event ? event.title : 'Event not found',
    description: event?.summary,
  });

  if (!event) {
    return (
      <Section tone="white" className="pt-40">
        <Container>
          <h1 className="font-display text-4xl font-semibold text-ink-900">Event not found</h1>
          <p className="mt-4 text-ink-600">That event does not exist, or has been rescheduled.</p>
          <Button to="/events" className="mt-8">
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Back to the calendar
          </Button>
        </Container>
      </Section>
    );
  }

  const { day, month, year } = dayParts(event.date);
  const more = events.filter((e) => e.slug !== event.slug).slice(0, 3);

  return (
    <>
      {/* Header */}
      <section className="relative isolate overflow-hidden bg-ink-950 pb-16 pt-32 sm:pb-20 sm:pt-40">
        <div aria-hidden="true" className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(55rem_35rem_at_15%_-10%,rgba(23,121,69,0.5),transparent_60%),radial-gradient(40rem_30rem_at_95%_20%,rgba(194,47,47,0.2),transparent_65%)]" />
          <div className="absolute inset-0 opacity-[0.07] [background-image:linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] [background-size:64px_64px]" />
        </div>

        <Container>
          <Link
            to="/events"
            className="inline-flex items-center gap-2 text-sm font-semibold text-green-300 transition-colors hover:text-green-200"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Party calendar
          </Link>

          <div className="mt-8 flex flex-col gap-8 sm:flex-row sm:items-start">
            <div
              aria-hidden="true"
              className={`flex h-24 w-24 shrink-0 flex-col items-center justify-center rounded-2xl border-t-4 ${
                event.past ? 'border-white/25 bg-white/10 text-white/70' : 'border-green-400 bg-white/10 text-white'
              }`}
            >
              <span className="font-display text-3xl font-semibold leading-none">{day}</span>
              <span className="mt-1 text-[0.6875rem] font-semibold uppercase tracking-[0.12em]">
                {month.slice(0, 3)}
              </span>
              <span className="text-xs font-medium">{year}</span>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-green-300">
                {event.type}
                {event.past ? ' · Past event' : ' · Upcoming'}
              </p>
              <h1 className="mt-4 max-w-3xl text-balance font-display text-3xl font-semibold leading-[1.1] tracking-tight text-white sm:text-4xl lg:text-5xl">
                {event.title}
              </h1>
              <ul className="mt-7 flex flex-wrap gap-x-7 gap-y-3 text-sm text-white/65">
                <li className="flex items-center gap-2">
                  <CalendarDays className="h-4 w-4 text-green-300" aria-hidden="true" />
                  {formatEventDate(event.date, event.endDate)}
                </li>
                <li className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-green-300" aria-hidden="true" />
                  {event.time}
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-green-300" aria-hidden="true" />
                  {event.venue}, {event.state}
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* Body */}
      <Section tone="white">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] lg:gap-16">
            <article>
              <div aria-hidden="true" className="rule-tricolour mb-10" />
              <div className="space-y-6">
                {event.body.map((paragraph, i) => (
                  <p
                    key={i}
                    className={`text-pretty leading-[1.75] text-ink-700 ${
                      i === 0
                        ? 'text-lg first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:font-display first-letter:text-6xl first-letter:font-semibold first-letter:leading-none first-letter:text-green-700'
                        : ''
                    }`}
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="mt-12 flex flex-wrap gap-3 border-t border-ink-200 pt-8">
                <Button to="/events" variant="outline">
                  <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                  All events
                </Button>
                <Button to="/contact">Ask the secretariat</Button>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="space-y-5 lg:sticky lg:top-28 lg:self-start">
              <Card className="p-7">
                <h2 className="flex items-center gap-2.5 font-display text-lg font-semibold text-ink-900">
                  <ListChecks className="h-5 w-5 text-green-700" aria-hidden="true" />
                  Agenda
                </h2>
                <ol className="mt-5 space-y-3.5">
                  {event.agenda.map((item, i) => (
                    <li key={item} className="flex gap-3.5 text-sm text-ink-700">
                      <span
                        aria-hidden="true"
                        className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-100 text-[0.6875rem] font-semibold text-green-700"
                      >
                        {i + 1}
                      </span>
                      <span className="text-pretty leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ol>
              </Card>

              <Card className="p-7">
                <h2 className="flex items-center gap-2.5 font-display text-lg font-semibold text-ink-900">
                  <MapPin className="h-5 w-5 text-green-700" aria-hidden="true" />
                  Venue
                </h2>
                <address className="mt-3 text-pretty text-sm not-italic leading-relaxed text-ink-600">
                  {event.venue}
                  <br />
                  {event.state}
                </address>
                <Button
                  href={`https://maps.google.com/?q=${encodeURIComponent(`${event.venue}, ${event.state}`)}`}
                  size="sm"
                  variant="ghost"
                  className="mt-4 -ml-4"
                >
                  Open in maps
                  <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                </Button>
              </Card>

              <Card className="p-7">
                <h2 className="flex items-center gap-2.5 font-display text-lg font-semibold text-ink-900">
                  <Users className="h-5 w-5 text-green-700" aria-hidden="true" />
                  Attending
                </h2>
                <p className="mt-3 text-pretty text-sm leading-relaxed text-ink-600">
                  {event.past
                    ? 'This event has taken place. Proceedings and reports are published in the news section.'
                    : 'Open to the public. Members who wish to participate in party business should arrive with their membership card and speak to a state organiser on arrival.'}
                </p>
                {event.past ? (
                  <Button to="/news" size="sm" variant="ghost" className="mt-4 -ml-4">
                    Read the report
                    <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </Button>
                ) : (
                  <Button to="/contact#join" size="sm" variant="ghost" className="mt-4 -ml-4">
                    Join before you come
                    <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </Button>
                )}
              </Card>
            </aside>
          </div>

          {/* More events */}
          {more.length > 0 ? (
            <div className="mt-20 border-t border-ink-200 pt-12">
              <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-500">
                Also on the calendar
              </h2>
              <ul className="mt-6 grid gap-5 sm:grid-cols-3">
                {more.map((e) => (
                  <li key={e.slug}>
                    <Link
                      to={`/events/${e.slug}`}
                      className="group flex h-full flex-col rounded-2xl border border-ink-200/80 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-green-300 hover:shadow-lift"
                    >
                      <span className="text-xs font-semibold uppercase tracking-[0.1em] text-green-700">
                        {formatEventDate(e.date, e.endDate)}
                      </span>
                      <span className="mt-3 font-display text-base font-semibold leading-snug text-ink-900 group-hover:text-green-700">
                        {e.title}
                      </span>
                      <span className="mt-auto flex items-center gap-2 pt-5 text-sm font-semibold text-green-700">
                        Details
                        <ArrowRight
                          className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
                          aria-hidden="true"
                        />
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </Container>
      </Section>
    </>
  );
}
