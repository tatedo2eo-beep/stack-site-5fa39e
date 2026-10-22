# Cut hero layer stills out of their black backgrounds (rembg + a luminance key on the edges),
# crop to content and save WebP with alpha into static/hero/v4/.
import sys, os
from PIL import Image, ImageFilter, ImageChops
from rembg import remove, new_session
src = os.path.join(os.path.dirname(__file__), '../content/hero-src')
out = os.path.join(os.path.dirname(__file__), '../static/hero/v4'); os.makedirs(out, exist_ok=True)
sess = new_session('isnet-general-use')
for n in ['bun-top', 'patty-cheese', 'tomato', 'lettuce', 'bun-base']:
    im = Image.open(os.path.join(src, n + '.jpg')).convert('RGB')
    cut = remove(im, session=sess, alpha_matting=(n != 'patty-cheese'), alpha_matting_foreground_threshold=240, alpha_matting_background_threshold=20, alpha_matting_erode_size=6)
    a = cut.getchannel('A')
    # luminance key: pure black background never stays opaque
    lo, hi = (3, 12) if n == 'patty-cheese' else (10, 40)   # dark meat must stay opaque
    lum = im.convert('L').point(lambda v: 0 if v < lo else 255 if v > hi else int((v - lo) * 255 / (hi - lo))).filter(ImageFilter.GaussianBlur(1))
    a = ImageChops.multiply(a, lum)
    cut.putalpha(a)
    bb = a.point(lambda v: 255 if v > 12 else 0).getbbox()
    cut = cut.crop((max(0, bb[0] - 8), max(0, bb[1] - 8), min(im.width, bb[2] + 8), min(im.height, bb[3] + 8)))
    w = 820; cut = cut.resize((w, round(cut.height * w / cut.width)), Image.LANCZOS)
    p = os.path.join(out, n + '.webp'); q = 82
    while True:
        cut.save(p, 'WEBP', quality=q, method=6, alpha_quality=80)
        if os.path.getsize(p) < 95 * 1024 or q < 50: break
        q -= 6
    print(n, cut.size, os.path.getsize(p))
for n in ['macro-crust', 'macro-cheese']:
    im = Image.open(os.path.join(src, n + '.jpg')).convert('RGB')
    for w in [900, 1600]:
        r = im.resize((w, round(im.height * w / im.width)), Image.LANCZOS); p = os.path.join(out, f'{n}-{w}.webp'); q = 78
        while True:
            r.save(p, 'WEBP', quality=q, method=6)
            if os.path.getsize(p) < (70 if w == 900 else 140) * 1024 or q < 45: break
            q -= 6
        print(n, w, r.size, os.path.getsize(p))
