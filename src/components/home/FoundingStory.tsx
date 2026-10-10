import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Section, SectionHeading } from '../ui/Section';
import { Button } from '../ui/Button';
import { Container } from '../ui/Container';
import { history, founders } from '../../data/party';

export function FoundingStory() {
  const milestones = history.slice(1, 5);

  return (
    <Section tone="white" id="story">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:gap-20">
          <div>
            <SectionHeading
              eyebrow="How it began"
              title={
                <>
                  Born out of a refusal to accept that Nigeria had{' '}
                  <span className="text-green-700">stopped being a democracy</span>.
                </>
              }
              lede="In 1997 a group of elder statesmen concluded that a military establishment which had lost a war and won a peace was preparing to keep the country without ever asking the people. What they built in response became the largest political party in Nigerian history."
            />

            <div className="mt-8 space-y-5 text-pretty leading-relaxed text-ink-600">
              <p>
                The movement that formed passed through three stages — G-7, then G-18 under
                Abubakar Rimi, then G-34 chaired by Alex Ekwueme, a former Vice President of the
                Federation. The name G-34 would become the shorthand for everything that followed.
              </p>
              <p>
                On 19 August 1998, with the transition to civilian rule already under way,
                twenty-five political associations resolved to merge. Twelve days later the party
                was launched at the International Conference Centre in Abuja, with Ekwueme as
                Chairman of the Steering Committee and Professor Jerry Gana as Secretary.
              </p>
            </div>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Button to="/about" variant="outline">
                Read the full history
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Button>
            </div>

            <div className="mt-12 border-t border-ink-200/80 pt-8">
              <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-500">
                Founding members
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {founders.map((name) => (
                  <li
                    key={name}
                    className="rounded-full border border-ink-200 bg-ink-50 px-3 py-1.5 text-xs font-medium text-ink-700"
                  >
                    {name}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Timeline */}
          <ol className="relative border-l border-ink-200 pl-8 sm:pl-10">
            {milestones.map((m) => (
              <li key={m.year} className="relative pb-10 last:pb-0">
                <span
                  aria-hidden="true"
                  className="absolute -left-[2.3125rem] top-1 flex h-4 w-4 items-center justify-center rounded-full border-2 border-white bg-green-700 ring-1 ring-green-700/30 sm:-left-[2.8125rem]"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-white" />
                </span>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-green-700">
                  {m.year}
                </p>
                <h4 className="mt-2 font-display text-xl font-semibold text-ink-900">{m.title}</h4>
                <p className="mt-2 text-pretty text-sm leading-relaxed text-ink-600">{m.body}</p>
              </li>
            ))}
            <li className="relative">
              <span
                aria-hidden="true"
                className="absolute -left-[2.3125rem] top-1 h-4 w-4 rounded-full border-2 border-white bg-crimson-600 ring-1 ring-crimson-600/30 sm:-left-[2.8125rem]"
              />
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-sm font-semibold text-green-700 transition-colors hover:text-green-800"
              >
                Continue to 2016 and beyond
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </li>
          </ol>
        </div>
      </Container>
    </Section>
  );
}
