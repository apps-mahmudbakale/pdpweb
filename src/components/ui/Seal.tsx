import { cn } from '../../lib/cn';

type SealProps = {
  className?: string;
  tone?: 'light' | 'dark';
  variant?: 'svg' | 'image';
};

/**
 * PDP emblem. Defaults to the built-in vector seal; variant 'image'
 * will render the official PDP logo image if available.
 */
export function Seal({ className, tone = 'light', variant = 'svg' }: SealProps) {
  if (variant === 'image') {
    return (
      <img
        src="/pdp-logo.png"
        alt="Peoples Democratic Party logo"
        className={cn('h-10 w-auto', className)}
        loading="lazy"
        decoding="async"
      />
    );
  }

  const plate = tone === 'light' ? '#ffffff' : '#113f2a';
  const ink = tone === 'light' ? '#113f2a' : '#ffffff';

  return (
    <svg
      viewBox="0 0 96 96"
      role="img"
      aria-label="Peoples Democratic Party emblem: an umbrella in the party colour"
      className={cn('h-10 w-auto', className)}
    >
      <title>Peoples Democratic Party</title>
      <circle cx="48" cy="48" r="46" fill={plate} />
      <circle cx="48" cy="48" r="46" fill="none" stroke="#d1d5d1" strokeWidth="1" />
      <circle cx="48" cy="48" r="38" fill="none" stroke="#177945" strokeWidth="1.5" />

      {/* Canopy: three equal panels in the party tricolour */}
      <path d="M16 44a32 32 0 0 1 64 0Z" fill="#177945" />
      <path d="M38.67 14.72a32 32 0 0 1 18.67 29.28Z" fill="#ffffff" />
      <path d="M57.34 14.72a32 32 0 0 1 22.67 29.28Z" fill="#c22f2f" />

      {/* Canopy edge */}
      <path d="M16 44a32 32 0 0 1 64 0" fill="none" stroke={ink} strokeWidth="1.5" />

      {/* Scalloped hem */}
      <path
        d="M16 44a8 8 0 0 0 16 0 8 8 0 0 0 16 0 8 8 0 0 0 16 0 8 8 0 0 0 16 0"
        fill="none"
        stroke={ink}
        strokeWidth="2.5"
        strokeLinecap="round"
      />

      {/* Shaft, ferrule and crook */}
      <path d="M48 44v28" stroke={ink} strokeWidth="3.5" strokeLinecap="round" />
      <circle cx="48" cy="43" r="4" fill={ink} />
      <path
        d="M48 72c-8 0-11 5-11 9 0 3 2.5 5 6 5 4.5 0 7-2.5 7-6"
        fill="none"
        stroke={ink}
        strokeWidth="3.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Wordmark({ className, tone = 'light' }: { className?: string; tone?: 'light' | 'dark' }) {
  return (
    <span
      className={cn(
        'font-display text-lg font-semibold leading-none tracking-tight',
        tone === 'light' ? 'text-ink-900' : 'text-white',
        className,
      )}
    >
      Peoples Democratic Party
      <span className={cn('ml-2 font-sans text-xs font-medium uppercase tracking-[0.18em]', tone === 'light' ? 'text-ink-500' : 'text-white/70')}>
        Power to the People
      </span>
    </span>
  );
}
