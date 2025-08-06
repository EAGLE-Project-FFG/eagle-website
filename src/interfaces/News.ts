// This is how markdown files are originally imported (including frontmatter attributes)
export type NewsModule = {
    attributes: {
        title: string;
        date: string;
        author: string;
        slug: string;
    };
    markdown: string;
};

// This is how the final NewsEntry interface is structured
export interface NewsEntry {
    title: string;
    date: string;
    author: string;
    slug: string;
    content: string;
}