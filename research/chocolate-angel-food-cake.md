# Research: Chocolate Angel Food Cake
Dish: Angel food / flavour: Chocolate. Private file, not published.

## Sources actually opened
- [Chocolate Angel Food Cake (Serious Eats)](https://www.seriouseats.com/chocolate-angel-food-cake-recipe) [Tier 1 (locked list): Serious Eats]: Part of the cocoa bloomed in boiling water with espresso; some meringue whisked into the paste to lighten; cocoa, sugar and flour sifted and folded in stages. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Chocolate Angel Food Cake (NYT Cooking)](https://cooking.nytimes.com/recipes/4008-chocolate-lovers-angel-food-cake) [Tier 2 (locked list): NYT Cooking]: Dutch-processed cocoa and instant coffee whisked with boiling water; flour, sugar and salt folded into a cream-of-tartar meringue. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Angel Food Cake (NYT Cooking)](https://cooking.nytimes.com/recipes/1024743-angel-food-cake) [Tier 2 (locked list): NYT Cooking]: Flour and half the sugar sifted together several times; whites with cream of tartar and salt whipped to soft peaks, then the remaining sugar gradually; ungreased tube tin; inverted to cool. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written for the cakes chapter. Quantities are my own; the core method matches the locked-list sources listed; nothing copied.

## Own cooking judgment
- Same meringue and bake as the Classic; 30 g cocoa replaces 30 g flour, plus a small cocoa-coffee paste lightened with meringue (SE, NYT).

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 1 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 25 min + cook 40 min against the step times.
- Quantities checked against servings (12). Nutrition worked from USDA FDC (see content/notes/chocolate-angel-food-cake-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 3. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage); 02-C6 (frying temperatures); 06-G6 (frying safety); 05-CK2 (ingredient temperature); 05-CK7 (oven temperature); 05-CK8 (doneness cues); 05-CK9 (cooling and unmoulding); 03-K10 (raw batter safety); 05-CK5 (whipping whites); 05-CK6 (sponge and chiffon); 05-CK13 (chocolate and ganache); CHECKLIST 6 (preheat at least 20 min, stated before the oven step).
Changes made:
- Salt given in grams (06-G1): 0.25 tsp fine sea salt or table salt -> 1.5 g
- Added the do-not-eat-raw-dough note (03-K10)
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
