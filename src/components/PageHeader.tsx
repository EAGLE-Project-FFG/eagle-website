import { Separator } from "@/components/ui/separator";
import type { ReactNode } from "react";

interface PageHeaderProps {
  icon: ReactNode;
  title: string;
  description?: string;
}

export function PageHeader({ icon, title, description }: PageHeaderProps) {
  return (
    <div className="mx-auto mt-14 mb-6">
      <div className="flex items-center gap-3 mb-3">
        <div>
          {icon}
        </div>
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
          {title}
        </h1>
      </div>
      {description && (
        <p className="text-base text-muted-foreground text-left max-w-2xl mb-4">
          {description}
        </p>
      )}
      <Separator />
    </div>
  );
}
