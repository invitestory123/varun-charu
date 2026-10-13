import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");
const distDir = path.resolve(rootDir, "dist");
const outputPublicDir = path.resolve(rootDir, ".output/public");
const ssrPath = path.resolve(rootDir, ".output/server/_ssr/ssr.mjs");

async function main() {
  console.log("[prerender] Starting static HTML generation...");

  // 1. Ensure dist directory exists
  if (!fs.existsSync(distDir)) {
    fs.mkdirSync(distDir, { recursive: true });
  }

  // 2. If .output/public exists, ensure its contents are copied to dist
  if (fs.existsSync(outputPublicDir)) {
    fs.cpSync(outputPublicDir, distDir, { recursive: true });
    console.log("[prerender] Synced .output/public -> dist");
  }

  // 3. Render HTML via SSR module
  if (!fs.existsSync(ssrPath)) {
    throw new Error(`SSR entrypoint not found at ${ssrPath}`);
  }

  const ssrModule = await import(`file://${ssrPath.replace(/\\/g, "/")}`);
  const handler = ssrModule.default || ssrModule;

  const request = new Request("http://localhost/");
  const response = await handler.fetch(request);

  if (!response.ok) {
    throw new Error(`SSR fetch returned status ${response.status}: ${await response.text()}`);
  }

  const html = await response.text();
  const indexPath = path.join(distDir, "index.html");
  fs.writeFileSync(indexPath, html, "utf-8");
  console.log(`[prerender] Successfully generated ${indexPath} (${html.length} bytes)`);

  // 4. Also generate 404.html for SPA static hosting fallback
  const fallbackPath = path.join(distDir, "404.html");
  fs.writeFileSync(fallbackPath, html, "utf-8");
  console.log(`[prerender] Generated SPA fallback ${fallbackPath}`);
}

main().catch((err) => {
  console.error("[prerender] Error:", err);
  process.exit(1);
});
