import { Card, CardContent } from "@/components/ui/card";

interface Partner {
  name: string;
  logoUrl: string;
  description: string;
  website: string;
}

const partners: Partner[] = [
  {
    name: "Dirigenta",
    logoUrl: "/dirigenta-logo.png",
    description:
      "Partner One is a leading provider of innovative solutions in the industry.",
    website: "https://partnerone.example.com",
  },
  {
    name: "TU Wien",
    logoUrl: "/tu-wien-logo.svg",
    description:
      "Partner Two collaborates internationally on research and development.",
    website: "https://partnertwo.example.com",
  },
];

export default function PartnersPage() {
  return (
    <div className="container mx-auto mt-4 px-4 py-8">
      <h1 className="mb-6 text-2xl font-semibold">Project Partners</h1>
      <div className="grid gap-6 md:grid-cols-2">
        {partners.map((partner) => (
          <Card
            key={partner.name}
            className="flex flex-col items-center p-6 text-center"
          >
            <img
              src={partner.logoUrl}
              alt={`${partner.name} logo`}
              className="mb-4 max-h-40 max-w-40 object-contain"
            />
            <CardContent>
              <h2 className="mb-2 text-lg font-bold">{partner.name}</h2>
              <p className="mb-3 text-muted-foreground">
                {partner.description}
              </p>
              <a
                href={partner.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline"
              >
                Visit Website
              </a>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
