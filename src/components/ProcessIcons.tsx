import { JSX } from "react";

const iconMap: Record<string, string> = {
  "step-analyse": "/assets/analyze.svg",
  "step-strategie": "/assets/strategy.svg",
  "step-developpement": "/assets/dev.svg",
  "step-automatisation": "/assets/automatosation.svg",
  "step-optimisation": "/assets/optimization.svg",
};

export function getProcessIcon(id: string): JSX.Element | null {
  const src = iconMap[id];
  if (!src) return null;
  return <img src={src} alt="" width={60} height={60} />;
}
