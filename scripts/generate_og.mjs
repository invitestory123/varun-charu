import fs from "node:fs";
import path from "node:path";
import { execSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");

// Convert local assets to base64 so headless Edge renders them instantly without network
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
    @import url('https://fonts.googleapis.com/css2?family=Marcellus&family=Great+Vibes&family=Cormorant+Garamond:ital,wght@0,500;0,600;1,400&family=Noto+Serif+Devanagari:wght@600;700&display=swap');

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
      font-family: 'Cormorant Garamond', serif;
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
      opacity: 0.16;
    }

    /* Silk & Ivory Tint Overlay */
    .overlay {
      position: absolute;
      inset: 0;
      background: linear-gradient(180deg, 
        rgba(253, 248, 239, 0.94) 0%, 
        rgba(255, 252, 247, 0.91) 45%, 
        rgba(253, 248, 239, 0.97) 100%);
    }

    /* Outer Luxury Frame */
    .card {
      position: relative;
      width: 1146px;
      height: 576px;
      border-radius: 28px;
      border: 2px solid rgba(200, 160, 85, 0.85);
      background: rgba(255, 254, 250, 0.82);
      box-shadow: 0 10px 40px rgba(160, 120, 60, 0.12), inset 0 0 40px rgba(230, 205, 145, 0.18);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      padding: 26px 40px 24px;
      z-index: 2;
    }

    /* Inner Fine Gold Inset Border */
    .card-inset {
      position: absolute;
      inset: 10px;
      border-radius: 20px;
      border: 1px solid rgba(198, 155, 75, 0.45);
      pointer-events: none;
    }

    /* Corner Florals */
    .corner-boug-tl {
      position: absolute;
      top: -20px;
      left: -20px;
      width: 260px;
      opacity: 0.88;
      pointer-events: none;
    }

    .corner-boug-tr {
      position: absolute;
      top: -20px;
      right: -20px;
      width: 260px;
      transform: scaleX(-1);
      opacity: 0.88;
      pointer-events: none;
    }

    /* Sacred Invocations */
    .invocations {
      display: flex;
      gap: 28px;
      align-items: center;
      justify-content: center;
      font-family: 'Noto Serif Devanagari', 'Nirmala UI', serif;
      font-size: 19px;
      font-weight: 700;
      color: #9e6d24;
      letter-spacing: 0.04em;
    }

    .inv-badge {
      background: rgba(246, 235, 212, 0.65);
      border: 1px solid rgba(212, 175, 95, 0.4);
      padding: 3px 18px;
      border-radius: 999px;
      box-shadow: 0 2px 6px rgba(180, 140, 60, 0.08);
    }

    /* Heavenly Blessings */
    .blessings {
      text-align: center;
      margin-top: 4px;
    }

    .blessings-title {
      font-family: 'Cormorant Garamond', serif;
      font-size: 13px;
      text-transform: uppercase;
      letter-spacing: 0.32em;
      color: #8c6832;
      font-weight: 600;
    }

    .blessings-names {
      font-family: 'Marcellus', serif;
      font-size: 15px;
      color: #3d242c;
      letter-spacing: 0.03em;
      margin-top: 3px;
      line-height: 1.35;
    }

    /* The Couple */
    .couple-section {
      text-align: center;
      margin-top: 6px;
    }

    .lead-in {
      font-size: 12px;
      text-transform: uppercase;
      letter-spacing: 0.34em;
      color: #a87932;
      font-weight: 600;
    }

    .couple-title {
      font-family: 'Marcellus', serif;
      font-size: 58px;
      line-height: 1.1;
      color: #4a1625;
      letter-spacing: 0.03em;
      text-shadow: 0 2px 14px rgba(212, 175, 95, 0.28);
      margin-top: 4px;
    }

    .couple-amp {
      font-family: 'Great Vibes', cursive;
      font-size: 48px;
      color: #b5832a;
      margin: 0 16px;
      font-weight: 400;
    }

    .parentage {
      font-family: 'Cormorant Garamond', serif;
      font-size: 16px;
      font-weight: 600;
      color: #7a3c48;
      letter-spacing: 0.04em;
      margin-top: 5px;
    }

    /* Center Flourish */
    .flourish {
      width: 250px;
      height: auto;
      opacity: 0.85;
      margin: 6px auto;
    }

    /* Event Details */
    .event-info {
      text-align: center;
      margin-top: 2px;
    }

    .event-label {
      font-family: 'Marcellus', serif;
      font-size: 20px;
      letter-spacing: 0.22em;
      color: #87283c;
      font-weight: 500;
    }

    .event-datetime {
      font-family: 'Cormorant Garamond', serif;
      font-size: 21px;
      font-weight: 600;
      color: #382824;
      letter-spacing: 0.03em;
      margin-top: 3px;
    }

    .event-venue {
      font-family: 'Marcellus', serif;
      font-size: 21px;
      color: #2b1f1c;
      letter-spacing: 0.04em;
      margin-top: 3px;
    }

    /* Footer Request */
    .card-footer {
      text-align: center;
      border-top: 1px solid rgba(212, 175, 95, 0.4);
      padding-top: 10px;
      width: 75%;
      margin: 0 auto;
    }

    .no-gifts {
      font-family: 'Cormorant Garamond', serif;
      font-size: 15px;
      font-weight: 700;
      letter-spacing: 0.26em;
      color: #9e6b22;
      text-transform: uppercase;
    }

    .regards {
      font-family: 'Cormorant Garamond', serif;
      font-style: italic;
      font-size: 14px;
      color: #634d42;
      margin-top: 2px;
      letter-spacing: 0.04em;
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
        Late Smt. Mahimawanti Jain &amp; Late Sh. Dev Raj Jain<br>
        &amp; Smt. Usha Jain &amp; Sh. Surinder Kumar Jain
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

    <!-- Center Gold Flourish -->
    <img src="${flourishB64}" class="flourish" alt="">

    <!-- Event & Venue -->
    <div class="event-info">
      <div class="event-label">WEDDING CELEBRATION</div>
      <div class="event-datetime">Saturday, 21 November 2026 &nbsp;·&nbsp; 8:00 PM onwards</div>
      <div class="event-venue">Hall Arabia, The Elysium Grand</div>
    </div>

    <!-- Footer -->
    <div class="card-footer">
      <div class="no-gifts">No Gifts, No Shagun &nbsp;·&nbsp; Only Blessings</div>
      <div class="regards">With Love &amp; Regards: Jain Family</div>
    </div>
  </div>
</body>
</html>`;

const cardHtmlPath = path.join(rootDir, "scripts", "og-card.html");
fs.writeFileSync(cardHtmlPath, htmlContent, "utf-8");
console.log("[generate_og] Created scripts/og-card.html");

const edgePath = "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe";
const outputPng = path.join(rootDir, "public", "og-image.png");
const outputPngSubahu = path.join(rootDir, "public", "og-image-subahu-yashika.png");
const outputWebp = path.join(rootDir, "public", "og-image.webp");

const cmd = `"${edgePath}" --headless=new --disable-gpu --screenshot="${outputPng}" --window-size=1200,630 "file://${cardHtmlPath.replace(/\\/g, "/")}"`;
console.log("[generate_og] Capturing screenshot via Edge headless...");
execSync(cmd, { stdio: "inherit" });

// Also copy to og-image-subahu-yashika.png (cache-buster filename)
fs.copyFileSync(outputPng, outputPngSubahu);
console.log("[generate_og] Saved public/og-image.png and public/og-image-subahu-yashika.png");
