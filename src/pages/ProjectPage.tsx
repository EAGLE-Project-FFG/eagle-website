import { PageHeader } from "@/components/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import {
  Lightbulb,
  Network,
  Bot,
  MessageSquare,
  Puzzle,
  Database,
  LineChart,
  Users,
  BookAlert,
  Route,
} from "lucide-react";

function SectionHeading({
  icon,
  title,
}: {
  icon: React.ReactNode;
  title: string;
}) {
  return (
    <div className="flex items-center gap-3">
      <div className="rounded-xl bg-primary/10 p-2 text-primary">{icon}</div>
      <div>
        <h2 className="text-xl font-semibold">{title}</h2>
      </div>
    </div>
  );
}

export function MethodologySection() {
  return (
    <section className="mx-auto mt-10 max-w-6xl">
      <Card className="rounded-2xl border bg-white/90 shadow-sm ring-1 ring-black/5 px-2 py-2">
        <CardContent className="p-6 md:p-8">
          <SectionHeading
            icon={<Route className="h-5 w-5" />}
            title="Methodology"
          />
          <Separator className="my-4" />
          <p className="text-base mb-6">
            EAGLE’s methodology is structured around three core research
            contributions:{" "}
            <span className="font-medium">
              (1) flexible EAKG creation,
            </span>{" "}
            <span className="font-medium">
              (2) predictive and analytical models,
            </span>{" "}
            and{" "}
            <span className="font-medium">
              (3) a dialogue-oriented query interface.
            </span>{" "}
            Together, these components enable organizations to model, manage,
            and analyze enterprise architectures with semantic consistency and
            adaptability.
          </p>

          <div className="grid gap-6 md:grid-cols-3">
            {/* Contribution 1 */}
            <Card className="rounded-xl border bg-muted/20 shadow-none px-1 py-1">
              <CardContent className="p-5 flex flex-col h-full">
                <div className="mb-4 flex items-center gap-2">
                  <Database className="h-5 w-5 text-primary" />
                  <h3 className="font-semibold text-lg">
                    1. EAKG Creation
                  </h3>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  Build a robust, extensible Enterprise Architecture Knowledge
                  Graph that unifies heterogeneous sources through LLM-assisted
                  extraction, schema mapping, and expert validation.
                </p>
                <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1 mb-4">
                  <li>Heterogeneous data integration</li>
                  <li>Unified schema mapping & extension</li>
                  <li>Entity disambiguation for interoperability</li>
                </ul>
              </CardContent>
            </Card>

            {/* Contribution 2 */}
            <Card className="rounded-xl border bg-muted/20 shadow-none px-1 py-1">
              <CardContent className="p-5 flex flex-col h-full">
                <div className="mb-4 flex items-center gap-2">
                  <LineChart className="h-5 w-5 text-primary" />
                  <h3 className="font-semibold text-lg">
                    2. Predictive Models
                  </h3>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  Enable causal inference, forecasting, and scenario simulation
                  over the EAKG to support informed decision-making for EA
                  transformations.
                </p>
                <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1 mb-4">
                  <li>Cross-layer dependency analysis</li>
                  <li>Scenario simulation (e.g., cloud migration)</li>
                  <li>Dynamic KPI & ESG monitoring</li>
                </ul>
              </CardContent>
            </Card>

            {/* Contribution 3 */}
            <Card className="rounded-xl border bg-muted/20 shadow-none px-1 py-1">
              <CardContent className="p-5 flex flex-col h-full">
                <div className="mb-4 flex items-center gap-2">
                  <MessageSquare className="h-5 w-5 text-primary" />
                  <h3 className="font-semibold text-lg">
                    3. Dialogue Interface
                  </h3>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  Provide a natural-language interface to query the EAKG without
                  requiring technical knowledge of graph query languages or EA
                  schemas.
                </p>
                <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1 mb-4">
                  <li>NL to SPARQL/Cypher translation</li>
                  <li>Context-aware explanations</li>
                  <li>Accessible for all stakeholders</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}

export default function ProjectPage() {
  return (
    <div className="container mx-auto px-4 py-8 text-left">
      <PageHeader
        icon={<Lightbulb className="h-8 w-8 text-blue-600" />}
        title="Project"
        description="Overview of the EAGLE project and its objectives."
      />

      {/* INTRO / ABSTRACT */}
      <section className="mx-auto mt-6 max-w-5xl">
        <Card className="rounded-2xl border bg-white/90 shadow-sm ring-1 ring-black/5 px-2 py-2">
          <CardContent className="p-6 md:p-8">
            <SectionHeading
              icon={<Network className="h-5 w-5" />}
              title="Abstract"
            />
            <Separator className="my-4" />
            <p className="text-base">
              EAGLE advances Enterprise Architecture Management (EAM) by
              combining Knowledge Graphs (KGs) and AI. We deliver:{" "}
              <span className="font-medium">
                (1) a flexible Enterprise Architecture Knowledge Graph (EAKG)
              </span>{" "}
              that unifies heterogeneous sources,{" "}
              <span className="font-medium">
                (2) advanced querying for predictive EA analysis
              </span>
              , and{" "}
              <span className="font-medium">
                (3) a conversational interface
              </span>{" "}
              for natural-language questions over the EAKG. The framework helps
              organizations model, manage, and query architecture assets with
              semantic consistency and adaptability.
            </p>

            {/* Three contribution chips */}
            <div className="mt-5 flex flex-wrap gap-2">
              <Badge variant="secondary" className="rounded-full">
                <Puzzle className="mr-1.5 h-3.5 w-3.5" /> Unified EAKG
              </Badge>
              <Badge variant="secondary" className="rounded-full">
                <LineChart className="mr-1.5 h-3.5 w-3.5" /> Predictive Queries
              </Badge>
              <Badge variant="secondary" className="rounded-full">
                <MessageSquare className="mr-1.5 h-3.5 w-3.5" /> Conversational
                Access
              </Badge>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* PROBLEM */}
      <section className="mx-auto mt-10 max-w-6xl">
        <Card className="rounded-2xl border bg-white/90 shadow-sm ring-1 ring-black/5 px-2 py-2">
          <CardContent className="p-6 md:p-8">
            <SectionHeading
              icon={<BookAlert className="h-5 w-5" />}
              title="Problem"
            />
            <Separator className="my-4" />

            {/* Text + Image */}
            <div className="grid gap-6 md:grid-cols-2">
              {/* Text column */}
              <div className="space-y-4">
                <p className="text-base">
                  EAM is essential for aligning IT with business in complex,
                  fast-moving environments. Frameworks such as Archimate and
                  TOGAF offer structure but remain manual, high-level, and
                  detached from many relevant data sources—leaving a gap between
                  EA’s theoretical value and practical impact.
                </p>

                <div className="grid gap-3">
                  <div className="rounded-xl bg-muted/30 p-3">
                    <div className="mb-1 flex items-center gap-2 text-sm font-medium">
                      <Database className="h-4 w-4 text-primary" />
                      Integration of heterogeneous EA data
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Unify models, portfolios, documents, and tool outputs in a
                      coherent, semantic schema.
                    </p>
                  </div>

                  <div className="rounded-xl bg-muted/30 p-3">
                    <div className="mb-1 flex items-center gap-2 text-sm font-medium">
                      <Bot className="h-4 w-4 text-primary" />
                      Dynamic schema adaptation
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Classify and integrate new knowledge continuously with
                      integrity-preserving updates.
                    </p>
                  </div>

                  <div className="rounded-xl bg-muted/30 p-3">
                    <div className="mb-1 flex items-center gap-2 text-sm font-medium">
                      <LineChart className="h-4 w-4 text-primary" />
                      Causal and predictive analysis
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Simulate scenarios and automate what-if analyses to reveal risks, impacts, and
                      better future states.
                    </p>
                  </div>

                  <div className="rounded-xl bg-muted/30 p-3">
                    <div className="mb-1 flex items-center gap-2 text-sm font-medium">
                      <Users className="h-4 w-4 text-primary" />
                      Inclusive access
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Natural-language querying to make EA insights accessible
                      across stakeholders.
                    </p>
                  </div>
                </div>
              </div>

              {/* Image column */}
              <figure className="flex flex-col">
                <div className="overflow-hidden rounded-xl border bg-white shadow-md">
                  <img
                    src="/kg-construction.png"
                    alt="EAKG construction: extract document KGs from heterogeneous sources, map to an extensible unified schema with LLM assistance and human review."
                    className="h-full w-full object-contain"
                    loading="lazy"
                  />
                </div>
                <figcaption className="mt-2 text-xs text-muted-foreground">
                  Figure: From heterogeneous sources to an extensible Enterprise
                  Architecture Knowledge Graph with LLM-assisted mapping and
                  human validation.
                </figcaption>
              </figure>
            </div>
          </CardContent>
        </Card>
      </section>

      <MethodologySection />
    </div>
  );
}
