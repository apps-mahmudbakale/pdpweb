import type { ReactNode } from 'react';
import { cn } from '../../lib/cn';

export function Card({
  children,
  className,
  as: Tag = 'div',
  interactive = false,
  id,
}: {
  children: ReactNode;
  className?: string;
  as?: 'div' | 'article' | 'li' | 'section';
  interactive?: boolean;
  id?: string;
}) {
  return (
    <Tag
      id={id}
      className={cn(
        'rounded-2xl border border-ink-200/80 bg-white',
        interactive && 'transition-all duration-300 hover:-translate-y-1 hover:border-green-300 hover:shadow-lift',
        className,
      )}
    >
      {children}
    </Tag>
  );
}

export function IconTile({
  children,
  className,
  tone = 'green',
}: {
  children: ReactNode;
  className?: string;
  tone?: 'green' | 'crimson' | 'onDark';
}) {
  const tones = {
    green: 'bg-green-50 text-green-700',
    crimson: 'bg-crimson-50 text-crimson-600',
    onDark: 'bg-white/10 text-green-200',
  } as const;

  return (
    <span
      className={cn(
        'inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl',
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}
