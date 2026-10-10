import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import { Section, SectionHeading } from '../ui/Section';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';
import { manifestoPrinciples, pillars } from '../../data/manifesto';

export function PlatformPreview() {
  const featured = pillars.slice(0, 6);

  return (
    <Section tone="white" id="platform">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)] lg:gap-20">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeading
              eyebrow="The platform"
              title={
                <>
                  A programme built on{' '}
                  <span className="text-green-700">social justice</span>, not on any one individual.
                </>
              }
              lede="From the 1998 founding objectives to the party’s most recent manifesto, the commitments have proved unusually durable. Almost every plank has reappeared in one form or another in each successive decade."
            />

            <ul className="mt-9 space-y-5">
              {manifestoPrinciples.map((p) => (
                <li key={p.title} className="flex gap-3.5">
                  <span
                    aria-hidden="true"
                    className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-700"
                  >
                    <Check className="h-3 w-3" strokeWidth={3} />
                  </span>
                  <div>
                    <h3 className="font-display text-base font-semibold text-ink-900">{p.title}</h3>
                    <p className="mt-1 text-pretty text-sm leading-relaxed text-ink-600">{p.body}</p>
                  </div>
                </li>
              ))}
            </ul>

            <Button to="/manifesto" className="mt-9">
              Read the full manifesto
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Button>
          </div>

          <div>
            <ul className="grid gap-4 sm:grid-cols-2">
              {featured.map((pillar) => (
                <Card as="li" key={pillar.id} interactive className="group p-6">
                  <h3 className="font-display text-lg font-semibold text-ink-900">{pillar.title}</h3>
                  <p className="mt-2 text-pretty text-sm leading-relaxed text-ink-600">
                    {pillar.summary}
                  </p>
                  <Link
                    to={`/manifesto#${pillar.id}`}
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-green-700 transition-colors hover:text-green-800"
                  >
                    {pillar.commitments.length} commitments
                    <ArrowRight
                      className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </Link>
                </Card>
              ))}
            </ul>
            <p className="mt-4 text-sm text-ink-500">
              Plus{' '}
              <Link to="/manifesto" className="font-semibold text-green-700 hover:text-green-800">
                {pillars.length - featured.length} further policy areas
              </Link>{' '}
              covering security, infrastructure, social justice and foreign policy.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
