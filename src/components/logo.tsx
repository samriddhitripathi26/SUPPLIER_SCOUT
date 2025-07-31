import { UtensilsCrossed } from "lucide-react";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <UtensilsCrossed className="h-7 w-7 text-primary" />
      <span className="text-xl font-bold tracking-tight text-white font-headline">Supplier Scout</span>
    </div>
  );
}
