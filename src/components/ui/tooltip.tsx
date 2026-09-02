import { ReactNode } from "react";

// Implementação simples sem dependência externa - apenas repassa os filhos.
// Suficiente pois o site não usa tooltips visíveis, só o Provider é importado.
export function TooltipProvider({ children }: { children: ReactNode }) {
  return <>{children}</>;
}

export function Tooltip({ children }: { children: ReactNode }) {
  return <>{children}</>;
}

export function TooltipTrigger({ children }: { children: ReactNode }) {
  return <>{children}</>;
}

export function TooltipContent({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
