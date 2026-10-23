# Research: Silky Egg Custard Pie
Dish: Custard pie / flavour: Classic. Private file, not published.

## Sources actually opened
- [Rich, Silky Custard Pie (ATK)](https://www.americastestkitchen.com/recipes/688-rich-silky-custard-pie) [Tier 1 (locked list): America's Test Kitchen]: Milk and cream heated, whisked into eggs, sugar, cornstarch, vanilla, nutmeg and salt; thickened on the stove until it forms a ridge on the spoon, poured into a hot prebaked shell and baked briefly at about 190 °C until the centre just wobbles. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Custard Pie (King Arthur)](https://www.kingarthurbaking.com/recipes/custard-pie-recipe) [Tier 1 (locked list): King Arthur Baking]: Blind-baked crust filled with a custard of milk, cream, 4 eggs, sugar, vanilla and nutmeg, baked until set at the edge and slightly wobbly in the centre. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written for this batch. Quantities and wording are my own; the core method matches the locked-list sources listed above; nothing copied.

## Own cooking judgment
- Prebaked shell kept hot.
- Custard thickened on the stove to at least 71 °C before baking.
- Baked 12-15 min at 190 °C; nutmeg on top.

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 3 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 40 min + cook 60 min against the step times.
- Quantities checked against servings (8). Nutrition worked from USDA FDC (see content/notes/silky-egg-custard-pie-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 2. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage); 03-K6 (baking and doneness cues); 03-K10 (raw dough and batter safety); 03-K5 (resting and chilling); CHECKLIST 6 (preheat at least 20 min, stated before the oven step).
Changes made:
- caster sugar: 1 tbsp → 12 g (CHECKLIST 1, weights in grams)
- Salt given in grams (06-G1): 0.5 tsp fine salt -> 3 g
- Salt given in grams (06-G1): 0.125 tsp fine salt -> 1 g
- Added the do-not-eat-raw-dough note (03-K10)
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
