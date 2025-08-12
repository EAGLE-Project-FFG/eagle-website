import { ExternalLink, Handshake } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PageHeader } from "@/components/PageHeader";

type Partner = {
  name: string;
  logos: string[];
  description: string;
  website: string;
};

const partners: Partner[] = [
  {
    name: "Dirigenta",
    logos: ["/dirigenta-logo.png"],
    description:
      "Dirigenta offers ML-driven analysis and simulation of application migration to the optimal host location in a highly efficient, data-driven way.",
    website: "https://dirigenta.ch/",
  },
  {
    name: "TU Wien - Business Informatics Group",
    logos: ["/tu-wien-logo.svg", "/big-logo.png"],
    description:
      "Based at the Institute of Information Systems Engineering, our research unit focuses on business informatics that integrates theory and methods of information systems and computer science.",
    website: "https://www.big.tuwien.ac.at/index.php",
  },
];

function PartnerCard({ partner }: { partner: Partner }) {
  return (
    <Card className="group relative h-full overflow-hidden rounded-2xl shadow-lg">
      <CardContent className="relative flex h-full flex-col py-2">
        {/* Logos */}
        <div className="mb-4 flex flex-wrap items-center justify-center gap-4">
          {partner.logos.map((src) => (
            <div
              key={`${partner.name}-${src}`}
              className="flex h-20 w-28 items-center justify-center rounded-lg bg-muted/30 p-2 ring-1 ring-black/5"
            >
              <img
                src={src}
                alt={`${partner.name} logo`}
                className="max-h-16 max-w-full object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        <h3 className="text-center text-lg font-semibold">{partner.name}</h3>
        <p className="mt-2 flex-grow text-left text-sm text-muted-foreground">
          {partner.description}
        </p>

        {/* Button at the bottom */}
        <div className="mt-4 flex justify-center">
          <Button asChild variant="secondary" className="group/btn">
            <a href={partner.website} target="_blank" rel="noopener noreferrer">
              Visit Website
              <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover/btn:-translate-y-0.5" />
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

export default function PartnersPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <PageHeader
        icon={<Handshake className="h-8 w-8 text-blue-600" />}
        title="Partners"
        description="Project partners collaborating on EAGLE from industry and academia."
      />

      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
        {partners.map((p) => (
          <PartnerCard key={p.name} partner={p} />
        ))}
      </div>
    </div>
  );
}
