# Research: Silky Dark Chocolate Mousse
Dish: Chocolate mousse / flavour: Classic. Private file, not published.

## Sources actually opened
- [Chocolate Mousse (ATK)](https://www.americastestkitchen.com/recipes/12313-chocolate-mousse) [Tier 1 (locked list): America's Test Kitchen]: Bittersweet chocolate melted with cocoa, espresso powder and water; yolks beaten with sugar and salt and stirred in; whites whipped to soft peaks with sugar and folded in with whipped cream; chilled to set. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Dark Chocolate Mousse (ATK)](https://www.americastestkitchen.com/recipes/2810-dark-chocolate-mousse) [Tier 1 (locked list): America's Test Kitchen]: Classic uncooked-egg mousse: chocolate melted with cocoa, espresso and water, yolks stirred in, whites and whipped cream folded through, chilled at least 2 h. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [French Silk Chocolate Pie (Serious Eats)](https://www.seriouseats.com/how-to-make-french-silk-chocolate-pie-recipe) [Tier 1 (locked list): Serious Eats]: Eggs and sugar whisked over simmering water to 71 °C before being combined with chocolate: the cooked-egg method used for the safety option. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written for this batch. Quantities and wording are my own; the core method matches the locked-list sources listed above; nothing copied.

## Own cooking judgment
- Raw-egg classic method approved by Joe (16:25) with the required egg-safety note and the 71 °C option in the tips.
- No spirits; espresso powder for depth.

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 0 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 25 min + cook 5 min against the step times.
- Quantities checked against servings (6). Nutrition worked from USDA FDC (see content/notes/silky-dark-chocolate-mousse-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 3. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage).
Changes made:
- Salt given in grams (06-G1): 0.0625 tsp fine salt -> 0.5 g
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
