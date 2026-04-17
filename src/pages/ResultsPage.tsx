import { useState, type ReactNode } from "react";
import { PageHeader } from "@/components/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  BarChart3,
  Database,
  ExternalLink,
  FileText,
  Wrench,
} from "lucide-react";

type Publication = {
  citationKey: string;
  title: string;
  authors: string;
  venue: string;
  year: string;
  type: string;
  url: string;
  citation: string;
  bibtex: string;
};

const publications: Publication[] = [
  {
    citationKey: "EMMSAD26-LLM-QA",
    title:
      "Uncovering LLM's Capabilities in Model-based Question Answering for UML Class Diagrams",
    authors:
      "Manuel Mischak, Charlotte Verbruggen, Philip Langer, Dominik Bork",
    venue: "EMMSAD",
    year: "2026",
    type: "Conference paper",
    url: "https://model-engineering.info/publications/papers/EMMSAD26-LLM-QA-CR-Web.pdf",
    citation:
      "Mischak, M., Verbruggen, C., Langer, P., & Bork, D. (2026). Uncovering LLM's capabilities in model-based question answering for UML class diagrams. In EMMSAD 2026.",
    bibtex: `@inproceedings{EMMSAD26-LLM-QA,
  author = {Manuel Mischak and Charlotte Verbruggen and Philip Langer and Dominik Bork},
  booktitle = {EMMSAD 2026},
  title = {Uncovering LLM's Capabilities in Model-based Question Answering for UML Class Diagrams},
  url = {https://model-engineering.info/publications/papers/EMMSAD26-LLM-QA-CR-Web.pdf}
}`,
  },
];

export default function ResultsPage() {
  const [openCitationKey, setOpenCitationKey] = useState<string | null>(null);

  return (
    <div className="container mx-auto px-4 py-8 text-left">
      <PageHeader
        icon={<BarChart3 className="h-8 w-8 text-blue-600" />}
        title="Results"
        description="Publications, datasets, and tools from the EAGLE project."
      />

      <div className="mx-auto mt-10 max-w-5xl space-y-12">
        <section className="space-y-5">
          <div className="space-y-2">
            <h2 className="flex items-center gap-2 text-2xl font-semibold tracking-tight md:text-[1.7rem]">
              <FileText className="h-5 w-5 text-primary" />
              Publications
            </h2>
            <p className="text-sm text-muted-foreground">
              Available publications are listed below with direct PDF access and
              citation details.
            </p>
          </div>

          <div className="grid gap-5">
            {publications.map((publication) => (
              <PublicationCard
                key={publication.citationKey}
                publication={publication}
                isCitationOpen={openCitationKey === publication.citationKey}
                onToggleCitation={() =>
                  setOpenCitationKey((current) =>
                    current === publication.citationKey
                      ? null
                      : publication.citationKey,
                  )
                }
              />
            ))}
          </div>
        </section>

        <section className="space-y-5">
          <Separator />
          <div className="space-y-2 pt-2">
            <h2 className="text-2xl font-semibold tracking-tight md:text-[1.7rem]">
              Upcoming Results
            </h2>
            <p className="text-sm text-muted-foreground">
              Additional result categories are in preparation and will appear
              here once released.
            </p>
          </div>

          <UpcomingRow
            icon={<Database className="h-5 w-5 text-primary" />}
            title="Datasets"
            text="Planned: Model datasets, benchmarks, and evaluation datasets."
          />
          <UpcomingRow
            icon={<Wrench className="h-5 w-5 text-primary" />}
            title="Tools"
            text="Planned: EAGLE tools, demos, utilities, and reference implementations."
          />
        </section>
      </div>
    </div>
  );
}

