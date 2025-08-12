import { useParams, Link } from "react-router";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { CalendarDays, User2, Tag } from "lucide-react";
import type { NewsEntry, NewsModule } from "@/interfaces/News";

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

export default function NewsDetailPage() {
  const { slug } = useParams();
  const newsEntries = parseNews();
  const entry = newsEntries.find((e) => e.slug === slug);

  if (!entry) return <div className="p-6">News entry not found.</div>;

  return (
    <div className="container mx-auto px-4 py-8 mt-14">
      {/* Back link */}
      <Link
        to="/news"
        className="mb-6 inline-flex items-center text-md font-medium text-primary hover:underline"
      >
        ← Back to News
      </Link>

      <Card className="rounded-2xl border bg-white/90 shadow-sm ring-1 ring-black/5 max-w-4xl mx-auto">
        <CardContent className="p-6 md:p-8 text-left">
          {/* Title */}
          <h1 className="text-3xl font-bold tracking-tight mb-4">
            {entry.title}
          </h1>

          {/* Meta row */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
            <div className="flex items-center gap-1.5">
              <CalendarDays className="h-4 w-4" />
              {new Date(entry.date).toLocaleDateString(undefined, {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </div>
            <div className="flex items-center gap-1.5">
              <User2 className="h-4 w-4" />
              {entry.author}
            </div>
          </div>

          {/* Tags */}
          {entry.tags && entry.tags.length > 0 && (
            <div className="mb-4 flex flex-wrap gap-2">
              {entry.tags.map((tag) => (
                <Badge
                  key={tag}
                  variant="secondary"
                  className="rounded-full px-3 py-1 text-xs"
                >
                  <Tag className="mr-1.5 h-3 w-3" />
                  {tag}
                </Badge>
              ))}
            </div>
          )}

          <Separator className="my-6" />

          {/* Markdown content */}
          <div className="prose max-w-none prose-headings:text-foreground">
            <Markdown remarkPlugins={[remarkGfm]}>{entry.content}</Markdown>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
