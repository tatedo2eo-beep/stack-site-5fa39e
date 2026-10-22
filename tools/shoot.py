# Screenshots: python3 tools/shoot.py  (needs: python3 -m http.server 8080 --directory .serve)
import asyncio, sys
from playwright.async_api import async_playwright
import os
B=os.environ.get('B','http://localhost:8080/stack-site-5fa39e/')
PAGES=[('home','',[0]),('list','recipes/',None),('recipe','recipes/lemon-garlic-chicken-white-beans/',None),('protein','high-protein/',None),('who','who-healthy/',None),('plans','plans/',None)]
async def main():
  only=sys.argv[1:] 
  async with async_playwright() as pw:
    br=await pw.chromium.launch(executable_path='/usr/bin/google-chrome')
    for dev,vp,mob in [('desktop',{'width':1280,'height':800},False),('mobile',{'width':390,'height':844},True)]:
      c=await br.new_context(viewport=vp,device_scale_factor=1 if not mob else 2,is_mobile=mob,has_touch=mob)
      p=await c.new_page()
      errs=[]; p.on('pageerror',lambda e: errs.append(str(e))); p.on('console',lambda m: m.type=='error' and errs.append(m.text))
      for name,path,_ in PAGES:
        if only and name not in only: continue
        await p.goto(B+path,wait_until='networkidle'); await p.wait_for_timeout(400)
        if name=='home':
          H=await p.evaluate('document.getElementById("story").offsetHeight-innerHeight')
          for k,f in enumerate([0,.3,.5,.72,.9,1.0]):
            await p.evaluate(f'window.scrollTo(0,{int(H*f)})'); await p.wait_for_timeout(500)
            await p.screenshot(path=f'shots/{dev}-home-{k+1}.png')
          await p.evaluate(f'window.scrollTo(0,{H+600})'); await p.wait_for_timeout(600)
          await p.screenshot(path=f'shots/{dev}-home-7-grid.png')
        else:
          await p.evaluate('document.querySelectorAll(".reveal").forEach(e=>e.classList.add("in"))'); await p.wait_for_timeout(800)
          await p.screenshot(path=f'shots/{dev}-{name}.png',full_page=(name!='recipe'))
          if name=='recipe': await p.screenshot(path=f'shots/{dev}-recipe-full.png',full_page=True)
      print(dev,'errors:',errs)
    await br.close()
asyncio.run(main())
