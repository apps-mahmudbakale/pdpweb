import type { ReactNode } from 'react';
import { cn } from '../../lib/cn';

export function Container({
  children,
  className,
  as: Tag = 'div',
}: {
  children: ReactNode;
  className?: string;
  as?: 'div' | 'section' | 'header' | 'footer' | 'nav' | 'article';
}) {
  return <Tag className={cn('mx-auto w-full max-w-container px-5 sm:px-8 lg:px-10', className)}>{children}</Tag>;
}
