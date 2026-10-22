import asyncio, json, sys
from playwright.async_api import async_playwright
B='http://localhost:8080/stack-site-5fa39e/'
PAGES=['','chapters/','chapter/burgers/','dish/smash-burger/','recipes/signature-smash-burger/','recipes/classic-smash-burger/','recipes/','chapter/soups/','chapter/drinks/','calculator/','plans/']
DES=[('e','noir-gold')]+[(d,None) for d in 'bcdg']
async def main():
  async with async_playwright() as p:
    br=await p.chromium.launch(executable_path='/usr/bin/google-chrome')
    out=[]
    for vp,(w,h) in [('m',(390,844)),('d',(1366,900))]:
      for d,pal in DES:
        ctx=await br.new_context(viewport={'width':w,'height':h},device_scale_factor=1)
        pg=await ctx.new_page(); errs=[]
        pg.on('pageerror',lambda e,errs=errs:errs.append(str(e)))
        pg.on('console',lambda m,errs=errs:m.type=='error' and errs.append(m.text))
        await pg.goto(B)
        if d!='e':
          await pg.evaluate("([d])=>{localStorage.setItem('design',d);localStorage.removeItem('pal')}",[d])
        for u in PAGES:
          await pg.goto(B+u); await pg.wait_for_timeout(250)
          r=await pg.evaluate("""()=>({d:document.documentElement.dataset.design,ads:[...document.querySelectorAll('.ad-slot')].filter(a=>a.offsetParent).length,
            sw:document.documentElement.scrollWidth,vw:innerWidth,h1:(document.querySelector('h1')||{}).textContent,
            imgs:[...document.images].filter(i=>i.complete&&i.naturalWidth===0&&i.src).map(i=>i.src).slice(0,3)})""")
          r.update(vp=vp,u=u,want=d,errs=errs[:]); errs.clear(); out.append(r)
          if u in ('','dish/smash-burger/','recipes/signature-smash-burger/','chapters/'):
            await pg.screenshot(path=f'/workspace/public-site/shots/v5/{vp}-{d}-{u.strip("/").replace("/","_") or "home"}.png')
        await ctx.close()
    await br.close()
    for r in out:
      bad=r['d']!=r['want'] or r['ads']!=2 or r['sw']>r['vw']+1 or r['errs'] or r['imgs']
      if bad: print('BAD',json.dumps(r)[:400])
    print(len(out),'checks')
asyncio.run(main())
