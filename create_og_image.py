import os
from PIL import Image, ImageDraw, ImageFont

WIDTH = 1200
HEIGHT = 630

# 1. Base image from hero palace
hero = Image.open("src/assets/hero-palace.jpg").convert("RGBA")
hero_ratio = hero.width / hero.height
target_ratio = WIDTH / HEIGHT

if hero_ratio > target_ratio:
    new_h = HEIGHT
    new_w = int(HEIGHT * hero_ratio)
else:
    new_w = WIDTH
    new_h = int(WIDTH / hero_ratio)

hero_resized = hero.resize((new_w, new_h), Image.Resampling.LANCZOS)
left = (new_w - WIDTH) // 2
top = (new_h - HEIGHT) // 2
hero_cropped = hero_resized.crop((left, top, left + WIDTH, top + HEIGHT))

# 2. Luxury parchment & ivory overlay
overlay = Image.new("RGBA", (WIDTH, HEIGHT), (253, 248, 239, 218))
base = Image.alpha_composite(hero_cropped, overlay)

# 3. Soft glowing inner card with double gold borders
card_layer = Image.new("RGBA", (WIDTH, HEIGHT), (0, 0, 0, 0))
card_draw = ImageDraw.Draw(card_layer)

margin = 32
card_rect = [margin, margin, WIDTH - margin, HEIGHT - margin]
card_draw.rounded_rectangle(card_rect, radius=24, fill=(255, 253, 248, 195), outline=(212, 175, 95, 185), width=2)

inner_margin = margin + 12
card_draw.rounded_rectangle([inner_margin, inner_margin, WIDTH - inner_margin, HEIGHT - inner_margin], radius=16, outline=(198, 155, 75, 115), width=1)

base = Image.alpha_composite(base, card_layer)

# 4. Corner Bougainvillea
try:
    boug = Image.open("src/assets/bougainvillea.png").convert("RGBA")
    b_w = 320
    b_h = int(boug.height * (b_w / boug.width))
    boug_tl = boug.resize((b_w, b_h), Image.Resampling.LANCZOS)
    base.paste(boug_tl, (-35, -35), boug_tl)

    boug_tr = boug_tl.transpose(Image.Transpose.FLIP_LEFT_RIGHT)
    base.paste(boug_tr, (WIDTH - b_w + 35, -35), boug_tr)
except Exception as e:
    print("Bougainvillea overlay error:", e)

# 5. Center Gold Flourish
try:
    flourish = Image.open("src/assets/gold-flourish.png").convert("RGBA")
    f_w = 340
    f_h = int(flourish.height * (f_w / flourish.width))
    flourish_resized = flourish.resize((f_w, f_h), Image.Resampling.LANCZOS)
    f_x = (WIDTH - f_w) // 2
    f_y = 295
    base.paste(flourish_resized, (f_x, f_y), flourish_resized)
except Exception as e:
    print("Flourish overlay error:", e)

# 6. Typography
draw = ImageDraw.Draw(base)

# Load fonts
font_marcellus_lg = ImageFont.truetype("Marcellus-Regular.ttf", 78)
font_marcellus_sm = ImageFont.truetype("Marcellus-Regular.ttf", 34)
font_kicker = ImageFont.truetype("C:/Windows/Fonts/georgiab.ttf", 16)
font_devanagari = ImageFont.truetype("C:/Windows/Fonts/Nirmala.ttc", 22)
font_details = ImageFont.truetype("C:/Windows/Fonts/georgia.ttf", 22)
font_details_b = ImageFont.truetype("C:/Windows/Fonts/georgiab.ttf", 20)
font_blessing = ImageFont.truetype("C:/Windows/Fonts/georgiai.ttf", 17)

# Text 1: Invocations
inv_text = "॥ श्री महावीराय नमः ॥     ॥ जय श्री बाबा गज्जा जी ॥"
try:
    inv_bbox = draw.textbbox((0, 0), inv_text, font=font_devanagari)
    inv_w = inv_bbox[2] - inv_bbox[0]
    draw.text(((WIDTH - inv_w) // 2, 70), inv_text, fill=(160, 115, 45, 255), font=font_devanagari)
except Exception as e:
    print("Devanagari font render notice:", e)

# Text 2: Tagline
kicker_text = "THE BEGINNING OF OUR FOREVER"
k_bbox = draw.textbbox((0, 0), kicker_text, font=font_kicker)
k_w = k_bbox[2] - k_bbox[0]
draw.text(((WIDTH - k_w) // 2, 115), kicker_text, fill=(175, 128, 55, 235), font=font_kicker)

# Text 3: Couple Main Names
couple_text = "Varun  &  Charu"
c_bbox = draw.textbbox((0, 0), couple_text, font=font_marcellus_lg)
c_w = c_bbox[2] - c_bbox[0]
c_x = (WIDTH - c_w) // 2
c_y = 155

# Subtle gold shadow
draw.text((c_x + 1, c_y + 2), couple_text, fill=(212, 175, 95, 120), font=font_marcellus_lg)
# Deep royal primary
draw.text((c_x, c_y), couple_text, fill=(84, 40, 50, 255), font=font_marcellus_lg)

# Text 4: Subtitle "VARUN WEDS CHARU"
weds_text = "VARUN WEDS CHARU"
w_bbox = draw.textbbox((0, 0), weds_text, font=font_kicker)
w_w = w_bbox[2] - w_bbox[0]
draw.text(((WIDTH - w_w) // 2, 260), weds_text, fill=(150, 105, 45, 230), font=font_kicker)

# Text 5: Wedding Celebrations
func_text = "WEDDING CELEBRATION"
f_bbox = draw.textbbox((0, 0), func_text, font=font_marcellus_sm)
f_w = f_bbox[2] - f_bbox[0]
draw.text(((WIDTH - f_w) // 2, 365), func_text, fill=(118, 52, 65, 245), font=font_marcellus_sm)

# Text 6: Date & Time
date_text = "Tuesday, 24 November 2026   ·   8:30 PM onwards"
d_bbox = draw.textbbox((0, 0), date_text, font=font_details)
d_w = d_bbox[2] - d_bbox[0]
draw.text(((WIDTH - d_w) // 2, 425), date_text, fill=(65, 55, 50, 240), font=font_details)

# Text 7: Venue
venue_text = "Haveli Heritage"
v_bbox = draw.textbbox((0, 0), venue_text, font=font_details_b)
v_w = v_bbox[2] - v_bbox[0]
draw.text(((WIDTH - v_w) // 2, 465), venue_text, fill=(90, 75, 65, 235), font=font_details_b)

# Text 8: Request & Regards
regards_text = "NO GIFTS, NO SHAGUN · ONLY BLESSINGS   |   JAIN FAMILY (GUJRANWALA JEWELLERS)"
b_bbox = draw.textbbox((0, 0), regards_text, font=font_blessing)
b_w = b_bbox[2] - b_bbox[0]
draw.text(((WIDTH - b_w) // 2, 530), regards_text, fill=(155, 115, 55, 240), font=font_blessing)

# Save lossless formats
os.makedirs("public", exist_ok=True)
rgb_final = base.convert("RGB")

# Lossless PNG (optimize=True, compress_level=9)
rgb_final.save("public/og-image.png", "PNG", optimize=True, compress_level=9)
print("Saved public/og-image.png (lossless PNG, compressed level 9)")

# Lossless WebP (lossless=True, quality=100)
rgb_final.save("public/og-image.webp", "WEBP", lossless=True, quality=100)
print("Saved public/og-image.webp (lossless WebP, lossless=True)")
