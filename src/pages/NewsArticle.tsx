import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Clock } from 'lucide-react';
import { Section } from '../components/ui/Section';
import { Container } from '../components/ui/Container';
import { Button } from '../components/ui/Button';
import { useSeo } from '../hooks/useSeo';
import { getArticle, articles, formatDate } from '../data/news';

export default function NewsArticle() {
  const { slug = '' } = useParams();
  const article = getArticle(slug);

  useSeo({
    title: article ? article.title : 'Article not found',
    description: article?.standfirst,
  });

  if (!article) {
    return (
      <Section tone="white" className="pt-40">
        <Container>
          <h1 className="font-display text-4xl font-semibold text-ink-900">Article not found</h1>
          <p className="mt-4 text-ink-600">That article does not exist, or has been moved.</p>
          <Button to="/news" className="mt-8">
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Back to news
          </Button>
        </Container>
      </Section>
    );
  }

  const related = articles.filter((a) => a.slug !== article.slug).slice(0, 2);

  return (
    <>
      {/* Article header */}
      <section className="relative isolate overflow-hidden bg-ink-950 pb-14 pt-32 sm:pb-16 sm:pt-40">
        <div aria-hidden="true" className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(55rem_35rem_at_15%_-10%,rgba(23,121,69,0.45),transparent_60%)]" />
          <div className="absolute inset-0 opacity-[0.07] [background-image:linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] [background-size:64px_64px]" />
        </div>

        <Container>
          <Link
            to="/news"
            className="inline-flex items-center gap-2 text-sm font-semibold text-green-300 transition-colors hover:text-green-200"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            All news
          </Link>

          <p className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs">
            <span className="rounded-full bg-white/10 px-3 py-1 font-semibold uppercase tracking-[0.1em] text-green-300">
              {article.category}
            </span>
            <span className="text-white/50">{formatDate(article.date)}</span>
            <span className="flex items-center gap-1.5 text-white/50">
              <Clock className="h-3.5 w-3.5" aria-hidden="true" />
              {article.readMinutes} min read
            </span>
          </p>

          <h1 className="mt-5 max-w-4xl text-balance font-display text-3xl font-semibold leading-[1.1] tracking-tight text-white sm:text-4xl lg:text-5xl">
            {article.title}
          </h1>
          <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-white/70 sm:text-lg">
            {article.standfirst}
          </p>
        </Container>
      </section>

      {/* Body */}
      <Section tone="white">
        <Container>
          <article className="mx-auto max-w-2xl">
            <div aria-hidden="true" className="rule-tricolour mb-10" />
            <div className="space-y-6">
              {article.body.map((paragraph, i) => (
                <p
                  key={i}
                  className={`text-pretty leading-[1.75] text-ink-700 ${
                    i === 0 ? 'text-lg first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:font-display first-letter:text-6xl first-letter:font-semibold first-letter:leading-none first-letter:text-green-700' : ''
                  }`}
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {article.placeholder ? (
              <p className="mt-10 rounded-2xl border border-amber-300/70 bg-amber-50 p-5 text-sm leading-relaxed text-amber-900/85">
                <strong className="font-semibold">Sample content.</strong> This article is a
                placeholder standing in for a real announcement. Replace it before launch.
              </p>
            ) : null}

            <div className="mt-12 flex flex-wrap gap-3 border-t border-ink-200 pt-8">
              <Button to="/news" variant="outline">
                <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                All news
              </Button>
              <Button to="/manifesto">Read the manifesto</Button>
            </div>
          </article>

          {/* Related */}
          {related.length > 0 ? (
            <div className="mx-auto mt-20 max-w-4xl border-t border-ink-200 pt-12">
              <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-500">
                Read next
              </h2>
              <ul className="mt-6 grid gap-5 sm:grid-cols-2">
                {related.map((a) => (
                  <li key={a.slug}>
                    <Link
                      to={`/news/${a.slug}`}
                      className="group flex h-full flex-col rounded-2xl border border-ink-200/80 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-green-300 hover:shadow-lift"
                    >
                      <span className="text-xs font-semibold uppercase tracking-[0.1em] text-green-700">
                        {a.category}
                      </span>
                      <span className="mt-3 font-display text-lg font-semibold leading-snug text-ink-900 group-hover:text-green-700">
                        {a.title}
                      </span>
                      <span className="mt-auto flex items-center gap-2 pt-5 text-sm font-semibold text-green-700">
                        Read
                        <ArrowRight
                          className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
                          aria-hidden="true"
                        />
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </Container>
      </Section>
    </>
  );
}
