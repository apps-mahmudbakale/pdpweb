import { ArrowRight, MapPin } from 'lucide-react';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';
import { Seal } from '../ui/Seal';
import { party } from '../../data/party';

export function JoinCta() {
  return (
    <section className="relative isolate overflow-hidden bg-green-900">
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(50rem_35rem_at_85%_10%,rgba(255,255,255,0.12),transparent_60%)]" />
        <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] [background-size:56px_56px]" />
      </div>

      <Container className="py-20 sm:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
          <div>
            <h2 className="text-balance font-display text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl lg:text-[2.75rem]">
              A party that belongs to its members — including you.
            </h2>
            <p className="mt-5 max-w-2xl text-pretty text-base leading-relaxed text-white/75 sm:text-lg">
              Membership begins in the ward: two members recommend, you register, and you take part
              in the congresses that elect every officer above you. The constitution is explicit
              that no political party belongs to one individual — which only holds if members turn
              out and decide.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Button to="/contact#join" size="lg" className="bg-white text-green-800 hover:bg-green-50">
                Become a member
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Button>
              <Button to="/leadership#membership" size="lg" variant="onDark">
                How membership works
              </Button>
            </div>
          </div>

          <div className="rounded-3xl border border-white/15 bg-white/[0.06] p-8 backdrop-blur-sm">
            <Seal className="h-14 w-auto" tone="dark" variant="image" />
            <p className="mt-6 font-display text-xl font-semibold text-white">
              National Secretariat
            </p>
            <p className="mt-3 flex items-start gap-2.5 text-sm leading-relaxed text-white/70">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-green-300" aria-hidden="true" />
              {party.hq}
            </p>
            <div aria-hidden="true" className="rule-tricolour mt-7" />
            <p className="mt-5 text-xs font-medium uppercase tracking-[0.16em] text-white/50">
              {party.motto}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
