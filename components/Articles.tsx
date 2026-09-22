import { BookOpen, Clock3, ExternalLink } from "lucide-react";
import Image from "next/image";
import { articleSlugs } from "@/data/articles";
import { getDevToArticles, type DevToArticle } from "@/lib/getDevToArticles";

type CuratedArticle = DevToArticle;

async function fetchArticle(slug: string): Promise<CuratedArticle | null> {
  try {
    const response = await fetch(`https://dev.to/api/articles/onatade_abdulmajeed/${slug}`, {
      next: { revalidate: 3600 },
    });
    if (!response.ok) return null;
    return (await response.json()) as CuratedArticle;
  } catch {
    return null;
  }
}

function formatDate(date: string) {
  return new Intl.DateTimeFormat("en-US", { month: "short", day: "numeric", year: "numeric" }).format(new Date(date));
}

function getJourneyReference(title: string) {
  return title.match(/(day|week)\s*\d+/i)?.[0] ?? "100DaysOfCode";
}

export async function Articles() {
  const [journeyArticles, curatedResults] = await Promise.all([
    getDevToArticles(),
    Promise.allSettled(articleSlugs.map((slug) => fetchArticle(slug))),
  ]);
  const curatedArticles = curatedResults
    .filter((result): result is PromiseFulfilledResult<CuratedArticle | null> => result.status === "fulfilled")
    .map((result) => result.value)
    .filter((article): article is CuratedArticle => article !== null);

  return (
    <section id="articles" className="relative overflow-hidden px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
      <div className="mx-auto w-full max-w-6xl">
        <div className="articles-reveal">
          <p className="mb-5 font-mono text-xs uppercase tracking-[0.25em] text-[#f4b860]">05 / 06 · Writing</p>
          <h2 className="max-w-2xl text-4xl font-bold leading-tight tracking-[-0.04em] text-white sm:text-5xl">Articles</h2>
          <p className="mt-5 max-w-2xl text-base leading-7 text-[#91a0b4]">Notes from building software, learning in public, and navigating the details behind reliable systems.</p>
        </div>

        {journeyArticles.length > 0 && (
          <div className="articles-reveal mt-14" style={{ animationDelay: "100ms" }}>
            <div className="flex flex-wrap items-end justify-between gap-5">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#f4b860]">The journey</p>
                <h3 className="mt-3 text-2xl font-bold tracking-[-0.03em] text-white sm:text-3xl">#100DaysOfCode Journey</h3>
              </div>
              <div className="w-full max-w-xs">
                <div className="mb-2 flex items-center justify-between font-mono text-xs uppercase tracking-[0.12em] text-[#91a0b4]"><span>Progress</span><span className="text-[#f4b860]">94/100 days</span></div>
                <div className="h-1.5 overflow-hidden rounded-full bg-white/10"><div className="h-full w-[94%] rounded-full bg-[#f4b860]" /></div>
              </div>
            </div>
            <div className="mt-7 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 lg:grid lg:grid-cols-3 lg:overflow-visible">
              {journeyArticles.map((article, index) => (
                <a key={article.url} href={article.url} target="_blank" rel="noopener noreferrer" className="group articles-reveal min-w-[min(82vw,21rem)] snap-start border border-[#f4b860]/20 bg-[#0b1829]/70 p-5 shadow-xl shadow-black/10 transition duration-300 hover:-translate-y-1 hover:border-[#f4b860]/50 hover:shadow-2xl hover:shadow-black/25 lg:min-w-0" style={{ animationDelay: `${150 + index * 75}ms` }}>
                  <div className="flex items-center justify-between gap-3 font-mono text-[11px] uppercase tracking-[0.12em] text-[#f4b860]"><span>{getJourneyReference(article.title)}</span><ExternalLink size={14} aria-hidden="true" /></div>
                  <h4 className="mt-5 line-clamp-3 text-lg font-bold leading-snug text-white">{article.title}</h4>
                  <p className="mt-6 font-mono text-xs text-[#91a0b4]">{formatDate(article.published_at)}</p>
                </a>
              ))}
            </div>
          </div>
        )}

        <div className="mt-16">
          <div className="articles-reveal"><p className="font-mono text-xs uppercase tracking-[0.2em] text-[#f4b860]">Technical Writing</p><p className="mt-3 max-w-2xl text-sm leading-7 text-[#91a0b4]">Deep dives and lessons from building in production.</p></div>
          {curatedArticles.length > 0 ? (
            <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {curatedArticles.map((article, index) => (
                <article key={article.url} className="articles-reveal group flex flex-col overflow-hidden border border-white/10 bg-[#0b1829]/70 shadow-xl shadow-black/10 transition duration-300 hover:-translate-y-1 hover:border-[#f4b860]/25 hover:shadow-2xl hover:shadow-black/25" style={{ animationDelay: `${index * 100}ms` }}>
                  {article.cover_image ? <div className="relative h-48 w-full overflow-hidden"><Image src={article.cover_image} alt="" fill loading="lazy" sizes="(min-width: 1024px) 384px, (min-width: 768px) 50vw, 100vw" className="object-cover transition duration-500 group-hover:scale-[1.03]" /></div> : <div className="h-48 w-full bg-[radial-gradient(circle_at_25%_20%,rgba(244,184,96,0.32),transparent_35%),linear-gradient(135deg,#12243a,#0b1829)]" aria-hidden="true" />}
                  <div className="flex flex-1 flex-col p-6"><div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.12em] text-[#91a0b4]"><span>{formatDate(article.published_at)}</span><span aria-hidden="true">·</span><span className="inline-flex items-center gap-1.5"><Clock3 size={13} /> {article.reading_time_minutes} min read</span></div><h3 className="mt-4 text-xl font-bold leading-snug tracking-[-0.02em] text-white">{article.title}</h3><a href={article.url} target="_blank" rel="noopener noreferrer" className="mt-auto inline-flex items-center gap-2 pt-8 text-sm font-bold text-[#f4b860] transition hover:text-white"><BookOpen size={16} aria-hidden="true" />Read on Dev.to<ExternalLink size={14} aria-hidden="true" /></a></div>
                </article>
              ))}
            </div>
          ) : <p className="mt-8 border border-white/10 bg-[#0b1829]/70 p-6 text-sm text-[#91a0b4]">Technical articles are currently unavailable. Please check back soon.</p>}
        </div>
      </div>
    </section>
  );
}
