import { BookOpen, Clock3, ExternalLink } from "lucide-react";
import Image from "next/image";
import { articleSlugs } from "@/data/articles";

type DevToArticle = {
  title: string;
  cover_image: string | null;
  published_at: string;
  reading_time_minutes: number;
  url: string;
};

async function fetchArticle(slug: string): Promise<DevToArticle | null> {
  try {
    const response = await fetch(`https://dev.to/api/articles/onatade_abdulmajeed/${slug}`, {
      next: { revalidate: 3600 },
    });

    if (!response.ok) return null;
    return (await response.json()) as DevToArticle;
  } catch {
    return null;
  }
}

export async function Articles() {
  const results = await Promise.allSettled(articleSlugs.map((slug) => fetchArticle(slug)));
  const articles = results
    .filter((result): result is PromiseFulfilledResult<DevToArticle | null> => result.status === "fulfilled")
    .map((result) => result.value)
    .filter((article): article is DevToArticle => article !== null);

  return (
    <section id="articles" className="relative overflow-hidden px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
      <div className="mx-auto w-full max-w-6xl">
        <div className="articles-reveal">
          <p className="mb-5 font-mono text-xs uppercase tracking-[0.25em] text-[#f4b860]">05 / 06 · Writing</p>
          <h2 className="max-w-2xl text-4xl font-bold leading-tight tracking-[-0.04em] text-white sm:text-5xl">
            Articles
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-7 text-[#91a0b4]">
            Notes from building software, learning in public, and navigating the details behind reliable systems.
          </p>
        </div>

        {articles.length > 0 ? (
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((article, index) => {
              const publishedDate = new Intl.DateTimeFormat("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              }).format(new Date(article.published_at));

              return (
                <article
                  key={article.url}
                  className="articles-reveal group flex flex-col overflow-hidden border border-white/10 bg-[#0b1829]/70 shadow-xl shadow-black/10 transition duration-300 hover:-translate-y-1 hover:border-[#f4b860]/25 hover:shadow-2xl hover:shadow-black/25"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {article.cover_image ? (
                    <div className="relative h-48 w-full overflow-hidden">
                      <Image src={article.cover_image} alt="" fill loading="lazy" sizes="(min-width: 1024px) 384px, (min-width: 768px) 50vw, 100vw" className="object-cover transition duration-500 group-hover:scale-[1.03]" />
                    </div>
                  ) : (
                    <div className="h-48 w-full bg-[radial-gradient(circle_at_25%_20%,rgba(244,184,96,0.32),transparent_35%),linear-gradient(135deg,#12243a,#0b1829)]" aria-hidden="true" />
                  )}
                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.12em] text-[#91a0b4]">
                      <span>{publishedDate}</span>
                      <span aria-hidden="true">·</span>
                      <span className="inline-flex items-center gap-1.5"><Clock3 size={13} /> {article.reading_time_minutes} min read</span>
                    </div>
                    <h3 className="mt-4 text-xl font-bold leading-snug tracking-[-0.02em] text-white">{article.title}</h3>
                    <a href={article.url} target="_blank" rel="noopener noreferrer" className="mt-auto inline-flex items-center gap-2 pt-8 text-sm font-bold text-[#f4b860] transition hover:text-white">
                      <BookOpen size={16} aria-hidden="true" />
                      Read on Dev.to
                      <ExternalLink size={14} aria-hidden="true" />
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        ) : (
          <p className="mt-12 border border-white/10 bg-[#0b1829]/70 p-6 text-sm text-[#91a0b4]">
            Articles are currently unavailable. Please check back soon.
          </p>
        )}
      </div>
    </section>
  );
}