function PublicationCard({
  publication,
  isCitationOpen,
  onToggleCitation,
}: {
  publication: Publication;
  isCitationOpen: boolean;
  onToggleCitation: () => void;
}) {
  const [format, setFormat] = useState<"citation" | "bibtex">("citation");
  const [copyStatus, setCopyStatus] = useState<string | null>(null);

  const copyToClipboard = async (value: string, label: string) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopyStatus(`${label} copied.`);
    } catch {
      setCopyStatus("Copy failed.");
    }

    window.setTimeout(() => setCopyStatus(null), 1800);
  };

  return (
    <Card className="rounded-2xl border border-border/80 bg-background py-5 shadow-sm">
      <CardContent className="space-y-3">
        <div className="space-y-2">
          <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
            <Badge
              variant="outline"
              className="rounded-full border-border/70 bg-muted/20 px-2.5 py-0 font-medium text-[11px] text-muted-foreground"
            >
              {publication.type}
            </Badge>
            <span>
              {publication.venue} {publication.year}
            </span>
          </div>
          <h3 className="text-xl leading-snug font-semibold text-foreground">
            {publication.title}
          </h3>
          <p className="text-sm leading-relaxed text-muted-foreground/90">
            {publication.authors}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2 pt-1">
          <Button asChild size="sm">
            <a href={publication.url} target="_blank" rel="noreferrer">
              Open PDF
              <ExternalLink className="h-4 w-4" />
            </a>
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={onToggleCitation}
            aria-expanded={isCitationOpen}
          >
            Cite
          </Button>
        </div>

        {isCitationOpen && (
          <div className="mt-1 space-y-3 rounded-lg bg-muted/25 p-3">
            <div className="inline-flex rounded-md bg-background p-1 ring-1 ring-border/70">
              <Button
                size="sm"
                variant="ghost"
                className={cn(
                  "h-7 rounded-sm px-2.5 text-xs",
                  format === "citation" && "bg-muted text-foreground",
                )}
                onClick={() => setFormat("citation")}
              >
                Citation
              </Button>
              <Button
                size="sm"
                variant="ghost"
                className={cn(
                  "h-7 rounded-sm px-2.5 text-xs",
                  format === "bibtex" && "bg-muted text-foreground",
                )}
                onClick={() => setFormat("bibtex")}
              >
                BibTeX
              </Button>
            </div>

            {format === "citation" ? (
              <p className="text-sm leading-relaxed text-muted-foreground">
                {publication.citation}
              </p>
            ) : (
              <pre className="overflow-x-auto rounded-md bg-background p-3 text-xs leading-relaxed whitespace-pre-wrap ring-1 ring-border/60">
                {publication.bibtex}
              </pre>
            )}

            <div className="flex flex-wrap gap-2">
              <Button
                size="sm"
                variant="ghost"
                className="h-7 px-2.5 text-xs text-muted-foreground hover:text-foreground"
                onClick={() => copyToClipboard(publication.citation, "Citation")}
              >
                Copy citation
              </Button>
              <Button
                size="sm"
                variant="ghost"
                className="h-7 px-2.5 text-xs text-muted-foreground hover:text-foreground"
                onClick={() => copyToClipboard(publication.bibtex, "BibTeX")}
              >
                Copy BibTeX
              </Button>
            </div>

            {copyStatus && (
              <p className="text-xs text-muted-foreground" role="status">
                {copyStatus}
              </p>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
}

function UpcomingRow({
  icon,
  title,
  text,
}: {
  icon: ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="flex items-start gap-3 rounded-lg border border-dashed border-border/70 bg-muted/10 px-4 py-3">
      <div className="mt-0.5 rounded-md bg-primary/10 p-1.5">{icon}</div>
      <div className="min-w-0 flex-1 space-y-1">
        <div className="flex flex-wrap items-center gap-2">
          <h3 className="text-sm font-semibold">{title}</h3>
          <Badge variant="secondary" className="rounded-full px-2 py-0 text-[11px]">
            In preparation
          </Badge>
        </div>
        <p className="text-sm text-muted-foreground">{text}</p>
      </div>
    </div>
  );
}
