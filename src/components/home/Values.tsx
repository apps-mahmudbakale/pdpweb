import { Scale, Landmark, Gavel, RotateCcw, Users2, ShieldCheck } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { Section, SectionHeading } from '../ui/Section';
import { Container } from '../ui/Container';
import { Card, IconTile } from '../ui/Card';
import { values } from '../../data/party';

const icons: LucideIcon[] = [Users2, ShieldCheck, Scale, Landmark, RotateCcw, Gavel];

export function Values() {
  return (
    <Section tone="muted" id="values">
      <Container>
        <SectionHeading
          eyebrow="What we stand for"
          title="Six commitments taken from the founding constitution"
          lede="These are not campaign lines. They are written into the party constitution, and members are entitled to hold the party to every one of them."
        />

        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((value, i) => {
            const Icon = icons[i] ?? Gavel;
            return (
              <Card as="li" key={value.title} interactive className="p-7">
                <IconTile>
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </IconTile>
                <h3 className="mt-5 font-display text-xl font-semibold text-ink-900">{value.title}</h3>
                <p className="mt-2.5 text-pretty text-sm leading-relaxed text-ink-600">{value.body}</p>
              </Card>
            );
          })}
        </ul>
      </Container>
    </Section>
  );
}
