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
      <div className="mb-3 flex items-center gap-3">
        <div>{icon}</div>
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
          {title}
        </h1>
      </div>
      {description && (
        <p className="mb-4 max-w-2xl text-left text-base text-muted-foreground">
          {description}
        </p>
      )}
      <Separator />
    </div>
  );
}
