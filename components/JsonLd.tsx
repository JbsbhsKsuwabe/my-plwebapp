"use client";

/**
 * JsonLd — injeta structured data (Schema.org) no <head> da página.
 * Ajuda o Google a entender o tipo de conteúdo e exibir rich results.
 */
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
