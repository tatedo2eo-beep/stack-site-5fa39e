# First-paint poster for the home story: the 5 cut-out layers composited in their stacked position.
# Box = 1.12 x 1.5 layer widths (W), layer centres at box middle + y*W. Must match hero.js (BW, BH).
import json, os
from PIL import Image
here = os.path.dirname(__file__)
L = json.load(open(os.path.join(here, 'hero-layout.json')))['layers']
W = 400; BW = int(W * 1.12); H = int(W * 1.5)
c = Image.new('RGBA', (BW, H), (0, 0, 0, 0))
for l in L:
    im = Image.open(os.path.join(here, f"../static/hero/v4/{l['id']}.webp")).convert('RGBA')
    w = int(W * l['s']); h = int(im.height * w / im.width); im = im.resize((w, h), Image.LANCZOS)
    c.alpha_composite(im, (BW // 2 - w // 2, int(H * 0.5 + l['y'] * W - h / 2)))
p = os.path.join(here, '../static/hero/v4/poster.webp'); c.save(p, 'WEBP', quality=62, method=6, alpha_quality=70)
print('poster', c.size, os.path.getsize(p))
