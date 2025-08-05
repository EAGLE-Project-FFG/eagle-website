import { useParams, Link } from "react-router";
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm'
import type { NewsEntry } from "@/interfaces/NewsEntry";

const newsFiles = import.meta.glob("/src/news/*.md", { eager: true });

function parseNews(): NewsEntry[] {
    return Object.values(newsFiles).map((mod: any) => ({
        title: mod.attributes.title,
        date: mod.attributes.date,
        author: mod.attributes.author,
        slug: mod.attributes.slug,
        content: mod.markdown,
    }));
}

export default function NewsDetailPage() {
    const { slug } = useParams();
    const newsEntries = parseNews();
    const entry = newsEntries.find(e => e.slug === slug);

    if (!entry) return <div>News entry not found.</div>;

    return (
        <div className="container mx-auto px-4 py-8">
            <Link to="/news" className="text-primary underline mb-6 block">← Back to News</Link>
            <h1 className="text-2xl font-bold mb-2">{entry.title}</h1>
            <div className="text-sm text-muted-foreground mb-4">{entry.date}</div>
            <div className="prose text-left">
                <Markdown remarkPlugins={[remarkGfm]}>{entry.content}</Markdown>
            </div>
        </div>
    );
}
