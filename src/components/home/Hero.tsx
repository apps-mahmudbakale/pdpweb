import { ArrowRight, Quote } from 'lucide-react';
import { Container } from '../ui/Container';
import { Seal } from '../ui/Seal';
import { Button } from '../ui/Button';
import { HeroSlides } from './HeroSlides';
import { party } from '../../data/party';

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-ink-950 pt-32 pb-20 sm:pt-36 lg:pt-44 lg:pb-28">
      {/* Ambient background: two soft brand washes over a fine grid. */}
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          }}
        />
        <div className="absolute inset-0 bg-ink-950/70" />
        <div className="absolute inset-0 bg-[radial-gradient(60rem_40rem_at_15%_-10%,rgba(23,121,69,0.6),transparent_60%),radial-gradient(45rem_35rem_at_95%_15%,rgba(194,47,47,0.28),transparent_65%)]" />
        <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] [background-size:64px_64px]" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-ink-950 to-transparent" />
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-ink-950/90 to-transparent" />
      </div>

      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)]">
          <div className="animate-fade-rise">
            <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-green-300">
              <span aria-hidden="true" className="h-px w-8 bg-green-300/50" />
              Founded {party.founded} · Abuja
            </p>

            <h1 className="mt-7 text-balance font-display text-[2.75rem] font-semibold leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-[4.5rem]">
              Justice, unity
              <br />
              <span className="text-green-400">and progress.</span>
            </h1>

            <p className="mt-7 max-w-xl text-pretty text-base leading-relaxed text-white/70 sm:text-lg">
              For twenty-eight years the Peoples Democratic Party has been the national platform
              built to hold Nigeria together — defending the rule of law, devolving real power to
              the states, and keeping the government answerable to the people who gave it power.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Button to="/about" size="lg">
                Our history
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Button>
              <Button to="/manifesto" size="lg" variant="onDark">
                Read the manifesto
              </Button>
            </div>
          </div>

          {/* Emblem card */}
          <div className="relative mx-auto w-full max-w-sm lg:max-w-none">
            <div className="relative rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-sm sm:p-10">
              <div aria-hidden="true" className="rule-tricolour absolute inset-x-8 top-0 -translate-y-1/2" />
              <Seal className="mx-auto h-32 w-auto sm:h-40" tone="dark" variant="image" />
              <div className="mt-8 text-center">
                <p className="font-display text-2xl font-semibold text-white">{party.tagline}</p>
                <p className="mt-2 text-sm text-white/55">Motto: {party.motto}</p>
                <p className="mt-5 flex items-center justify-center gap-2 text-[0.6875rem] font-medium uppercase tracking-[0.18em] text-white/45">
                  <span className="h-3 w-3 rounded-full bg-green-600" aria-hidden="true" />
                  <span className="h-3 w-3 rounded-full bg-white" aria-hidden="true" />
                  <span className="h-3 w-3 rounded-full bg-crimson-600" aria-hidden="true" />
                  {party.colours.join(' · ')}
                </p>
              </div>
            </div>
          </div>
        </div>

        <HeroSlides />

        {/* Founding words from the party constitution. */}
        <figure className="mt-16 max-w-4xl border-l-2 border-green-500/60 pl-6 sm:mt-20">
          <Quote className="h-5 w-5 text-green-400/70" aria-hidden="true" />
          <blockquote className="mt-3 text-pretty font-display text-lg leading-relaxed text-white/80 sm:text-xl">
            A country in which all Nigerians are equal, where each contributes according to his
            ability, where no one person dominates and where no political party belongs to one
            individual.
          </blockquote>
          <figcaption className="mt-3 text-xs font-medium uppercase tracking-[0.16em] text-white/45">
            From the Constitution of the Peoples Democratic Party
          </figcaption>
        </figure>
      </Container>
    </section>
  );
}
