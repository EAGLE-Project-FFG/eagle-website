import { Card, CardContent } from "@/components/ui/card";
import { Construction } from "lucide-react";

export default function HomePage() {
  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
          EAGLE – Enterprise Architecture Knowledge Graph for Learning and Exploration
        </h1>

        {/* Under construction card */}
        <div className="mt-15 flex justify-center">
          <Card className="max-w-md border-yellow-300 bg-yellow-50 shadow-md">
            <CardContent className="flex items-center gap-3 p-4">
              <Construction className="w-6 h-6 text-yellow-600" />
              <div className="text-left">
                <p className="font-medium text-yellow-800">
                  Website under construction...
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
