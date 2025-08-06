import { Card, CardContent } from "@/components/ui/card";
import type { NewsEntry, NewsModule } from "@/interfaces/News";
import { useEffect, useState } from "react";
import { Link } from "react-router";

const newsFiles = import.meta.glob("/src/news/*.md", { eager: true });

function parseNews(): NewsEntry[] {
    return Object.values(newsFiles).map((mod) => {
        const m = mod as NewsModule;
        return {
            title: m.attributes.title,
            date: m.attributes.date,
            author: m.attributes.author,
            slug: m.attributes.slug,
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
            <h1 className="text-2xl font-semibold mb-6">News</h1>
            <div className="space-y-8">
                {newsEntries.map((entry) => (
                    <Link to={`/news/${entry.slug}`} key={entry.slug} className="block">
                        <Card>
                            <CardContent className="p-6">
                                <h2 className="text-xl font-bold mb-2">{entry.title}</h2>
                                <div className="text-sm text-muted-foreground mb-4">{entry.date}</div>
                                <div className="text-sm text-muted-foreground mb-4">{entry.author}</div>
                                <div className="mt-2 text-primary underline text-sm">Read</div>
                            </CardContent>
                        </Card>
                    </Link>
                ))}
            </div>
        </div>
    );
}