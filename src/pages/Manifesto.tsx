import { useState } from 'react';
import { Check, Quote, Download } from 'lucide-react';
import { PageHero } from '../components/layout/PageHero';
import { Section, SectionHeading } from '../components/ui/Section';
import { Container } from '../components/ui/Container';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { useSeo } from '../hooks/useSeo';
import { cn } from '../lib/cn';
import { pillars, preamble, manifestoPrinciples } from '../data/manifesto';
import { party } from '../data/party';

export default function Manifesto() {
  const [active, setActive] = useState<string>(pillars[0].id);

  useSeo({
    title: 'Manifesto',
    description:
      'The Peoples Democratic Party platform: rule of law, good governance, a dynamic national economy, human capital, infrastructure, federalism, social justice, security and foreign policy.',
  });

  return (
    <>
      <PageHero
        eyebrow="The platform"
        title="A programme that outlives the people who wrote it."
        lede={`The PDP's founding objectives were drafted in 1998, in the immediate aftermath of sixteen years of military rule. Almost every one of them has reappeared in the party's platform in every subsequent decade. This is the platform as stated.`}
      >
        <div className="flex flex-wrap items-center gap-3">
          <Button href={party.website} size="md" variant="onDark">
            Party constitution
            <Download className="h-4 w-4" aria-hidden="true" />
          </Button>
          <Button to="/contact#join" size="md" variant="onDark">
            Discuss this platform
          </Button>
        </div>
      </PageHero>

      {/* Preamble */}
      <Section tone="white" dividers>
        <Container>
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] lg:gap-20">
            <figure>
              <Quote className="h-7 w-7 text-green-600/50" aria-hidden="true" />
              <blockquote className="mt-5 text-balance font-display text-2xl font-medium leading-snug text-ink-900 sm:text-3xl">
                {preamble[0]}
              </blockquote>
              <figcaption className="mt-6 text-xs font-semibold uppercase tracking-[0.16em] text-ink-500">
                Article 6, Constitution of the Peoples Democratic Party
              </figcaption>
            </figure>

            <div className="space-y-5">
              {manifestoPrinciples.map((p) => (
                <div key={p.title} className="border-l-2 border-green-600/50 pl-5">
                  <h3 className="font-display text-base font-semibold text-ink-900">{p.title}</h3>
                  <p className="mt-1.5 text-pretty text-sm leading-relaxed text-ink-600">{p.body}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Pillars with sticky index */}
      <Section tone="muted">
        <Container>
          <SectionHeading
            eyebrow={`${pillars.length} policy areas`}
            title="The commitments"
            lede="Each pillar below sets out the party's stated position. These are platform commitments, not a campaign promise for any particular year."
          />

          <div className="mt-14 grid gap-10 lg:grid-cols-[minmax(0,16rem)_minmax(0,1fr)] lg:gap-14">
            {/* Index */}
            <nav aria-label="Policy areas" className="lg:sticky lg:top-28 lg:self-start">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-ink-500">
                Jump to
              </p>
              <ul className="flex flex-wrap gap-2 lg:flex-col lg:gap-1">
                {pillars.map((pillar) => (
                  <li key={pillar.id}>
                    <a
                      href={`#${pillar.id}`}
                      onClick={() => setActive(pillar.id)}
                      aria-current={active === pillar.id ? 'true' : undefined}
                      className={cn(
                        'block rounded-lg px-3 py-2 text-sm transition-colors',
                        active === pillar.id
                          ? 'bg-white font-semibold text-green-700 shadow-sm'
                          : 'text-ink-600 hover:bg-white/70 hover:text-ink-900',
                      )}
                    >
                      {pillar.title}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Pillar bodies */}
            <div className="space-y-5">
              {pillars.map((pillar) => (
                <article
                  key={pillar.id}
                  id={pillar.id}
                  className="scroll-mt-28 rounded-2xl border border-ink-200/80 bg-white p-7 sm:p-9"
                  onMouseEnter={() => setActive(pillar.id)}
                >
                  <h2 className="text-balance font-display text-2xl font-semibold text-ink-900">
                    {pillar.title}
                  </h2>
                  <p className="mt-3 text-pretty leading-relaxed text-ink-600">{pillar.summary}</p>

                  <ul className="mt-7 space-y-3.5">
                    {pillar.commitments.map((commitment) => (
                      <li key={commitment} className="flex gap-3.5">
                        <span
                          aria-hidden="true"
                          className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-700"
                        >
                          <Check className="h-3 w-3" strokeWidth={3} />
                        </span>
                        <span className="text-pretty text-sm leading-relaxed text-ink-700">
                          {commitment}
                        </span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section tone="green">
        <Container>
          <Card className="border-transparent bg-white/10 p-9 text-white sm:p-12">
            <h2 className="text-balance font-display text-2xl font-semibold sm:text-3xl">
              {party.tagline} is not a slogan. It is a test.
            </h2>
            <p className="mt-4 max-w-3xl text-pretty leading-relaxed text-white/75">
              Every commitment above is a promise made to people who will hold the party to it at
              the next convention, the next primary and the next election. If you want to be part
              of that accountability, membership is the starting point.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button to="/contact#join" className="bg-white text-green-800 hover:bg-green-50">
                Join the party
              </Button>
              <Button to="/news" variant="onDark">
                Party statements
              </Button>
            </div>
          </Card>
        </Container>
      </Section>
    </>
  );
}
