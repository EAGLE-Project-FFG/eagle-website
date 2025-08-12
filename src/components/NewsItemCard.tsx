import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, User2, ArrowRight } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router";

type Props = {
  to: string;
  title: string;
  date: string;
  author: string;
  tags?: string[];
};

// eslint-disable-next-line react-x/no-unstable-default-props
export function NewsItemCard({ to, title, date, author, tags = [] }: Props) {
  const prettyDate = new Date(date).toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <Link to={to} className="group block h-full">
      <Card className="h-full rounded-xl border bg-white/90 px-2 py-2 ring-1 ring-black/5 backdrop-blur transition-all hover:-translate-y-0.5 hover:shadow-lg">
        <CardContent className="flex h-full flex-col p-4">
          {/* Title */}
          <h2 className="text-left text-xl font-semibold tracking-tight transition-colors group-hover:text-primary">
            {title}
          </h2>

          {/* Meta row */}
          <div className="mt-4 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-muted/40 px-2 py-0.5">
              <CalendarDays className="h-4 w-4" />
              {prettyDate}
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-muted/40 px-2 py-0.5">
              <User2 className="h-4 w-4" />
              {author}
            </span>
          </div>

          {/* Tags */}
          {tags.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-1.5">
              {tags.map((t) => (
                <Badge
                  key={t}
                  variant="secondary"
                  className="rounded-full px-2 py-0.5 text-[11px]"
                >
                  {t}
                </Badge>
              ))}
            </div>
          )}

          {/* Footer */}
          <Separator className="my-4" />
          <div className="mt-auto flex items-center gap-1 text-sm font-medium text-primary">
            Read More
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
