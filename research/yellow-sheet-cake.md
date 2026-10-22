# Research: Yellow Sheet Cake with Chocolate Frosting
Dish: Sheet cake / flavour: Classic. Private file, not published.

## Sources actually opened
- [Yellow Sheet Cake with Chocolate Frosting (NYT Cooking)](https://cooking.nytimes.com/recipes/1020093-yellow-sheet-cake-with-chocolate-frosting) [Tier 2 (locked list): NYT Cooking]: Butter and sugar creamed 4-5 min; eggs plus a yolk; flour with baking powder and bicarbonate; 23 x 33 cm tin; frosted in the tin. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Sheet Pan Party Cake (NYT Cooking)](https://cooking.nytimes.com/recipes/777665265-sheet-pan-party-cake) [Tier 2 (locked list): NYT Cooking]: Greased, lined and floured tin; creamed butter cake batter spread right into the corners. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Yellow Sheet Cake with Chocolate Frosting (America's Test Kitchen)](https://www.americastestkitchen.com/recipes/13162-yellow-sheet-cake-with-chocolate-frosting) [Tier 1 (locked list): America's Test Kitchen]: A 23 x 33 cm greased and floured metal pan; 255 g cake flour, 347 g sugar, butter plus oil, 4 eggs plus 2 yolks and buttermilk; baked at 175 °C for 28-32 minutes until a skewer comes out with a few crumbs, then cooled completely in the pan (about 2 hours) before frosting. The frosting is icing sugar, cocoa, butter and melted chocolate. ATK mixes the fat into the dry ingredients first, while we cream; the pan size, oven temperature, baking time, cooling and frosting type all match ours. _(curl 200; read 2026-10-22)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written for the cakes chapter. Quantities are my own; the core method matches the locked-list sources listed; nothing copied.

## Own cooking judgment
- 2026-10-22 second-source check (ATK): the tin, temperature, time and frosting style agree. No changes.
- Creamed buttermilk batter with an extra yolk; frosted in the tin with chocolate frosting.

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 1 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 25 min + cook 34 min against the step times.
- Quantities checked against servings (15). Nutrition worked from USDA FDC (see content/notes/yellow-sheet-cake-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 3. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage); 02-C6 (frying temperatures); 06-G6 (frying safety); 02-C10 (buttermilk marinade); 05-CK2 (ingredient temperature); 05-CK7 (oven temperature); 05-CK8 (doneness cues); 05-CK9 (cooling and unmoulding); 03-K10 (raw batter safety); 05-CK3 (creaming); 05-CK12 (buttercreams and cream cheese frosting); 05-CK13 (chocolate and ganache); 05-CK1 (base ratios); CHECKLIST 6 (preheat at least 20 min, stated before the oven step).
Changes made:
- Salt given in grams (06-G1): 0.5 tsp fine sea salt or table salt -> 3 g
- Salt given in grams (06-G1): 0.125 tsp fine sea salt or table salt -> 1 g
- Added the do-not-eat-raw-dough note (03-K10)
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
