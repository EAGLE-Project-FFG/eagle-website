import { PageHeader } from "@/components/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { BarChart3, FileText, Database, Wrench } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function ResultsPage() {
  return (
    <div className="container mx-auto px-4 py-8 text-left">
      <PageHeader
        icon={<BarChart3 className="h-8 w-8 text-blue-600" />}
        title="Results"
        description="Outcomes, publications, datasets, and tools from the EAGLE project."
      />

      <section className="mx-auto mt-6 max-w-5xl">
        <Card className="overflow-hidden rounded-2xl border bg-white/90 shadow-lg">
          {/* Accent header */}
          <CardContent className="">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="text-xl font-semibold tracking-tight">
                  Results are on the way!
                </h2>
                <p className="mt-1 max-w-3xl text-sm text-muted-foreground">
                  We’re preparing publications, datasets, and open-source tools.
                  This page will list releases as they become available.
                </p>
              </div>
              <Badge variant="secondary" className="rounded-full">
                Coming soon
              </Badge>
            </div>

            <Separator className="my-6" />

            {/* Preview tiles */}
            <div className="grid gap-4 sm:grid-cols-3">
              <PlaceholderTile
                icon={<FileText className="h-5 w-5 text-primary" />}
                title="Publications"
                text="Preprints, conference papers, and reports."
              />
              <PlaceholderTile
                icon={<Database className="h-5 w-5 text-primary" />}
                title="Datasets"
                text="Curated EAKG samples and benchmarks."
              />
              <PlaceholderTile
                icon={<Wrench className="h-5 w-5 text-primary" />}
                title="Tools"
                text="Utilities, demos, and reference code."
              />
            </div>

            {/* Subtle empty state */}
            <div className="mt-6 rounded-xl border border-dashed bg-muted/20 p-4 text-sm text-muted-foreground">
              Nothing to show yet. Check back soon for the first release.
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}

function PlaceholderTile({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <Card className="rounded-xl border bg-white/70 shadow-none">
      <CardContent className="">
        <div className="flex items-center gap-2">
          <div className="rounded-lg bg-primary/10 p-1.5">{icon}</div>
          <h3 className="text-sm font-medium">{title}</h3>
        </div>
        <p className="mt-2 text-xs text-muted-foreground">{text}</p>
      </CardContent>
    </Card>
  );
}
