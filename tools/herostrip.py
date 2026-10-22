import asyncio,sys
from playwright.async_api import async_playwright
async def main():
  async with async_playwright() as p:
    br=await p.chromium.launch(executable_path='/usr/bin/google-chrome')
    for vp,(w,h) in [('m',(390,844)),('d',(1366,900))]:
      pg=await br.new_page(viewport={'width':w,'height':h})
      await pg.goto('http://localhost:8080/stack-site-5fa39e/'); await pg.wait_for_timeout(1500)
      tot=await pg.evaluate("document.getElementById('story').offsetHeight-innerHeight")
      for i,f in enumerate([0,.2,.3,.45,.6,.8,.93,1.0]):
        await pg.evaluate(f"scrollTo(0,{int(tot*f)}+document.getElementById('story').offsetTop)"); await pg.wait_for_timeout(600)
        await pg.screenshot(path=f'/tmp/hs-{vp}-{i}.png')
      print(vp,tot/h)
    await br.close()
asyncio.run(main())
