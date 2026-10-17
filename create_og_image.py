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
overlay = Image.new("RGBA", (WIDTH, HEIGHT), (253, 248, 239, 222))
base = Image.alpha_composite(hero_cropped, overlay)

# 3. Soft glowing inner card with double gold borders
card_layer = Image.new("RGBA", (WIDTH, HEIGHT), (0, 0, 0, 0))
card_draw = ImageDraw.Draw(card_layer)

margin = 28
card_rect = [margin, margin, WIDTH - margin, HEIGHT - margin]
card_draw.rounded_rectangle(card_rect, radius=24, fill=(255, 253, 248, 205), outline=(212, 175, 95, 195), width=2)

inner_margin = margin + 10
card_draw.rounded_rectangle([inner_margin, inner_margin, WIDTH - inner_margin, HEIGHT - inner_margin], radius=16, outline=(198, 155, 75, 120), width=1)

base = Image.alpha_composite(base, card_layer)

# 4. Corner Bougainvillea
try:
    boug = Image.open("src/assets/bougainvillea.png").convert("RGBA")
    b_w = 280
    b_h = int(boug.height * (b_w / boug.width))
    boug_tl = boug.resize((b_w, b_h), Image.Resampling.LANCZOS)
    base.paste(boug_tl, (-28, -28), boug_tl)

    boug_tr = boug_tl.transpose(Image.Transpose.FLIP_LEFT_RIGHT)
    base.paste(boug_tr, (WIDTH - b_w + 28, -28), boug_tr)
except Exception as e:
    print("Bougainvillea overlay error:", e)

# 5. Center Gold Flourish
try:
    flourish = Image.open("src/assets/gold-flourish.png").convert("RGBA")
    f_w = 300
    f_h = int(flourish.height * (f_w / flourish.width))
    flourish_resized = flourish.resize((f_w, f_h), Image.Resampling.LANCZOS)
    f_x = (WIDTH - f_w) // 2
    f_y = 282
    base.paste(flourish_resized, (f_x, f_y), flourish_resized)
except Exception as e:
    print("Flourish overlay error:", e)

# 6. Typography
draw = ImageDraw.Draw(base)

# Load fonts
font_marcellus_hero = ImageFont.truetype("Marcellus-Regular.ttf", 66)
font_marcellus_section = ImageFont.truetype("Marcellus-Regular.ttf", 26)
font_georgia_b = ImageFont.truetype("C:/Windows/Fonts/georgiab.ttf", 15)
font_georgia_b_lg = ImageFont.truetype("C:/Windows/Fonts/georgiab.ttf", 21)
font_georgia = ImageFont.truetype("C:/Windows/Fonts/georgia.ttf", 20)
font_georgia_i = ImageFont.truetype("C:/Windows/Fonts/georgiai.ttf", 14)
font_devanagari = ImageFont.truetype("C:/Windows/Fonts/Nirmala.ttc", 20)
font_small = ImageFont.truetype("C:/Windows/Fonts/georgia.ttf", 13)

