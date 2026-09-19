import { Pill } from "@/components/ui/Pill";
import type { StackByLayer } from "@/content/types/project";

const layerLabels: Record<keyof StackByLayer, string> = {
  frontend: "Frontend",
  backend: "Backend",
  database: "Database",
  infra: "Infrastructure & Deploy",
  auth: "Auth",
  testing: "Testing",
  external: "External Services",
};

const layerOrder = Object.keys(layerLabels) as (keyof StackByLayer)[];

export function StackByLayerSection({ stack }: { stack: StackByLayer }) {
  const layers = layerOrder.filter((layer) => (stack[layer]?.length ?? 0) > 0);

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {layers.map((layer) => (
        <div key={layer}>
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            {layerLabels[layer]}
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {stack[layer]?.map((item) => <Pill key={item}>{item}</Pill>)}
          </div>
        </div>
      ))}
    </div>
  );
}
