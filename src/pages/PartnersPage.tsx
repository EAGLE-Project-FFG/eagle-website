import { Card, CardContent } from "@/components/ui/card";

interface Partner {
    name: string;
    logoUrl: string;
    description: string;
    website: string;
}

const partners: Partner[] = [
    {
        name: "Partner One",
        logoUrl: "/logos/partner1.png",
        description: "Partner One is a leading provider of innovative solutions in the industry.",
        website: "https://partnerone.example.com",
    },
    {
        name: "Partner Two",
        logoUrl: "/logos/partner2.png",
        description: "Partner Two collaborates internationally on research and development.",
        website: "https://partnertwo.example.com",
    },
];

export default function PartnersPage() {
    return (
        <div className="container mx-auto px-4 py-8 mt-4">
            <h1 className="text-2xl font-semibold mb-6">Project Partners</h1>
            <div className="grid gap-6 md:grid-cols-2">
                {partners.map((partner) => (
                    <Card key={partner.name} className="flex flex-col items-center text-center p-6">
                        <img
                            src={partner.logoUrl}
                            alt={`${partner.name} logo`}
                            className="h-20 w-20 object-contain mb-4"
                        />
                        <CardContent>
                            <h2 className="text-lg font-bold mb-2">{partner.name}</h2>
                            <p className="mb-3 text-muted-foreground">{partner.description}</p>
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
