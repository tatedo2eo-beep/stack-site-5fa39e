import asyncio, os, sys
from playwright.async_api import async_playwright
B=os.environ.get('B','http://localhost:8081/stack-site-5fa39e/')
SH=[('dish','dish/smash-burger/'),('chapter','chapter/burgers/'),('free','recipes/classic-smash-burger/'),('premium','recipes/signature-smash-burger/'),('premium-preview','recipes/signature-smash-burger/?preview=premium')]
async def main():
  only=sys.argv[1:]
  async with async_playwright() as pw:
    br=await pw.chromium.launch(executable_path='/usr/bin/google-chrome')
    for dev,vp,mob in [('desktop',{'width':1280,'height':800},False),('mobile',{'width':390,'height':844},True)]:
      c=await br.new_context(viewport=vp,device_scale_factor=2 if mob else 1,is_mobile=mob,has_touch=mob); p=await c.new_page(); errs=[]
      p.on('pageerror',lambda e: errs.append(str(e)))
      for n,path in SH:
        if only and n not in only: continue
        await p.goto(B+path,wait_until='networkidle'); await p.evaluate('document.querySelectorAll(".reveal").forEach(e=>e.classList.add("in"))'); await p.wait_for_timeout(700)
        if n=='premium-preview': await p.evaluate('document.querySelector("#r-body").scrollIntoView()'); await p.wait_for_timeout(200)
        await p.screenshot(path=f'shots/{dev}-{n}.png',full_page=(n in('dish','chapter')))
        if n=='premium':
          await p.evaluate('document.querySelector("#r-body").scrollIntoView()'); await p.wait_for_timeout(200); await p.screenshot(path=f'shots/{dev}-premium-lock.png')
          await p.goto(B+'?preview=off')
      print(dev,errs)
    await br.close()
asyncio.run(main())
