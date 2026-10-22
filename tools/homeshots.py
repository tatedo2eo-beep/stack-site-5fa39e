# Screens of each design's home below the scroll story (desktop + mobile), stitched per design.
import asyncio,sys
from playwright.async_api import async_playwright
from PIL import Image
B=sys.argv[1] if len(sys.argv)>1 else 'http://localhost:8080/stack-site-5fa39e/'
OUT=sys.argv[2] if len(sys.argv)>2 else 'shots/v6'
async def main():
  async with async_playwright() as p:
    br=await p.chromium.launch(executable_path='/usr/bin/google-chrome')
    for vp,(w,h) in [('d',(1366,900)),('m',(390,844))]:
      for d in 'ebcdg':
        ctx=await br.new_context(viewport={'width':w,'height':h}); pg=await ctx.new_page()
        await pg.goto(B); await pg.evaluate("d=>localStorage.setItem('design',d)",d); await pg.goto(B); await pg.wait_for_timeout(800)
        y0=await pg.evaluate("(()=>{const s=document.getElementById('story');return s?s.offsetTop+s.offsetHeight:0})()")
        ims=[]
        for k in range(3):
          await pg.evaluate(f"scrollTo(0,{y0}+{k}*innerHeight)"); await pg.wait_for_timeout(700)
          f=f'/tmp/hs_{vp}{d}{k}.png'; await pg.screenshot(path=f); ims.append(Image.open(f))
        s=.45 if vp=='d' else .6; ims=[i.resize((int(i.width*s),int(i.height*s))) for i in ims]
        o=Image.new('RGB',(sum(i.width for i in ims),ims[0].height));x=0
        for i in ims:o.paste(i,(x,0));x+=i.width
        o.save(f'{OUT}/home-below-{vp}-{d}.png'); await ctx.close()
    await br.close()
asyncio.run(main())
