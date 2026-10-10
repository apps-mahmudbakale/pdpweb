import type { ReactNode } from 'react';
import { cn } from '../../lib/cn';
import { Container } from './Container';
import { Eyebrow } from './Eyebrow';

type Tone = 'white' | 'muted' | 'green' | 'ink';

const toneMap: Record<Tone, { section: string; heading: string; body: string }> = {
  white: { section: 'bg-white', heading: 'text-ink-900', body: 'text-ink-600' },
  muted: { section: 'bg-ink-50', heading: 'text-ink-900', body: 'text-ink-600' },
  green: { section: 'bg-green-900 text-white', heading: 'text-white', body: 'text-white/75' },
  ink: { section: 'bg-ink-900 text-white', heading: 'text-white', body: 'text-white/70' },
};

export function Section({
  children,
  tone = 'white',
  className,
  id,
  dividers = false,
}: {
  children: ReactNode;
  tone?: Tone;
  className?: string;
  id?: string;
  dividers?: boolean;
}) {
  const t = toneMap[tone];
  return (
    <section
      id={id}
      className={cn('relative py-20 sm:py-24 lg:py-32', t.section, dividers && 'border-t border-ink-200/70', className)}
    >
      {children}
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  lede,
  tone = 'white',
  align = 'left',
  className,
}: {
  eyebrow?: string;
  title: ReactNode;
  lede?: ReactNode;
  tone?: Tone;
  align?: 'left' | 'center';
  className?: string;
}) {
  const t = toneMap[tone];
  return (
    <div
      className={cn(
        'flex flex-col gap-4',
        align === 'center' ? 'mx-auto max-w-3xl text-center items-center' : 'max-w-3xl',
        className,
      )}
    >
      {eyebrow ? (
        <Eyebrow tone={tone === 'green' || tone === 'ink' ? 'onDark' : 'light'}>{eyebrow}</Eyebrow>
      ) : null}
      <h2
        className={cn(
          'text-balance font-display text-3xl font-semibold leading-[1.1] tracking-tight sm:text-4xl lg:text-[2.75rem]',
          t.heading,
        )}
      >
        {title}
      </h2>
      {lede ? (
        <p className={cn('text-pretty text-base leading-relaxed sm:text-lg', t.body)}>{lede}</p>
      ) : null}
    </div>
  );
}

export function SectionGrid({ children, className }: { children: ReactNode; className?: string }) {
  return <Container className={className}>{children}</Container>;
}
