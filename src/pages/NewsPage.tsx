import type { NewsEntry, NewsModule } from "@/interfaces/News";
import { Newspaper } from "lucide-react";
import { useEffect, useState } from "react";
import { PageHeader } from "@/components/PageHeader";
import { NewsItemCard } from "@/components/NewsItemCard";

const newsFiles = import.meta.glob("/src/news/*.md", { eager: true });

function parseNews(): NewsEntry[] {
  return Object.values(newsFiles).map((mod) => {
    const m = mod as NewsModule;
    // A dedicated thumbnail takes precedence over the first inline Markdown image.
    const firstImage = m.markdown.match(
      /!\[([^\]]*)\]\(([^\s)]+)(?:\s+"[^"]*")?\)/,
    );
    return {
      title: m.attributes.title,
      date: m.attributes.date,
      author: m.attributes.author,
      slug: m.attributes.slug,
      tags: m.attributes.tags ?? [],
      content: m.markdown,
      thumbnail: m.attributes.thumbnail ?? firstImage?.[2],
      thumbnailAlt:
        m.attributes.thumbnailAlt ??
        (m.attributes.thumbnail ? m.attributes.title : firstImage?.[1]),
    };
  });
}

export default function NewsPage() {
  const [newsEntries, setNewsEntries] = useState<NewsEntry[]>([]);

  useEffect(() => {
    const entries = parseNews().sort((a, b) => b.date.localeCompare(a.date));
    setNewsEntries(entries);
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <PageHeader
        icon={<Newspaper className="h-8 w-8 text-blue-600" />}
        title="News"
        description="Stay updated with the latest developments in the EAGLE project."
      />

      {/* Give the thumbnail and title enough room before switching to two columns. */}
      <div className="mt-6 grid grid-cols-1 gap-5 lg:grid-cols-2">
        {newsEntries.map((n) => (
          <NewsItemCard
            key={n.slug}
            to={`/news/${n.slug}`}
            title={n.title}
            date={n.date}
            author={n.author}
            tags={n.tags}
            thumbnail={n.thumbnail}
            thumbnailAlt={n.thumbnailAlt}
          />
        ))}
      </div>
    </div>
  );
}
