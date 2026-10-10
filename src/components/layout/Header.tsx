import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ChevronRight } from 'lucide-react';
import { Container } from '../ui/Container';
import { Seal } from '../ui/Seal';
import { Button } from '../ui/Button';
import { cn } from '../../lib/cn';

const navigation = [
  { label: 'Home', to: '/' },
  { label: 'The Party', to: '/about' },
  { label: 'Manifesto', to: '/manifesto' },
  { label: 'Leadership', to: '/leadership' },
  { label: 'News', to: '/news' },
  { label: 'Events', to: '/events' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Contact', to: '/contact' },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled || open
          ? 'border-b border-ink-200/70 bg-white/90 backdrop-blur-lg'
          : 'border-b border-transparent bg-transparent',
      )}
    >
      <Container>
        <div className="flex h-20 items-center justify-between gap-6">
          <Link
            to="/"
            className="flex items-center gap-3 rounded-lg"
            aria-label="Peoples Democratic Party — home"
          >
            <Seal
              className="h-11 w-auto"
              tone={scrolled || open ? 'light' : 'dark'}
              variant="image"
            />
            <span className="flex flex-col leading-none">
              <span
                className={cn(
                  'font-display text-base font-semibold tracking-tight transition-colors sm:text-lg',
                  scrolled || open ? 'text-ink-900' : 'text-white',
                )}
              >
                Peoples Democratic Party
              </span>
              <span
                className={cn(
                  'mt-1 text-[0.625rem] font-medium uppercase tracking-[0.16em] transition-colors',
                  scrolled || open ? 'text-ink-500' : 'text-white/75',
                )}
              >
                Power to the People
              </span>
            </span>
          </Link>

          <nav aria-label="Primary" className="hidden items-center gap-1 xl:flex">
            {navigation.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) =>
                  cn(
                    'relative rounded-full px-4 py-2 text-sm font-medium transition-colors',
                    scrolled || open
                      ? isActive
                        ? 'text-green-700'
                        : 'text-ink-600 hover:text-ink-900'
                      : isActive
                        ? 'text-white'
                        : 'text-white/80 hover:text-white',
                  )
                }
              >
                {({ isActive }) => (
                  <>
                    {item.label}
                    <span
                      aria-hidden="true"
                      className={cn(
                        'absolute inset-x-4 -bottom-0.5 h-0.5 rounded-full transition-colors',
                        isActive ? (scrolled || open ? 'bg-green-700' : 'bg-white') : 'bg-transparent',
                      )}
                    />
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Button
              to="/contact#join"
              size="sm"
              variant={scrolled || open ? 'primary' : 'onDark'}
              className="hidden sm:inline-flex"
            >
              Join the party
              <ChevronRight className="h-4 w-4" aria-hidden="true" />
            </Button>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? 'Close menu' : 'Open menu'}
              className={cn(
                'inline-flex h-11 w-11 items-center justify-center rounded-full transition-colors xl:hidden',
                scrolled || open ? 'text-ink-900 hover:bg-ink-100' : 'text-white hover:bg-white/10',
              )}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </Container>

      <div
        id="mobile-nav"
        className={cn(
          'overflow-hidden border-t border-ink-200/70 bg-white transition-[max-height,opacity] duration-300 xl:hidden',
          open ? 'max-h-[32rem] opacity-100' : 'max-h-0 opacity-0',
        )}
      >
        <Container className="py-6">
          <nav aria-label="Mobile" className="flex flex-col">
            {navigation.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) =>
                  cn(
                    'flex items-center justify-between border-b border-ink-100 py-3.5 font-display text-lg font-medium transition-colors',
                    isActive ? 'text-green-700' : 'text-ink-900',
                  )
                }
              >
                {item.label}
                <ChevronRight className="h-4 w-4 text-ink-400" aria-hidden="true" />
              </NavLink>
            ))}
            <Button to="/contact#join" variant="primary" className="mt-6 w-full">
              Join the party
            </Button>
          </nav>
        </Container>
      </div>
    </header>
  );
}
