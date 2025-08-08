import { Mail, User, Building } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <PageHeader
        icon={<Mail className="w-8 h-8 text-blue-600" />}
        title="Contact"
        description="Get in touch with the EAGLE project team."
      />

      <div className="mt-8 max-w-lg mx-auto">
        <Card className="shadow-sm">
          <CardContent className="p-6 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <User className="h-5 w-5 text-primary" />
              <div>
                <p className="text-lg font-semibold">Dr. Dominik Bork</p>
                <p className="text-sm text-left text-muted-foreground">
                  Project Coordinator
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-primary" />
              <a
                href="mailto:dominik.bork@tuwien.ac.at"
                className="text-sm text-primary hover:underline"
              >
                dominik.bork@tuwien.ac.at
              </a>
            </div>

            <div className="flex items-center gap-3">
              <Building className="h-5 w-5 text-primary" />
              <p className="text-sm text-muted-foreground">
                Business Informatics Group, TU Wien
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
