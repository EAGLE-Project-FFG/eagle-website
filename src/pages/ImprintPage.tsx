import { Card, CardContent } from "@/components/ui/card";

export default function ImprintPage() {
  return (
    <div className="container mx-auto px-4 py-8 mt-14 text-left ">
      <h1 className="text-3xl font-bold mb-6">Imprint (Impressum)</h1>

      <Card className="shadow-md border border-gray-200">
        <CardContent className="space-y-6 text-sm leading-relaxed text-gray-700 pt-6">
          {/* Media Owner */}
          <section>
            <h2 className="text-lg font-semibold mb-1">Media owner and publisher (Medieninhaber &amp; Herausgeber)</h2>
            <p>
              EAGLE Project <br />
              [Full legal entity name, e.g., "Institute for XYZ Research GmbH"] <br />
              [Street + house number] <br />
              [Postal code + City] <br />
              Austria
            </p>
          </section>

          {/* Contact */}
          <section>
            <h2 className="text-lg font-semibold mb-1">Contact</h2>
            <p>
              Email: <a href="mailto:email@example.com" className="text-primary hover:underline">email@example.com</a> <br />
              Telephone: [+43 XXX XXX XXXX]
            </p>
          </section>

          {/* Company Details */}
          <section>
            <h2 className="text-lg font-semibold mb-1">Company details</h2>
            <p>
              Legal form: [e.g., GmbH, Verein] <br />
              Company registration number: [e.g., FN XXXXXX] <br />
              Court of registration: [e.g., Handelsgericht Wien] <br />
              VAT number: [e.g., ATU XXXXXXXX]
            </p>
          </section>

          {/* Purpose */}
          <section>
            <h2 className="text-lg font-semibold mb-1">Purpose of the website</h2>
            <p>
              Information about the EAGLE research project and its activities.
            </p>
          </section>

          {/* Responsible Person */}
          <section>
            <h2 className="text-lg font-semibold mb-1">Responsible for content</h2>
            <p>
              According to § 5 ECG and § 24 MedienG: <br />
              [Full name, position] <br />
              [Address, if different from above]
            </p>
          </section>

          {/* Supervisory Authority */}
          <section>
            <h2 className="text-lg font-semibold mb-1">Supervisory authority</h2>
            <p>
              [Only if applicable for regulated professions — e.g., Ministry, professional chamber]
            </p>
          </section>
        </CardContent>
      </Card>
    </div>
  );
}
