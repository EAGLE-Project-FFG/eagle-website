import { Mail, User, Building } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <PageHeader
        icon={<Mail className="h-8 w-8 text-blue-600" />}
        title="Contact"
        description="Get in touch with the EAGLE project team."
      />

      <div className="mx-auto mt-8 max-w-2xl">
        <Card className="shadow-lg">
          <CardContent className="flex flex-col gap-6 p-6 sm:flex-row">
            {/* Profile Image */}
            <div className="flex-shrink-0">
              <img
                src="/bork-dominik.png"
                alt="Associate Prof. Dr. Dominik Bork"
                className="h-32 w-32 rounded-xl border object-cover"
              />
            </div>

            {/* Contact Info */}
            <div className="flex flex-col justify-center gap-4">
              {/* Name & Role */}
              <div className="flex items-center gap-3">
                <User className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-lg font-semibold">
                    Associate Prof. Dr. Dominik Bork
                  </p>
                  <p className="text-left text-sm text-muted-foreground">
                    Project Coordinator
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary" />
                <a
                  href="mailto:dominik.bork@tuwien.ac.at"
                  className="text-sm text-primary hover:underline"
                >
                  dominik.bork@tuwien.ac.at
                </a>
              </div>

              {/* Organization */}
              <div className="flex items-center gap-3">
                <Building className="h-5 w-5 text-primary" />
                <p className="text-sm text-muted-foreground">
                  TU Wien, Business Informatics Group
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
