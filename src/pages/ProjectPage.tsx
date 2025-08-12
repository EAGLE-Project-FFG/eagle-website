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
            <Card className="rounded-2xl border bg-white/90 shadow-lg px-1 py-1">
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
            <section className="mx-auto mt-6 max-w-6xl">
                <Card className="rounded-2xl border bg-white/90 shadow-lg px-1 py-1">
                    <CardContent className="p-6 md:p-8">
                        <SectionHeading icon={<Network className="h-5 w-5" />} title="Abstract" />
                        <Separator className="my-4" />

                        {/* Bold intro */}
                        <p className="text-base font-medium">
                            EAGLE advances Enterprise Architecture Management (EAM) by combining Knowledge Graphs (KGs) and AI.
                        </p>
                        <p className="text-base text-muted-foreground mt-2">
                            The framework helps organizations model, manage, and query architecture assets with semantic consistency and adaptability.
                        </p>

                        {/* Numbered list */}
                        <div className="mt-6">
                            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                                Our contributions:
                            </h3>
                            <ol className="space-y-5">
                                <li className="flex items-center gap-3">
                                    <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
                                        1
                                    </span>
                                    <div>
                                        <p className="font-medium">Flexible EAKG creation</p>
                                        <p className="text-sm text-muted-foreground">
                                            A unified, extensible schema that integrates heterogeneous data sources.
                                        </p>
                                    </div>
                                </li>

                                <li className="flex items-center gap-3">
                                    <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
                                        2
                                    </span>
                                    <div>
                                        <p className="font-medium">Advanced predictive querying</p>
                                        <p className="text-sm text-muted-foreground">
                                            Rich, forward-looking insights for strategic EA analysis.
                                        </p>
                                    </div>
                                </li>

                                <li className="flex items-center gap-3">
                                    <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
                                        3
                                    </span>
                                    <div>
                                        <p className="font-medium">Conversational interface</p>
                                        <p className="text-sm text-muted-foreground">
                                            Natural-language access for all stakeholders, without query language knowledge.
                                        </p>
                                    </div>
                                </li>
                            </ol>
                        </div>


                        {/* Chips */}
                        <div className="mt-6 flex flex-wrap gap-2">
                            <Badge variant="secondary" className="rounded-full">
                                <Puzzle className="mr-1.5 h-3.5 w-3.5" /> Unified EAKG
                            </Badge>
                            <Badge variant="secondary" className="rounded-full">
                                <LineChart className="mr-1.5 h-3.5 w-3.5" /> Predictive Queries
                            </Badge>
                            <Badge variant="secondary" className="rounded-full">
                                <MessageSquare className="mr-1.5 h-3.5 w-3.5" /> Conversational Access
                            </Badge>
                        </div>
                    </CardContent>
                </Card>
            </section>

            {/* PROBLEM */}
            <section className="mx-auto mt-10 max-w-6xl">
                <Card className="rounded-2xl border bg-white/90 shadow-lg px-1 py-1">
                    <CardContent className="p-6 md:p-8">
                        <SectionHeading
                            icon={<BookAlert className="h-5 w-5" />}
                            title="Problem"
                        />
                        <Separator className="my-4" />

                        {/* Text + Image */}
                        <div className="grid gap-6 md:grid-cols-[55%_45%]">
                            {/* Text column */}
                            <div className="space-y-4">
                                <p className="text-base">
                                    <span className="font-medium">Enterprise Architecture Management (EAM)</span> is increasingly vital for aligning complex IT
                                    landscapes with evolving business strategies. While established frameworks such as
                                    <span className="font-medium"> ArchiMate</span> and
                                    <span className="font-medium"> TOGAF</span> provide valuable structure, they remain largely manual, static, and disconnected
                                    from many critical data sources. As organizations face
                                    <span className="font-medium"> accelerating digital transformation</span>,
                                    rising demands for <span className="font-medium">real-time insights</span>, and an ever-expanding variety of
                                    <span className="font-medium"> EA-relevant information</span>, these traditional approaches struggle to deliver on the full potential of EAM.
                                    This results in a persistent gap between the <span className="font-medium">theoretical benefits of EA</span> and its
                                    <span className="font-medium"> practical impact</span>, a gap EAGLE aims to close.
                                </p>

                                <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                                    Challenges:
                                </h3>
                                <div className="grid gap-3">
                                    <div className="rounded-xl bg-muted/30 p-3">
                                        <div className="mb-1 flex items-center gap-2 text-sm font-medium">
                                            <Database className="h-4 w-4 text-primary" />
                                            Integration of heterogeneous EA data
                                        </div>
                                        <p className="text-sm text-muted-foreground">
                                            Unify models, documents, spreadsheets, tool outputs, and other data sources in a
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
