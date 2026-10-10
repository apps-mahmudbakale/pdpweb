import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '../../lib/cn';

type Variant = 'primary' | 'outline' | 'ghost' | 'accent' | 'onDark';
type Size = 'sm' | 'md' | 'lg';

const base =
  'inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 disabled:cursor-not-allowed disabled:opacity-60';

const variants: Record<Variant, string> = {
  primary: 'bg-green-700 text-white hover:bg-green-800 active:bg-green-900 shadow-sm hover:shadow-lift',
  accent: 'bg-crimson-600 text-white hover:bg-crimson-700 active:bg-crimson-800 shadow-sm hover:shadow-lift',
  outline: 'border border-ink-300 bg-transparent text-ink-900 hover:border-green-700 hover:text-green-700',
  ghost: 'text-green-700 hover:bg-green-50',
  onDark: 'border border-white/30 bg-white/5 text-white backdrop-blur-sm hover:border-white hover:bg-white hover:text-green-900',
};

const sizes: Record<Size, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-sm sm:text-base',
  lg: 'px-8 py-3.5 text-base',
};

type CommonProps = {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
};

function classes({ variant = 'primary', size = 'md', className }: CommonProps) {
  return cn(base, variants[variant], sizes[size], className);
}

type ButtonLinkProps = CommonProps & {
  to: string;
} & Omit<ComponentPropsWithoutRef<'a'>, 'href' | 'className' | 'children'>;

type AnchorProps = CommonProps & {
  href: string;
  /** Defaults to true; pass false for same-tab links. */
  external?: boolean;
} & Omit<ComponentPropsWithoutRef<'a'>, 'href' | 'className' | 'children'>;

type NativeButtonProps = CommonProps &
  Omit<ComponentPropsWithoutRef<'button'>, 'className' | 'children'>;

export function Button(props: ButtonLinkProps | AnchorProps | NativeButtonProps) {
  if ('to' in props) {
    const { to, children, variant, size, className, ...rest } = props as ButtonLinkProps;
    return (
      <Link to={to} className={classes({ children, variant, size, className })} {...rest}>
        {children}
      </Link>
    );
  }

  if ('href' in props) {
    const { href, external, children, variant, size, className, ...rest } = props as AnchorProps;
    return (
      <a
        href={href}
        className={classes({ children, variant, size, className })}
        {...(external === false ? {} : { target: '_blank', rel: 'noreferrer noopener' })}
        {...rest}
      >
        {children}
      </a>
    );
  }

  const { children, variant, size, className, type = 'button', ...rest } = props as NativeButtonProps;
  return (
    <button type={type} className={classes({ children, variant, size, className })} {...rest}>
      {children}
    </button>
  );
}
