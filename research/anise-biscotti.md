# Research: Anise Biscotti
Dish: Biscotti / flavour: Anise. Private file, not published.

## Sources actually opened
- [Vanilla Biscotti (King Arthur Baking)](https://www.kingarthurbaking.com/recipes/vanilla-biscotti-recipe) [Tier 1 (locked list): King Arthur Baking]: Butter, sugar, eggs and baking powder; log baked at 175 °C, cooled briefly, sliced and baked again until dry. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Almond Biscotti (America's Test Kitchen)](https://www.americastestkitchen.com/recipes/7216-almond-biscotti) [Tier 1 (locked list): America's Test Kitchen]: Toasted almonds; two logs shaped on marked parchment, brushed with egg white; 160 °C (325 °F) first bake, sliced, second bake to dry. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Biscotti di Prato (NYT Cooking)](https://cooking.nytimes.com/recipes/1398-biscotti-di-prato) [Tier 2 (locked list): NYT Cooking]: Butter-free Prato style: flour, sugar, eggs, a little soda and baking powder, whole almonds; twice baked. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written in the cookies/bars/brownies chapter. Quantities are my own; the core method matches the locked-list sources listed above.

## Own cooking judgment
- Crushed anise seeds instead of anise extract or liqueur (no alcohol).

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 2 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 20 min + cook 55 min against the step times.
- Quantities checked against servings (30). Nutrition worked from USDA FDC (see content/notes/anise-biscotti-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 3. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage); 02-C4 (crisp skin); 02-C5 (wings); 03-K6 (baking and doneness cues); 03-K10 (raw dough and batter safety); 03-K3 (melted or browned butter); CHECKLIST 6 (preheat at least 20 min, stated before the oven step).
Changes made:
- Salt given in grams (06-G1): 0.5 tsp fine sea salt or table salt -> 3 g
- Added the do-not-eat-raw-dough note (03-K10)
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
