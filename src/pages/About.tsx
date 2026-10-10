import { Award, Users, Landmark, Vote, ArrowRight } from 'lucide-react';
import { PageHero, Anchor } from '../components/layout/PageHero';
import { Section, SectionHeading } from '../components/ui/Section';
import { Container } from '../components/ui/Container';
import { Card, IconTile } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { useSeo } from '../hooks/useSeo';
import { history, organs, presidents, founders, party, quickFacts } from '../data/party';

export default function About() {
  useSeo({
    title: 'The Party',
    description:
      'How the Peoples Democratic Party was founded in 1998, who founded it, what it stands for, and how it is structured.',
  });

  return (
    <>
      <PageHero
        eyebrow="The Party"
        title="A national party, built to hold a national country together."
        lede={`The Peoples Democratic Party was launched in Abuja on ${party.founded} by twenty-five political associations that had decided, after sixteen years of military rule, that Nigeria deserved to be governed by its people and for its people. ${party.motto}.`}
      />

      {/* Quick facts */}
      <Section tone="white" dividers>
        <Container>
          <SectionHeading eyebrow="At a glance" title="The essentials" />
          <dl className="mt-12 grid gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
            {quickFacts.map((fact) => (
              <div key={fact.label} className="border-t-2 border-ink-900 pt-4">
                <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-500">
                  {fact.label}
                </dt>
                <dd className="mt-2 font-display text-xl font-semibold text-ink-900">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </Section>

      {/* Full history */}
      <Section tone="muted" id="history">
        <Container>
          <SectionHeading
            eyebrow="The record"
            title="Twenty-eight years, in order"
            lede="From a private meeting of seven people in 1997 to a national convention in Port Harcourt in 2016 — the documented history of the party."
          />

          <ol className="mt-16 space-y-0">
            {history.map((m, i) => {
              const isLast = i === history.length - 1;
              return (
              <li key={`${m.year}-${m.title}`} className="relative pb-12 pl-12 last:pb-0 sm:pl-16">
                {!isLast ? (
                  <div
                    aria-hidden="true"
                    className="absolute bottom-0 left-[0.9375rem] top-8 w-px bg-ink-200 sm:left-[1.1875rem]"
                  />
                ) : null}
                <span
                  aria-hidden="true"
                  className={`absolute left-0 top-1.5 flex h-8 w-8 items-center justify-center rounded-full font-display text-xs font-semibold text-white ring-4 ring-ink-50 sm:h-10 sm:w-10 sm:text-sm ${
                    i === 0 ? 'bg-crimson-600' : 'bg-green-700'
                  }`}
                >
                  {i + 1}
                </span>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-green-700">
                  {m.year}
                </p>
                <h3 className="mt-2 font-display text-2xl font-semibold text-ink-900">{m.title}</h3>
                <p className="mt-3 max-w-3xl text-pretty leading-relaxed text-ink-600">{m.body}</p>
              </li>
              );
            })}
          </ol>
        </Container>
      </Section>

      {/* Founders */}
      <Section tone="white" id="founders">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] lg:gap-20">
            <div>
              <SectionHeading
                eyebrow="Founding members"
                title="The men who signed the party into being"
                lede="Twelve days separated the resolution to merge from the launch in Abuja. These are the names that made that interval possible."
              />
            </div>
            <ul className="grid gap-3 sm:grid-cols-2">
              {founders.map((name, i) => (
                <Card as="li" key={name} className="flex items-center gap-4 p-5">
                  <span
                    aria-hidden="true"
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-green-50 font-display text-sm font-semibold text-green-700"
                  >
                    {name
                      .split(' ')
                      .slice(0, 2)
                      .map((w) => w[0])
                      .join('')}
                  </span>
                  <span>
                    <span className="block font-semibold text-ink-900">{name}</span>
                    {i < 2 ? (
                      <span className="mt-0.5 block text-xs text-ink-500">
                        {i === 0 ? 'Chairman, Steering Committee' : 'Secretary'}
                      </span>
                    ) : null}
                  </span>
                </Card>
              ))}
            </ul>
          </div>
        </Container>
      </Section>

      {/* Presidents */}
      <Section tone="ink" id="presidents">
        <div aria-hidden="true" className="absolute inset-0 -z-10 opacity-40 [background-image:radial-gradient(45rem_30rem_at_15%_100%,rgba(23,121,69,0.4),transparent_65%)]" />
        <Container>
          <SectionHeading
            eyebrow="In government"
            title="Three presidents, and four election victories"
            lede="Between 1999 and 2015 the PDP won every presidential election it contested. That record is unmatched in Nigerian political history — and it came with a governance record that deserves an equally honest account."
            tone="ink"
          />

          <ul className="mt-14 grid gap-5 lg:grid-cols-3">
            {presidents.map((p) => (
              <li
                key={p.name}
                className="flex flex-col rounded-2xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur-sm"
              >
                <IconTile tone="onDark">
                  <Award className="h-5 w-5" aria-hidden="true" />
                </IconTile>
                <h3 className="mt-5 font-display text-xl font-semibold text-white">{p.name}</h3>
                <p className="mt-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-green-300">
                  {p.term}
                </p>
                <p className="mt-4 text-pretty text-sm leading-relaxed text-white/65">{p.note}</p>
              </li>
            ))}
          </ul>

          <p className="mt-8 max-w-3xl text-pretty text-sm leading-relaxed text-white/55">
            The other side of that record is internal. Eleven national chairmen served between 1999
            and 2015 and most left office in contested circumstances. A party that governed for
            sixteen consecutive years found it harder to hold a coalition together than to win an
            election. Any honest history of the PDP holds both facts at once.
          </p>
        </Container>
      </Section>

      {/* Structure */}
      <Section tone="muted" id="structure">
        <Container>
          <SectionHeading
            eyebrow="Constitution"
            title="Five national organs"
            lede="The party constitution sets out five organs at the national level, each with a distinct constitutional function. Understanding them explains how a convention decision actually binds the party."
          />

          <ol className="mt-14 space-y-4">
            {organs.map((organ, i) => (
              <Card as="li" key={organ.name} className="grid gap-4 p-7 sm:grid-cols-[auto_minmax(0,1fr)] sm:gap-7">
                <span
                  aria-hidden="true"
                  className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-50 font-display text-lg font-semibold text-green-700"
                >
                  {i + 1}
                </span>
                <div>
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5">
                    <h3 className="font-display text-xl font-semibold text-ink-900">
                      {organ.name}
                    </h3>
                    <span className="rounded-full bg-ink-100 px-2.5 py-1 text-xs font-semibold uppercase tracking-[0.1em] text-ink-600">
                      {organ.role}
                    </span>
                  </div>
                  <p className="mt-3 text-pretty leading-relaxed text-ink-600">{organ.description}</p>
                </div>
              </Card>
            ))}
          </ol>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Vote, label: 'National Convention', note: 'Highest organ — elects officers, nominates candidates' },
              { icon: Users, label: 'Congress', note: 'One delegate per local government to the convention' },
              { icon: Landmark, label: 'Chapter & ward', note: 'Where every member of the party actually lives' },
              { icon: ArrowRight, label: 'Every four years', note: 'Tenure for elected executives since 2001' },
            ].map((item) => (
              <div key={item.label} className="rounded-2xl border border-ink-200 bg-white p-5">
                <item.icon className="h-5 w-5 text-green-700" aria-hidden="true" />
                <p className="mt-3 font-semibold text-ink-900">{item.label}</p>
                <p className="mt-1 text-pretty text-xs leading-relaxed text-ink-600">{item.note}</p>
              </div>
            ))}
          </div>

          <Anchor id="constitution" className="mt-14" />
          <div className="rounded-2xl border border-green-200 bg-green-50 p-8">
            <h3 className="font-display text-xl font-semibold text-green-950">
              The standard in the constitution
            </h3>
            <p className="mt-3 max-w-3xl text-pretty leading-relaxed text-green-900/80">
              “A country in which all Nigerians are equal, where each contributes according to his
              ability, where no one person dominates and where no political party belongs to one
              individual.” This is the test written into Article 6 of the party constitution, and it
              is the standard against which members are entitled to judge the party.
            </p>
            <Button to="/leadership" className="mt-7">
              See the national offices
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Button>
          </div>
        </Container>
      </Section>
    </>
  );
}
