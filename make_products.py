import os
from PIL import Image, ImageDraw, ImageFont, ImageFilter

PROJ = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SRC = os.path.join(PROJ, "tools", "source")
FRONT = os.path.join(SRC, "blank-front.jpg")
BACK = os.path.join(SRC, "blank-back.jpg")
FONT = os.path.join(SRC, "Unbounded.ttf")
EMBLEM = os.path.join(SRC, "spate_alb_clean.png")
OUT = os.path.join(PROJ, "assets", "images", "products")
os.makedirs(OUT, exist_ok=True)

SS = 4  # supersampling factor for crisp edges


def wordmark(width_px, weight=700):
    """PURELIFT rendered in Unbounded, returned as an L mask of the given width."""
    size = 400
    f = ImageFont.truetype(FONT, size)
    try:
        f.set_variation_by_axes([weight])
    except Exception:
        pass
    text = "PURELIFT"
    bbox = f.getbbox(text)
    w, h = bbox[2] - bbox[0], bbox[3] - bbox[1]
    m = Image.new("L", (w + 20, h + 20), 0)
    ImageDraw.Draw(m).text((10 - bbox[0], 10 - bbox[1]), text, font=f, fill=255)
    m = m.crop(m.getbbox())
    tw = width_px * SS
    m = m.resize((tw, round(m.height * tw / m.width)), Image.LANCZOS)
    return m


def emblem(width_px):
    e = Image.open(EMBLEM).convert("RGBA")
    a = e.split()[-1]
    a = a.crop(a.getbbox())
    tw = width_px * SS
    return a.resize((tw, round(a.height * tw / a.width)), Image.LANCZOS)


def stack(parts, gap_px):
    """Vertically stack centered masks."""
    gap = gap_px * SS
    W = max(p.width for p in parts)
    H = sum(p.height for p in parts) + gap * (len(parts) - 1)
    m = Image.new("L", (W, H), 0)
    y = 0
    for p in parts:
        m.paste(p, ((W - p.width) // 2, y))
        y += p.height + gap
    return m


def print_on(base, mask_ss, cx, top, opacity=0.93):
    """Screen-print look: off-white ink, follows fabric shading, slightly soft."""
    mask = mask_ss.resize((mask_ss.width // SS, mask_ss.height // SS), Image.LANCZOS)
    mask = mask.point(lambda v: int(v * opacity)).filter(ImageFilter.GaussianBlur(0.3))
    x0, y0 = int(cx - mask.width / 2), int(top)
    region = base.crop((x0, y0, x0 + mask.width, y0 + mask.height))
    lum = region.convert("L")
    lo, hi = lum.getextrema()
    shade = lum.point(lambda v: int(205 + 30 * ((v - lo) / max(1, hi - lo))))
    ink = Image.merge("RGB", (shade, shade, shade.point(lambda v: v - 4)))
    base.paste(Image.composite(ink, region, mask), (x0, y0))
    return (x0, y0, mask.width, mask.height)


def save(img, name):
    p = os.path.join(OUT, name)
    img.save(p, "JPEG", quality=86, optimize=True, progressive=True)
    print(name, img.size, round(os.path.getsize(p) / 1024), "KB")


front = Image.open(FRONT).convert("RGB")
back = Image.open(BACK).convert("RGB")
CX = 512          # centre line of the shirt
CHEST_X = 612     # right side of chest in photo (wearer's left chest)
TORSO_W = 445     # torso width at chest height (px)

# Back view shared by all three: clean blank back (no print on back)
back_img = back.copy()

# 1. Wordmark Tee - PURELIFT on chest (right side in photo / wearer's left chest)
img = front.copy()
r = print_on(img, wordmark(110), CHEST_X, 258)
print("wordmark", r, f"{r[2] / TORSO_W:.0%} of torso")
save(img, "wordmark-front.jpg")
save(back_img, "wordmark-back.jpg")

# 2. Emblem Tee - small emblem on chest (right side in photo / wearer's left chest)
img = front.copy()
r = print_on(img, emblem(66), CHEST_X, 240)
print("emblem", r, f"{r[2] / TORSO_W:.0%} of torso")
save(img, "emblem-front.jpg")
save(back_img, "emblem-back.jpg")

# 3. Signature Tee - emblem above wordmark on chest (right side in photo / wearer's left chest)
img = front.copy()
r = print_on(img, stack([emblem(60), wordmark(104)], 9), CHEST_X, 232)
print("signature", r, f"{r[2] / TORSO_W:.0%} of torso")
save(img, "signature-front.jpg")
save(back_img, "signature-back.jpg")

# Favicon + social preview helpers
fav = Image.new("RGBA", (64, 64), (10, 10, 11, 255))
em = emblem(44).resize((44, round(44 * emblem(44).height / emblem(44).width)), Image.LANCZOS)
fav.paste((255, 255, 255, 255), ((64 - em.width) // 2, (64 - em.height) // 2), em)
fav.save(os.path.join(PROJ, "assets", "images", "favicon.png"))
print("favicon ok")

