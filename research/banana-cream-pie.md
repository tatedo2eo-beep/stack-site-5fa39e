# Research: Banana Cream Pie
Dish: Cream pie (banana, coconut) / flavour: Classic. Private file, not published.

## Sources actually opened
- [Banana Cream Pie (ATK)](https://www.americastestkitchen.com/recipes/7130-banana-cream-pie) [Tier 1 (locked list): America's Test Kitchen]: Pastry cream of half-and-half, 6 yolks, sugar and cornstarch cooked to thick; banana slices tossed with orange juice and layered with the cream in a baked shell; chilled and topped with sweetened whipped cream. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Banana Cream Pie (Serious Eats)](https://www.seriouseats.com/banana-cream-pie-5323950) [Tier 1 (locked list): Serious Eats]: Blind-baked flaky crust; banana slices laid in rings and covered with cold vanilla pastry cream in two layers; chilled at least 3 h with film on the surface; topped with whipped cream to serve. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written for this batch. Quantities and wording are my own; the core method matches the locked-list sources listed above; nothing copied.

## Own cooking judgment
- Baked shell cooled completely.
- Pastry cream bubbled 1 min (well above 71 °C).
- Two layers of banana and cream, chilled 4 h, whipped cream on top.

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 2 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 45 min + cook 45 min against the step times.
- Quantities checked against servings (8). Nutrition worked from USDA FDC (see content/notes/banana-cream-pie-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 2. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage); 03-K6 (baking and doneness cues); 03-K10 (raw dough and batter safety); 03-K2 (creaming); 03-K5 (resting and chilling); CHECKLIST 6 (preheat at least 20 min, stated before the oven step).
Changes made:
- caster sugar: 1 tbsp → 12 g (CHECKLIST 1, weights in grams)
- icing sugar: 2 tbsp → 25 g (CHECKLIST 1, weights in grams)
- Salt given in grams (06-G1): 0.5 tsp fine salt -> 3 g
- Salt given in grams (06-G1): 0.25 tsp fine salt -> 1.5 g
- Added the do-not-eat-raw-dough note (03-K10)
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
