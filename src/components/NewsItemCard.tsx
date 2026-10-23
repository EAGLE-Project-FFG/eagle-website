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
  thumbnail?: string;
  thumbnailAlt?: string;
};

export function NewsItemCard({
  to,
  title,
  date,
  author,
  tags,
  thumbnail,
  thumbnailAlt,
}: Props) {
  const prettyDate = new Date(date).toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <Link
      to={to}
      className="group block h-full rounded-xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
    >
      <Card className="h-full gap-0 rounded-xl border bg-white py-0 shadow-sm transition-all hover:border-[#1E4A89]/25 hover:shadow-md">
        <CardContent className="flex flex-1 flex-col p-5 sm:p-6">
          <div className="flex items-start gap-4 sm:gap-5">
            <div className="aspect-[4/3] w-28 shrink-0 overflow-hidden rounded-lg bg-muted sm:w-40">
              {thumbnail ? (
                <img
                  src={thumbnail}
                  alt={thumbnailAlt ?? title}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover motion-safe:transition-transform motion-safe:duration-500 motion-safe:group-hover:scale-105"
                />
              ) : (
                <div
                  aria-hidden="true"
                  className="flex h-full flex-col items-center justify-center gap-1 bg-gradient-to-br from-slate-100 via-white to-[#C0D444]/20"
                >
                  <img
                    src="/eagle-logo.png"
                    alt=""
                    className="h-10 w-14 object-contain sm:h-12 sm:w-16"
                  />
                  <span className="text-lg font-extrabold tracking-tight sm:text-xl">
                    <span className="text-[#A4BA35]">EA</span>
                    <span className="text-[#1E4A89]">GLE</span>
                  </span>
                </div>
              )}
            </div>
            <div className="min-w-0 text-left">
              <h2 className="text-lg leading-snug font-semibold tracking-tight transition-colors group-hover:text-[#1E4A89] sm:text-xl">
                {title}
              </h2>

              <span className="mt-3 inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                <CalendarDays className="h-3.5 w-3.5 shrink-0" />
                <time dateTime={date}>{prettyDate}</time>
              </span>
            </div>
          </div>

          <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
            <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
              <User2 className="h-3.5 w-3.5 shrink-0" />
              {author}
            </span>
            {tags && tags.length > 0 && (
              <div className="flex flex-wrap gap-1.5">
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
          </div>

          {/* Footer */}
          <div className="mt-auto pt-4">
            <Separator className="mb-4" />
            <div className="flex items-center justify-between text-sm font-medium text-[#1E4A89]">
              Read More
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
