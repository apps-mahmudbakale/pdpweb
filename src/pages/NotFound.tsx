import { Link } from 'react-router-dom';
import { ArrowLeft, Compass } from 'lucide-react';
import { Container } from '../components/ui/Container';
import { Button } from '../components/ui/Button';
import { useSeo } from '../hooks/useSeo';

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'The Party' },
  { to: '/manifesto', label: 'Manifesto' },
  { to: '/leadership', label: 'Leadership' },
  { to: '/news', label: 'News' },
  { to: '/events', label: 'Events' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/contact', label: 'Contact' },
];

export default function NotFound() {
  useSeo({ title: 'Page not found' });

  return (
    <section className="relative isolate overflow-hidden bg-ink-950 py-32 sm:py-40">
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(50rem_35rem_at_20%_0%,rgba(23,121,69,0.45),transparent_60%)]" />
      </div>

      <Container>
        <div className="max-w-2xl">
          <Compass className="h-10 w-10 text-green-400" aria-hidden="true" />
          <p className="mt-8 text-xs font-semibold uppercase tracking-[0.2em] text-green-300">
            Error 404
          </p>
          <h1 className="mt-4 text-balance font-display text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
            This page is not on the party&apos;s roll.
          </h1>
          <p className="mt-6 text-pretty leading-relaxed text-white/70">
            The page you were looking for does not exist, or it has been moved. Try one of the
            links below.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <Button to="/" size="lg">
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              Back to the homepage
            </Button>
            <Button to="/contact" size="lg" variant="onDark">
              Contact the secretariat
            </Button>
          </div>

          <nav aria-label="Site sections" className="mt-12 border-t border-white/10 pt-8">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/40">
              All sections
            </p>
            <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-3">
              {links.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm font-medium text-white/70 transition-colors hover:text-green-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </Container>
    </section>
  );
}
