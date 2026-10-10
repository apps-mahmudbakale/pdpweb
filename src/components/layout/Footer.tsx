import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, ArrowUpRight } from 'lucide-react';
import { Container } from '../ui/Container';
import { Seal } from '../ui/Seal';
import { party } from '../../data/party';

const linkGroups = [
  {
    title: 'The Party',
    links: [
      { label: 'Our history', to: '/about' },
      { label: 'Founding members', to: '/about#founders' },
      { label: 'Structure & organs', to: '/about#structure' },
      { label: 'Presidents produced', to: '/about#presidents' },
    ],
  },
  {
    title: 'Platform',
    links: [
      { label: 'Manifesto', to: '/manifesto' },
      { label: 'Rule of law', to: '/manifesto#rule-of-law' },
      { label: 'Economy', to: '/manifesto#economy' },
      { label: 'Federalism', to: '/manifesto#federalism' },
    ],
  },
  {
    title: 'Organisation',
    links: [
      { label: 'National offices', to: '/leadership' },
      { label: 'Former chairmen', to: '/leadership#chairmen' },
      { label: 'Becoming a member', to: '/leadership#membership' },
    ],
  },
  {
    title: 'Stay informed',
    links: [
      { label: 'News & statements', to: '/news' },
      { label: 'Party calendar', to: '/events' },
      { label: 'Photo gallery', to: '/gallery' },
      { label: 'Contact the secretariat', to: '/contact' },
      { label: 'Join the party', to: '/contact#join' },
    ],
  },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink-950 text-white">
      <div aria-hidden="true" className="rule-tricolour" />
      <Container className="py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,2.7fr)]">
          <div>
            <div className="flex items-center gap-3">
              <Seal className="h-12 w-auto" tone="dark" variant="image" />
              <span className="flex flex-col leading-none">
                <span className="font-display text-xl font-semibold tracking-tight sm:text-2xl">
                  Peoples Democratic Party
                </span>
                <span className="mt-1 text-[0.625rem] font-medium uppercase tracking-[0.16em] text-white/60">
                  Power to the People
                </span>
              </span>
            </div>
            <p className="mt-6 max-w-sm text-pretty text-sm leading-relaxed text-white/65">
              Founded in {party.foundedYear} in Abuja, the Peoples Democratic Party was built to bring
              patriotic, like-minded Nigerians into a single national platform. Our motto is{' '}
              <span className="text-white/90">{party.motto}</span>.
            </p>
            <p className="mt-6 text-xs font-medium uppercase tracking-[0.18em] text-white/40">
              {party.colours.join(' · ')} · {party.symbol}
            </p>
          </div>

            <div className="grid gap-10 sm:grid-cols-2 xl:grid-cols-4">
            {linkGroups.map((group) => (
              <div key={group.title}>
                <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-green-300">
                  {group.title}
                </h2>
                <ul className="mt-4 space-y-2.5">
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        to={link.to}
                        className="text-sm text-white/65 transition-colors hover:text-white"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 grid gap-6 border-t border-white/10 pt-8 sm:grid-cols-3">
          <a
            href="https://maps.google.com/?q=Wadata+Plaza+Michael+Okpara+Way+Wuse+Abuja"
            target="_blank"
            rel="noreferrer noopener"
            className="group flex items-start gap-3 text-sm text-white/65 transition-colors hover:text-white"
          >
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-green-400" aria-hidden="true" />
            <span>
              {party.hq}
              <ArrowUpRight className="ml-1 inline h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" aria-hidden="true" />
            </span>
          </a>
          <Link
            to="/contact"
            className="flex items-start gap-3 text-sm text-white/65 transition-colors hover:text-white"
          >
            <Phone className="mt-0.5 h-4 w-4 shrink-0 text-green-400" aria-hidden="true" />
            <span>Secretariat contact details</span>
          </Link>
          <Link
            to="/contact#join"
            className="flex items-start gap-3 text-sm text-white/65 transition-colors hover:text-white"
          >
            <Mail className="mt-0.5 h-4 w-4 shrink-0 text-green-400" aria-hidden="true" />
            <span>Membership enquiries</span>
          </Link>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-8 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} Peoples Democratic Party. {party.motto}.
          </p>
          <p className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <span>Registered with INEC</span>
            <Link to="/about#structure" className="transition-colors hover:text-white/80">
              Party constitution
            </Link>
            <Link to="/contact" className="transition-colors hover:text-white/80">
              Secretariat
            </Link>
          </p>
        </div>
      </Container>
    </footer>
  );
}
