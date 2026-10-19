import fs from "node:fs";
import path from "node:path";
import { execSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");

function toBase64(relPath, mime) {
  const full = path.join(rootDir, relPath);
  const data = fs.readFileSync(full).toString("base64");
  return `data:${mime};base64,${data}`;
}

const palaceB64 = toBase64("src/assets/hero-palace.jpg", "image/jpeg");
const bougB64 = toBase64("src/assets/bougainvillea.png", "image/png");
const flourishB64 = toBase64("src/assets/gold-flourish.png", "image/png");

const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Marcellus&family=Great+Vibes&family=Cormorant+Garamond:ital,wght@0,500;0,600;0,700;1,400;1,600&family=Noto+Serif+Devanagari:wght@600;700&display=swap');

    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    body {
      width: 1200px;
      height: 630px;
      overflow: hidden;
      background: #fdf8ef;
      font-family: 'Cormorant Garamond', Georgia, serif;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    /* Background Palace Plate */
    .bg-palace {
      position: absolute;
      inset: 0;
      background-image: url('${palaceB64}');
      background-size: cover;
      background-position: center bottom;
      opacity: 0.14;
    }

    /* Silk & Ivory Tint Overlay */
    .overlay {
      position: absolute;
      inset: 0;
      background: linear-gradient(180deg, 
        rgba(253, 248, 239, 0.95) 0%, 
        rgba(255, 252, 246, 0.92) 50%, 
        rgba(253, 248, 239, 0.97) 100%);
    }

    /* Outer Luxury Frame */
    .card {
      position: relative;
      width: 1152px;
      height: 586px;
      border-radius: 26px;
      border: 2px solid rgba(200, 160, 85, 0.88);
      background: rgba(255, 254, 250, 0.86);
      box-shadow: 0 10px 40px rgba(160, 120, 60, 0.12), inset 0 0 45px rgba(230, 205, 145, 0.18);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      padding: 22px 30px 18px;
      z-index: 2;
    }

    /* Inner Fine Gold Inset Border */
    .card-inset {
      position: absolute;
      inset: 9px;
      border-radius: 19px;
      border: 1px solid rgba(198, 155, 75, 0.45);
      pointer-events: none;
    }

    /* Corner Florals */
    .corner-boug-tl {
      position: absolute;
      top: -24px;
      left: -24px;
      width: 250px;
      opacity: 0.9;
      pointer-events: none;
    }

    .corner-boug-tr {
      position: absolute;
      top: -24px;
      right: -24px;
      width: 250px;
      transform: scaleX(-1);
      opacity: 0.9;
      pointer-events: none;
    }

    /* Top: Invocations */
    .invocations {
      display: flex;
      gap: 28px;
      align-items: center;
      justify-content: center;
      font-family: 'Noto Serif Devanagari', 'Nirmala UI', serif;
      font-size: 18px;
      font-weight: 700;
      color: #9e6d24;
      letter-spacing: 0.04em;
    }

    .inv-badge {
      background: rgba(246, 235, 212, 0.7);
      border: 1px solid rgba(212, 175, 95, 0.45);
      padding: 3px 18px;
      border-radius: 999px;
      box-shadow: 0 2px 6px rgba(180, 140, 60, 0.08);
    }

    /* Blessings */
    .blessings {
      text-align: center;
      margin-top: 1px;
    }

    .blessings-title {
      font-size: 12px;
      text-transform: uppercase;
      letter-spacing: 0.32em;
      color: #8c6832;
      font-weight: 600;
    }

    .blessings-names {
      font-family: 'Marcellus', serif;
      font-size: 14.5px;
      color: #3b2229;
      letter-spacing: 0.03em;
      margin-top: 2px;
      line-height: 1.3;
    }

    /* Couple Section */
    .couple-section {
      text-align: center;
      margin-top: 2px;
    }

    .lead-in {
      font-size: 11.5px;
      text-transform: uppercase;
      letter-spacing: 0.34em;
      color: #a87932;
      font-weight: 600;
    }

    .couple-title {
      font-family: 'Marcellus', serif;
      font-size: 58px;
      line-height: 1.05;
      color: #4a1625;
      letter-spacing: 0.03em;
      text-shadow: 0 2px 14px rgba(212, 175, 95, 0.3);
      margin-top: 3px;
    }

    .couple-amp {
      font-family: 'Great Vibes', cursive;
      font-size: 46px;
      color: #b5832a;
      margin: 0 14px;
      font-weight: 400;
    }

    .parentage {
      font-size: 15.5px;
      font-weight: 600;
      color: #7a3c48;
      letter-spacing: 0.03em;
      margin-top: 3px;
    }

    /* Date Announcement Banner */
    .date-banner {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 12px;
      margin-top: 3px;
    }

    .date-banner-line {
      height: 1px;
      width: 110px;
      background: linear-gradient(90deg, transparent, rgba(200, 160, 85, 0.8), transparent);
    }

    .date-badge {
      font-family: 'Marcellus', serif;
      font-size: 16px;
      letter-spacing: 0.22em;
      color: #8c2438;
      font-weight: 600;
      text-transform: uppercase;
      padding: 3px 20px;
      border-radius: 999px;
      background: rgba(246, 230, 205, 0.55);
      border: 1px solid rgba(212, 175, 95, 0.45);
    }

    /* 3-Celebrations Row */
    .events-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 16px;
      width: 100%;
      max-width: 980px;
      margin-top: 6px;
    }

    .event-card {
      background: rgba(255, 252, 245, 0.85);
      border: 1.5px solid rgba(212, 175, 95, 0.45);
      border-radius: 14px;
      padding: 10px 14px;
      text-align: center;
      box-shadow: 0 2px 8px rgba(180, 140, 60, 0.08);
    }

    .event-card-name {
      font-family: 'Marcellus', serif;
      font-size: 16px;
      font-weight: 700;
      color: #3b111d;
      letter-spacing: 0.08em;
      text-transform: uppercase;
    }

    .event-card-datetime {
      font-size: 13.5px;
      font-weight: 700;
      color: #9e6d24;
      margin-top: 2px;
      letter-spacing: 0.02em;
    }

    .event-card-venue {
      font-size: 12.5px;
      font-weight: 600;
      color: #4a362e;
      margin-top: 2px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      line-height: 1.2;
    }

    /* Bottom: Regards & #SYforever */
    .card-footer {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      max-width: 960px;
      border-top: 1.5px solid rgba(212, 175, 95, 0.5);
      padding-top: 8px;
      margin-top: 4px;
    }

    .hashtag {
      font-size: 15px;
      font-weight: 800;
      letter-spacing: 0.22em;
      color: #8c2438;
      text-transform: uppercase;
    }

    .regards {
      font-style: italic;
      font-size: 15px;
      color: #3b2b24;
      letter-spacing: 0.04em;
      font-weight: 700;
    }
  </style>
</head>
<body>
  <div class="bg-palace"></div>
  <div class="overlay"></div>

  <div class="card">
    <div class="card-inset"></div>
    <img src="${bougB64}" class="corner-boug-tl" alt="">
    <img src="${bougB64}" class="corner-boug-tr" alt="">

    <!-- Sacred Invocations -->
    <div class="invocations">
      <span class="inv-badge">॥ श्री महावीराय नमः ॥</span>
      <span class="inv-badge">॥ जय श्री बाबा गज्जा जी ॥</span>
    </div>

    <!-- Heavenly Blessings of Elders -->
    <div class="blessings">
      <div class="blessings-title">With Heavenly Blessings of</div>
      <div class="blessings-names">
        Late Smt. Mahimawanti Jain &amp; Late Sh. Dev Raj Jain &nbsp;·&nbsp; Smt. Usha Jain &amp; Sh. Surinder Kumar Jain
      </div>
    </div>

    <!-- Couple Section -->
    <div class="couple-section">
      <div class="lead-in">Together With Their Families Cordially Invite You</div>
      <div class="couple-title">
        Subahu<span class="couple-amp">&amp;</span>Yashika
      </div>
      <div class="parentage">
        S/o Mrs. Mukta &amp; Mr. Atul Jain &nbsp;·&nbsp; D/o Mrs. Rashmi &amp; Mr. Nilesh Jain (Samana)
      </div>
    </div>

    <!-- Date Announcement -->
    <div class="date-banner">
      <div class="date-banner-line"></div>
      <div class="date-badge">20th &amp; 21st November 2026</div>
      <div class="date-banner-line"></div>
    </div>

    <!-- 3 Celebrations Grid -->
    <div class="events-grid">
      <div class="event-card">
        <div class="event-card-name">Haldi</div>
        <div class="event-card-datetime">20 Nov · 12:00 PM</div>
        <div class="event-card-venue">De javu manor, Khambra</div>
      </div>
      <div class="event-card">
        <div class="event-card-name">Hathbhara</div>
        <div class="event-card-datetime">21 Nov · 10:00 AM</div>
        <div class="event-card-venue">Shree Baba Gajja Ji Tomri</div>
      </div>
      <div class="event-card">
        <div class="event-card-name">Sehra Bandi</div>
        <div class="event-card-datetime">21 Nov · 5:30 PM</div>
        <div class="event-card-venue">Senate Hall, Ramada City Centre</div>
      </div>
    </div>

    <!-- Footer -->
    <div class="card-footer">
      <div class="hashtag">#SYforever</div>
      <div class="regards">With Love &amp; Regards: Jain Family</div>
    </div>
  </div>
</body>
</html>`;

const cardHtmlPath = path.join(rootDir, "scripts", "og-card.html");
fs.writeFileSync(cardHtmlPath, htmlContent, "utf-8");
console.log("[generate_og] Updated scripts/og-card.html");

const edgePath = "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe";
const tempPng = path.join(rootDir, "scripts", "temp-og.png");
const outputPng = path.join(rootDir, "public", "og-image.png");
const outputPngSubahu = path.join(rootDir, "public", "og-image-subahu-yashika.png");

const cmd = `"${edgePath}" --headless=new --disable-gpu --screenshot="${tempPng}" --window-size=1200,630 "file://${cardHtmlPath.replace(/\\/g, "/")}"`;
console.log("[generate_og] Capturing screenshot via Edge headless...");
execSync(cmd, { stdio: "inherit" });

// Run Python PIL for maximum lossless compression: compress_level=9 and optimize=True
const pyCompress = `
from PIL import Image
import os

img = Image.open(r"${tempPng}").convert("RGB")
img.save(r"${outputPng}", "PNG", optimize=True, compress_level=9)
img.save(r"${outputPngSubahu}", "PNG", optimize=True, compress_level=9)
img.save(r"${path.join(rootDir, "public", "og-image.webp")}", "WEBP", lossless=True, quality=100, method=6)
img.save(r"${path.join(rootDir, "public", "og-image-subahu-yashika.webp")}", "WEBP", lossless=True, quality=100, method=6)

print(f"Lossless PNG size: {os.path.getsize(r'${outputPng}')} bytes")
print(f"Lossless WebP size: {os.path.getsize(r'${path.join(rootDir, "public", "og-image.webp")}')} bytes")
`;

fs.writeFileSync(path.join(rootDir, "scripts", "compress.py"), pyCompress, "utf-8");
execSync(`python scripts/compress.py`, { stdio: "inherit" });
console.log("[generate_og] Lossless compression completed.");
