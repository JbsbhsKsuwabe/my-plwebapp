#!/usr/bin/env node
/**
 * fix-cloudflare-routes.mjs
 *
 * Pós-build: verifica e corrige o bug do @cloudflare/next-on-pages que às vezes
 * mapeia a rota "/" para o asset favicon.ico quando o favicon está em app/.
 *
 * Root cause: o @cloudflare/next-on-pages interpreta o favicon.ico gerado
 * pelo Next.js App Router como um asset estático e sobrescreve o mapeamento
 * da rota "/" com o do favicon.
 *
 * Fix: mover o favicon.ico de app/ para public/ resolve o problema na raiz.
 * Este script serve como salvaguarda adicional caso o bug reapareça.
 */

import { readFileSync, writeFileSync } from "fs";
import { join } from "path";

const workerPath = join(
  process.cwd(),
  ".vercel/output/static/_worker.js/index.js"
);

try {
  const content = readFileSync(workerPath, "utf-8");

  // Verifica se o mapeamento de "/" está correto (aponta para a função index)
  const hasCorrectMapping =
    content.includes('"/":{"type":"function"') ||
    content.includes('"/\":{type:"function"') ||
    content.includes('"/\":{type:\'function\'') ||
    /"\/":\{type:"function",entrypoint:"__next-on-pages-dist__\/functions\/index\.func\.js"\}/.test(content) ||
    /"\/":\{[^}]*entrypoint:[^}]*index\.func\.js[^}]*\}/.test(content);

  // Verifica se há o bug (favicon mapeado como rota raiz)
  const hasFaviconBug =
    content.includes('"/":{"type":"override","path":"/favicon.ico"') ||
    content.includes('"/\":{type:"override",path:"/favicon.ico"');

  if (hasFaviconBug) {
    // Corrige o mapeamento
    const fixed = content
      .replace(
        /"\/":\{"type":"override","path":"\/favicon\.ico","headers":\{"content-type":"image\/x-icon"\}\}/g,
        '"/":{"type":"function","entrypoint":"__next-on-pages-dist__/functions/index.func.js"}'
      )
      .replace(
        /"\/":\{type:"override",path:"\/favicon\.ico",headers:\{"content-type":"image\/x-icon"\}\}/g,
        '"/\":{type:"function",entrypoint:"__next-on-pages-dist__/functions/index.func.js"}'
      );
    writeFileSync(workerPath, fixed, "utf-8");
    console.log(
      '✅ fix-cloudflare-routes: CORRIGIDO — mapeamento "/" foi restaurado de favicon.ico → function index'
    );
  } else if (hasCorrectMapping) {
    console.log(
      '✅ fix-cloudflare-routes: rota "/" está correta (aponta para função index). Nenhuma correção necessária.'
    );
  } else {
    // Exibe o mapeamento atual para diagnóstico
    const match = content.match(/"\/":(\{[^}]+\})/);
    const matchMinified = content.match(/"\/":\{[^}]+\}/);
    console.warn('⚠️  fix-cloudflare-routes: mapeamento de "/" não reconhecido:');
    console.warn("   ", matchMinified ? matchMinified[0] : "não encontrado");
    console.warn("   Verifique manualmente se a Home page está sendo servida corretamente.");
  }
} catch (err) {
  if (err.code === "ENOENT") {
    console.error(
      "❌ fix-cloudflare-routes: arquivo worker não encontrado.",
      "\n   Execute 'npx @cloudflare/next-on-pages' primeiro."
    );
  } else {
    console.error("❌ fix-cloudflare-routes: erro ao processar worker:", err.message);
  }
  process.exit(1);
}
