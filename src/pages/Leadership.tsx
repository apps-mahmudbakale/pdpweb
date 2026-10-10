import { Info } from 'lucide-react';
import { PageHero } from '../components/layout/PageHero';
import { Section, SectionHeading } from '../components/ui/Section';
import { Container } from '../components/ui/Container';
import { Card, IconTile } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { useSeo } from '../hooks/useSeo';
import { offices, officeGroups, membership } from '../data/leadership';
import { chairmen, organs } from '../data/party';

export default function Leadership() {
  useSeo({
    title: 'Leadership',
    description:
      'The national offices of the Peoples Democratic Party, the five constitutional organs, and the documented record of past national chairmen.',
  });

  return (
    <>
      <PageHero
        eyebrow="Organisation"
        title="Offices defined by constitution, not by favour."
        lede="Every office below is created by the party constitution, with a defined function. Officers are elected or ratified at the National Convention and serve a four-year tenure."
      />

      {/* Important caveat about incumbents */}
      <Section tone="white" dividers className="!py-12">
        <Container>
          <div className="flex flex-col gap-4 rounded-2xl border border-amber-300/70 bg-amber-50 p-6 sm:flex-row sm:items-start sm:gap-5 sm:p-7">
            <Info className="h-5 w-5 shrink-0 text-amber-700" aria-hidden="true" />
            <div>
              <h2 className="font-display text-lg font-semibold text-amber-950">
                A note on who currently holds these offices
              </h2>
              <p className="mt-2 max-w-4xl text-pretty text-sm leading-relaxed text-amber-900/85">
                National office-holders change at conventions and, in recent years, the party has
                been engaged in litigation and interim arrangements over its leadership. This page
                therefore sets out the <strong className="font-semibold">constitutional offices and
                their duties</strong>, which are stable, together with the{' '}
                <strong className="font-semibold">documented history of past chairmen</strong>. For
                the current National Working Committee, please rely on the official notices issued
                by the party rather than on any website.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* National offices */}
      <Section tone="muted">
        <Container>
          <SectionHeading
            eyebrow="National offices"
            title="The National Working Committee"
            lede="Under the 2017 constitution as amended, the National Working Committee comprises nineteen members drawn from these offices."
          />

          <div className="mt-14 space-y-12">
            {officeGroups.map((group) => {
              const groupOffices = offices.filter((o) => o.group === group);
              if (groupOffices.length === 0) return null;
              return (
                <div key={group}>
                  <h3 className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-ink-500">
                    <span aria-hidden="true" className="h-px w-6 bg-ink-300" />
                    {group}
                  </h3>
                  <ul className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {groupOffices.map((office) => (
                      <Card as="li" key={office.title} className="flex gap-4 p-6">
                        <IconTile>
                          <office.icon className="h-5 w-5" aria-hidden="true" />
                        </IconTile>
                        <div>
                          <h4 className="font-display text-lg font-semibold text-ink-900">
                            {office.title}
                          </h4>
                          <p className="mt-1.5 text-pretty text-sm leading-relaxed text-ink-600">
                            {office.duty}
                          </p>
                        </div>
                      </Card>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* The five organs */}
      <Section tone="ink" id="organs">
        <div aria-hidden="true" className="absolute inset-0 -z-10 opacity-40 [background-image:radial-gradient(45rem_30rem_at_80%_0%,rgba(23,121,69,0.45),transparent_65%)]" />
        <Container>
          <SectionHeading
            eyebrow="The five organs"
            title="Where authority actually comes from"
            tone="ink"
          />
          <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {organs.map((organ, i) => (
              <li
                key={organ.name}
                className="flex flex-col rounded-2xl border border-white/10 bg-white/[0.04] p-6"
              >
                <span className="font-display text-3xl font-semibold text-white/15">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-3 font-display text-lg font-semibold text-white">{organ.name}</h3>
                <p className="mt-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-green-300">
                  {organ.role}
                </p>
                <p className="mt-3 text-pretty text-sm leading-relaxed text-white/60">
                  {organ.description}
                </p>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      {/* Past chairmen */}
      <Section tone="white" id="chairmen">
        <Container>
          <SectionHeading
            eyebrow="The record"
            title="National chairmen of the party"
            lede="Eleven national chairmen served between 1999 and 2015, and most left office in circumstances that were contested. The list below is the documented sequence — including the contested period at the end, which the Supreme Court addressed in April 2026."
          />

          <ol className="mt-12 divide-y divide-ink-200/80 border-y border-ink-200/80">
            {chairmen.map((c) => (
              <li
                key={`${c.name}-${c.period}`}
                className="grid gap-2 py-6 sm:grid-cols-[minmax(0,10rem)_minmax(0,1fr)] sm:gap-8"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.12em] text-green-700">
                  {c.period}
                </p>
                <div>
                  <h3 className="font-display text-xl font-semibold text-ink-900">{c.name}</h3>
                  <p className="mt-1.5 max-w-3xl text-pretty text-sm leading-relaxed text-ink-600">
                    {c.note}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      {/* Membership */}
      <Section tone="green" id="membership">
        <Container>
          <SectionHeading
            eyebrow="Membership"
            title="Where the party actually starts: your ward"
            tone="green"
            lede="Everything above depends on members turning up. The ward is the foundation of the whole structure, and it is where you would begin."
          />

          <ul className="mt-14 grid gap-5 lg:grid-cols-3">
            {membership.map((step) => (
              <li
                key={step.title}
                className="flex flex-col rounded-2xl border border-white/15 bg-white/[0.06] p-7 backdrop-blur-sm"
              >
                <IconTile tone="onDark">
                  <step.icon className="h-5 w-5" aria-hidden="true" />
                </IconTile>
                <h3 className="mt-5 font-display text-xl font-semibold text-white">{step.title}</h3>
                <p className="mt-2.5 text-pretty text-sm leading-relaxed text-white/70">{step.body}</p>
              </li>
            ))}
          </ul>

          <div className="mt-12">
            <Button to="/contact#join" size="lg" className="bg-white text-green-800 hover:bg-green-50">
              Start at your ward
            </Button>
          </div>
        </Container>
      </Section>
    </>
  );
}
