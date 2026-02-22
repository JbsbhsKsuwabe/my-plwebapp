#!/usr/bin/env node
/**
 * verify-home-route.mjs
 *
 * Verificação automatizada: garante que a rota "/" retorna HTML da Home
 * e NÃO retorna um asset (favicon.ico ou outra imagem).
 *
 * Uso:
 *   node scripts/verify-home-route.mjs                    # testa produção
 *   node scripts/verify-home-route.mjs http://localhost:3000  # testa local
 *
 * Retorna exit code 0 em caso de sucesso, 1 em caso de falha.
 */

const BASE_URL = process.argv[2] || "https://tem-luz-ai.pages.dev";

async function verifyHomeRoute() {
  console.log(`\n🔍 Verificando rota "/" em: ${BASE_URL}\n`);
  const results = [];

  // ── Teste 1: Content-Type deve ser text/html ──────────────────────────────
  try {
    const res = await fetch(`${BASE_URL}/`, { redirect: "follow" });
    const contentType = res.headers.get("content-type") || "";
    const isHtml = contentType.includes("text/html");
    const isImage =
      contentType.includes("image/") || contentType.includes("application/octet-stream");

    results.push({
      name: "Content-Type é text/html",
      pass: isHtml && !isImage,
      detail: `Content-Type: ${contentType}`,
    });

    results.push({
      name: "HTTP status 200",
      pass: res.status === 200,
      detail: `Status: ${res.status}`,
    });

    // ── Teste 2: Resposta contém título da Home ─────────────────────────────
    const body = await res.text();
    const hasTitle = body.includes("Tem Luz Aí?");
    const hasHero = body.includes("Poluição Luminosa");
    const notFavicon = !body.startsWith("\x00") && !body.startsWith("\x89PNG");

    results.push({
      name: "HTML contém título 'Tem Luz Aí?'",
      pass: hasTitle,
      detail: hasTitle ? "✓ título encontrado" : "✗ título não encontrado no HTML",
    });

    results.push({
      name: "HTML contém 'Poluição Luminosa'",
      pass: hasHero,
      detail: hasHero ? "✓ conteúdo encontrado" : "✗ conteúdo não encontrado",
    });

    results.push({
      name: "Resposta NÃO é arquivo binário (favicon/imagem)",
      pass: notFavicon,
      detail: notFavicon ? "✓ resposta é texto" : "✗ resposta parece ser binário",
    });

    // ── Teste 3: Terceiro card "Público Geral" presente ────────────────────
    const hasPublicoGeral =
      body.includes("PÚBLICO GERAL") || body.includes("P\u00daBLICO GERAL");
    const hasFormLink = body.includes("forms.gle/RE1v5BR1RsJHCkVW9");

    results.push({
      name: "Card 'Público Geral' presente na Home",
      pass: hasPublicoGeral,
      detail: hasPublicoGeral ? "✓ card encontrado" : "✗ card não encontrado",
    });

    results.push({
      name: "Link do formulário público presente",
      pass: hasFormLink,
      detail: hasFormLink
        ? "✓ link forms.gle encontrado"
        : "✗ link forms.gle não encontrado",
    });
  } catch (err) {
    results.push({
      name: "Conexão com o servidor",
      pass: false,
      detail: `Erro: ${err.message}`,
    });
  }

  // ── Teste 4: /favicon.ico deve retornar image/x-icon ─────────────────────
  try {
    const faviconRes = await fetch(`${BASE_URL}/favicon.ico`);
    const ct = faviconRes.headers.get("content-type") || "";
    results.push({
      name: "/favicon.ico retorna image/x-icon (não confunde com Home)",
      pass: ct.includes("image/") && faviconRes.status === 200,
      detail: `Status: ${faviconRes.status}, Content-Type: ${ct}`,
    });
  } catch (err) {
    results.push({
      name: "/favicon.ico acessível",
      pass: false,
      detail: `Erro: ${err.message}`,
    });
  }

  // ── Relatório ─────────────────────────────────────────────────────────────
  console.log("Resultados:\n");
  let allPassed = true;
  for (const r of results) {
    const icon = r.pass ? "✅" : "❌";
    console.log(`  ${icon} ${r.name}`);
    if (!r.pass || process.argv.includes("--verbose")) {
      console.log(`     └─ ${r.detail}`);
    }
    if (!r.pass) allPassed = false;
  }

  const passCount = results.filter((r) => r.pass).length;
  console.log(`\n${"─".repeat(50)}`);
  console.log(
    `${allPassed ? "✅ TODOS OS TESTES PASSARAM" : "❌ ALGUNS TESTES FALHARAM"} (${passCount}/${results.length})`
  );
  console.log(`${"─".repeat(50)}\n`);

  process.exit(allPassed ? 0 : 1);
}

verifyHomeRoute();
