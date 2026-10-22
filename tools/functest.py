# Interaction tests: python3 tools/functest.py
import asyncio
from playwright.async_api import async_playwright
B="http://localhost:8080/stack-site-5fa39e/"
async def main():
  async with async_playwright() as pw:
    br=await pw.chromium.launch(executable_path='/usr/bin/google-chrome')
    c=await br.new_context(viewport={'width':390,'height':844},is_mobile=True,has_touch=True)
    p=await c.new_page(); errs=[]; p.on('pageerror',lambda e: errs.append(str(e)))
    R=[]
    def ok(name,cond): R.append(('PASS' if cond else 'FAIL')+' '+name)
    await p.goto(B+'recipes/lemon-garlic-chicken-white-beans/')
    # theme
    await p.click('#theme-btn'); await p.click('[data-theme-id="ivory-oxblood"]')
    bg=await p.evaluate('getComputedStyle(document.body).backgroundColor')
    ok('theme switch to light (bg %s)'%bg, bg=='rgb(247, 242, 233)')
    await p.reload(); ok('theme persists', await p.evaluate('document.documentElement.dataset.theme')=='ivory-oxblood')
    await p.click('#theme-btn'); await p.click('[data-theme-id="noir-gold"]')
    # scaler
    q0=await p.text_content('.ing .q')
    for _ in range(4): await p.click('[data-scale="1"]')
    q1=await p.text_content('.ing .q'); ok(f'scaler 4->8: {q0} -> {q1}', q1.strip()=='1.2 kg')
    for _ in range(6): await p.click('[data-scale="-1"]')
    tsp=await p.evaluate('[...document.querySelectorAll(".ing")].map(l=>l.querySelector(".q").textContent)')
    ok('scaler 2 servings: '+', '.join(tsp[:5]), tsp[0]=='300 g' and tsp[1]=='½ tsp')
    # favourites
    await p.click('.fav-btn'); ok('fav saved', await p.evaluate('localStorage.getItem("fav")')=='["lemon-garlic-chicken-white-beans"]')
    # cook mode
    await p.click('#cook-btn')
    ok('cook mode on', await p.evaluate('document.documentElement.classList.contains("cook-mode") && !document.getElementById("cook-bar").hidden'))
    await p.click('[data-step="next"]'); pos=await p.text_content('#cook-pos'); st=await p.text_content('#cook-status')
    ok(f'cook next -> "{pos}", status "{st}"', pos=='Step 2 of 6')
    fs=await p.evaluate('getComputedStyle(document.querySelector(".step p")).fontSize'); ok('cook big text '+fs, float(fs[:-2])>=22)
    await p.click('[data-step="exit"]'); ok('cook exit', not await p.evaluate('document.documentElement.classList.contains("cook-mode")'))
    # list filters
    await p.goto(B+'recipes/'); n=await p.locator('#results .card').count()
    await p.fill('#q','salmon'); await p.wait_for_timeout(300)
    vis=await p.locator('#results .card:not([hidden])').count(); ok(f'search salmon: {vis}/{n}', 0<vis<n)
    ok('url sync', 'q=salmon' in p.url)
    await p.click('#f-clear'); await p.click('label.chk:has(input[value="high-protein"])'); await p.wait_for_timeout(100)
    hp=await p.locator('#results .card:not([hidden])').count(); ok(f'high-protein filter: {hp}', 0<hp<n)
    await p.click('#f-clear'); await p.select_option('#f-time','20'); t=await p.evaluate('[...document.querySelectorAll("#results .card:not([hidden])")].map(c=>+c.dataset.time)')
    ok(f'time<=20: {t}', all(x<=20 for x in t))
    await p.click('#f-clear'); await p.select_option('#f-diff','medium'); d=await p.evaluate('[...document.querySelectorAll("#results .card:not([hidden])")].map(c=>c.dataset.diff)')
    ok(f'difficulty medium: {d}', all(x=='medium' for x in d))
    await p.click('#f-clear'); await p.click('label.chk.fav'); f=await p.locator('#results .card:not([hidden])').count(); ok(f'favourites only: {f}', f==1)
    await p.goto(B+'recipes/?cat=chicken'); cats=await p.evaluate('[...document.querySelectorAll("#results .card:not([hidden])")].map(c=>c.dataset.cat)')
    ok(f'deep link cat=chicken: {len(cats)}', cats and all(x=='chicken' for x in cats))
    # menu
    await p.click('#menu-btn'); ok('mobile menu opens', await p.evaluate('document.querySelector(".site-head").classList.contains("nav-open") && getComputedStyle(document.getElementById("main-nav")).display!="none"'))
    # ads count
    for path in ['','recipes/','recipes/classic-smash-burger/','category/chicken/','high-protein/','who-healthy/','plans/','about/','contact/','privacy/','terms/','login/','404.html']:
      await p.goto(B+path); a=await p.locator('.ad-slot').count(); h=await p.evaluate('Math.round(document.querySelector(".ad-slot")?.getBoundingClientRect().height||0)')
      ok(f'2 ads on /{path} (h={h})', a==2 and h>=250)
    # reduced motion home
    c2=await br.new_context(viewport={'width':390,'height':844},reduced_motion='reduce'); p2=await c2.new_page()
    await p2.goto(B); await p2.wait_for_timeout(800); o=await p2.evaluate('getComputedStyle(document.querySelector(".lab")).opacity')
    ok('reduced motion: labels shown statically', o=='1')
    print('\n'.join(R)); print('page errors:',errs)
    await br.close()
asyncio.run(main())
