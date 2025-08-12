import { Card, CardContent } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";
import { FileText } from "lucide-react";

export default function ImprintPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <PageHeader
        icon={<FileText className="h-8 w-8 text-blue-600" />}
        title="Imprint"
        description="Legal information and contact details for the EAGLE project."
      />

      <section className="mx-auto mt-6 max-w-4xl">
        <Card className="rounded-2xl border bg-white/90 shadow-lg">
          <CardContent className="space-y-6 text-sm leading-relaxed text-gray-700 text-left">
            
            {/* Media Owner */}
            <section>
              <h2 className="text-lg font-semibold mb-1">
                Media owner and publisher
              </h2>
              <p>
                Technische Universität Wien <br />
                Institut für Information Systems Engineering <br />
                Favoritenstraße 9-11 <br />
                1040 Wien, Austria
              </p>
            </section>

            {/* Contact */}
            <section>
              <h2 className="text-lg font-semibold mb-1">Contact</h2>
              <p>
                Univ. Prof. Dr. Gerti Kappel <br />
                Email:{" "}
                <a
                  href="mailto:gertrude.kappel@tuwien.ac.at"
                  className="text-primary hover:underline"
                >
                  gertrude.kappel@tuwien.ac.at
                </a>
                <br />
                Tel: +43-1-58801-18870
              </p>
            </section>

            {/* Project Lead */}
            <section>
              <h2 className="text-lg font-semibold mb-1">Project Lead</h2>
              <p>
                Associate Prof. Dr. Dominik Bork <br />
                Erzherzog-Johann-Platz 1 <br />
                1040 Wien, Austria <br />
                Email:{" "}
                <a
                  href="mailto:dominik.bork@tuwien.ac.at"
                  className="text-primary hover:underline"
                >
                  dominik.bork@tuwien.ac.at
                </a>
                <br />
                Tel: +43-1-58801-194308
              </p>
            </section>

            {/* Company Details */}
            <section>
              <h2 className="text-lg font-semibold mb-1">Company details</h2>
              <p>
                Legal form: Universität <br />
                Court of registration: Handelsgericht Wien
              </p>
            </section>

            {/* Purpose */}
            <section>
              <h2 className="text-lg font-semibold mb-1">Purpose of the website</h2>
              <p>
                Information about the EAGLE research project and its activities.
              </p>
            </section>

            {/* Responsible for Content */}
            <section>
              <h2 className="text-lg font-semibold mb-1">Responsible for content</h2>
              <p>
                According to § 5 ECG and § 24 MedienG: <br />
                Associate Prof. Dr. Dominik Bork <br />
                Technische Universität Wien <br />
                Erzherzog-Johann-Platz 1, 1040 Wien
              </p>
            </section>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
