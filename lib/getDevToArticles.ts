export type DevToArticle = {
  title: string;
  cover_image: string | null;
  published_at: string;
  reading_time_minutes: number;
  url: string;
  tag_list: string[];
};

export async function getDevToArticles(): Promise<DevToArticle[]> {
  try {
    const response = await fetch(
      "https://dev.to/api/articles?username=onatade_abdulmajeed",
      { next: { revalidate: 3600 } },
    );

    if (!response.ok) return [];

    const articles = (await response.json()) as DevToArticle[];
    return articles.filter((article) =>
      article.tag_list.some((tag) => tag.toLowerCase() === "100daysofcode"),
    ).sort(
      (first, second) =>
        new Date(second.published_at).getTime() - new Date(first.published_at).getTime(),
    );
  } catch {
    return [];
  }
}
