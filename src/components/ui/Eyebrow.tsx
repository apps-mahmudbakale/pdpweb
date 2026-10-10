import type { ReactNode } from 'react';
import { cn } from '../../lib/cn';

export function Eyebrow({
  children,
  className,
  tone = 'light',
}: {
  children: ReactNode;
  className?: string;
  tone?: 'light' | 'onDark';
}) {
  return (
    <p
      className={cn(
        'flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.2em]',
        tone === 'onDark' ? 'text-green-300' : 'text-green-700',
        className,
      )}
    >
      <span
        aria-hidden="true"
        className={cn('h-px w-6', tone === 'onDark' ? 'bg-green-300/40' : 'bg-green-700/40')}
      />
      {children}
    </p>
  );
}