# 1. Invocations
inv_text = "॥ श्री महावीराय नमः ॥         ॥ जय श्री बाबा गज्जा जी ॥"
try:
    inv_bbox = draw.textbbox((0, 0), inv_text, font=font_devanagari)
    inv_w = inv_bbox[2] - inv_bbox[0]
    draw.text(((WIDTH - inv_w) // 2, 52), inv_text, fill=(160, 115, 45, 255), font=font_devanagari)
except Exception as e:
    print("Devanagari render note:", e)

# 2. Heavenly Blessings
bless_line1 = "With Heavenly Blessings of Late Smt. Mahimawanti Jain & Late Sh. Dev Raj Jain"
b1_bbox = draw.textbbox((0, 0), bless_line1, font=font_small)
b1_w = b1_bbox[2] - b1_bbox[0]
draw.text(((WIDTH - b1_w) // 2, 88), bless_line1, fill=(125, 90, 48, 230), font=font_small)

bless_line2 = "& Smt. Usha Jain & Sh. Surinder Kumar Jain"
b2_bbox = draw.textbbox((0, 0), bless_line2, font=font_small)
b2_w = b2_bbox[2] - b2_bbox[0]
draw.text(((WIDTH - b2_w) // 2, 108), bless_line2, fill=(125, 90, 48, 230), font=font_small)

# 3. Kicker
kicker = "CORDIALLY INVITE YOU TO CELEBRATE THE WEDDING OF"
k_bbox = draw.textbbox((0, 0), kicker, font=ImageFont.truetype("C:/Windows/Fonts/georgiab.ttf", 12))
k_w = k_bbox[2] - k_bbox[0]
draw.text(((WIDTH - k_w) // 2, 138), kicker, fill=(175, 128, 55, 230), font=ImageFont.truetype("C:/Windows/Fonts/georgiab.ttf", 12))

# 4. Couple Names
couple_text = "Subahu   &   Yashika"
c_bbox = draw.textbbox((0, 0), couple_text, font=font_marcellus_hero)
c_w = c_bbox[2] - c_bbox[0]
c_x = (WIDTH - c_w) // 2
c_y = 168

# Gold shadow + Deep Royal Primary
draw.text((c_x + 1, c_y + 2), couple_text, fill=(212, 175, 95, 130), font=font_marcellus_hero)
draw.text((c_x, c_y), couple_text, fill=(84, 40, 50, 255), font=font_marcellus_hero)

# 5. Parentage
parents_text = "S/o Mrs. Mukta & Mr. Atul Jain   ·   D/o Mrs. Rashmi & Mr. Nilesh Jain (Samana)"
p_bbox = draw.textbbox((0, 0), parents_text, font=font_georgia_b)
p_w = p_bbox[2] - p_bbox[0]
draw.text(((WIDTH - p_w) // 2, 252), parents_text, fill=(138, 70, 78, 240), font=font_georgia_b)

# 6. Section Title
func_text = "WEDDING CELEBRATION"
f_bbox = draw.textbbox((0, 0), func_text, font=font_marcellus_section)
f_w = f_bbox[2] - f_bbox[0]
draw.text(((WIDTH - f_w) // 2, 342), func_text, fill=(120, 50, 62, 250), font=font_marcellus_section)

# 7. Date & Time
date_text = "Saturday, 21 November 2026   ·   8:00 PM onwards"
d_bbox = draw.textbbox((0, 0), date_text, font=font_georgia)
d_w = d_bbox[2] - d_bbox[0]
draw.text(((WIDTH - d_w) // 2, 392), date_text, fill=(65, 55, 50, 245), font=font_georgia)

# 8. Venue
venue_text = "De javu manor, Khambra"
v_bbox = draw.textbbox((0, 0), venue_text, font=font_georgia_b_lg)
v_w = v_bbox[2] - v_bbox[0]
draw.text(((WIDTH - v_w) // 2, 432), venue_text, fill=(90, 75, 65, 240), font=font_georgia_b_lg)

# Thin gold line
line_y = 485
line_w = 340
draw.line([((WIDTH - line_w) // 2, line_y), ((WIDTH + line_w) // 2, line_y)], fill=(212, 175, 95, 140), width=1)

# 9. Hashtag & family compliments
note_text = "#SYforever"
n_bbox = draw.textbbox((0, 0), note_text, font=font_georgia_b)
n_w = n_bbox[2] - n_bbox[0]
draw.text(((WIDTH - n_w) // 2, 502), note_text, fill=(160, 115, 50, 250), font=font_georgia_b)

sign_text = "With Love & Regards: Jain Family"
s_bbox = draw.textbbox((0, 0), sign_text, font=font_georgia_i)
s_w = s_bbox[2] - s_bbox[0]
draw.text(((WIDTH - s_w) // 2, 532), sign_text, fill=(130, 95, 65, 220), font=font_georgia_i)

# Save lossless formats
os.makedirs("public", exist_ok=True)
rgb_final = base.convert("RGB")

rgb_final.save("public/og-image.png", "PNG", optimize=True, compress_level=9)
print("Saved public/og-image.png (lossless PNG, compressed level 9)")

rgb_final.save("public/og-image.webp", "WEBP", lossless=True, quality=100)
print("Saved public/og-image.webp (lossless WebP, lossless=True)")
