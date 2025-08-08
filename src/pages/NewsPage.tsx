import type { NewsEntry, NewsModule } from "@/interfaces/News";
import { Newspaper } from "lucide-react";
import { useEffect, useState } from "react";
import { PageHeader } from "@/components/PageHeader";
import { NewsItemCard } from "@/components/NewsItemCard";

const newsFiles = import.meta.glob("/src/news/*.md", { eager: true });

function parseNews(): NewsEntry[] {
  return Object.values(newsFiles).map((mod) => {
    const m = mod as NewsModule;
    return {
      title: m.attributes.title,
      date: m.attributes.date,
      author: m.attributes.author,
      slug: m.attributes.slug,
      tags: m.attributes.tags ?? [],
      content: m.markdown,
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

      {/* Responsive grid: 1 col on mobile, 2 cols on md+ */}
      <div className="mt-6 grid gap-6 sm:grid-cols-1 md:grid-cols-2">
        {newsEntries.map((n) => (
          <NewsItemCard
            key={n.slug}
            to={`/news/${n.slug}`}
            title={n.title}
            date={n.date}
            author={n.author}
            tags={n.tags}
          />
        ))}
      </div>
    </div>
  );
}
