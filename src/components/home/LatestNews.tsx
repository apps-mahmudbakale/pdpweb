import { Link } from 'react-router-dom';
import { ArrowRight, Clock } from 'lucide-react';
import { Section, SectionHeading } from '../ui/Section';
import { Container } from '../ui/Container';
import { Card } from '../ui/Card';
import { articles, formatDate } from '../../data/news';

export function LatestNews() {
  const latest = articles.slice(0, 3);

  return (
    <Section tone="muted" id="news-preview">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="From the party"
            title="News and statements"
            lede="Historical record, constitutional explainers and announcements from the National Secretariat."
            className="max-w-2xl"
          />
          <Link
            to="/news"
            className="inline-flex items-center gap-2 text-sm font-semibold text-green-700 transition-colors hover:text-green-800"
          >
            All news
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>

        <ul className="mt-12 grid gap-5 md:grid-cols-3">
          {latest.map((article) => (
            <Card as="li" key={article.slug} interactive className="flex flex-col overflow-hidden">
              <div
                aria-hidden="true"
                className="flex h-1.5 w-full"
              >
                <span className="flex-1 bg-green-600" />
                <span className="flex-1 bg-white" />
                <span className="flex-1 bg-crimson-600" />
              </div>
              <div className="flex flex-1 flex-col p-7">
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs">
                  <span className="rounded-full bg-green-50 px-2.5 py-1 font-semibold uppercase tracking-[0.1em] text-green-700">
                    {article.category}
                  </span>
                  <span className="flex items-center gap-1.5 text-ink-500">
                    <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                    {article.readMinutes} min read
                  </span>
                </div>

                <h3 className="mt-4 font-display text-xl font-semibold leading-snug text-ink-900">
                  <Link to={`/news/${article.slug}`} className="hover:text-green-700">
                    {article.title}
                  </Link>
                </h3>
                <p className="mt-2.5 flex-1 text-pretty text-sm leading-relaxed text-ink-600">
                  {article.standfirst}
                </p>

                <p className="mt-6 border-t border-ink-200/80 pt-4 text-xs font-medium uppercase tracking-[0.12em] text-ink-500">
                  {formatDate(article.date)}
                </p>
              </div>
            </Card>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
