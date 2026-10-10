import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Section, SectionHeading } from '../ui/Section';
import { Container } from '../ui/Container';
import { organs } from '../../data/party';

export function StructurePreview() {
  return (
    <Section tone="ink" id="structure-preview">
      <div aria-hidden="true" className="absolute inset-0 -z-10 opacity-40 [background-image:radial-gradient(40rem_30rem_at_80%_0%,rgba(23,121,69,0.45),transparent_65%)]" />
      <Container>
        <SectionHeading
          eyebrow="How the party works"
          title="Five organs, and one source of authority"
          lede="The National Convention is where the party's power comes from. Every organ beneath it exists to carry out its decisions — which is precisely why internal democracy and the discipline to honour a convention's verdict matter so much."
          tone="ink"
        />

        <ol className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {organs.map((organ, i) => (
            <li
              key={organ.name}
              className="flex flex-col rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm"
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

        <div className="mt-10">
          <Link
            to="/about#structure"
            className="inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-green-300"
          >
            How the party is structured, from the convention hall to the ward
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </Container>
    </Section>
  );
}
