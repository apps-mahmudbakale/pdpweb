import { Container } from '../ui/Container';
import { stats } from '../../data/party';

export function Stats() {
  return (
    <section className="border-y border-ink-200/70 bg-ink-50">
      <Container>
        <dl className="grid grid-cols-2 divide-ink-200/70 lg:grid-cols-4 lg:divide-x">
          {stats.map((stat) => (
            <div key={stat.label} className="px-2 py-8 sm:px-6 lg:py-10 lg:first:pl-0">
              <dt className="sr-only">{stat.label}</dt>
              <dd>
                <span className="block font-display text-4xl font-semibold tracking-tight text-ink-900 sm:text-5xl">
                  {stat.value}
                </span>
                <span className="mt-2 block text-sm font-semibold text-ink-700">{stat.label}</span>
                {stat.hint ? (
                  <span className="mt-1 block text-pretty text-xs leading-relaxed text-ink-500">
                    {stat.hint}
                  </span>
                ) : null}
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
