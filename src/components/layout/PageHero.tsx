import { Container } from '../ui/Container';
import { Eyebrow } from '../ui/Eyebrow';
import { cn } from '../../lib/cn';

/** Shared hero for every page except the home page. */
export function PageHero({
  eyebrow,
  title,
  lede,
  children,
}: {
  eyebrow: string;
  title: string;
  lede: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-ink-950 pb-16 pt-32 sm:pb-20 sm:pt-40">
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(55rem_35rem_at_10%_-10%,rgba(23,121,69,0.5),transparent_60%),radial-gradient(40rem_30rem_at_95%_20%,rgba(194,47,47,0.2),transparent_65%)]" />
        <div className="absolute inset-0 opacity-[0.07] [background-image:linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] [background-size:64px_64px]" />
      </div>

      <Container>
        <Eyebrow className="text-green-300 [&>span]:bg-green-300/40">{eyebrow}</Eyebrow>
        <h1 className="mt-6 max-w-4xl text-balance font-display text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-white/70 sm:text-lg">
          {lede}
        </p>
        {children ? <div className="mt-10">{children}</div> : null}
      </Container>
    </section>
  );
}

export function Anchor({
  id,
  className,
}: {
  id: string;
  className?: string;
}) {
  return <div id={id} className={cn('scroll-mt-28', className)} />;
}
