import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  jsonLd?: Record<string, unknown>;
}

function setMetaTag(attr: "name" | "property", key: string, content: string) {
  let element = document.querySelector(`meta[${attr}="${key}"]`);
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attr, key);
    document.head.appendChild(element);
  }
  element.setAttribute("content", content);
}

function setJsonLd(jsonLd: Record<string, unknown> | undefined) {
  const existing = document.getElementById("page-jsonld");
  if (existing) {
    existing.remove();
  }
  if (!jsonLd) return;

  const script = document.createElement("script");
  script.type = "application/ld+json";
  script.id = "page-jsonld";
  script.textContent = JSON.stringify(jsonLd);
  document.head.appendChild(script);
}

export function useSEO({ title, description, jsonLd }: SEOProps) {
  useEffect(() => {
    document.title = title;
    setMetaTag("name", "description", description);
    setMetaTag("property", "og:title", title);
    setMetaTag("property", "og:description", description);
    setJsonLd(jsonLd);
  }, [title, description, jsonLd]);
}
