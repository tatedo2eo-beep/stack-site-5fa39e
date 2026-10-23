# Research: Brown Butter Almond Financiers
Dish: Financiers / flavour: Classic. Private file, not published.

## Sources actually opened
- [Financiers (ATK)](https://www.americastestkitchen.com/recipes/12395-financiers-almond-browned-butter-cakes) [Tier 1 (locked list): America's Test Kitchen]: Browned butter stirred into almond flour, sugar, a little flour, salt and egg whites; baked in small greased cups at about 190 °C until the edges are well browned. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Financiers (Serious Eats)](https://www.seriouseats.com/financiers-french-mini-almond-cakes-recipe-6827013) [Tier 1 (locked list): Serious Eats]: Butter browned until chestnut; toasted almonds ground with flour, mixed with powdered sugar, salt and egg whites, brown butter whisked in; batter rested at least 3 h; baked at 190 °C about 12 min. _(curl 200; JSON-LD recipe (ingredients and steps) read)_
- [Safe Minimum Internal Temperature Chart (USDA FSIS)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) [Safety database (locked list): USDA FSIS]: Ground meat 71.1 °C; all poultry incl. ground 73.9 °C; leftovers 73.9 °C. _(opened with WebFetch (curl gets 403 bot-block))_
- [USDA FoodData Central (API, SR Legacy)](https://fdc.nal.usda.gov/) [Nutrition database (locked list): USDA FoodData Central]: Per-100 g nutrient values for every ingredient (ids in the nutrition note). _(queried via API)_

> Written for this batch. Quantities and wording are my own; the core method matches the locked-list sources listed above; nothing copied.

## Own cooking judgment
- Brown butter, ground almonds, icing sugar, egg whites.
- Batter rested 30 min.
- Baked at 200 °C in rectangular financier moulds.

## Reliability checks
- Safe temperatures checked against USDA FSIS (ground meat 71 °C, poultry 74 °C, leftovers reheated to 74 °C).
- Doneness cues in the method: 1 step(s) carry a temperature, and every cooking step has a visual cue.
- Timing sanity check: prep 15 min + cook 20 min against the step times.
- Quantities checked against servings (12). Nutrition worked from USDA FDC (see content/notes/brown-butter-almond-financiers-nutrition.md).
- Locked-list sources supporting the core method (excluding FSIS/FDC): 2. Non-top-tier pages are context only.

## Knowledge check
Re-checked on 22 Oct 2026 against knowledge/CHECKLIST.md and the topic files. Items checked: CHECKLIST sections 1-7; 06-G1 (salt by weight); 06-G3 (flavour sequence); 06-G9 (safe temperatures, storage); 02-C6 (frying temperatures); 06-G6 (frying safety); 03-K6 (baking and doneness cues); 03-K10 (raw dough and batter safety); 03-K3 (melted or browned butter); 03-K5 (resting and chilling); CHECKLIST 6 (preheat at least 20 min, stated before the oven step).
Changes made:
- Salt given in grams (06-G1): 0.125 tsp fine salt -> 1 g
- Added the do-not-eat-raw-dough note (03-K10)
- Units: °C only, metric weights and volumes (CHECKLIST 7, updated 22 Oct to metric only).
