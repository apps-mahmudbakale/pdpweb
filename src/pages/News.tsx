import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, Info } from 'lucide-react';
import { PageHero } from '../components/layout/PageHero';
import { Section } from '../components/ui/Section';
import { Container } from '../components/ui/Container';
import { Card } from '../components/ui/Card';
import { useSeo } from '../hooks/useSeo';
import { cn } from '../lib/cn';
import { articles, categories, formatDate } from '../data/news';
import type { Category } from '../data/news';

export default function News() {
  const [category, setCategory] = useState<Category>('All');

  useSeo({
    title: 'News',
    description:
      'Statements, historical record and constitutional explainers from the Peoples Democratic Party National Secretariat.',
  });

  const filtered = useMemo(
    () =>
      (category === 'All' ? articles : articles.filter((a) => a.category === category))
        .slice()
        .sort((a, b) => b.date.localeCompare(a.date)),
    [category],
  );

  const [lead, ...rest] = filtered;

  return (
    <>
      <PageHero
        eyebrow="News & statements"
        title="What the party has been saying, and has stood for."
        lede="Historical record, constitutional explainers and announcements from the National Secretariat."
      />

      <Section tone="muted">
        <Container>
          {/* Filter */}
          <div className="flex flex-wrap items-center gap-2" role="group" aria-label="Filter news by category">
            {categories.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setCategory(c)}
                aria-pressed={category === c}
                className={cn(
                  'rounded-full px-4 py-2 text-sm font-medium transition-colors',
                  category === c
                    ? 'bg-green-700 text-white'
                    : 'bg-white text-ink-600 ring-1 ring-ink-200 hover:text-ink-900',
                )}
              >
                {c}
              </button>
            ))}
            <span className="ml-auto text-sm text-ink-500">
              {filtered.length} {filtered.length === 1 ? 'article' : 'articles'}
            </span>
          </div>

          {lead ? (
            <>
              {/* Lead article */}
              <Card as="article" interactive className="mt-10 overflow-hidden">
                <div className="grid md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
                  <div className="flex flex-col justify-center p-8 sm:p-12">
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs">
                      <span className="rounded-full bg-green-50 px-3 py-1 font-semibold uppercase tracking-[0.1em] text-green-700">
                        {lead.category}
                      </span>
                      <span className="flex items-center gap-1.5 text-ink-500">
                        <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                        {lead.readMinutes} min read
                      </span>
                    </div>
                    <h2 className="mt-5 text-balance font-display text-2xl font-semibold leading-tight text-ink-900 sm:text-3xl">
                      <Link to={`/news/${lead.slug}`} className="hover:text-green-700">
                        {lead.title}
                      </Link>
                    </h2>
                    <p className="mt-4 text-pretty leading-relaxed text-ink-600">{lead.standfirst}</p>
                    <p className="mt-6 text-xs font-medium uppercase tracking-[0.12em] text-ink-500">
                      {formatDate(lead.date)}
                    </p>
                    <Link
                      to={`/news/${lead.slug}`}
                      className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-green-700 transition-colors hover:text-green-800"
                    >
                      Read the full article
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </Link>
                  </div>
                  <div
                    aria-hidden="true"
                    className="relative hidden min-h-full overflow-hidden bg-ink-950 md:block"
                  >
                    <div className="absolute inset-0 bg-[radial-gradient(30rem_20rem_at_30%_20%,rgba(23,121,69,0.55),transparent_60%),radial-gradient(25rem_20rem_at_80%_80%,rgba(194,47,47,0.3),transparent_65%)]" />
                    <div className="absolute inset-0 flex flex-col justify-end gap-0">
                      <span className="h-1/3 flex-1 bg-green-700/90" />
                      <span className="h-1/3 flex-1 bg-white/90" />
                      <span className="h-1/3 flex-1 bg-crimson-600/90" />
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <p className="px-8 text-center font-display text-2xl font-semibold leading-tight text-white">
                        {lead.category === 'History' ? 'Sixteen years of military rule, answered' : lead.title}
                      </p>
                    </div>
                  </div>
                </div>
              </Card>

              {rest.length > 0 ? (
                <ul className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                  {rest.map((article) => (
                    <Card as="li" key={article.slug} interactive className="flex flex-col p-7">
                      <div aria-hidden="true" className="flex h-1.5 w-full">
                        <span className="flex-1 bg-green-600" />
                        <span className="flex-1 bg-white" />
                        <span className="flex-1 bg-crimson-600" />
                      </div>
                      <div className="mt-5 flex flex-1 flex-col">
                        <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs">
                          <span className="rounded-full bg-green-50 px-2.5 py-1 font-semibold uppercase tracking-[0.1em] text-green-700">
                            {article.category}
                          </span>
                          <span className="flex items-center gap-1.5 text-ink-500">
                            <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                            {article.readMinutes} min
                          </span>
                        </div>
                        <h3 className="mt-4 font-display text-lg font-semibold leading-snug text-ink-900">
                          <Link to={`/news/${article.slug}`} className="hover:text-green-700">
                            {article.title}
                          </Link>
                        </h3>
                        <p className="mt-2.5 flex-1 text-pretty text-sm leading-relaxed text-ink-600">
                          {article.standfirst}
                        </p>
                        <p className="mt-5 border-t border-ink-200/80 pt-4 text-xs font-medium uppercase tracking-[0.12em] text-ink-500">
                          {formatDate(article.date)}
                        </p>
                      </div>
                    </Card>
                  ))}
                </ul>
              ) : null}
            </>
          ) : (
            <p className="mt-16 text-center text-ink-500">
              No articles in this category yet.
            </p>
          )}

          <p className="mt-12 flex items-start gap-2.5 rounded-2xl border border-ink-200 bg-white p-5 text-sm text-ink-600">
            <Info className="mt-0.5 h-4 w-4 shrink-0 text-ink-400" aria-hidden="true" />
            <span className="text-pretty leading-relaxed">
              Articles marked as sample content are placeholders for real announcements. Replace
              them before launch.
            </span>
          </p>
        </Container>
      </Section>
    </>
  );
}
